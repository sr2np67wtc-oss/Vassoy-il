import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2, Clock, MapPin, Utensils, Music, Monitor, Users, CreditCard, AlertCircle } from "lucide-react";
import facilityImg from "@/assets/images/bane-panorama.jpg";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Vennligst oppgi fullt navn"),
  email: z.string().email("Ugyldig e-postadresse"),
  phone: z.string().min(8, "Vennligst oppgi et gyldig telefonnummer"),
  eventType: z.string().min(1, "Vennligst velg type arrangement"),
  date: z.string().min(1, "Vennligst oppgi ønsket dato"),
  guests: z.string().min(1, "Vennligst oppgi ca. antall gjester"),
  message: z.string().optional(),
});

export default function Leie() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Leieforespørsel: ${values.eventType} – ${values.date}`);
    const body = encodeURIComponent(
      `Hei,\n\nJeg ønsker å sende en leieforespørsel:\n\n` +
      `Navn: ${values.name}\n` +
      `Telefon: ${values.phone}\n` +
      `E-post: ${values.email}\n` +
      `Type arrangement: ${values.eventType}\n` +
      `Antall gjester: ${values.guests}\n` +
      `Ønsket dato: ${values.date}\n` +
      (values.message ? `\nTilleggsinformasjon:\n${values.message}\n` : "") +
      `\nMed vennlig hilsen,\n${values.name}`
    );
    window.location.href = `mailto:vassoy.il@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  }

  const features = [
    {
      icon: Users,
      title: "Plass til 70 gjester",
      desc: "Romslig lokale med dekketøy og sitteplasser til hele 70 personer.",
    },
    {
      icon: Utensils,
      title: "Komplett dekketøy",
      desc: "Vi har dekketøy til 70 — tallerkener, glass og bestikk inkludert.",
    },
    {
      icon: Music,
      title: "Musikkanlegg",
      desc: "Profesjonelt lydanlegg for den perfekte stemningen gjennom hele festen.",
    },
    {
      icon: Monitor,
      title: "Storskjerm",
      desc: "Stor skjerm til presentasjoner, film, bilder eller sport.",
    },
    {
      icon: Clock,
      title: "Fleksibel tilgjengelighet",
      desc: "Leies ut kveld og helg. Ta kontakt for å sjekke ledige datoer.",
    },
    {
      icon: MapPin,
      title: "Sentralt på øya",
      desc: "Solvigveien 31, rett ved skolen — lett å finne for alle.",
    },
  ];

  return (
    <div className="pt-24 pb-20 w-full">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Leie av idrettslokalet
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Lei idrettslokalet til bursdag, konfirmasjon, jubileum eller andre selskaper. Vi har alt du trenger for en uforglemmelig fest — midt på øya.
          </p>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal className="mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video border border-border">
            <img src={facilityImg} alt="Vassøy idrettslokale" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <ScrollReveal className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Hva er inkludert?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="border-l-4 border-l-primary border-border/50 shadow-sm rounded-xl bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Pricing */}
        <ScrollReveal className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Pris og betaling</h2>
          <Card className="border-border shadow-lg rounded-2xl overflow-hidden bg-card">
            <div className="bg-foreground text-white px-8 py-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6" />
                <h3 className="text-xl font-bold">Helgeleie</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Leie</p>
                  <p className="text-3xl font-extrabold">1 500,-</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Depositum</p>
                  <p className="text-3xl font-extrabold">1 000,-</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3 text-foreground">
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Hele beløpet (leie + depositum) må betales</span> før du får tilgang til lokalet.
                </p>
              </div>
              <div className="flex items-start gap-3 text-foreground">
                <CreditCard className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Betales via <span className="font-semibold">Vipps</span>. Betalingsinformasjon sendes etter at forespørselen er godkjent.
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <ScrollReveal delay={0.2}>
            <Card className="border-border shadow-xl rounded-2xl bg-card">
              <CardContent className="p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-4">Takk for din henvendelse!</h3>
                    <p className="text-muted-foreground text-lg mb-8">
                      Vi svarer deg så snart som mulig med prisinformasjon og bekreftelse.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full px-8 font-semibold" data-testid="btn-leie-reset">
                      Send ny forespørsel
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">Send leieforespørsel</h3>
                    <p className="text-muted-foreground mb-8">Fyll ut skjemaet så tar vi kontakt med pris og tilgjengelighet.</p>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Navn</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ditt navn" {...field} data-testid="input-leie-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Telefonnummer</FormLabel>
                                <FormControl>
                                  <Input placeholder="123 45 678" {...field} data-testid="input-leie-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold">E-postadresse</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="post@eksempel.no" {...field} data-testid="input-leie-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="eventType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Type arrangement</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-leie-eventtype">
                                      <SelectValue placeholder="Velg type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="bursdag">Bursdag</SelectItem>
                                    <SelectItem value="konfirmasjon">Konfirmasjon</SelectItem>
                                    <SelectItem value="jubileum">Jubileum</SelectItem>
                                    <SelectItem value="annet">Annet selskapelig</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="guests"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">Ca. antall gjester</FormLabel>
                                <FormControl>
                                  <Input placeholder="F.eks. 40" {...field} data-testid="input-leie-guests" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold">Ønsket dato</FormLabel>
                              <FormControl>
                                <Input placeholder="F.eks. lørdag 15. august" {...field} data-testid="input-leie-date" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold">Tilleggsinformasjon</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Fortell gjerne litt om arrangementet..."
                                  className="min-h-[100px]"
                                  {...field}
                                  data-testid="textarea-leie-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full rounded-full font-semibold text-base h-12 mt-2 shadow-md hover:shadow-lg transition-all" data-testid="btn-leie-submit">
                          Send forespørsel
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
}
