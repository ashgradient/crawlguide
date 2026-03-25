"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Footprints,
  Share2,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const routeData = {
  name: "Saturday Morning Coffee Crawl",
  theme: "Food & Drink",
  description:
    "Five of downtown's best coffee shops in one perfect morning walk. Start your Saturday with a cortado at Sip & Stroll, then wind through cozy side streets discovering roasters, pour-over bars, and a secret espresso counter tucked behind a bookshop. Each stop has its own vibe — from industrial chic to plant-filled patios — so you'll never feel like you're just doing the same thing twice.",
  totalCheckIns: 1248,
  minutes: 45,
  stopsCount: 5,
  stops: [
    {
      number: 1,
      name: "Sip & Stroll Coffee",
      slug: "sip-and-stroll-coffee",
      address: "101 Main St",
      duration: "10 min",
      checkIns: 312,
    },
    {
      number: 2,
      name: "Roast & Co.",
      slug: "roast-and-co",
      address: "115 Main St",
      duration: "8 min",
      checkIns: 287,
    },
    {
      number: 3,
      name: "The Pour House",
      slug: "the-pour-house",
      address: "203 Elm Ave",
      duration: "10 min",
      checkIns: 265,
    },
    {
      number: 4,
      name: "Bean Counter",
      slug: "bean-counter",
      address: "210 Elm Ave",
      duration: "8 min",
      checkIns: 198,
    },
    {
      number: 5,
      name: "Hidden Grounds",
      slug: "hidden-grounds",
      address: "312 Oak Ln",
      duration: "9 min",
      checkIns: 186,
    },
  ],
  leaderboard: [
    { rank: 1, name: "Jessica M.", checkIns: 14 },
    { rank: 2, name: "Tomás R.", checkIns: 11 },
    { rank: 3, name: "Priya K.", checkIns: 9 },
    { rank: 4, name: "Alex W.", checkIns: 7 },
    { rank: 5, name: "Samira D.", checkIns: 6 },
  ],
  stampProgress: [true, true, true, false, false],
};

export default function RouteDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              {routeData.name}
            </h1>
            <Badge className="bg-[#C85A2A]/10 text-[#C85A2A] border-transparent">
              {routeData.theme}
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Footprints className="size-4" />
              {routeData.totalCheckIns.toLocaleString()} total check-ins
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {routeData.minutes} min walk
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              {routeData.stopsCount} stops
            </span>
          </div>

          <p className="text-foreground/80 leading-relaxed max-w-2xl">
            {routeData.description}
          </p>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="rounded-2xl bg-muted/50 border border-border flex items-center justify-center min-h-[300px] sm:min-h-[400px] mb-10 relative"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <MapPin className="size-10 opacity-40" />
            <span className="text-sm">Route map with numbered pins</span>
          </div>
          {/* Numbered pins overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: "25%", left: "20%" },
              { top: "35%", left: "35%" },
              { top: "30%", left: "55%" },
              { top: "50%", left: "65%" },
              { top: "60%", left: "80%" },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute flex items-center justify-center size-8 rounded-full bg-[#C85A2A] text-white text-sm font-bold shadow-md"
                style={{ top: pos.top, left: pos.left }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stops list */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
            Stops
          </h2>
          <div className="space-y-3">
            {routeData.stops.map((stop, i) => (
              <motion.div
                key={stop.slug}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.3 }}
                className="rounded-2xl border border-border bg-card p-4 flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <div className="flex items-center justify-center size-10 rounded-full bg-[#C85A2A] text-white font-bold shrink-0">
                  {stop.number}
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/businesses/${stop.slug}`}
                    className="font-heading font-semibold text-foreground hover:text-[#C85A2A] transition-colors"
                  >
                    {stop.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">{stop.address}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {stop.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Footprints className="size-3" />
                      {stop.checkIns} check-ins
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="rounded-full w-fit shrink-0"
                >
                  <CheckCircle2 className="size-4" />
                  Check in here
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stamp collection */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
            Your Stamp Collection
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            {routeData.stampProgress.map((filled, i) => (
              <div
                key={i}
                className={`size-14 sm:size-16 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${
                  filled
                    ? "bg-[#C85A2A] border-[#C85A2A] text-white"
                    : "border-border bg-transparent text-muted-foreground"
                }`}
              >
                {filled ? (
                  <CheckCircle2 className="size-6" />
                ) : (
                  i + 1
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {routeData.stampProgress.filter(Boolean).length} of{" "}
            {routeData.stampProgress.length} stamps collected
          </p>
        </section>

        {/* Leaderboard */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
            Leaderboard
          </h2>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {routeData.leaderboard.map((entry, i) => (
              <div
                key={entry.rank}
                className={`flex items-center gap-3 px-4 py-3 ${
                  i !== routeData.leaderboard.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                <span className="text-sm font-bold text-muted-foreground w-6 text-center">
                  #{entry.rank}
                </span>
                <div className="size-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground shrink-0">
                  {entry.name.charAt(0)}
                </div>
                <span className="flex-1 text-sm font-medium text-foreground">
                  {entry.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {entry.checkIns} check-ins
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <Button
            size="lg"
            className="rounded-full w-full sm:w-auto px-8 text-base h-12 bg-[#C85A2A] hover:bg-[#A84520]"
          >
            Start This Route
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full w-full sm:w-auto px-6 h-12"
          >
            <Share2 className="size-4" />
            Share
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
