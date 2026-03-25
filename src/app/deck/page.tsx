"use client"

import { useEffect, useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import {
  MapPin,
  X,
  Check,
  ChevronRight,
  QrCode,
  BarChart3,
  Route,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react"

// ─── Brand constants ────────────────────────────────────────────────────────
const TERRACOTTA = "#C85A2A"
const CREAM = "#FDF6EE"
const CHARCOAL = "#2D2D2D"
const CREAM_MUTED = "#F2DDD0"

// ─── Slide transition variants ───────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
}

const transition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 35,
  mass: 0.8,
}

// ─── Reusable components ─────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  dark = false,
}: {
  label: string
  value: string
  dark?: boolean
}) {
  return (
    <div
      className="flex flex-col gap-2 rounded-2xl px-6 py-5"
      style={{
        background: dark ? "rgba(255,255,255,0.08)" : "rgba(200,90,42,0.10)",
        border: dark
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(200,90,42,0.20)",
      }}
    >
      <span
        className="font-heading text-3xl font-semibold leading-none tracking-tight sm:text-4xl"
        style={{ color: dark ? CREAM : TERRACOTTA }}
      >
        {value}
      </span>
      <span
        className="text-sm font-medium leading-snug"
        style={{ color: dark ? "rgba(253,246,238,0.65)" : "#6B5347" }}
      >
        {label}
      </span>
    </div>
  )
}

function CheckRow({
  children,
  accent = TERRACOTTA,
}: {
  children: React.ReactNode
  accent?: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
        style={{ background: accent }}
      >
        <Check className="size-3 text-white" strokeWidth={3} />
      </div>
      <span className="text-base leading-snug" style={{ color: CHARCOAL }}>
        {children}
      </span>
    </div>
  )
}

// ─── Decorative map pins for slide 1 ─────────────────────────────────────────
const PIN_POSITIONS = [
  { top: "8%", left: "6%", size: 28, opacity: 0.12, rotate: -12 },
  { top: "15%", right: "9%", size: 20, opacity: 0.09, rotate: 8 },
  { top: "72%", left: "4%", size: 24, opacity: 0.10, rotate: -5 },
  { top: "78%", right: "6%", size: 32, opacity: 0.08, rotate: 15 },
  { top: "40%", left: "2%", size: 18, opacity: 0.07, rotate: 0 },
  { top: "55%", right: "3%", size: 22, opacity: 0.10, rotate: -8 },
  { top: "90%", left: "20%", size: 16, opacity: 0.08, rotate: 12 },
  { top: "88%", right: "22%", size: 20, opacity: 0.07, rotate: -15 },
]

// ─── Individual slide components ─────────────────────────────────────────────

function Slide1() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-8"
      style={{ background: CREAM }}
    >
      {PIN_POSITIONS.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute"
          style={{
            top: p.top,
            left: (p as { left?: string }).left,
            right: (p as { right?: string }).right,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <MapPin size={p.size} color={TERRACOTTA} fill={TERRACOTTA} />
        </div>
      ))}

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.55 }}
      >
        <div className="flex items-center gap-2">
          <MapPin size={32} color={TERRACOTTA} fill={TERRACOTTA} />
          <span
            className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ color: TERRACOTTA }}
          >
            CrawlGuide
          </span>
        </div>

        <p
          className="font-heading text-2xl font-medium italic sm:text-3xl"
          style={{ color: CHARCOAL }}
        >
          Your next customer is one crawl away.
        </p>

        <p
          className="max-w-lg text-base leading-relaxed sm:text-lg"
          style={{ color: "#6B5347" }}
        >
          Themed neighborhood crawls that drive real foot traffic
        </p>

        <div
          className="mt-2 h-px w-16"
          style={{ background: TERRACOTTA, opacity: 0.35 }}
        />

        <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#6B5347", opacity: 0.7 }}>
          Investor Presentation · 2025
        </p>
      </motion.div>
    </div>
  )
}

