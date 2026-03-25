"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import {
  Building2,
  Route,
  QrCode,
  BarChart3,
  Award,
  Share2,
  MapPin,
  Smartphone,
  Monitor,
  Check,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration });
    }
  }, [isInView, value, duration, motionVal]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Fade-in wrapper                                                    */
/* ------------------------------------------------------------------ */
function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = 32;
  if (direction === "left") initial.x = -32;
  if (direction === "right") initial.x = 32;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */
export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="bg-[#FDF6EE] text-[#2C1810]">
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                             */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <FadeIn>
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F2DDD0] px-4 py-1.5 text-sm font-medium text-[#C85A2A]">
                  <MapPin className="h-4 w-4" /> QR check-ins for your whole block
                </span>
                <h1 className="font-heading text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
                  Turn your block into a destination.
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-[#6B5347]">
                  CrawlGuide turns neighboring businesses into curated walking routes
                  with QR check-ins. Foot traffic you can prove — data you can bring to
                  your landlord.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C85A2A] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#A84520]"
                  >
                    Start free — no card needed
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-1 rounded-full border border-[#E8D5C4] px-6 py-3.5 text-base font-medium transition-colors hover:bg-[#F2DDD0]"
                  >
                    See how it works
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right — device mock */}
            <FadeIn delay={0.2} direction="right">
              <div className="relative flex items-center justify-center">
                {/* Phone mock */}
                <div className="relative z-10 w-56 rounded-[2rem] border-4 border-[#2C1810] bg-white p-4 shadow-2xl">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#C85A2A]" />
                    <span className="text-[10px] font-medium tracking-wide text-[#6B5347]">
                      DOWNTOWN TACO CRAWL
                    </span>
                  </div>
                  <div className="space-y-3">
                    {["Taqueria Sol", "El Fuego Grill", "Casa Corn", "La Paleta"].map(
                      (name, i) => (
                        <div
                          key={name}
                          className="flex items-center gap-3 rounded-xl bg-[#FDF6EE] p-2.5"
                        >
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-full ${
                              i < 2
                                ? "bg-[#4E7A5B] text-white"
                                : "border-2 border-dashed border-[#E8D5C4] text-[#E8D5C4]"
                            }`}
                          >
                            {i < 2 ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <span className="text-xs font-bold">{i + 1}</span>
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-semibold">{name}</p>
                            <p className="text-[10px] text-[#6B5347]">
                              {i < 2 ? "Checked in" : "Not visited"}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Laptop mock */}
                <div className="absolute -right-4 top-8 z-0 w-64 rounded-xl border border-[#E8D5C4] bg-white p-4 shadow-xl md:-right-8">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wide text-[#6B5347]">
                      DASHBOARD
                    </span>
                    <span className="rounded-full bg-[#4E7A5B]/10 px-2 py-0.5 text-[10px] font-medium text-[#4E7A5B]">
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Check-ins today", val: "47" },
                      { label: "Unique visitors", val: "31" },
                      { label: "Completion rate", val: "68%" },
                      { label: "Avg. stops", val: "3.2" },
                    ].map(({ label, val }) => (
                      <div
                        key={label}
                        className="rounded-lg bg-[#FDF6EE] p-2 text-center"
                      >
                        <p className="text-lg font-bold text-[#C85A2A]">{val}</p>
                        <p className="text-[9px] text-[#6B5347]">{label}</p>
                      </div>
                    ))}
                  </div>
                  {/* Mini bar chart */}
                  <div className="mt-3 flex items-end gap-1">
                    {[40, 65, 55, 80, 70, 90, 60].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-[#C85A2A]/70"
                        style={{ height: `${h * 0.4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — PROBLEM                                          */}
      {/* ============================================================ */}
      <section className="bg-[#2C1810] py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center font-heading text-3xl font-semibold leading-snug text-[#FDF6EE] md:text-5xl">
              You&rsquo;re paying for attention. You deserve to measure foot traffic.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              "You boosted an Instagram post for $50. 200 likes. How many walked in? No idea.",
              "Your BID ran a holiday campaign. The newsletter mentioned your shop. Did anyone visit? Unknown.",
              "You organized a taco crawl with three neighbors. It was fun. Then the group chat died. No data. No follow-up.",
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="rounded-2xl border-l-4 border-[#C85A2A] bg-[#FDF6EE] p-6 shadow">
                  <p className="text-base leading-relaxed text-[#2C1810]">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — SOLUTION                                         */}
      {/* ============================================================ */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-semibold md:text-5xl">
              A crawl that&rsquo;s live before lunch.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Add your business",
                desc: "Enter your name, address, and hours. Drop a pin on the map and you're on the grid.",
              },
              {
                icon: Route,
                title: "Build a walking route",
                desc: "Drag and drop neighboring stops into a themed crawl. Coffee, tacos, vintage — your call.",
              },
              {
                icon: QrCode,
                title: "Print your QR poster",
                desc: "Download your poster, tape it to the window. Visitors scan and check in on their phone.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="relative rounded-2xl bg-white p-8 shadow transition-shadow hover:shadow-lg">
                  <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#C85A2A] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2DDD0]">
                    <Icon className="h-7 w-7 text-[#C85A2A]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B5347]">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — FEATURES (BENTO GRID)                            */}
      {/* ============================================================ */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-semibold md:text-5xl">
              Everything you need to turn walks into data.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Large card 1 */}
            <FadeIn className="md:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2DDD0]">
                  <QrCode className="h-7 w-7 text-[#C85A2A]" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    QR Check-In at Every Stop
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B5347]">
                    Visitors scan, you see who showed up. Real check-ins, not vanity
                    metrics.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Large card 2 */}
            <FadeIn delay={0.1} className="md:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2DDD0]">
                  <BarChart3 className="h-7 w-7 text-[#C85A2A]" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Real-Time Dashboard
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B5347]">
                    Watch check-ins tick up live. See peak days, popular stops, and route
                    performance.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Small cards */}
            {[
              {
                icon: Route,
                title: "Route Builder in Minutes",
                desc: "Drag, drop, done. Build a walking route with your neighboring businesses in under 5 minutes.",
              },
              {
                icon: Award,
                title: "Stamp Collection for Visitors",
                desc: "Visitors collect stamps at each stop. Gamified foot traffic that keeps them walking.",
              },
              {
                icon: Share2,
                title: "Shareable Link + QR Poster",
                desc: "One link for social. One poster for your window. Both drive real visits.",
              },
              {
                icon: Building2,
                title: "BID Management (Pro)",
                desc: "Manage every business in your district. One dashboard, one invoice, one report.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={i} delay={0.1 * (i + 2)} className="md:col-span-1">
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2DDD0]">
                    <Icon className="h-6 w-6 text-[#C85A2A]" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B5347]">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — HOW IT WORKS                                     */}
      {/* ============================================================ */}
      <section id="how-it-works" className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-semibold md:text-5xl">
              Three steps, then foot traffic.
            </h2>
          </FadeIn>

          <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
            {/* Dotted connector line — desktop only */}
            <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-12 hidden border-t-2 border-dashed border-[#E8D5C4] md:block" />

            {[
              {
                num: "1",
                title: "Add your business",
                desc: "Enter your details, drop a pin, get your QR code in under 2 minutes.",
              },
              {
                num: "2",
                title: "Build or join a crawl",
                desc: "Create a themed walking route with neighboring businesses or join an existing one.",
              },
              {
                num: "3",
                title: "Put up your poster",
                desc: "Print the QR poster, tape it to your window. Check-ins start immediately.",
              },
            ].map(({ num, title, desc }, i) => (
              <FadeIn
                key={i}
                delay={i * 0.25}
                direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
              >
                <div className="relative flex flex-col items-center text-center md:px-8">
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C85A2A] text-xl font-bold text-white shadow-lg">
                    {num}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-[#6B5347]">
                    {desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — SOCIAL PROOF                                     */}
      {/* ============================================================ */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "We ran a coffee crawl with four shops on our block. CrawlGuide showed us exactly who visited each stop. Our landlord finally believes we drive foot traffic.",
                name: "Maria Chen",
                role: "Owner, Sip & Stroll Coffee",
              },
              {
                quote:
                  "I manage 30 businesses in our BID. Before CrawlGuide, I had no way to prove our walking tours worked. Now I have the data for every grant application.",
                name: "David Park",
                role: "Executive Director, Downtown Arts District BID",
              },
              {
                quote:
                  "The stamp collection thing is genius. Customers actually walk to all five stops just to complete their card. We've never seen engagement like this from a walking tour.",
                name: "Sofia Reyes",
                role: "Owner, Botanica Gift Shop",
              },
            ].map(({ quote, name, role }, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow">
                  <p className="mb-6 text-base italic leading-relaxed text-[#2C1810]">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-[#6B5347]">{role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Stats bar */}
          <FadeIn>
            <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl bg-[#2C1810] p-8 text-center text-[#FDF6EE] md:grid-cols-4">
              {[
                { value: 500, suffix: "+", label: "businesses" },
                { value: 12000, suffix: "+", label: "check-ins" },
                { value: 89, suffix: "", label: "active crawls" },
                { value: 4.8, suffix: "/5", label: "rating", isDecimal: true },
              ].map(({ value, suffix, label, isDecimal }, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold md:text-4xl">
                    {isDecimal ? (
                      "4.8/5"
                    ) : (
                      <AnimatedNumber value={value} suffix={suffix} />
                    )}
                  </p>
                  <p className="mt-1 text-sm text-[#F2DDD0]">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — PRICING                                          */}
      {/* ============================================================ */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-semibold md:text-5xl">
              Sized for small businesses, not enterprise budgets.
            </h2>
          </FadeIn>

          {/* Toggle */}
          <FadeIn>
            <div className="mt-10 flex items-center justify-center gap-3">
              <span
                className={`text-sm font-medium ${
                  billingPeriod === "monthly" ? "text-[#2C1810]" : "text-[#6B5347]"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingPeriod((p) => (p === "monthly" ? "annual" : "monthly"))
                }
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  billingPeriod === "annual" ? "bg-[#C85A2A]" : "bg-[#E8D5C4]"
                }`}
                aria-label="Toggle billing period"
              >
                <span
                  className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                    billingPeriod === "annual" ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  billingPeriod === "annual" ? "text-[#2C1810]" : "text-[#6B5347]"
                }`}
              >
                Annual
              </span>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Free Trial */}
            <FadeIn>
              <div className="flex h-full flex-col rounded-2xl bg-[#FDF6EE] p-8 shadow">
                <h3 className="text-lg font-semibold">Free Trial</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-sm text-[#6B5347]">/ 14 days</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-[#6B5347]">
                  {[
                    "1 route",
                    "5 stops",
                    "Basic QR codes",
                    "Check-in tracking",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4E7A5B]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="mt-8 block rounded-full border border-[#C85A2A] py-3 text-center font-semibold text-[#C85A2A] transition-colors hover:bg-[#C85A2A] hover:text-white"
                >
                  Start free trial
                </Link>
              </div>
            </FadeIn>

            {/* Growth */}
            <FadeIn delay={0.1}>
              <div className="relative flex h-full flex-col rounded-2xl border-t-4 border-[#C85A2A] bg-white p-8 shadow-xl">
                <span className="absolute -top-4 right-6 rounded-full bg-[#C85A2A] px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
                <h3 className="text-lg font-semibold">Growth</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${billingPeriod === "monthly" ? "99" : "79"}
                  </span>
                  <span className="text-sm text-[#6B5347]">/mo</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-[#6B5347]">
                  {[
                    "Unlimited routes",
                    "20 stops per route",
                    "Analytics dashboard",
                    "Custom branding",
                    "Shareable links",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4E7A5B]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="mt-8 block rounded-full bg-[#C85A2A] py-3 text-center font-semibold text-white transition-colors hover:bg-[#A84520]"
                >
                  Start with Growth
                </Link>
              </div>
            </FadeIn>

            {/* Pro */}
            <FadeIn delay={0.2}>
              <div className="flex h-full flex-col rounded-2xl bg-[#2C1810] p-8 text-[#FDF6EE] shadow">
                <h3 className="text-lg font-semibold">Pro</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${billingPeriod === "monthly" ? "299" : "249"}
                  </span>
                  <span className="text-sm text-[#F2DDD0]">/mo</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-[#F2DDD0]">
                  {[
                    "Everything in Growth",
                    "BID management",
                    "CSV export",
                    "Priority support",
                    "Custom domain",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4E7A5B]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="mt-8 block rounded-full bg-[#FDF6EE] py-3 text-center font-semibold text-[#C85A2A] transition-colors hover:bg-[#F2DDD0]"
                >
                  Contact sales
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — FAQ                                              */}
      {/* ============================================================ */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-semibold md:text-5xl">
              Questions? We&rsquo;ve got answers.
            </h2>
          </FadeIn>

          <FadeIn>
            <Accordion className="mt-12">
              {[
                {
                  q: "Do visitors need to download an app?",
                  a: "No. CrawlGuide is entirely web-based. Visitors scan a QR code and check in through their mobile browser. No app download, no friction.",
                },
                {
                  q: "Can my business join multiple routes?",
                  a: "Yes. Your business can be a stop on as many routes as you like. Each route tracks check-ins independently.",
                },
                {
                  q: "What's the difference between Growth and Pro?",
                  a: "Growth is for individual businesses that want analytics and branding. Pro is for BIDs and organizations managing multiple businesses with reporting, CSV export, and priority support.",
                },
                {
                  q: "Can I use CrawlGuide for one-time events?",
                  a: "Absolutely. Create a route for your weekend food crawl, art walk, or holiday event. Pause or archive it when you're done.",
                },
                {
                  q: "What visitor data do you collect?",
                  a: "We collect check-in timestamps and optional email addresses. No tracking, no selling data. Full details in our privacy policy.",
                },
                {
                  q: "Does CrawlGuide replace our BID's existing software?",
                  a: "CrawlGuide complements your existing tools. It focuses specifically on foot traffic attribution — something most BID platforms don't measure.",
                },
              ].map(({ q, a }, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#6B5347]">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — FINAL CTA                                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#C85A2A] py-14 md:py-24">
        {/* Dot grid overlay — white dots */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold leading-snug text-[#FDF6EE] md:text-5xl">
              Your next regular customer is already walking by.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Start your free crawl in under 10 minutes. No credit card. No app
              download. Just foot traffic you can prove.
            </p>
            <div className="mt-10">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#C85A2A] shadow-lg transition-colors hover:bg-[#FDF6EE]"
              >
                Start your free crawl
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
