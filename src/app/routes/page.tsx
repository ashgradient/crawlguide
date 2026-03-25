"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Footprints, Map, List } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const themeColors: Record<string, { bg: string; text: string }> = {
  food: { bg: "bg-[#C85A2A]/10", text: "text-[#C85A2A]" },
  art: { bg: "bg-[#4E7A5B]/10", text: "text-[#4E7A5B]" },
  history: { bg: "bg-[#B8860B]/10", text: "text-[#B8860B]" },
  nightlife: { bg: "bg-[#6B21A8]/10", text: "text-[#6B21A8]" },
  shopping: { bg: "bg-[#8B6914]/10", text: "text-[#8B6914]" },
};

const routes = [
  {
    slug: "saturday-morning-coffee-crawl",
    name: "Saturday Morning Coffee Crawl",
    theme: "food",
    themeLabel: "Food & Drink",
    description:
      "Five of downtown's best coffee shops in one perfect morning walk.",
    checkIns: 23,
    minutes: 45,
    stops: 5,
    creator: "Sip & Stroll Coffee",
  },
  {
    slug: "arts-district-gallery-walk",
    name: "Arts District Gallery Walk",
    theme: "art",
    themeLabel: "Art & Culture",
    description:
      "Four galleries showcasing local artists, from contemporary to street art.",
    checkIns: 15,
    minutes: 35,
    stops: 4,
    creator: "Downtown Arts District BID",
  },
  {
    slug: "historic-main-street-tour",
    name: "Historic Main Street Tour",
    theme: "history",
    themeLabel: "History",
    description:
      "Walk through 150 years of architecture and stories on Main Street.",
    checkIns: 8,
    minutes: 60,
    stops: 6,
    creator: "Heritage Books",
  },
  {
    slug: "taco-tuesday-trail",
    name: "Taco Tuesday Trail",
    theme: "food",
    themeLabel: "Food & Drink",
    description:
      "Three taquerias, one mission: find the best taco on the block.",
    checkIns: 31,
    minutes: 25,
    stops: 3,
    creator: "Casa del Sol",
  },
  {
    slug: "boutique-shopping-loop",
    name: "Boutique Shopping Loop",
    theme: "shopping",
    themeLabel: "Shopping",
    description: "Curated indie shops for fashion, home, and gifts.",
    checkIns: 12,
    minutes: 40,
    stops: 5,
    creator: "Botanica Gift Shop",
  },
  {
    slug: "sunset-wine-walk",
    name: "Sunset Wine Walk",
    theme: "food",
    themeLabel: "Food & Drink",
    description:
      "Four wine bars and a rooftop finish as the sun goes down.",
    checkIns: 19,
    minutes: 50,
    stops: 4,
    creator: "Vine & Barrel",
  },
];

function RouteCard({
  route,
  index,
}: {
  route: (typeof routes)[0];
  index: number;
}) {
  const colors = themeColors[route.theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
    >
      <Link href={`/routes/${route.slug}`} className="block group">
        <div className="rounded-2xl border border-border bg-card p-4 transition-all duration-200 group-hover:shadow-lg group-hover:border-[#C85A2A]/40">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
              {route.name}
            </h3>
            <Badge
              className={`${colors.bg} ${colors.text} border-transparent shrink-0`}
            >
              {route.themeLabel}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {route.description}
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span className="flex items-center gap-1">
              <Footprints className="size-3.5" />
              {route.checkIns} check-ins today
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
              {route.minutes} min walk
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" />
              {route.stops} stops
            </span>
          </div>

          <p className="text-xs text-muted-foreground/70">
            by {route.creator}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function RoutesPage() {
  const [mobileView, setMobileView] = useState<"map" | "list">("list");
  const [activeTab, setActiveTab] = useState("all");

  const filteredRoutes =
    activeTab === "all"
      ? routes
      : activeTab === "food"
        ? routes.filter((r) => r.theme === "food")
        : activeTab === "art"
          ? routes.filter((r) => r.theme === "art")
          : activeTab === "history"
            ? routes.filter((r) => r.theme === "history")
            : routes;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Discover Walking Routes
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Find curated crawls near you — food tours, art walks, historic
            strolls, and more.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={(val) => setActiveTab(val as string)}
          className="mb-6"
        >
          <TabsList
            variant="line"
            className="flex-wrap gap-1"
          >
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="near-me">Near Me</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="food">Food &amp; Drink</TabsTrigger>
            <TabsTrigger value="art">Art &amp; Culture</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Shared content for all tabs */}
          <TabsContent value={activeTab}>
            {/* Mobile view toggle */}
            <div className="flex justify-end mb-4 lg:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setMobileView(mobileView === "map" ? "list" : "map")
                }
                className="rounded-full gap-1.5"
              >
                {mobileView === "map" ? (
                  <>
                    <List className="size-4" />
                    Show List
                  </>
                ) : (
                  <>
                    <Map className="size-4" />
                    Show Map
                  </>
                )}
              </Button>
            </div>

            {/* Desktop: side by side / Mobile: toggle */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Map placeholder */}
              <div
                className={`${
                  mobileView === "list" ? "hidden lg:flex" : "flex"
                } lg:w-[60%] rounded-2xl bg-muted/50 border border-border items-center justify-center min-h-[400px] lg:min-h-[600px]`}
              >
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <MapPin className="size-10 opacity-40" />
                  <span className="text-sm">Map — routes appear here</span>
                </div>
              </div>

              {/* Route cards */}
              <div
                className={`${
                  mobileView === "map" ? "hidden lg:block" : "block"
                } lg:w-[40%] space-y-4`}
              >
                {filteredRoutes.map((route, i) => (
                  <RouteCard key={route.slug} route={route} index={i} />
                ))}
                {filteredRoutes.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-12">
                    No routes found for this filter.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
