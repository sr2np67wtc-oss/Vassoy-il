import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Clock, CalendarDays, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import spinningImg from "@/assets/images/spinning.png";

export default function Spinning() {
  return (
    <div className="w-full pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={spinningImg}
            alt="Innendørs spinning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <ScrollReveal>
            <HeartPulse className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Spinning på Vassøy
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-sm font-light">
              Høy puls, god musikk og fantastisk stemning i lokalet!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background -mt-10 relative z-20 rounded-t-3xl border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">

          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Om våre timer</h2>
            <div className="prose prose-green text-muted-foreground text-lg leading-relaxed mb-12">
              <p>
                Vassøy IL tilbyr innendørs spinningtimer gjennom høst- og vinterhalvåret. Dette er en fantastisk måte å holde formen ved like på, uansett vær og vind utenfor.
              </p>
              <p>
                Våre timer er tilpasset alle nivåer — fra nybegynnere til erfarne syklister. Du styrer selv motstanden på din sykkel, mens instruktøren motiverer deg gjennom løypa til fengende musikk.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              <Card className="border-l-4 border-l-primary border-border/50 shadow-sm rounded-xl bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Faste tider</h4>
                    <p className="text-sm text-muted-foreground">Tirsdager kl 09:00 og kl 18:30.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary border-border/50 shadow-sm rounded-xl bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Varighet</h4>
                    <p className="text-sm text-muted-foreground">45 eller 60 minutter per time.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary border-border/50 shadow-sm rounded-xl bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Instruktører</h4>
                    <p className="text-sm text-muted-foreground">Lokale instruktører som brenner for idrett.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Card className="bg-secondary/30 border-border/50 rounded-2xl">
              <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg mb-1">Vil du bli med?</h3>
                  <p className="text-muted-foreground">Ta kontakt med oss på e-post eller telefon for informasjon om påmelding og priser.</p>
                </div>
                <Button asChild className="rounded-full px-7 font-semibold shrink-0" data-testid="btn-spinning-contact">
                  <a href="mailto:vassoy.il@gmail.com">Kontakt oss</a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