function Slide2() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CHARCOAL }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            The Problem
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CREAM }}
          >
            Local businesses are flying blind.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <StatCard
            dark
            value="$200–500/mo"
            label="Spent on Instagram ads with no attribution"
          />
          <StatCard dark value="0" label="Reliable foot traffic data sources for SMBs" />
          <StatCard
            dark
            value="$30,000+/yr"
            label="What enterprise tools charge BIDs"
          />
        </motion.div>

        <motion.div
          className="mt-10 rounded-2xl border px-8 py-6"
          style={{
            borderColor: "rgba(200,90,42,0.35)",
            background: "rgba(200,90,42,0.08)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <p
            className="font-heading text-xl font-medium italic leading-snug sm:text-2xl"
            style={{ color: CREAM }}
          >
            "Business owners don't want followers. They want customers through the door."
          </p>
        </motion.div>
      </div>
    </div>
  )
}

function Slide3() {
  const steps = [
    {
      num: "01",
      icon: <QrCode size={22} color={TERRACOTTA} />,
      title: "Business signs up + QR auto-generated",
      body: "One form, one click. A branded QR code lands in your inbox ready to print.",
    },
    {
      num: "02",
      icon: <Route size={22} color={TERRACOTTA} />,
      title: "Build the route",
      body: "Drag and drop stops onto the map. Add a theme, a description, and go live.",
    },
    {
      num: "03",
      icon: <BarChart3 size={22} color={TERRACOTTA} />,
      title: "Visitors check in",
      body: "Customers scan, check in at each stop, and businesses see real foot traffic data.",
    },
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CREAM }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            The Solution
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CHARCOAL }}
          >
            3 minutes to your first crawl.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 rounded-2xl p-6"
              style={{
                background: "white",
                border: "1px solid #E8D5C4",
                boxShadow: "0 2px 12px rgba(200,90,42,0.06)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="font-heading text-3xl font-semibold leading-none"
                  style={{ color: CREAM_MUTED }}
                >
                  {s.num}
                </span>
                <div
                  className="flex size-9 items-center justify-center rounded-xl"
                  style={{ background: CREAM_MUTED }}
                >
                  {s.icon}
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold leading-snug" style={{ color: CHARCOAL }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B5347" }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-xl px-6 py-4 text-center"
          style={{ background: CREAM_MUTED }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
        >
          <p className="font-medium" style={{ color: CHARCOAL }}>
            No sales call. No enterprise contract. Just a QR code in your window.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

function Slide4() {
  const bullets = [
    "Self-guided tour market +26% YoY",
    "246K monthly city walking tour searches",
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: TERRACOTTA }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: "rgba(253,246,238,0.65)" }}>
            Market Size
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CREAM }}
          >
            $37.96B market, growing fast.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {[
            { label: "Total Addressable Market", value: "$37.96B" },
            { label: "Serviceable Addressable Market", value: "$2.4B" },
            { label: "Serviceable Obtainable Market", value: "$30M" },
          ].map((m, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-2xl px-6 py-5"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <span
                className="font-heading text-3xl font-semibold leading-none tracking-tight sm:text-4xl"
                style={{ color: CREAM }}
              >
                {m.value}
              </span>
              <span className="text-sm font-medium" style={{ color: "rgba(253,246,238,0.75)" }}>
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          {bullets.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <TrendingUp size={16} color={CREAM} style={{ opacity: 0.8 }} />
              <span className="text-base" style={{ color: "rgba(253,246,238,0.9)" }}>
                {b}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function Slide5() {
  const checks = [
    "Full product live and shipping",
    "15 pages built — business tools, route builder, analytics",
    "Free trial → $99/mo Growth → $299/mo Pro",
    "BID dashboard included on Pro tier",
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CREAM }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            Traction
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CHARCOAL }}
          >
            Live. Working. Ready to scale.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {checks.map((c, i) => (
            <CheckRow key={i}>{c}</CheckRow>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 rounded-2xl p-6"
          style={{
            background: "white",
            border: "1px solid #E8D5C4",
            boxShadow: "0 2px 12px rgba(200,90,42,0.06)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-xl"
              style={{ background: CREAM_MUTED }}
            >
              <Zap size={18} color={TERRACOTTA} />
            </div>
            <div>
              <p className="font-heading text-lg font-semibold" style={{ color: CHARCOAL }}>
                Launch target
              </p>
              <p className="text-sm" style={{ color: "#6B5347" }}>
                25 paying businesses signed up in Month 1
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Slide6() {
  const cols = [
    {
      icon: <QrCode size={20} color={TERRACOTTA} />,
      title: "Business Tools",
      items: ["QR code auto-generation", "Real-time check-in feeds", "Per-stop analytics"],
    },
    {
      icon: <Route size={20} color={TERRACOTTA} />,
      title: "Route Tools",
      items: ["Drag-and-drop builder", "Theme & branding controls", "Shareable public links"],
    },
    {
      icon: <BarChart3 size={20} color={TERRACOTTA} />,
      title: "Analytics",
      items: ["Check-in counts & trends", "Peak hour heatmaps", "BID-ready reporting"],
    },
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CREAM }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            Product
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CHARCOAL }}
          >
            Bulletin board energy.{" "}
            <span style={{ color: TERRACOTTA }}>Marketing platform power.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cols.map((col, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 rounded-2xl p-6"
              style={{
                background: "white",
                border: "1px solid #E8D5C4",
                boxShadow: "0 2px 12px rgba(200,90,42,0.06)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            >
              <div
                className="flex size-10 items-center justify-center rounded-xl"
                style={{ background: CREAM_MUTED }}
              >
                {col.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold" style={{ color: CHARCOAL }}>
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#6B5347" }}>
                    <ChevronRight size={14} color={TERRACOTTA} className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide7() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      note: "14-day trial",
      features: ["1 crawl route", "Basic QR", "Check-in feed"],
      featured: false,
    },
    {
      name: "Growth",
      price: "$99",
      note: "/mo",
      features: ["Unlimited routes", "Analytics dashboard", "Custom branding"],
      featured: true,
    },
    {
      name: "Pro",
      price: "$299",
      note: "/mo",
      features: ["Everything in Growth", "BID reporting suite", "White-label"],
      featured: false,
    },
  ]

  const economics = [
    { label: "LTV", value: "$990" },
    { label: "CAC", value: "<$15" },
    { label: "LTV:CAC", value: "66:1" },
    { label: "Payback", value: "<1 mo" },
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CREAM }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            Business Model
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CHARCOAL }}
          >
            SaaS with a BID multiplier.
          </h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col gap-3 rounded-2xl p-5"
              style={{
                background: plan.featured ? TERRACOTTA : "white",
                border: plan.featured
                  ? `2px solid ${TERRACOTTA}`
                  : "1px solid #E8D5C4",
                boxShadow: plan.featured
                  ? "0 8px 32px rgba(200,90,42,0.25)"
                  : "0 2px 12px rgba(200,90,42,0.06)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            >
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-semibold"
                  style={{ background: CHARCOAL, color: CREAM }}
                >
                  Most Popular
                </div>
              )}
              <p
                className="font-heading text-lg font-semibold"
                style={{ color: plan.featured ? CREAM : CHARCOAL }}
              >
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1">
                <span
                  className="font-heading text-3xl font-semibold"
                  style={{ color: plan.featured ? CREAM : TERRACOTTA }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm"
                  style={{ color: plan.featured ? "rgba(253,246,238,0.75)" : "#6B5347" }}
                >
                  {plan.note}
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: plan.featured ? "rgba(253,246,238,0.9)" : "#6B5347" }}
                  >
                    <Check
                      size={13}
                      color={plan.featured ? CREAM : TERRACOTTA}
                      strokeWidth={3}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 grid grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.45 }}
        >
          {economics.map((e, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 rounded-xl px-4 py-3 text-center"
              style={{ background: CREAM_MUTED }}
            >
              <span className="font-heading text-xl font-semibold" style={{ color: TERRACOTTA }}>
                {e.value}
              </span>
              <span className="text-xs font-medium" style={{ color: "#6B5347" }}>
                {e.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-4 rounded-xl px-5 py-3 text-center text-sm font-medium"
          style={{ background: "rgba(200,90,42,0.10)", color: CHARCOAL }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          BID multiplier: 1 BID director = 5–20 businesses onboarded at once
        </motion.div>
      </div>
    </div>
  )
}

function Slide8() {
  const competitors = ["Driftscape", "Scavify", "Eventbrite", "CrawlGuide"]
  const features = [
    { label: "Self-serve signup", vals: [false, false, false, true] },
    { label: "SMB-friendly pricing", vals: [false, false, false, true] },
    { label: "Recurring crawls", vals: [false, true, false, true] },
    { label: "Foot traffic data", vals: [false, false, false, true] },
    { label: "Live in 3 minutes", vals: [false, false, false, true] },
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CHARCOAL }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            Competition
          </p>
          <h2
            className="font-heading text-3xl font-semibold leading-tight sm:text-4xl"
            style={{ color: CREAM }}
          >
            Everyone serves the enterprise.{" "}
            <span style={{ color: TERRACOTTA }}>We serve the business owner.</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 overflow-hidden rounded-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.10)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Header row */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr repeat(4, minmax(0, 1fr))",
              background: "rgba(255,255,255,0.05)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-5 py-3" />
            {competitors.map((c, i) => (
              <div
                key={i}
                className="px-3 py-3 text-center text-sm font-semibold"
                style={{
                  color: c === "CrawlGuide" ? TERRACOTTA : "rgba(253,246,238,0.55)",
                }}
              >
                {c}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {features.map((row, ri) => (
            <div
              key={ri}
              className="grid"
              style={{
                gridTemplateColumns: "1fr repeat(4, minmax(0, 1fr))",
                borderBottom:
                  ri < features.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : undefined,
                background:
                  ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
              }}
            >
              <div
                className="px-5 py-3.5 text-sm"
                style={{ color: "rgba(253,246,238,0.75)" }}
              >
                {row.label}
              </div>
              {row.vals.map((val, vi) => (
                <div
                  key={vi}
                  className="flex items-center justify-center px-3 py-3.5"
                >
                  {val ? (
                    <div
                      className="flex size-6 items-center justify-center rounded-full"
                      style={{ background: "rgba(78,122,91,0.25)" }}
                    >
                      <Check size={12} color="#4E7A5B" strokeWidth={3} />
                    </div>
                  ) : (
                    <div
                      className="flex size-6 items-center justify-center rounded-full"
                      style={{ background: "rgba(220,38,38,0.15)" }}
                    >
                      <X size={12} color="#DC2626" strokeWidth={3} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function Slide9() {
  const phases = [
    {
      num: "01",
      name: "Seed",
      items: ["100 BID director outreach emails", "5 discovery conversations", "Define pilot offer"],
    },
    {
      num: "02",
      name: "Convert",
      items: ["1 free BID pilot secured", "10+ businesses onboarded", "Case study documented"],
    },
    {
      num: "03",
      name: "Amplify",
      items: ["Product Hunt launch", "100 paying businesses", "$9,900 MRR milestone"],
    },
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: TERRACOTTA }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: "rgba(253,246,238,0.65)" }}>
            Go-to-Market
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CREAM }}
          >
            BID directors are the multiplier.
          </h2>
        </motion.div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div
            className="absolute left-8 top-0 hidden h-full w-px sm:block"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />

          <div className="flex flex-col gap-8 sm:gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.45 }}
              >
                <div
                  className="relative z-10 flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <span
                    className="font-heading text-xs font-medium leading-none"
                    style={{ color: "rgba(253,246,238,0.65)" }}
                  >
                    Phase
                  </span>
                  <span
                    className="font-heading text-xl font-semibold leading-tight"
                    style={{ color: CREAM }}
                  >
                    {phase.num}
                  </span>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <p
                    className="font-heading text-xl font-semibold"
                    style={{ color: CREAM }}
                  >
                    {phase.name}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "rgba(253,246,238,0.85)" }}>
                        <div
                          className="size-1.5 shrink-0 rounded-full"
                          style={{ background: "rgba(253,246,238,0.5)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide10() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CREAM }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            Team & Ask
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CHARCOAL }}
          >
            Built by operators, not enterprise salespeople.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 rounded-2xl p-6"
          style={{
            background: "white",
            border: "1px solid #E8D5C4",
            boxShadow: "0 2px 12px rgba(200,90,42,0.06)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-start gap-5">
            <div
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl font-heading text-xl font-semibold"
              style={{ background: CREAM_MUTED, color: TERRACOTTA }}
            >
              AH
            </div>
            <div>
              <p className="font-heading text-xl font-semibold" style={{ color: CHARCOAL }}>
                Ash Hatef
              </p>
              <p className="text-sm font-medium" style={{ color: TERRACOTTA }}>
                CEO / Founder
              </p>
              <div className="mt-3 flex flex-col gap-1.5">
                {[
                  "Previously: Chime Stream B.V. — serial builder",
                  "Shipped Stravix + multiple AI/automation products",
                  "Bootstrapped, shipping fast, zero enterprise baggage",
                ].map((line, i) => (
                  <p key={i} className="flex items-start gap-2 text-sm" style={{ color: "#6B5347" }}>
                    <ChevronRight size={14} color={TERRACOTTA} className="mt-0.5 shrink-0" />
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 rounded-2xl p-6"
          style={{ background: CREAM_MUTED }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          <p className="font-heading text-lg font-semibold" style={{ color: CHARCOAL }}>
            What we're seeking
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <CheckRow>First 3 BID partnerships — pilot at no cost</CheckRow>
            <CheckRow>10 design partners shaping the roadmap</CheckRow>
            <CheckRow>Introductions to neighborhood association leads</CheckRow>
          </div>
          <div
            className="mt-4 rounded-lg px-4 py-2 text-sm font-medium"
            style={{ background: "rgba(200,90,42,0.12)", color: CHARCOAL }}
          >
            Bootstrapped. No runway pressure. Shipping fast.
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Slide11() {
  const cards = [
    {
      icon: <QrCode size={24} color={TERRACOTTA} />,
      title: "QR adoption is permanent",
      body: "52% of consumers scan QR codes monthly. The pandemic forced the habit. It stayed.",
    },
    {
      icon: <Users size={24} color={TERRACOTTA} />,
      title: "Support Local is a sustained movement",
      body: "Not a trend. Consumers actively seek out local businesses and shared neighborhood experiences.",
    },
    {
      icon: <BarChart3 size={24} color={TERRACOTTA} />,
      title: "SMBs burning out on social ROI",
      body: "Business owners are exhausted by vanity metrics. They want proof customers showed up.",
    },
  ]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-8"
      style={{ background: CREAM }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            Why Now
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CHARCOAL }}
          >
            Three tailwinds hit at once.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 rounded-2xl p-6"
              style={{
                background: "white",
                border: "1px solid #E8D5C4",
                boxShadow: "0 2px 12px rgba(200,90,42,0.06)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            >
              <div
                className="flex size-11 items-center justify-center rounded-xl"
                style={{ background: CREAM_MUTED }}
              >
                {card.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold leading-snug" style={{ color: CHARCOAL }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B5347" }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 rounded-2xl border-l-4 px-6 py-4"
          style={{ borderColor: TERRACOTTA, background: CREAM_MUTED }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
        >
          <p className="font-heading text-base font-semibold" style={{ color: CHARCOAL }}>
            The window
          </p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "#6B5347" }}>
            Enterprise tools exist at $30K/yr. The SMB-priced, self-serve alternative doesn't.{" "}
            <span className="font-semibold" style={{ color: TERRACOTTA }}>Yet.</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

function Slide12() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-8"
      style={{ background: CHARCOAL }}
    >
      {/* Large decorative accent circle */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full"
        style={{ background: TERRACOTTA, opacity: 0.12 }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full"
        style={{ background: TERRACOTTA, opacity: 0.08 }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase" style={{ color: TERRACOTTA }}>
            Vision
          </p>
          <h2
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl"
            style={{ color: CREAM }}
          >
            Every neighborhood has a crawl.{" "}
            <span style={{ color: TERRACOTTA }}>Every business has data.</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(200,90,42,0.3)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p
            className="font-heading text-3xl font-semibold leading-tight sm:text-4xl"
            style={{ color: TERRACOTTA }}
          >
            50,000 businesses.
            <br />
            500 cities.
            <br />
            One standard.
          </p>
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(253,246,238,0.65)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          From startup to infrastructure — the standard for how cities measure
          and promote their neighborhoods. Not just a crawl app. The platform
          cities run on.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
        >
          <div
            className="flex items-center gap-2 rounded-xl px-5 py-3"
            style={{ background: TERRACOTTA }}
          >
            <MapPin size={16} color={CREAM} fill={CREAM} />
            <span className="font-heading text-sm font-semibold" style={{ color: CREAM }}>
              crawlguide.com
            </span>
          </div>
          <span className="text-sm" style={{ color: "rgba(253,246,238,0.45)" }}>
            hello@crawlguide.com
          </span>
        </motion.div>
      </div>
    </div>
  )
}

// ─── Slide definitions ───────────────────────────────────────────────────────
const SLIDES = [
  { id: 1, component: Slide1 },
  { id: 2, component: Slide2 },
  { id: 3, component: Slide3 },
  { id: 4, component: Slide4 },
  { id: 5, component: Slide5 },
  { id: 6, component: Slide6 },
  { id: 7, component: Slide7 },
  { id: 8, component: Slide8 },
  { id: 9, component: Slide9 },
  { id: 10, component: Slide10 },
  { id: 11, component: Slide11 },
  { id: 12, component: Slide12 },
]

// ─── Main deck component ─────────────────────────────────────────────────────
export default function DeckPage() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = useCallback(
    (next: number) => {
      if (next < 0 || next >= SLIDES.length) return
      setDirection(next > current ? 1 : -1)
      setCurrent(next)
    },
    [current]
  )

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(current + 1)
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [current, go])

  const SlideComponent = SLIDES[current].component

  // Swipe detection
  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const { offset, velocity } = info
    if (offset.x < -60 || velocity.x < -300) {
      go(current + 1)
    } else if (offset.x > 60 || velocity.x > 300) {
      go(current - 1)
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" style={{ background: CHARCOAL }}>
      {/* Slide area */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Close button */}
      <Link
        href="/"
        className="absolute right-4 top-4 z-[60] flex size-9 items-center justify-center rounded-full transition-opacity hover:opacity-80"
        style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
        aria-label="Close presentation"
      >
        <X size={16} color="#fff" />
      </Link>

      {/* Slide counter */}
      <div
        className="absolute left-4 top-4 z-[60] rounded-full px-3 py-1 text-xs font-medium tabular-nums"
        style={{
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(8px)",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {current + 1} / {SLIDES.length}
      </div>

      {/* Dot navigation — fixed at bottom, never causes layout shift */}
      <div
        className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2"
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="transition-all duration-200 focus:outline-none"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className="rounded-full transition-all duration-200"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background:
                  i === current
                    ? TERRACOTTA
                    : "rgba(255,255,255,0.35)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Prev / next arrow hints on desktop */}
      {current > 0 && (
        <button
          onClick={() => go(current - 1)}
          className="absolute left-3 top-1/2 z-[60] hidden -translate-y-1/2 items-center justify-center rounded-full transition-opacity hover:opacity-80 md:flex"
          style={{
            width: 36,
            height: 36,
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Previous slide"
        >
          <ChevronRight size={16} color="#fff" className="rotate-180" />
        </button>
      )}
      {current < SLIDES.length - 1 && (
        <button
          onClick={() => go(current + 1)}
          className="absolute right-3 top-1/2 z-[60] hidden -translate-y-1/2 items-center justify-center rounded-full transition-opacity hover:opacity-80 md:flex"
          style={{
            width: 36,
            height: 36,
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Next slide"
        >
          <ChevronRight size={16} color="#fff" />
        </button>
      )}
    </div>
  )
}
