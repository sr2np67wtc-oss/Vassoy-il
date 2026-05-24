import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Activity, Calendar, Users } from "lucide-react";
import heroImg from "@/assets/images/bane-panorama.jpg";
import facilityImg from "@/assets/images/bane-trening.jpg";
import spinningImg from "@/assets/images/spinning.png";
import diskgolfImg from "@/assets/images/diskgolf-card.png";
import backyardSelfieImg from "@assets/703760920_2084119679169890_8052248766602316946_n_1779650608945.jpg";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Vassøy idrettsplass ved solnedgang" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <ScrollReveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
              Hjerterom og idrettsglede på Vassøy
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90 drop-shadow-sm font-light">
              Et samlingspunkt for store og små. Opplev samholdet i vårt lokale idrettslag på Vassøy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full font-semibold text-base px-8 h-14 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all" asChild>
              <Link href="/spinning" data-testid="btn-hero-spinning">Bli med på Spinning</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-semibold text-base px-8 h-14 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm transition-all" asChild>
              <Link href="/leie" data-testid="btn-hero-leie">Leie idrettslokale</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">Et lite lag med stor betydning</h2>
              <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vassøy IL ble stiftet i 2004 og har siden vært en viktig brikke i øysamfunnet vårt. Vi er stolte av å tilby et trygt og inkluderende miljø for alle, enten du vil svette på spinning-sykkelen, spille fotball med naboen, eller bare slå av en prat.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vi holder til sentralt på øya i Solvigveien 31, rett ved skolen.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="relative">
              <div className="aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative border border-border">
                <img src={facilityImg} alt="Vassøy idrettslokale" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border/50">
                <div className="flex items-center gap-4 mb-2">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="font-bold tracking-tight text-xl">For alle aldre</h3>
                </div>
                <p className="text-muted-foreground text-sm">Fra de minste barna til de godt voksne - her er det rom for alle.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Hva vi tilbyr</h2>
            <p className="text-lg text-muted-foreground">Vi har flere faste aktiviteter, samt flotte fasiliteter som kan leies til både idrett og arrangementer.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="overflow-hidden border-0 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all h-full group rounded-xl bg-card">
                <div className="h-64 overflow-hidden relative">
                  <img src={spinningImg} alt="Spinning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl font-bold tracking-tight text-white">Spinning</h3>
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <p className="text-muted-foreground mb-6 text-lg">Bli med på våre populære spinningtimer! Vi har moderne sykler og dyktige instruktører som sørger for høy puls og god stemning.</p>
                  <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto self-start mt-auto font-semibold" asChild>
                    <Link href="/spinning" data-testid="link-card-spinning">
                      Les mer om spinning <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="overflow-hidden border-0 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all h-full group rounded-xl bg-card">
                <div className="h-64 overflow-hidden relative">
                  <img src={facilityImg} alt="Fotballbane" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl font-bold tracking-tight text-white">Leie av idrettslokalet</h3>
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <p className="text-muted-foreground mb-6 text-lg">Lei lokalet til bursdag, konfirmasjon eller jubileum. Plass til 70 gjester med dekketøy, musikkanlegg og storskjerm inkludert.</p>
                  <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto self-start mt-auto font-semibold" asChild>
                    <Link href="/leie" data-testid="link-card-leie">
                      Send leieforespørsel <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="overflow-hidden border-0 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all h-full group rounded-xl bg-card">
                <div className="h-64 overflow-hidden relative">
                  <img src={diskgolfImg} alt="Disc Golf" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl font-bold tracking-tight text-white">Disc Golf</h3>
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <p className="text-muted-foreground mb-6 text-lg">Prøv Stavangers eneste 18-hulls frisbeegolfbane! Fantastisk terreng, gratis for alle, og perfekt for en aktiv dag ute.</p>
                  <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto self-start mt-auto font-semibold" asChild>
                    <Link href="/diskgolf" data-testid="link-card-diskgolf">
                      Les mer om banen <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="overflow-hidden border-0 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all h-full group rounded-xl bg-card">
                <div className="h-64 overflow-hidden relative">
                  <img src={backyardSelfieImg} alt="Backyard Ultra" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: "center 30%" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-[#00b4a0]/30 mix-blend-multiply"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl font-bold tracking-tight text-white uppercase">Backyard Ultra</h3>
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <p className="text-muted-foreground mb-6 text-lg">Årets store løpefest! 6.7 km hver time, opp til 12 timer. Bli med på et fantastisk sosialt arrangement for alle nivåer.</p>
                  <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto self-start mt-auto font-semibold" asChild>
                    <Link href="/backyard" data-testid="link-card-backyard">
                      Se informasjon og påmelding <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community Callout */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollReveal>
            <Activity className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Velkommen til øya!</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 font-light">
              Enten du er fastboende, innflytter eller bare på besøk, er du hjertelig velkommen til å ta del i fellesskapet i Vassøy IL.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full font-semibold px-8 h-14" asChild>
              <a href="mailto:vassoy.il@gmail.com" data-testid="btn-hero-contact">Kontakt oss</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
