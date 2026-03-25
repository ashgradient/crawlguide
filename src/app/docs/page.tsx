"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Target,
  Megaphone,
  Palette,
  Presentation,
  ExternalLink,
  Menu,
  X,
  Check,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Globe,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
}

// ---------------------------------------------------------------------------
// Nav config
// ---------------------------------------------------------------------------

const NAV_ITEMS: NavItem[] = [
  { id: "research", label: "Research", icon: <BarChart3 className="size-4" /> },
  { id: "gtm", label: "GTM Plan", icon: <Target className="size-4" /> },
  { id: "marketing", label: "Marketing Plan", icon: <Megaphone className="size-4" /> },
  { id: "brand", label: "Brand", icon: <Palette className="size-4" /> },
  { id: "pitch", label: "Pitch", icon: <Presentation className="size-4" /> },
]

// ---------------------------------------------------------------------------
// Small shared components
// ---------------------------------------------------------------------------

function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex size-10 items-center justify-center rounded-xl bg-[#C85A2A]/10 text-[#C85A2A]">
        {icon}
      </div>
      <h2 className="font-heading text-3xl font-semibold text-[#C85A2A]">{children}</h2>
    </div>
  )
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl bg-white shadow-sm p-6 ${className}`}>
      {children}
    </div>
  )
}

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E8D5C4]">
      <table className="w-full text-sm">{children}</table>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="bg-[#2D2D2D] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white first:rounded-tl-xl last:rounded-tr-xl">
      {children}
    </th>
  )
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`px-4 py-3 text-[#2D2D2D] ${className}`}>{children}</td>
  )
}

function Tr({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <tr className={i % 2 === 0 ? "bg-white" : "bg-[#FDF6EE]"}>{children}</tr>
  )
}

// ---------------------------------------------------------------------------
// Section 1 — Research
// ---------------------------------------------------------------------------

