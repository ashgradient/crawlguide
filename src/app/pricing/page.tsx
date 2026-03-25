"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const plans = [
  {
    name: "Free Trial",
    monthly: 0,
    annual: 0,
    period: "14 days",
    description: "Try CrawlGuide risk-free.",
    features: [
      "1 route",
      "5 stops per route",
      "Basic QR codes",
      "Check-in tracking",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    monthly: 99,
    annual: 990,
    period: "/mo",
    description: "Everything you need to grow foot traffic.",
    features: [
      "Unlimited routes",
      "20 stops per route",
      "Analytics dashboard",
      "Custom branding",
      "Shareable links",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Pro",
    monthly: 299,
    annual: 2990,
    period: "/mo",
    description: "For BIDs and multi-location businesses.",
    features: [
      "BID management tools",
      "CSV export",
      "Priority support",
      "Custom domain",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const comparisonFeatures = [
  { name: "Routes", free: "1", growth: "Unlimited", pro: "Unlimited" },
  { name: "Stops per route", free: "5", growth: "20", pro: "Unlimited" },
  { name: "QR codes", free: true, growth: true, pro: true },
  { name: "Check-in tracking", free: true, growth: true, pro: true },
  { name: "Analytics dashboard", free: false, growth: true, pro: true },
  { name: "Custom branding", free: false, growth: true, pro: true },
  { name: "Shareable links", free: false, growth: true, pro: true },
  { name: "BID management", free: false, growth: false, pro: true },
  { name: "CSV export", free: false, growth: false, pro: true },
  { name: "Priority support", free: false, growth: false, pro: true },
  { name: "Custom domain", free: false, growth: false, pro: true },
  { name: "API access", free: false, growth: false, pro: true },
]

const faqs = [
  {
    question: "Is there a free tier after the trial?",
    answer:
      "Not currently. The 14-day free trial includes all Growth features so you can fully evaluate CrawlGuide before committing.",
  },
  {
    question: "Do you offer BID discounts?",
    answer:
      "Yes. BIDs with 10+ businesses get custom pricing. Contact us for a quote.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. Upgrade or downgrade at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards through Stripe. Annual plans can also pay by invoice.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. Sign up, add your business, and start getting check-ins in under 10 minutes.",
  },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-[#2C1810]">{value}</span>
  }
  return value ? (
    <Check className="mx-auto size-5 text-[#4E7A5B]" />
  ) : (
    <X className="mx-auto size-5 text-[#E8D5C4]" />
  )
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="bg-[#FDF6EE]">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-[#2C1810] sm:text-4xl lg:text-5xl">
          Sized for small businesses, not enterprise budgets.
        </h1>

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${!annual ? "text-[#2C1810]" : "text-[#6B5347]"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-[#C85A2A]" : "bg-[#E8D5C4]"}`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 size-6 rounded-full bg-white shadow-sm transition-transform ${annual ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
          <span
            className={`text-sm font-medium ${annual ? "text-[#2C1810]" : "text-[#6B5347]"}`}
          >
            Annual
          </span>
          {annual && (
            <span className="rounded-full bg-[#4E7A5B] px-2.5 py-0.5 text-xs font-medium text-white">
              Save 2 months
            </span>
          )}
        </div>
      </section>

      {/* Plan cards */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-8 shadow-sm ${
                plan.popular
                  ? "border-[#C85A2A] ring-2 ring-[#C85A2A]"
                  : "border-[#E8D5C4]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C85A2A] px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold text-[#2C1810]">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-[#6B5347]">{plan.description}</p>
              <div className="mt-6">
                <span className="font-heading text-4xl font-bold text-[#2C1810]">
                  $
                  {plan.monthly === 0
                    ? "0"
                    : annual
                      ? plan.annual.toLocaleString()
                      : plan.monthly}
                </span>
                <span className="text-[#6B5347]">
                  {plan.monthly === 0
                    ? ` / ${plan.period}`
                    : annual
                      ? "/yr"
                      : plan.period}
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#2C1810]"
                  >
                    <Check className="size-4 shrink-0 text-[#4E7A5B]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`mt-8 block rounded-full py-3 text-center font-medium transition-colors ${
                  plan.popular
                    ? "bg-[#C85A2A] text-white hover:bg-[#A84520]"
                    : "border border-[#E8D5C4] text-[#2C1810] hover:bg-[#F2DDD0]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="border-t border-[#E8D5C4] bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-semibold text-[#2C1810]">
            Compare Plans
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#E8D5C4]">
                  <th className="pb-4 text-sm font-medium text-[#6B5347]">
                    Feature
                  </th>
                  <th className="pb-4 text-center text-sm font-medium text-[#6B5347]">
                    Free Trial
                  </th>
                  <th className="pb-4 text-center text-sm font-medium text-[#C85A2A]">
                    Growth
                  </th>
                  <th className="pb-4 text-center text-sm font-medium text-[#6B5347]">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature) => (
                  <tr
                    key={feature.name}
                    className="border-b border-[#E8D5C4]/50"
                  >
                    <td className="py-3 text-sm text-[#2C1810]">
                      {feature.name}
                    </td>
                    <td className="py-3 text-center">
                      <FeatureCell value={feature.free} />
                    </td>
                    <td className="py-3 text-center">
                      <FeatureCell value={feature.growth} />
                    </td>
                    <td className="py-3 text-center">
                      <FeatureCell value={feature.pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#E8D5C4] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-heading text-2xl font-semibold text-[#2C1810]">
            Frequently Asked Questions
          </h2>
          <Accordion className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} className="border-[#E8D5C4]">
                <AccordionTrigger className="text-base text-[#2C1810]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B5347]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
