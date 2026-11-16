/* VASSØY designutkast – kun lokal interaksjon. Ingen nettverkskall. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* Faner (tabs) med piltaster */
  $$("[role=tablist]").forEach(function (list) {
    var tabs = $$("[role=tab]", list);
    function select(t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute("aria-selected", on);
        x.tabIndex = on ? 0 : -1;
        var p = document.getElementById(x.getAttribute("aria-controls"));
        if (p) p.hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!n) return;
        var nx = tabs[(i + n + tabs.length) % tabs.length];
        nx.focus(); select(nx);
      });
    });
  });

  /* Filter + søk: [data-filter-group] chips + [data-search] input styrer [data-item] i målet */
  function applyFilter(target) {
    var box = document.getElementById(target);
    if (!box) return;
    var chip = $('[data-filter-for="' + target + '"] [aria-pressed=true]');
    var cat = chip ? chip.dataset.value : "alle";
    var inp = $('[data-search="' + target + '"]');
    var q = inp ? inp.value.trim().toLowerCase() : "";
    var shown = 0;
    $$("[data-item]", box).forEach(function (el) {
      var cats = (el.dataset.cat || "").split(" ");
      var ok = (cat === "alle" || cats.indexOf(cat) > -1) && (!q || el.textContent.toLowerCase().indexOf(q) > -1);
      el.hidden = !ok; if (ok) shown++;
    });
    $$("[data-group-head]", box).forEach(function (h) {
      var g = h.dataset.groupHead;
      h.hidden = !$$('[data-item][data-group="' + g + '"]', box).some(function (e) { return !e.hidden; });
    });
    var em = $('[data-empty="' + target + '"]');
    if (em) em.hidden = shown > 0;
    var ct = $('[data-count="' + target + '"]');
    if (ct) ct.textContent = shown + (shown === 1 ? " treff" : " treff");
  }
  $$("[data-filter-for]").forEach(function (g) {
    var target = g.dataset.filterFor;
    $$(".chip", g).forEach(function (c) {
      c.addEventListener("click", function () {
        $$(".chip", g).forEach(function (x) { x.setAttribute("aria-pressed", x === c); });
        applyFilter(target);
      });
    });
  });
  $$("[data-search]").forEach(function (i) {
    i.addEventListener("input", function () { applyFilter(i.dataset.search); });
  });

  /* Dialoger */
  var lastFocus = null;
  function openDlg(id, src) {
    var d = document.getElementById(id);
    if (!d) return;
    lastFocus = src || document.activeElement;
    if (src && src.dataset.fill) {
      try {
        var data = JSON.parse(src.dataset.fill);
        Object.keys(data).forEach(function (k) {
          $$('[data-slot="' + k + '"]', d).forEach(function (el) {
            if (el.tagName === "IMG") { el.src = data[k]; el.hidden = !data[k]; }
            else el.textContent = data[k];
          });
        });
      } catch (e) { /* ignorer */ }
    }
    $$(".result", d).forEach(function (r) { r.classList.remove("show"); });
    $$("form", d).forEach(function (f) { f.hidden = false; });
    if (typeof d.showModal === "function") d.showModal(); else d.setAttribute("open", "");
  }
  $$("[data-open]").forEach(function (b) {
    b.addEventListener("click", function () { openDlg(b.dataset.open, b); });
  });
  $$("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
    d.addEventListener("close", function () { if (lastFocus) lastFocus.focus(); });
    $$("[data-close]", d).forEach(function (b) { b.addEventListener("click", function () { d.close(); }); });
  });

  /* Demo-skjema: aldri ekte innsending */
  $$("form[data-demo]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!f.reportValidity()) return;
      var res = f.parentNode.querySelector(".result");
      if (f.dataset.demo === "post") addPost(f);
      if (res) { res.classList.add("show"); res.focus(); }
      f.reset();
    });
  });

  /* Øytavla: legg til lokalt (kun i denne nettleserfanen) */
  function addPost(f) {
    var list = document.getElementById("board");
    if (!list) return;
    var title = f.elements.tittel.value, txt = f.elements.tekst.value, cat = f.elements.kategori.value;
    var li = document.createElement("li");
    li.className = "row"; li.setAttribute("data-item", ""); li.dataset.cat = cat;
    var ic = document.createElement("span"); ic.className = "ico c-navy";
    ic.innerHTML = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
    var g = document.createElement("div"); g.className = "grow";
    var b = document.createElement("b"); b.textContent = title;
    var s = document.createElement("span"); s.className = "small muted"; s.textContent = "Utkast (kun lokalt) · nå";
    var p = document.createElement("p"); p.className = "small"; p.textContent = txt;
    g.appendChild(b); g.appendChild(s); g.appendChild(p);
    var bd = document.createElement("span"); bd.className = "badge yel"; bd.textContent = "Demo";
    li.appendChild(ic); li.appendChild(g); li.appendChild(bd);
    list.insertBefore(li, list.firstChild);
    applyFilter("board");
  }

  /* Varsler: merk som lest */
  var mark = $("[data-markread]");
  if (mark) mark.addEventListener("click", function () {
    $$(".notif.unread").forEach(function (n) { n.classList.remove("unread"); });
    var c = $("[data-unread]"); if (c) c.textContent = "0 uleste";
  });

  /* Profil: preferanser lagres kun i nettleseren */
  $$("input[data-pref]").forEach(function (i) {
    var k = "vassoy-demo-" + i.dataset.pref;
    try { var v = localStorage.getItem(k); if (v !== null) i.checked = v === "1"; } catch (e) {}
    i.addEventListener("change", function () { try { localStorage.setItem(k, i.checked ? "1" : "0"); } catch (e) {} });
  });

  /* Hilsen etter tid på døgnet (kun lokal klokke) */
  var gr = $("[data-greet]");
  if (gr) { var h = new Date().getHours(); gr.textContent = h < 10 ? "God morgen!" : h < 18 ? "God dag!" : "God kveld!"; }
})();
