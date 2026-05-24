import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CalendarDays, Timer, Route, Trophy, Instagram, Users } from "lucide-react";
import backyardSelfieImg from "@assets/703760920_2084119679169890_8052248766602316946_n_1779650608945.jpg";

export default function BackyardUltra() {
  return (
    <div className="w-full pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={backyardSelfieImg} 
            alt="Vassøy Backyard Ultra Selfievegg" 
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          {/* Teal overlay for brand color #00b4a0 */}
          <div className="absolute inset-0 bg-[#00b4a0]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <ScrollReveal>
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-6 uppercase tracking-wider">
              Alle klarer en runde
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-lg tracking-tight uppercase">
              Vassøy<br/>Backyard<br/>Ultra
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-md font-medium mb-10">
              Årets store løpefest på øya. 6.7 km hver time. Hvor lenge holder du?
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button size="lg" className="rounded-full text-lg px-10 h-14 bg-[#00b4a0] hover:bg-[#009686] text-white shadow-xl hover:shadow-2xl transition-all border-none font-bold" asChild>
              <a href="#pamelding" data-testid="btn-backyard-signup">Bli med på festen</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background -mt-10 relative z-20 rounded-t-3xl border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-7 space-y-12">
              <ScrollReveal>
                <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tight text-foreground">Formatet</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed">
                  <p>
                    Vassøy Backyard Ultra ble arrangert for første gang 6. mai 2023, og har raskt blitt et enormt populært arrangement som arrangeres i mai hvert år. I 2024 var løpet helt utsolgt!
                  </p>
                  <p>
                    Konseptet er enkelt, men brutalt: Løypa er 6.7 km. Du har én time på å fullføre. Starter du på neste runde før timen er gått? Det er opp til deg. Løpet går over maksimalt 12 runder (12 timer).
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="text-2xl font-bold tracking-tight mb-6">To løypevalg</h3>
                <p className="text-muted-foreground mb-6">Før hver runde velger du selv hvilken av de to løypene du vil løpe. Begge starter ved Vassøy skole (Sørstrandveien 28).</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="border-2 border-[#00b4a0]/20 bg-[#00b4a0]/5 rounded-xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#00b4a0] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                      <h4 className="font-bold text-lg mb-2">Løype 1 (Asfalt)</h4>
                      <p className="text-muted-foreground text-sm">Går i stor grad på asfaltert vei. Avsluttes med to runder inne på kunstgressbanen.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[#00b4a0]/20 bg-[#00b4a0]/5 rounded-xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#00b4a0] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                      <h4 className="font-bold text-lg mb-2">Løype 2 (Terreng)</h4>
                      <p className="text-muted-foreground text-sm">Samme start som løype 1, men går deretter ut i terrenget. Avsluttes også på kunstgressbanen.</p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal delay={0.1}>
                <Card className="border-border shadow-xl rounded-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold tracking-tight mb-6">Nøkkelinfo</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00b4a0]/10 rounded-full flex items-center justify-center text-[#00b4a0]">
                          <CalendarDays className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold">Neste løp</p>
                          <p className="text-muted-foreground">22. mai 2027 (5. utgave)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00b4a0]/10 rounded-full flex items-center justify-center text-[#00b4a0]">
                          <Timer className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold">Start</p>
                          <p className="text-muted-foreground">Kl 10:00 (Første runde)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00b4a0]/10 rounded-full flex items-center justify-center text-[#00b4a0]">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold">Startområde</p>
                          <p className="text-muted-foreground">Vassøy skole, Sørstrandveien 28</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00b4a0]/10 rounded-full flex items-center justify-center text-[#00b4a0]">
                          <Route className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold">Distanse</p>
                          <p className="text-muted-foreground">6.7 km per runde (Maks 12 runder)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="bg-[#00b4a0] text-white shadow-xl border-none rounded-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                      <Trophy className="w-6 h-6" />
                      Vinnere 2024
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">Herreklassen</p>
                        <p className="font-bold text-xl">Halvard Solheim</p>
                      </div>
                      <div className="h-px bg-white/20 w-full"></div>
                      <div>
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">Dameklassen</p>
                        <p className="font-bold text-xl">Lucia Thomassen</p>
                      </div>
                      <div className="h-px bg-white/20 w-full"></div>
                      <div>
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">Ungdomsklassen</p>
                        <p className="font-bold text-xl">Anders Rogne Kallevåg</p>
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full mt-6 bg-white text-[#00b4a0] hover:bg-white/90 font-bold rounded-full" asChild>
                      <a href="https://live.eqtiming.com/74434" target="_blank" rel="noreferrer" data-testid="btn-backyard-results">
                        Se alle resultater (2025)
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pamelding" className="py-24 bg-[#00b4a0]/10 border-t border-[#00b4a0]/20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <div className="w-20 h-20 bg-[#00b4a0] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Users className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">Hold av 22. mai 2027!</h2>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Påmelding til Vassøy Backyard Ultra 2027 åpner i løpet av høsten. Løpet ble fulltegnet i 2024, så her gjelder det å være rask!
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Følg oss på Instagram for å få beskjed når påmeldingen åpner.
            </p>
            <Button size="lg" className="rounded-full text-lg px-8 h-14 bg-[#00b4a0] hover:bg-[#009686] shadow-lg hover:shadow-xl transition-all font-bold" asChild>
              <a href="https://instagram.com/vassoybackyardultra" target="_blank" rel="noreferrer" className="flex items-center gap-3" data-testid="btn-backyard-instagram">
                <Instagram className="w-6 h-6" />
                Følg oss på Instagram for oppdateringer
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
