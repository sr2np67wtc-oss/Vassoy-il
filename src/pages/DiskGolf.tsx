import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Map, Trophy, Target, Info, ExternalLink, Navigation, Clock } from "lucide-react";
import heroImg from "@/assets/images/diskgolf-hero.png";
import { motion } from "framer-motion";

export default function DiskGolf() {
  return (
    <div className="w-full pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Vassøy Frisbeegolfbane" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <ScrollReveal>
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-6 uppercase tracking-wider">
              Stavangers eneste 18-hulls bane
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-md">
              Vassøy Frisbeegolfbane
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-sm font-light mb-8">
              Kast deg ut i vår spektakulære bane i naturskjønne omgivelser. Gratis for alle!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full font-semibold text-base px-8 h-14 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all" asChild>
              <a href="https://udisc.com/courses/vassoy-frisbeegolfbane-oLc8" target="_blank" rel="noreferrer" data-testid="btn-diskgolf-udisc">
                Åpne i UDisc <Navigation className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-semibold text-base px-8 h-14 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm transition-all" asChild>
              <a href="#info" data-testid="btn-diskgolf-info">Les mer om banen</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 bg-background -mt-10 relative z-20 rounded-t-3xl border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-12">
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Info className="w-8 h-8 text-primary" />
                  Banefakta
                </h2>
                <div className="prose prose-green text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Banen ble etablert i 2024 og ligger i fantastisk kystlandskap med blanding av fjell, berg og åpne sletter. Vær oppmerksom på at det kan være glatt på bergene når det er vått.
                  </p>
                  <p>
                    <strong>Høydepunkt:</strong> Hull 9 er et brutalt par 3-hull på hele 152 meter, som ofte spilles i konstant motvind ut mot vannet!
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-6">
                <Card className="bg-secondary/20 border-border/50 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-6 h-6 text-primary" />
                      <h3 className="font-bold text-lg">Format</h3>
                    </div>
                    <p className="text-muted-foreground">18 hull<br/>Tee-skilt på alle hull</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border/50 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Map className="w-6 h-6 text-primary" />
                      <h3 className="font-bold text-lg">Lengder</h3>
                    </div>
                    <p className="text-muted-foreground">Hoved: 1785 m<br/>Kort: 888 m</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border/50 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-6 h-6 text-primary" />
                      <h3 className="font-bold text-lg">Tidsbruk</h3>
                    </div>
                    <p className="text-muted-foreground">Normalt 1.5 – 2.5 timer per runde.</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border/50 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-6 h-6 text-primary" />
                      <h3 className="font-bold text-lg">Pris</h3>
                    </div>
                    <p className="text-muted-foreground">Helt gratis å spille for alle!</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <div className="space-y-12">
              <ScrollReveal delay={0.1}>
                <Card className="border-border shadow-xl overflow-hidden rounded-xl">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <h3 className="text-2xl font-bold tracking-tight mb-2">Hulloversikt</h3>
                    <p className="opacity-90 font-medium">18 hull totalt</p>
                  </div>
                  <CardContent className="p-8 bg-card">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold">
                          <span>Korte hull (&lt;90m)</span>
                          <span>10 hull</span>
                        </div>
                        <div className="h-4 bg-secondary rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: "55%" }} 
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold">
                          <span>Middels (90-120m)</span>
                          <span>2 hull</span>
                        </div>
                        <div className="h-4 bg-secondary rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: "11%" }} 
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-primary/70"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold">
                          <span>Lange hull (&gt;120m)</span>
                          <span>6 hull</span>
                        </div>
                        <div className="h-4 bg-secondary rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: "33%" }} 
                            transition={{ duration: 1, delay: 0.6 }}
                            className="h-full bg-primary/40"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-secondary/30 rounded-xl p-8 border border-border/50">
                  <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Slik finner du banen
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Adresse:</strong> Sørstrandveien 38, 4076 Vassøy.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Start ved fotballbanen. Følg asfalten bak fotballbanen, videre forbi skateparken og opp bakken ved masten på bakketoppen. Der finner du hull 1.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="w-full sm:w-auto font-semibold rounded-full" asChild>
                      <a href="https://udisc.com/courses/vassoy-frisbeegolfbane-oLc8" target="_blank" rel="noreferrer" data-testid="btn-diskgolf-udisc-bottom">
                        UDisc <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto font-semibold rounded-full" asChild>
                      <a href="https://www.pdga.com/course-directory/course/vassoy-frisbeegolfbane-0" target="_blank" rel="noreferrer" data-testid="btn-diskgolf-pdga">
                        PDGA <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Klar for en runde?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 font-light">
              Last ned UDisc-appen for GPS-navigasjon mellom hullene, resultatkort og banekart.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full text-primary font-semibold px-8 h-14 hover:shadow-lg transition-all" asChild>
              <a href="https://udisc.com/" target="_blank" rel="noreferrer" data-testid="btn-diskgolf-download-udisc">Last ned UDisc</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
