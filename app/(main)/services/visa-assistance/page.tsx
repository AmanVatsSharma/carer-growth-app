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

import {
  CheckCircle,
  FileText,
  ShieldCheck,
  Timer,
  Globe2,
  ArrowRight,
} from 'lucide-react'

// SECTION: Static content and configuration (safe to memoize)
// Using descriptive arrays to map to UI elements. This enables easy updates and future i18n.
const serviceCards = [
  {
    key: 'guidance',
    title: 'Personalized Guidance',
    description:
      'One-to-one counselling to understand your profile and match the right visa pathway.',
    illustration: '/illustrations/service-1.svg',
  },
  {
    key: 'checklist',
    title: 'Document Checklist',
    description:
      'A clear, comprehensive checklist tailored to your target country and program.',
    illustration: '/illustrations/service-2.svg',
  },
  {
    key: 'financial',
    title: 'Financial Guidance',
    description:
      'Structured support for proof of funds, fee receipts, and sponsor documentation.',
    illustration: '/illustrations/service-3.svg',
  },
  {
    key: 'interview',
    title: 'Visa Interview Prep',
    description:
      'Mock interviews, confidence coaching, and expert tips for a strong impression.',
    illustration: '/illustrations/service-4.svg',
  },
  {
    key: 'tracking',
    title: 'Application Tracking',
    description:
      'Transparent updates so you always know the exact status of your application.',
    illustration: '/illustrations/service-5.svg',
  },
]

const processSteps = [
  {
    id: 'step-1',
    title: 'Consultation',
    description:
      'We assess your academic profile and goals to recommend the optimal visa category and timeline.',
    illustration: '/illustrations/step-1.svg',
  },
  {
    id: 'step-2',
    title: 'Documentation Support',
    description:
      'We guide you through transcripts, COE/CAS, SOP/LOR, medicals, insurance, and more.',
    illustration: '/illustrations/step-2.svg',
  },
  {
    id: 'step-3',
    title: 'Financial Proof Guidance',
    description:
      'We help prepare the funds evidence—bank statements, sponsor letters, and tuition fee receipts.',
    illustration: '/illustrations/step-3.svg',
  },
  {
    id: 'step-4',
    title: 'Submission & Tracking',
    description:
      'We submit your application, schedule biometrics (if applicable), and track progress in real-time.',
    illustration: '/illustrations/step-4.svg',
  },
  {
    id: 'step-5',
    title: 'Visa Approval',
    description:
      'We review your visa grant, next steps for travel, and pre-departure briefing.',
    illustration: '/illustrations/step-5.svg',
  },
]

const countries = [
  {
    key: 'usa',
    label: 'USA',
    flag: '/illustrations/flag-usa.svg',
    content:
      'F-1 Student Visa for full-time academic programs. Evidence of funds and I-20 required. SEVIS fee applies.',
  },
  {
    key: 'uk',
    label: 'UK',
    flag: '/illustrations/flag-uk.svg',
    content:
      'Student Route visa. CAS from the institution, TB test (where applicable), and maintenance funds required.',
  },
  {
    key: 'canada',
    label: 'Canada',
    flag: '/illustrations/flag-canada.svg',
    content:
      'Study Permit with GIC (where applicable). Biometrics and medical exam may be required.',
  },
  {
    key: 'australia',
    label: 'Australia',
    flag: '/illustrations/flag-australia.svg',
    content:
      'Subclass 500 with evidence of funds and COE. Genuine Temporary Entrant (GTE) assessment applies.',
  },
  {
    key: 'europe',
    label: 'Europe',
    flag: '/illustrations/flag-europe.svg',
    content:
      'Varies by country (e.g., Germany, France, Netherlands). Proof of admission and funds typically required.',
  },
]

const testimonials = [
  {
    name: 'Aarav Mehta',
    country: 'Canada',
    quote:
      'IPD made the process effortless. Their document checklist and mock interview gave me total confidence.',
    photo:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1280&auto=format&fit=crop',
  },
  {
    name: 'Sara Khan',
    country: 'UK',
    quote:
      'From CAS to maintenance funds—everything was crystal clear. I got my visa faster than expected!',
    photo:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1280&auto=format&fit=crop',
  },
  {
    name: 'Rohit Gupta',
    country: 'USA',
    quote:
      'Their end-to-end support removed all anxiety. Highly professional and responsive team.',
    photo:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1280&auto=format&fit=crop',
  },
]

