'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import JourneyModal from '@/components/journey-modal/journey-modal'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import { CheckCircle, Home, Building2, Users2, Briefcase, MapPin, ArrowRight } from 'lucide-react'

const options = [
  {
    key: 'on-campus',
    title: 'On-Campus Housing',
    bullets: [
      'Assistance with dorms and student residences',
      'Guidance on facilities, meal plans, timelines',
      'Priority support for first-year students',
    ],
    illustration: '/illustrations/on-campus.svg',
    icon: Home,
  },
  {
    key: 'off-campus',
    title: 'Off-Campus Housing',
    bullets: [
      'Shared apartments, rentals, homestays',
      'Trusted partners near universities',
      'Advice on agreements, deposits, legalities',
    ],
    illustration: '/illustrations/off-campus.svg',
    icon: Building2,
  },
  {
    key: 'homestay',
    title: 'Homestay Options',
    bullets: [
      'Local family placements for cultural experience',
      'Meals included & supportive environment',
      'Ideal for younger students',
    ],
    illustration: '/illustrations/homestay.svg',
    icon: Users2,
  },
  {
    key: 'temporary',
    title: 'Temporary Stay Assistance',
    bullets: [
      'Short-term hostels, Airbnb, student hotels',
      'Support until permanent housing is arranged',
    ],
    illustration: '/illustrations/temporary-stay.svg',
    icon: Briefcase,
  },
]

const process = [
  { id: 'p1', title: 'Consultation Call', illustration: '/illustrations/step-1.svg', description: 'Understand your campus, city, budget, and preferences.' },
  { id: 'p2', title: 'Shortlisting Housing Options', illustration: '/illustrations/step-2.svg', description: 'Curated options near your university with verified details.' },
  { id: 'p3', title: 'Documentation & Rent Agreements', illustration: '/illustrations/step-3.svg', description: 'Guidance on contracts, deposits, and legal verifications.' },
  { id: 'p4', title: 'Booking & Move-in Guidance', illustration: '/illustrations/step-4.svg', description: 'Secure bookings and move-in checklist for a smooth start.' },
  { id: 'p5', title: 'Ongoing Support After Arrival', illustration: '/illustrations/step-5.svg', description: 'We remain available for any post-arrival assistance.' },
]

const compareTabs = [
  { key: 'campus', label: 'On-Campus', illustration: '/illustrations/comparison-campus.svg', pros: ['Close to classes', 'Meal plans', 'Community'], cons: ['Limited privacy', 'Capacity limits'] },
  { key: 'off', label: 'Off-Campus', illustration: '/illustrations/comparison-off.svg', pros: ['Independence', 'Choice of location'], cons: ['Utilities & contracts'] },
  { key: 'home', label: 'Homestay', illustration: '/illustrations/comparison-homestay.svg', pros: ['Supportive family', 'Cultural immersion'], cons: ['House rules', 'Less independence'] },
  { key: 'temp', label: 'Temporary', illustration: '/illustrations/comparison-temp.svg', pros: ['Fast to arrange', 'Flexible duration'], cons: ['Higher short-term cost'] },
]

const testimonials = [
  {
    name: 'Nisha Verma',
    city: 'Melbourne',
    quote: 'IPD helped me find a safe apartment near my university within my budget.',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1280&auto=format&fit=crop',
  },
  {
    name: 'Arjun Patel',
    city: 'Toronto',
    quote: 'The team handled everything—from shortlisting to agreements. Super smooth!',
    photo: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1280&auto=format&fit=crop',
  },
  {
    name: 'Fatima Ali',
    city: 'London',
    quote: 'I felt safe and supported from day one. Highly recommend their homestay option.',
    photo: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1280&auto=format&fit=crop',
  },
]