function ResearchSection() {
  return (
    <section id="research" className="py-16 scroll-mt-20">
      <SectionHeading icon={<BarChart3 className="size-5" />}>Research</SectionHeading>

      {/* Executive summary */}
      <Card className="mb-6 border-l-4 border-l-[#C85A2A]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-1">Executive Summary</p>
            <h3 className="font-heading text-2xl font-semibold text-[#2D2D2D]">Idea Validation Score</h3>
            <p className="mt-1 text-[#6B5347] text-sm">CrawlGuide passed all primary and secondary criteria.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-heading text-5xl font-bold text-[#C85A2A]">76</div>
              <div className="text-xs text-[#8B7355] mt-1">out of 100</div>
            </div>
            <div className="flex h-16 w-px bg-[#E8D5C4]" />
            <div className="text-center">
              <div className="rounded-lg bg-[#C85A2A] px-4 py-2 font-heading text-xl font-bold text-white">PROCEED</div>
              <div className="text-xs text-[#8B7355] mt-1">Verdict</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Market size */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
        {[
          { label: "TAM", value: "$37.96B", desc: "Total Addressable Market", icon: <Globe className="size-5" /> },
          { label: "SAM", value: "$2.4B", desc: "Serviceable Addressable", icon: <TrendingUp className="size-5" /> },
          { label: "SOM", value: "$30M", desc: "Serviceable Obtainable", icon: <Target className="size-5" /> },
        ].map((item) => (
          <Card key={item.label} className="text-center">
            <div className="flex justify-center mb-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#C85A2A]/10 text-[#C85A2A]">
                {item.icon}
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355]">{item.label}</p>
            <p className="font-heading text-3xl font-bold text-[#2D2D2D] mt-1">{item.value}</p>
            <p className="text-xs text-[#6B5347] mt-1">{item.desc}</p>
          </Card>
        ))}
      </div>

      {/* Why Now */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Why Now</h3>
        <ul className="space-y-3">
          {[
            "QR ubiquity — consumers now scan without hesitation post-pandemic",
            "Support local momentum — community spend-local movements at peak",
            "Social ROI burnout — business owners losing faith in paid social",
            "Slow travel trending — visitors want authentic neighborhood experiences",
          ].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Check className="size-4 mt-0.5 shrink-0 text-[#C85A2A]" />
              <span className="text-sm text-[#6B5347]">{point}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Competitor table */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Competitive Landscape</h3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>Competitor</Th>
              <Th>Type</Th>
              <Th>Gap / Weakness</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Driftscape", "Municipal AR tours", "Enterprise-only, no SMB self-serve"],
              ["Scavify", "Gamified scavenger hunts", "$3K+/yr, event-focused not recurring"],
              ["Eventbrite", "Event ticketing", "No foot-traffic tracking, no QR check-in"],
              ["STQRY", "Audio/walking tours", "$30K+/yr, museum/heritage focus"],
            ].map(([name, type, gap], i) => (
              <Tr key={name} i={i}>
                <Td className="font-medium">{name}</Td>
                <Td>{type}</Td>
                <Td className="text-[#8B7355]">{gap}</Td>
              </Tr>
            ))}
          </tbody>
        </TableWrapper>
      </Card>

      {/* Validation signals */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Validation Signals</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-2">Subreddits (5)</p>
            <ul className="space-y-1">
              {["r/smallbusiness", "r/UrbanPlanning", "r/touristtraps", "r/WalkingTours", "r/digitalnomad"].map((s) => (
                <li key={s} className="text-sm text-[#2D2D2D] font-mono bg-[#FDF6EE] rounded px-2 py-0.5">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-2">Facebook Groups (7)</p>
            <p className="text-sm text-[#6B5347]">Local Business Owners, Small Business Support, Walking Tour Enthusiasts, City Explorers, Tourism Professionals, BID Network, Travel Bloggers</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-2">YouTube Channels (11)</p>
            <p className="text-sm text-[#6B5347]">Walking tour vlogs, city guide creators, local business profiles, travel content creators across 11 relevant channels tracked</p>
          </div>
        </div>
      </Card>

      {/* Keywords */}
      <Card>
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Keyword Opportunity</h3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>Keyword</Th>
              <Th>Monthly Volume</Th>
              <Th>Trend</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["self guided tour", "2.4K", "+26%"],
              ["walking tours", "18.1K", "Stable"],
              ["city walking", "246K", "Growing"],
              ["foodie tours", "14.8K", "Growing"],
            ].map(([kw, vol, trend], i) => (
              <Tr key={kw} i={i}>
                <Td className="font-medium">{kw}</Td>
                <Td>{vol}</Td>
                <Td>
                  <span className={trend.startsWith("+") ? "text-green-600 font-medium" : "text-[#6B5347]"}>
                    {trend}
                  </span>
                </Td>
              </Tr>
            ))}
          </tbody>
        </TableWrapper>
      </Card>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 2 — GTM Plan
// ---------------------------------------------------------------------------

function GTMSection() {
  return (
    <section id="gtm" className="py-16 scroll-mt-20 border-t border-[#E8D5C4]">
      <SectionHeading icon={<Target className="size-5" />}>GTM Plan</SectionHeading>

      {/* Launch overview */}
      <Card className="mb-6 border-l-4 border-l-[#C85A2A]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-3">Launch Overview</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: "Launch Date", value: "April 7, 2026", icon: <Zap className="size-4" /> },
            { label: "Month 1 Target", value: "25 businesses", icon: <Users className="size-4" /> },
            { label: "Month 3 MRR", value: "$9.9K", icon: <DollarSign className="size-4" /> },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#C85A2A]/10 text-[#C85A2A]">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-[#8B7355]">{item.label}</p>
                <p className="font-heading text-xl font-semibold text-[#2D2D2D]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Growth motions */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">7 Growth Motions</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { motion: "Community-Led", tier: "PRIMARY", desc: "Reddit, FB groups, local communities" },
            { motion: "Outbound (BIDs)", tier: "PRIMARY", desc: "Direct outreach to Business Improvement Districts" },
            { motion: "PLG", tier: "PRIMARY", desc: "Free tier drives organic word-of-mouth" },
            { motion: "Inbound / SEO", tier: "SECONDARY", desc: "Long-form content targeting tour keywords" },
            { motion: "Partner-Led", tier: "SECONDARY", desc: "Tourism boards, CVBs, city agencies" },
            { motion: "Viral", tier: "SECONDARY", desc: "QR crawl maps shared on social" },
            { motion: "SLG", tier: "NA", desc: "Sales-led not prioritized pre-traction" },
          ].map(({ motion, tier, desc }) => (
            <div key={motion} className="flex items-start gap-3 rounded-lg border border-[#E8D5C4] p-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-[#2D2D2D]">{motion}</span>
                  <Badge
                    className={
                      tier === "PRIMARY"
                        ? "bg-[#C85A2A] text-white border-transparent"
                        : tier === "SECONDARY"
                        ? "bg-[#8B7355]/20 text-[#8B7355] border-transparent"
                        : "bg-[#E8D5C4] text-[#8B7355] border-transparent"
                    }
                  >
                    {tier}
                  </Badge>
                </div>
                <p className="text-xs text-[#6B5347]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 90-day timeline */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">90-Day Timeline</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              phase: "Phase 1",
              span: "Week 1–2",
              name: "Seed",
              color: "border-[#C85A2A]",
              items: ["100 BID outreach emails", "5 Reddit/FB community posts", "ProductHunt preparation", "Onboard first 3 beta businesses"],
            },
            {
              phase: "Phase 2",
              span: "Week 3–6",
              name: "Convert",
              color: "border-[#8B7355]",
              items: ["First BID pilot live", "10+ business signups", "Capture first testimonial", "Refine onboarding from feedback"],
            },
            {
              phase: "Phase 3",
              span: "Week 7–12",
              name: "Amplify",
              color: "border-[#2D2D2D]",
              items: ["ProductHunt launch", "100 businesses live", "$9.9K MRR target", "First press/media mention"],
            },
          ].map(({ phase, span, name, color, items }) => (
            <div key={phase} className={`rounded-xl border-t-4 ${color} bg-[#FDF6EE] p-4`}>
              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8B7355]">{phase} · {span}</span>
                <p className="font-heading text-xl font-semibold text-[#2D2D2D] mt-0.5">{name}</p>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight className="size-3.5 mt-0.5 shrink-0 text-[#C85A2A]" />
                    <span className="text-xs text-[#6B5347]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Budget */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Monthly Budget</h3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>Item</Th>
              <Th>Monthly Cost</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Domain", "$20"],
              ["Hosting", "$29"],
              ["Email tool", "$0"],
              ["Design", "$0"],
              ["Ads", "$300"],
              ["Total", "$349/mo"],
            ].map(([item, cost], i) => (
              <Tr key={item} i={i}>
                <Td className={item === "Total" ? "font-bold text-[#2D2D2D]" : ""}>{item}</Td>
                <Td className={item === "Total" ? "font-bold text-[#C85A2A]" : ""}>{cost}</Td>
              </Tr>
            ))}
          </tbody>
        </TableWrapper>
      </Card>

      {/* Channel KPIs */}
      <Card>
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Channel KPIs</h3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>Channel</Th>
              <Th>Activity</Th>
              <Th>Target</Th>
              <Th>Goal</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["BID Outreach", "100 emails", "5% reply rate", "5 conversations"],
              ["Reddit", "5 posts", "500 views", "Community traction"],
              ["ProductHunt", "Launch day", "200 upvotes", "Top 5 of day"],
              ["Cold Email", "200 sent", "3% reply rate", "6 conversations"],
            ].map(([ch, act, target, goal], i) => (
              <Tr key={ch} i={i}>
                <Td className="font-medium">{ch}</Td>
                <Td>{act}</Td>
                <Td>{target}</Td>
                <Td className="text-[#6B5347]">{goal}</Td>
              </Tr>
            ))}
          </tbody>
        </TableWrapper>
      </Card>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 3 — Marketing Plan
// ---------------------------------------------------------------------------

function MarketingSection() {
  return (
    <section id="marketing" className="py-16 scroll-mt-20 border-t border-[#E8D5C4]">
      <SectionHeading icon={<Megaphone className="size-5" />}>Marketing Plan</SectionHeading>

      {/* Positioning */}
      <blockquote className="mb-6 rounded-xl border-l-4 border-l-[#C85A2A] bg-white pl-6 py-5 pr-6 shadow-sm">
        <p className="font-heading text-lg font-semibold leading-relaxed text-[#2D2D2D] italic">
          &ldquo;CrawlGuide helps local business owners drive foot traffic through QR-powered neighborhood crawls — without enterprise contracts or social media burnout.&rdquo;
        </p>
        <footer className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#8B7355]">Positioning Statement</footer>
      </blockquote>

      {/* Personas */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Customer Personas</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              name: "Maria",
              role: "Business Owner",
              avatar: "M",
              desc: "Owns a bakery, wants more foot traffic, frustrated with Instagram ROI. Needs proof that marketing is working.",
            },
            {
              name: "James",
              role: "BID Director",
              avatar: "J",
              desc: "Manages 40+ businesses, needs data for city reports, budget-conscious. Wants tools that make him look smart to stakeholders.",
            },
            {
              name: "Sophie",
              role: "Visitor",
              avatar: "S",
              desc: "Tourist/local explorer, loves walkable neighborhoods, uses QR codes naturally. Wants curated local experiences.",
            },
          ].map(({ name, role, avatar, desc }) => (
            <div key={name} className="rounded-xl bg-[#FDF6EE] p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#C85A2A] font-heading text-lg font-bold text-white">
                  {avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#2D2D2D]">{name}</p>
                  <p className="text-xs text-[#8B7355]">{role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#6B5347]">{desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Messaging pillars */}
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        {[
          { title: "Speed-to-Value", tagline: "Live in 3 minutes", desc: "From signup to a QR code in your window in under 3 minutes. No training required." },
          { title: "Real Data", tagline: "Foot traffic you can prove", desc: "Every QR scan is a data point. Show your landlord, your board, your city council." },
          { title: "Built For SMB", tagline: "No enterprise contract required", desc: "Monthly plans, free tier, cancel anytime. Built for bakery owners, not Fortune 500s." },
        ].map(({ title, tagline, desc }) => (
          <Card key={title} className="border-t-4 border-t-[#C85A2A]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-1">Messaging Pillar</p>
            <h3 className="font-heading text-xl font-semibold text-[#2D2D2D]">{title}</h3>
            <p className="text-sm font-medium text-[#C85A2A] mt-1 mb-2">&ldquo;{tagline}&rdquo;</p>
            <p className="text-sm text-[#6B5347] leading-relaxed">{desc}</p>
          </Card>
        ))}
      </div>

      {/* Brand copy */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Brand Copy</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "Tagline", value: "Your next customer is one crawl away." },
            { label: "Primary CTA", value: "Start your free crawl" },
            { label: "Meta Description", value: "QR-powered walking routes that turn neighboring local businesses into curated, themed experiences." },
            { label: "Social Bio", value: "Themed neighborhood crawls that drive real foot traffic. Built for local business owners." },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-[#FDF6EE] p-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-1">{label}</p>
              <p className="text-sm text-[#2D2D2D]">{value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Content calendar */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Content Calendar — Month 1–2</h3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>Period</Th>
              <Th>Content</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Week 1", "Launch post, BID outreach email"],
              ["Week 2", '"How it works" blog, Reddit community post'],
              ["Week 3", "Case study draft, social proof collection"],
              ["Week 4", "Newsletter #1, ProductHunt prep"],
              ["Month 2", "Weekly content, SEO articles, partner spotlights"],
            ].map(([period, content], i) => (
              <Tr key={period} i={i}>
                <Td className="font-medium whitespace-nowrap">{period}</Td>
                <Td>{content}</Td>
              </Tr>
            ))}
          </tbody>
        </TableWrapper>
      </Card>

      {/* Do/Don't */}
      <Card>
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Brand Voice — DO / DON&apos;T</h3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>DO Say</Th>
              <Th>DON&apos;T Say</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ['"business owner"', '"merchant" or "vendor"'],
              ['"neighborhood crawl"', '"scavenger hunt"'],
              ['"Real foot traffic data"', '"Big data analytics"'],
              ['"3 minutes to your first crawl"', '"Onboarding flow"'],
            ].map(([doSay, dontSay], i) => (
              <Tr key={doSay} i={i}>
                <Td>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-green-600 shrink-0" />
                    {doSay}
                  </span>
                </Td>
                <Td>
                  <span className="inline-flex items-center gap-1.5">
                    <X className="size-3.5 text-red-500 shrink-0" />
                    {dontSay}
                  </span>
                </Td>
              </Tr>
            ))}
          </tbody>
        </TableWrapper>
      </Card>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 4 — Brand
// ---------------------------------------------------------------------------

function BrandSection() {
  return (
    <section id="brand" className="py-16 scroll-mt-20 border-t border-[#E8D5C4]">
      <SectionHeading icon={<Palette className="size-5" />}>Brand</SectionHeading>

      {/* Color palette */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Color Palette</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { name: "Terracotta", hex: "#C85A2A", textClass: "text-white" },
            { name: "Cream", hex: "#FDF6EE", textClass: "text-[#2D2D2D]", border: true },
            { name: "Charcoal", hex: "#2D2D2D", textClass: "text-white" },
            { name: "Warm Gray", hex: "#8B7355", textClass: "text-white" },
          ].map(({ name, hex, textClass, border }) => (
            <div key={name} className="rounded-xl overflow-hidden shadow-sm">
              <div
                className={`h-24 flex items-end p-3 ${border ? "border border-[#E8D5C4]" : ""}`}
                style={{ backgroundColor: hex }}
              >
                <span className={`font-mono text-xs font-medium ${textClass}`}>{hex}</span>
              </div>
              <div className="bg-white px-3 py-2">
                <p className="text-sm font-medium text-[#2D2D2D]">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Typography */}
      <Card className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Typography</h3>
        <div className="space-y-6">
          <div className="rounded-xl bg-[#FDF6EE] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-2">Fraunces — Display / Headings</p>
            <p className="font-heading text-3xl text-[#2D2D2D]">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div className="rounded-xl bg-[#FDF6EE] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-2">DM Sans — Body Text</p>
            <p className="text-lg text-[#2D2D2D]">The quick brown fox jumps over the lazy dog. Clear, readable, built for screens.</p>
          </div>
          <div className="rounded-xl bg-[#FDF6EE] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-2">DM Mono — Data / Numbers</p>
            <p className="font-mono text-lg text-[#2D2D2D]">76/100 · $9,900 MRR · 246K searches/mo</p>
          </div>
        </div>
      </Card>

      {/* Tagline */}
      <Card className="mb-6 text-center py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-4">Brand Tagline</p>
        <p className="font-heading text-4xl font-semibold text-[#2D2D2D] sm:text-5xl">
          Your next customer is<br />
          <span className="text-[#C85A2A]">one crawl away.</span>
        </p>
      </Card>

      {/* Tone */}
      <Card className="mb-6 border-l-4 border-l-[#C85A2A]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-2">Brand Tone</p>
        <p className="text-[#2D2D2D] leading-relaxed">
          Warm, local, slightly playful. Celebrates small business owners as heroes. Never corporate, never condescending. Speaks like a trusted neighbor who happens to know a lot about foot traffic.
        </p>
      </Card>

      {/* Competitive voice matrix */}
      <Card>
        <h3 className="font-heading text-lg font-semibold text-[#2D2D2D] mb-4">Competitive Voice Matrix</h3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>When prospect says...</Th>
              <Th>We say...</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ['"We already use Instagram"', '"Instagram builds followers. CrawlGuide builds foot traffic."'],
              ['"We don\'t have budget"', '"Free 14-day trial. No credit card. Cancel anytime."'],
              ['"Sounds complicated"', '"3 minutes. QR code in your window. Done."'],
              ['"What\'s a crawl?"', '"A themed walking route past local businesses — like a pub crawl, but for any neighborhood."'],
            ].map(([prospect, us], i) => (
              <Tr key={prospect} i={i}>
                <Td className="text-[#8B7355] italic">{prospect}</Td>
                <Td className="font-medium text-[#2D2D2D]">{us}</Td>
              </Tr>
            ))}
          </tbody>
        </TableWrapper>
      </Card>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 5 — Pitch
// ---------------------------------------------------------------------------

function PitchSection() {
  const slides = [
    { n: 1, title: "Title", point: "CrawlGuide: Your next customer is one crawl away" },
    { n: 2, title: "Problem", point: "Local businesses flying blind on foot traffic" },
    { n: 3, title: "Solution", point: "3 minutes to your first crawl" },
    { n: 4, title: "Market", point: "$37.96B TAM, growing fast" },
    { n: 5, title: "Traction", point: "Live product, 3-tier pricing" },
    { n: 6, title: "Product", point: "Business tools, route tools, analytics" },
    { n: 7, title: "Business Model", point: "SaaS + BID multiplier, 66:1 LTV:CAC" },
    { n: 8, title: "Competition", point: "Only self-serve SMB solution" },
    { n: 9, title: "GTM", point: "BID directors as multiplier" },
    { n: 10, title: "Team", point: "Built by operators" },
    { n: 11, title: "Why Now", point: "QR adoption + Support Local + social ROI burnout" },
    { n: 12, title: "Vision", point: "50K businesses, 500 cities, one standard" },
  ]

  return (
    <section id="pitch" className="py-16 scroll-mt-20 border-t border-[#E8D5C4]">
      <SectionHeading icon={<Presentation className="size-5" />}>Pitch</SectionHeading>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {slides.map(({ n, title, point }) => (
          <div
            key={n}
            className="rounded-xl border border-[#E8D5C4] bg-white p-4 shadow-sm hover:border-[#C85A2A]/40 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#2D2D2D] font-mono text-xs font-bold text-white">
                {String(n).padStart(2, "0")}
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-[#2D2D2D]">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B5347]">{point}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Card className="text-center py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7355] mb-3">Full Pitch Deck</p>
        <p className="font-heading text-2xl font-semibold text-[#2D2D2D] mb-6">See every slide, live and interactive.</p>
        <Link href="/deck">
          <Button
            className="bg-[#C85A2A] text-white hover:bg-[#A84520] rounded-full px-8 py-3 text-base font-medium h-auto"
          >
            View Live Pitch Deck
            <ChevronRight className="ml-1 size-4" />
          </Button>
        </Link>
      </Card>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // IntersectionObserver — track which section is in view
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((n) => n.id)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setSidebarOpen(false)
  }

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] bg-[#FDF6EE]">

      {/* ------------------------------------------------------------------ */}
      {/* Mobile overlay backdrop */}
      {/* ------------------------------------------------------------------ */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Sidebar */}
      {/* ------------------------------------------------------------------ */}
      <aside
        className={`
          fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-[260px]
          bg-[#2D2D2D] flex flex-col
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Sidebar header */}
        <div className="px-5 pt-6 pb-4 border-b border-white/10">
          <p className="font-heading text-xl font-semibold text-[#C85A2A]">CrawlGuide</p>
          <p className="text-xs text-white/50 mt-0.5 uppercase tracking-widest">Documentation</p>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-left
                  transition-all duration-150
                  ${isActive
                    ? "bg-[#C85A2A] text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span className={isActive ? "text-white" : "text-white/40"}>{item.icon}</span>
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* External links */}
        <div className="border-t border-white/10 px-3 py-4 space-y-1">
          <a
            href="https://crawlguide.ashketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:bg-white/10 hover:text-white transition-all"
          >
            <Globe className="size-4 text-white/40" />
            Live Site
            <ExternalLink className="size-3 ml-auto text-white/30" />
          </a>
          <a
            href="https://github.com/ashgradient/crawlguide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:bg-white/10 hover:text-white transition-all"
          >
            <svg className="size-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
            <ExternalLink className="size-3 ml-auto text-white/30" />
          </a>
        </div>
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/* Mobile hamburger button */}
      {/* ------------------------------------------------------------------ */}
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-[#C85A2A] text-white shadow-lg md:hidden"
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
      >
        {sidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* ------------------------------------------------------------------ */}
      {/* Main content */}
      {/* ------------------------------------------------------------------ */}
      <main className="flex-1 min-w-0 md:ml-[260px]">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-12">
          <ResearchSection />
          <GTMSection />
          <MarketingSection />
          <BrandSection />
          <PitchSection />
          <div className="pb-20" />
        </div>
      </main>

    </div>
  )
}
