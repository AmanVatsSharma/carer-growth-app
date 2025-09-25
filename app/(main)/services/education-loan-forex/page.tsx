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

import { ShieldCheck, CheckCircle, BadgeDollarSign, Banknote, CreditCard, LineChart, ArrowRight } from 'lucide-react'

const loanSteps = [
  { key: 'ls-1', title: 'Loan Selection & Strategy', illustration: '/illustrations/loan-strategy.svg', description: 'Compare banks and NBFCs for rates, repayment, fees. Build the right mix for tuition, living, and travel.' },
  { key: 'ls-2', title: 'Application & Documentation Support', illustration: '/illustrations/loan-documents.svg', description: 'Guidance on applications, income proof, tax returns, admission letters, and collateral documentation.' },
  { key: 'ls-3', title: 'Pre-Disbursement Guidance', illustration: '/illustrations/loan-disbursement.svg', description: 'Plan disbursements for tuition and living costs. Get tips on negotiating terms where possible.' },
  { key: 'ls-4', title: 'Debt Management & Repayment Planning', illustration: '/illustrations/repayment.svg', description: 'Repayment strategies aligned with income expectations. Refinancing and consolidation guidance. Currency risk mitigation.' },
  { key: 'ls-5', title: 'Alternative Funding Options', illustration: '/illustrations/alternative-funding.svg', description: 'Scholarships, grants, assistantships, paid internships, and select private lenders.' },
]

const forexTabs = [
  { key: 'fx-plan', label: 'Forex Planning & Budgeting', illustration: '/illustrations/forex-planning.svg', description: 'Plan tuition, living, insurance, emergency funds with currency risk management.' },
  { key: 'fx-cards', label: 'Student Forex Cards & Transfers', illustration: '/illustrations/forex-cards.svg', description: 'Multi-currency cards and safe international transfers. Link Indian & overseas accounts.' },
  { key: 'fx-compl', label: 'Compliance & Legal Support', illustration: '/illustrations/forex-compliance.svg', description: 'RBI compliance, international banking norms, and tax reporting guidance.' },
]

const journey = [
  { id: 'j1', title: 'Financial Consultation', illustration: '/illustrations/journey-1.svg', description: 'Profile-first discovery to map your financing needs.' },
  { id: 'j2', title: 'Loan Approval', illustration: '/illustrations/journey-2.svg', description: 'Streamlined application and documentation until approval.' },
  { id: 'j3', title: 'Forex Planning', illustration: '/illustrations/journey-3.svg', description: 'Budgeting, currency strategy, and instrument selection.' },
  { id: 'j4', title: 'Disbursement', illustration: '/illustrations/journey-4.svg', description: 'Timely disbursements toward tuition and living costs.' },
  { id: 'j5', title: 'Repayment & Support', illustration: '/illustrations/journey-5.svg', description: 'Ongoing guidance for repayments and long-term planning.' },
]