export default function AccommodationSupportPage() {
  useEffect(() => {
    console.info('[AccSupport] page mounted')
    return () => console.info('[AccSupport] page unmounted')
  }, [])

  const [tab, setTab] = useState<string>('campus')
  const tabMap = useMemo(() => new Map(compareTabs.map((t) => [t.key, t])), [])

  const onPrimaryCTA = () => {
    try {
      console.info('[AccSupport] CTA clicked: Find Accommodation Now')
    } catch (e) {
      console.error('[AccSupport] CTA handler failed', e)
    }
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#0B0B0F] via-[#0b1020] to-[#0B0B0F] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.35),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25),transparent_35%)]" />
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              <span>Safe. Convenient. Student-first.</span>
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">Our Accommodation Support</h1>
            <p className="text-pretty text-lg text-white/70 md:text-xl">Helping students find safe, comfortable, and student-friendly housing options abroad.</p>
            <div className="flex flex-wrap items-center gap-4">
              <JourneyModal className="bg-gradient-to-r from-emerald-500 via-indigo-500 to-violet-500 shadow-lg shadow-emerald-500/20 hover:shadow-violet-500/30" arrow>
                Find Accommodation Now
              </JourneyModal>
              <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10" onClick={onPrimaryCTA}>
                Talk to an Advisor
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <Image src="/illustrations/hero-accommodation.svg" alt="Accommodation hero" width={900} height={700} className="h-auto w-full" priority />
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* OVERVIEW */}
      <section className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">A home that supports your goals</h2>
          <p className="text-white/70">Accommodation can define your study experience. We make it stress-free with verified options, guidance on legalities, and swift bookings.</p>
          <ul className="grid grid-cols-1 gap-3 text-white/80 md:grid-cols-2">
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Verified partners & neighborhoods</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Budget and distance aligned</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Contract & deposit assistance</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Flexible temporary stay support</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image src="/illustrations/overview-accommodation.svg" alt="Accommodation overview" width={800} height={700} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* OPTIONS GRID */}
      <section className="container mx-auto px-6 py-12">
        <div className="mb-10 flex items-end justify-between">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold md:text-3xl">Accommodation Options</h3>
            <p className="text-white/70">Choose the path that fits your lifestyle, campus, and budget.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt) => {
            const Icon = opt.icon
            return (
              <Card key={opt.key} className="group border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
                    <Image src={opt.illustration} alt={`${opt.title} icon`} width={64} height={64} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2"><Icon className="h-5 w-5 text-indigo-400" /> {opt.title}</CardTitle>
                    <CardDescription className="text-white/60">Premium, detail-first support</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    {opt.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> <span>{b}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* PROCESS TIMELINE */}
      <section className="container mx-auto px-6 py-12">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">Accommodation Process</h3>
          <p className="mt-2 text-white/70">From consultation to handover, we remain with you at every step.</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full" onValueChange={(v) => console.info('[AccSupport] Process toggled', v)}>
            {process.map((step, idx) => (
              <AccordionItem key={step.id} value={step.id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold shadow-sm shadow-violet-600/20">{idx + 1}</span>
                    <span className="text-base font-semibold">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-6">
                    <div className="relative mt-1 size-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2">
                      <Image src={step.illustration} alt={`${step.title} illustration`} width={80} height={80} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-white/75">{step.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* WHY CHOOSE (ACCORDION + IMAGE) */}
      <section className="container mx-auto grid grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image src="/illustrations/why-accommodation.svg" alt="Why accommodation services" width={900} height={700} className="h-auto w-full" />
          </div>
        </div>
        <div className="order-1 space-y-4 md:order-2">
          <h3 className="text-2xl font-bold md:text-3xl">Why Choose Our Accommodation Services</h3>
          <Accordion type="multiple" className="w-full" onValueChange={(v) => console.info('[AccSupport] Why toggled', v)}>
            <AccordionItem value="safe"><AccordionTrigger>Safe, secure, and student-friendly</AccordionTrigger><AccordionContent>All options vetted for safety, accessibility, and student needs.</AccordionContent></AccordionItem>
            <AccordionItem value="cost"><AccordionTrigger>Transparent cost guidance (no hidden charges)</AccordionTrigger><AccordionContent>We explain rent, utilities, deposits, and any fees up front.</AccordionContent></AccordionItem>
            <AccordionItem value="booking"><AccordionTrigger>Full support with booking & contracts</AccordionTrigger><AccordionContent>From paperwork to signatures—we help end-to-end.</AccordionContent></AccordionItem>
            <AccordionItem value="location"><AccordionTrigger>Locations aligned with university & budget</AccordionTrigger><AccordionContent>Options selected for commute ease and cost effectiveness.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* COMPARISON TABS */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Compare Your Options</h3>
            <p className="mt-2 text-white/70">On-campus vs Off-campus vs Homestay vs Temporary Stay.</p>
          </div>
          <Tabs value={tab} onValueChange={(v) => { console.info('[AccSupport] Compare tab', v); setTab(v) }} className="w-full">
            <TabsList className="mx-auto mb-6 grid w-full max-w-[720px] grid-cols-4">
              {compareTabs.map((t) => (
                <TabsTrigger key={t.key} value={t.key} className="data-[state=active]:shadow data-[state=active]:ring-1 data-[state=active]:ring-white/10">{t.label}</TabsTrigger>
              ))}
            </TabsList>
            {compareTabs.map((t) => (
              <TabsContent key={t.key} value={t.key} className="space-y-6">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <Card className="border-white/10 bg-white/[0.03]">
                    <CardHeader>
                      <CardTitle className="text-xl">{t.label}</CardTitle>
                      <CardDescription className="text-white/60">Best fit and trade-offs</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <p className="mb-2 font-semibold text-white">Pros</p>
                        <ul className="space-y-2 text-white/80">{t.pros.map((p, i) => (<li key={i} className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> {p}</li>))}</ul>
                      </div>
                      <div>
                        <p className="mb-2 font-semibold text-white">Considerations</p>
                        <ul className="space-y-2 text-white/70">{t.cons.map((c, i) => (<li key={i} className="ml-6 list-disc">{c}</li>))}</ul>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                    <Image src={t.illustration} alt={`${t.label} comparison`} width={800} height={700} className="h-auto w-full" />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-emerald-600/10" />
        <div className="container relative mx-auto px-6 py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Student Stories</h3>
            <p className="mt-2 text-white/70">Real experiences of students who found a home with our help.</p>
          </div>
          <div className="relative">
            <Carousel className="px-12">
              <CarouselContent>
                {testimonials.map((t, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                      <CardContent className="flex h-full flex-col gap-5 py-6">
                        <div className="flex items-center gap-4">
                          <div className="relative size-12 overflow-hidden rounded-full border border-white/10">
                            <Image src={t.photo} alt={`${t.name} photo`} fill sizes="48px" className="object-cover" />
                          </div>
                          <div>
                            <p className="font-semibold">{t.name}</p>
                            <p className="text-sm text-white/60">{t.city}</p>
                          </div>
                        </div>
                        <p className="text-white/80">“{t.quote}”</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3 border-white/20 bg-white/10 hover:bg-white/20" />
              <CarouselNext className="-right-3 border-white/20 bg-white/10 hover:bg-white/20" />
            </Carousel>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* FAQ */}
      <section className="container mx-auto grid grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Accordion type="multiple" className="w-full" onValueChange={(v) => console.info('[AccSupport] FAQ toggled', v)}>
            <AccordionItem value="q1"><AccordionTrigger>How much rent should I budget for?</AccordionTrigger><AccordionContent>It depends on city and housing type. We provide a realistic estimate for your short-listed options.</AccordionContent></AccordionItem>
            <AccordionItem value="q2"><AccordionTrigger>Are deposits refundable?</AccordionTrigger><AccordionContent>Most deposits are refundable subject to contract terms and property condition at handover.</AccordionContent></AccordionItem>
            <AccordionItem value="q3"><AccordionTrigger>Is the neighborhood safe?</AccordionTrigger><AccordionContent>We ensure listings are in student-friendly, well-connected areas with strong safety records.</AccordionContent></AccordionItem>
            <AccordionItem value="q4"><AccordionTrigger>Can I switch from temporary to permanent later?</AccordionTrigger><AccordionContent>Yes. We can arrange temporary stays and transition you to long-term housing.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image src="/illustrations/faq-accommodation.svg" alt="Accommodation FAQ" width={800} height={700} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.25),transparent_35%)]" />
        <div className="container relative mx-auto grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">Find Your Home Abroad with Confidence</h3>
            <p className="text-white/70">IPD Education ensures your accommodation is secure, affordable, and stress-free.</p>
            <div className="flex flex-wrap items-center gap-4">
              <JourneyModal className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 shadow-lg shadow-violet-500/20 hover:shadow-emerald-500/30" arrow>
                Talk to an Advisor
              </JourneyModal>
              <Button variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
                <a href="#options" className="inline-flex items-center">Browse Housing Options<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <Image src="/illustrations/cta-accommodation.svg" alt="CTA accommodation" width={900} height={700} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