export default function VisaAssistancePage() {
  // Basic analytics and debug logging as requested for easy diagnostics
  useEffect(() => {
    console.info('[VisaAssistance] page mounted')
    return () => console.info('[VisaAssistance] page unmounted')
  }, [])

  const [activeCountry, setActiveCountry] = useState<string>('usa')

  const countryByKey = useMemo(() => {
    return new Map(countries.map((c) => [c.key, c]))
  }, [])

  const handleStartApplication = () => {
    try {
      console.info('[VisaAssistance] CTA clicked: Start Visa Application')
    } catch (error) {
      console.error('[VisaAssistance] CTA handler failed', error)
    }
  }

  const handleDownloadGuide = () => {
    try {
      console.info('[VisaAssistance] Download Visa Guide CTA clicked')
    } catch (error) {
      console.error('[VisaAssistance] Download CTA handler failed', error)
    }
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#0B0B0F] via-[#0b1020] to-[#0B0B0F] text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,80,236,0.35),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25),transparent_35%)]" />

        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Trusted, secure, and student-first</span>
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Visa Assistance for Studying Abroad
            </h1>
            <p className="text-pretty text-lg text-white/70 md:text-xl">
              IPD Education makes your student visa journey seamless—from documentation to approval—with expert guidance at every step.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <JourneyModal className="bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-500 shadow-lg shadow-emerald-500/20 hover:shadow-violet-500/30" arrow>
                Start Your Visa Application
              </JourneyModal>
              <Button
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={handleStartApplication}
              >
                Talk to an Advisor
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-white/60">
              <div className="flex items-center gap-2"><Timer className="h-4 w-4 text-violet-400" /><span>Fast turnaround</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-emerald-400" /><span>Document-ready</span></div>
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-sky-400" /><span>Global coverage</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <Image
                src="/illustrations/hero-visa.svg"
                alt="Visa assistance hero illustration"
                width={900}
                height={700}
                className="h-auto w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* INTRO / OVERVIEW */}
      <section className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">A clear path through a complex process</h2>
          <p className="text-white/70">
            The visa process can feel overwhelming. We turn it into a smooth, structured journey with
            personalized guidance, intelligent checklists, and transparent tracking—so you can focus on your
            goals.
          </p>
          <ul className="grid grid-cols-1 gap-3 text-white/80 md:grid-cols-2">
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Profile-first strategy</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Country-specific know-how</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> End-to-end documentation</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Interview preparation</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image
              src="/illustrations/overview.svg"
              alt="Visa process overview illustration"
              width={800}
              height={700}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 py-12">
        <div className="mb-10 flex items-end justify-between">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold md:text-3xl">Our Visa Assistance Services</h3>
            <p className="text-white/70">Comprehensive, personalized, and reliable support at every stage.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((item) => (
            <Card
              key={item.key}
              className="group border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
                  <Image
                    src={item.illustration}
                    alt={`${item.title} icon`}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-white/60">Premium, detail-first support</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/75">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* PROCESS TIMELINE (ACCORDION) */}
      <section className="container mx-auto px-6 py-12">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">How It Works</h3>
          <p className="mt-2 text-white/70">A transparent, step-by-step path from consultation to approval.</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={(val) => console.info('[VisaAssistance] Process step toggled', val)}
          >
            {processSteps.map((step, idx) => (
              <AccordionItem key={step.id} value={step.id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold shadow-sm shadow-violet-600/20">
                      {idx + 1}
                    </span>
                    <span className="text-base font-semibold">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-6">
                    <div className="relative mt-1 size-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2">
                      <Image
                        src={step.illustration}
                        alt={`${step.title} illustration`}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
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

      {/* COUNTRY-SPECIFIC GUIDANCE (TABS) */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Country-Specific Guidance</h3>
            <p className="mt-2 text-white/70">Nuanced requirements for each destination, simplified.</p>
          </div>
          <Tabs value={activeCountry} onValueChange={(val) => { console.info('[VisaAssistance] Tabs change', val); setActiveCountry(val) }} className="w-full">
            <TabsList className="mx-auto mb-6 grid w-full max-w-[560px] grid-cols-5">
              {countries.map((c) => (
                <TabsTrigger key={c.key} value={c.key} className="data-[state=active]:shadow data-[state=active]:ring-1 data-[state=active]:ring-white/10">
                  <Image src={c.flag} alt={`${c.label} flag`} width={20} height={20} className="mr-2" />
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {countries.map((c) => (
              <TabsContent key={c.key} value={c.key} className="space-y-6">
                <Card className="border-white/10 bg-white/[0.03]">
                  <CardHeader>
                    <CardTitle className="text-xl">{c.label} Visa Overview</CardTitle>
                    <CardDescription className="text-white/60">Essential prerequisites and tips</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{c.content}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* WHY CHOOSE IPD (ACCORDION + ILLUSTRATION) */}
      <section className="container mx-auto grid grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image
              src="/illustrations/choose-us.svg"
              alt="Why choose IPD illustration"
              width={900}
              height={700}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="order-1 space-y-4 md:order-2">
          <h3 className="text-2xl font-bold md:text-3xl">Why Students Choose IPD</h3>
          <Accordion
            type="multiple"
            className="w-full"
            onValueChange={(val) => console.info('[VisaAssistance] Why Choose IPD toggled', val)}
          >
            <AccordionItem value="success">
              <AccordionTrigger>High Success Rate</AccordionTrigger>
              <AccordionContent>
                Our proven process, compliance-first approach, and meticulous documentation maximize approvals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger>Personalized Care</AccordionTrigger>
              <AccordionContent>
                Dedicated advisors provide one-to-one support tailored to your background and goals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="team">
              <AccordionTrigger>Experienced Team</AccordionTrigger>
              <AccordionContent>
                Seasoned counsellors with deep country-specific knowledge guide you throughout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>End-to-End Support</AccordionTrigger>
              <AccordionContent>
                From admission to pre-departure—we stay with you at every milestone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* TESTIMONIALS (CAROUSEL) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-emerald-600/10" />
        <div className="container relative mx-auto px-6 py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Student Stories</h3>
            <p className="mt-2 text-white/70">A glimpse into successful journeys we supported end-to-end.</p>
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
                            <p className="text-sm text-white/60">{t.country}</p>
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

      {/* FAQ SECTION */}
      <section className="container mx-auto grid grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Accordion
            type="multiple"
            className="w-full"
            onValueChange={(val) => console.info('[VisaAssistance] FAQ toggled', val)}
          >
            <AccordionItem value="q1">
              <AccordionTrigger>When should I start my visa process?</AccordionTrigger>
              <AccordionContent>
                Ideally 3–6 months before your program start. This covers documentation, biometrics, and approvals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>What if I don’t have sufficient funds yet?</AccordionTrigger>
              <AccordionContent>
                We guide you on acceptable sources, sponsorships, and timelines to meet financial requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Do you help with interview preparation?</AccordionTrigger>
              <AccordionContent>
                Yes—mock interviews and preparation resources are part of our standard support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Can you track my application after submission?</AccordionTrigger>
              <AccordionContent>
                Absolutely—our team provides transparent tracking updates so you know each milestone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image
              src="/illustrations/faq.svg"
              alt="FAQ illustration"
              width={800}
              height={700}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.25),transparent_35%)]" />
        <div className="container relative mx-auto grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to Secure Your Student Visa?
            </h3>
            <p className="text-white/70">
              Experience a stress-free, expert-guided process with IPD Education.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <JourneyModal className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 shadow-lg shadow-violet-500/20 hover:shadow-emerald-500/30" arrow>
                Talk to Our Experts
              </JourneyModal>
              <Button
                variant="secondary"
                className="bg-white text-black hover:bg-white/90"
                onClick={handleDownloadGuide}
                asChild
              >
                <a href="/guides/visa-guide.pdf" download className="inline-flex items-center">
                  Download Visa Guide (PDF)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <Image
                src="/illustrations/cta.svg"
                alt="Get started with visa assistance"
                width={900}
                height={700}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