const testimonials = [
  { name: 'Priya Sharma', quote: 'IPD guided me through loan approval and forex transfer, stress-free.', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1280&auto=format&fit=crop' },
  { name: 'Rahul Nair', quote: 'Smart planning helped me minimize costs and manage risk.', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1280&auto=format&fit=crop' },
  { name: 'Ananya Gupta', quote: 'Transparent process and great support across banks and cards.', photo: 'https://images.unsplash.com/photo-1512427691650-1696d15c86e5?q=80&w=1280&auto=format&fit=crop' },
]

export default function EducationLoanForexPage() {
  useEffect(() => {
    console.info('[LoanForex] page mounted')
    return () => console.info('[LoanForex] page unmounted')
  }, [])

  const [fxTab, setFxTab] = useState<string>('fx-plan')
  const fxMap = useMemo(() => new Map(forexTabs.map((t) => [t.key, t])), [])

  const onLoanCTA = () => {
    try {
      console.info('[LoanForex] CTA clicked: Get Loan Support')
    } catch (e) {
      console.error('[LoanForex] loan CTA error', e)
    }
  }
  const onForexCTA = () => {
    try {
      console.info('[LoanForex] CTA clicked: Plan Forex Now')
    } catch (e) {
      console.error('[LoanForex] forex CTA error', e)
    }
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#0B0B0F] via-[#0b1020] to-[#0B0B0F] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,80,236,0.35),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25),transparent_35%)]" />
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Smart. Secure. Transparent.</span>
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">Education Loan & Forex Assistance</h1>
            <p className="text-pretty text-lg text-white/70 md:text-xl">Smart financial planning for your study abroad journey.</p>
            <div className="flex flex-wrap items-center gap-4">
              <JourneyModal className="bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-500 shadow-lg shadow-emerald-500/20 hover:shadow-violet-500/30" arrow>
                Get Loan Support
              </JourneyModal>
              <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10" onClick={onForexCTA}>
                Plan Forex Now
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <Image src="/illustrations/hero-loan-forex.svg" alt="Education loan and forex hero" width={900} height={700} className="h-auto w-full" priority />
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* OVERVIEW */}
      <section className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Finance your education with clarity</h2>
          <p className="text-white/70">Education abroad is a major investment. We simplify loans and forex with transparent comparisons, robust documentation support, and risk-aware planning.</p>
          <ul className="grid grid-cols-1 gap-3 text-white/80 md:grid-cols-2">
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Multi-bank comparisons</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> End-to-end documentation</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Forex budgeting & instruments</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Compliance-first approach</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image src="/illustrations/overview-loan-forex.svg" alt="Loan & forex overview" width={800} height={700} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* LOAN ACCORDION */}
      <section className="container mx-auto px-6 py-12">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">Education Loan Assistance</h3>
          <p className="mt-2 text-white/70">A structured, strategy-first approach to student financing.</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full" onValueChange={(v) => console.info('[LoanForex] Loan accordion toggled', v)}>
            {loanSteps.map((s, i) => (
              <AccordionItem key={s.key} value={s.key}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold shadow-sm shadow-violet-600/20">{i + 1}</span>
                    <span className="text-base font-semibold">{s.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-6">
                    <div className="relative mt-1 size-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2">
                      <Image src={s.illustration} alt={`${s.title} illustration`} width={80} height={80} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-white/75">{s.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* FOREX TABS */}
      <section className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Forex & International Currency Support</h3>
            <p className="mt-2 text-white/70">Plan, pay, and stay compliant across borders.</p>
          </div>
          <Tabs value={fxTab} onValueChange={(v) => { console.info('[LoanForex] Forex tab', v); setFxTab(v) }} className="w-full">
            <TabsList className="mx-auto mb-6 grid w-full max-w-[720px] grid-cols-3">
              {forexTabs.map((t) => (
                <TabsTrigger key={t.key} value={t.key} className="data-[state=active]:shadow data-[state=active]:ring-1 data-[state=active]:ring-white/10">{t.label}</TabsTrigger>
              ))}
            </TabsList>
            {forexTabs.map((t) => (
              <TabsContent key={t.key} value={t.key} className="space-y-6">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <Card className="border-white/10 bg-white/[0.03]">
                    <CardHeader>
                      <CardTitle className="text-xl">{t.label}</CardTitle>
                      <CardDescription className="text-white/60">Get the financial edge</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{t.description}</p>
                    </CardContent>
                  </Card>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                    <Image src={t.illustration} alt={`${t.label} illustration`} width={800} height={700} className="h-auto w-full" />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* WHY CHOOSE */}
      <section className="container mx-auto grid grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
        	<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            	<Image src="/illustrations/why-loan-forex.svg" alt="Why choose loan & forex" width={900} height={700} className="h-auto w-full" />
          	</div>
        </div>
        <div className="order-1 space-y-4 md:order-2">
          <h3 className="text-2xl font-bold md:text-3xl">Why Choose IPD</h3>
          <Accordion type="multiple" className="w-full" onValueChange={(v) => console.info('[LoanForex] Why toggled', v)}>
            <AccordionItem value="plan"><AccordionTrigger>Comprehensive debt planning & financial strategy</AccordionTrigger><AccordionContent>We align loan and forex to your course, destination, and career plan.</AccordionContent></AccordionItem>
            <AccordionItem value="trans"><AccordionTrigger>Transparent process, no hidden fees</AccordionTrigger><AccordionContent>Full clarity on costs, terms, and timelines from day one.</AccordionContent></AccordionItem>
            <AccordionItem value="risk"><AccordionTrigger>Risk management for loans & forex</AccordionTrigger><AccordionContent>From currency hedging considerations to repayment buffers—we plan prudently.</AccordionContent></AccordionItem>
            <AccordionItem value="personal"><AccordionTrigger>Personalized per student</AccordionTrigger><AccordionContent>Support tailored to your financial profile and goals.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* STUDENT JOURNEY TIMELINE */}
      <section className="container mx-auto px-6 py-12">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">Student Journey</h3>
          <p className="mt-2 text-white/70">From consultation to repayment support.</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full" onValueChange={(v) => console.info('[LoanForex] Journey toggled', v)}>
            {journey.map((s, i) => (
              <AccordionItem key={s.id} value={s.id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold shadow-sm shadow-violet-600/20">{i + 1}</span>
                    <span className="text-base font-semibold">{s.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-6">
                    <div className="relative mt-1 size-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2">
                      <Image src={s.illustration} alt={`${s.title} illustration`} width={80} height={80} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-white/75">{s.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-emerald-600/10" />
        <div className="container relative mx-auto px-6 py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Student Stories</h3>
            <p className="mt-2 text-white/70">What students say about our loan & forex support.</p>
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
                            <p className="text-sm text-white/60">Loan & Forex</p>
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
          <Accordion type="multiple" className="w-full" onValueChange={(v) => console.info('[LoanForex] FAQ toggled', v)}>
            <AccordionItem value="q1"><AccordionTrigger>Do I need collateral for a loan?</AccordionTrigger><AccordionContent>Depends on lender and amount. We help you evaluate collateral vs. non-collateral options.</AccordionContent></AccordionItem>
            <AccordionItem value="q2"><AccordionTrigger>What are forex limits for students?</AccordionTrigger><AccordionContent>We clarify instrument limits, purpose codes, and remittance documentation.</AccordionContent></AccordionItem>
            <AccordionItem value="q3"><AccordionTrigger>Can I refinance or consolidate?</AccordionTrigger><AccordionContent>Yes, subject to terms and credit. We advise on timing and implications.</AccordionContent></AccordionItem>
            <AccordionItem value="q4"><AccordionTrigger>How flexible are repayments?</AccordionTrigger><AccordionContent>Moratoriums and step-up/step-down options vary. We match plans to your expected income.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <Image src="/illustrations/faq-loan-forex.svg" alt="Loan & forex FAQ" width={800} height={700} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.25),transparent_35%)]" />
        <div className="container relative mx-auto grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">Secure Your Finances, Focus on Your Dreams</h3>
            <p className="text-white/70">Stress-free loans & forex guidance by experts.</p>
            <div className="flex flex-wrap items-center gap-4">
              <JourneyModal className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 shadow-lg shadow-violet-500/20 hover:shadow-emerald-500/30" arrow>
                Talk to Finance Advisor
              </JourneyModal>
              <Button variant="secondary" className="bg-white text-black hover:bg-white/90" onClick={onLoanCTA}>
                Start Loan Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-emerald-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <Image src="/illustrations/cta-loan-forex.svg" alt="CTA loan & forex" width={900} height={700} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


