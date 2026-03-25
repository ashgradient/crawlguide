"use client"

import Link from "next/link"
import {
  QrCode,
  TrendingUp,
  Route,
  Award,
  Clock,
  Plus,
  Download,
  BarChart3,
  Share2,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// ── Mock data ──────────────────────────────────────────────

const chartData = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  checkins: Math.round(8 + i * 0.4 + Math.sin(i * 0.7) * 5 + Math.random() * 3),
}))

const statCards = [
  { label: "Check-ins This Week", value: "147", icon: QrCode },
  { label: "Peak Day", value: "Saturday", icon: TrendingUp },
  { label: "Active Routes", value: "3", icon: Route },
  { label: "Leaderboard Rank", value: "#4", icon: Award },
] as const

const routes = [
  {
    name: "Saturday Morning Coffee Crawl",
    theme: "food",
    themeLabel: "Food",
    stops: 5,
    checkins: 89,
  },
  {
    name: "Arts District Gallery Walk",
    theme: "art",
    themeLabel: "Art",
    stops: 4,
    checkins: 67,
  },
  {
    name: "Historic Main Street Tour",
    theme: "history",
    themeLabel: "History",
    stops: 6,
    checkins: 45,
  },
] as const

const themeColors: Record<string, { bg: string; text: string }> = {
  food: { bg: "bg-[#C85A2A]/10", text: "text-[#C85A2A]" },
  art: { bg: "bg-[#4E7A5B]/10", text: "text-[#4E7A5B]" },
  history: { bg: "bg-amber-100", text: "text-amber-700" },
}

const activities = [
  { text: "New check-in at Sip & Stroll Coffee", time: "2 minutes ago" },
  { text: "Maria completed the Coffee Crawl route", time: "15 minutes ago" },
  { text: "New check-in at Botanica Gift Shop", time: "1 hour ago" },
  {
    text: "Route 'Arts District Walk' was shared via link",
    time: "3 hours ago",
  },
  { text: "New check-in at The Bread Basket", time: "5 hours ago" },
]

// ── Sparkline ──────────────────────────────────────────────

function Sparkline() {
  const points = [4, 7, 5, 9, 6, 11, 8, 13, 10, 15]
  const w = 64
  const h = 20
  const maxVal = Math.max(...points)
  const d = points
    .map((v, i) => {
      const x = (i / (points.length - 1)) * w
      const y = h - (v / maxVal) * h
      return `${i === 0 ? "M" : "L"}${x},${y}`
    })
    .join(" ")

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-5 w-16"
      fill="none"
      stroke="#C85A2A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  )
}

// ── Page ───────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FDF6EE]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-semibold text-[#2C1810]">
            Dashboard
          </h1>
          <p className="mt-1 text-[#6B5347]">
            Welcome back! Here&apos;s how your business is performing.
          </p>
        </div>

        {/* ── Stat Cards ── */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E8D5C4]"
              style={{ borderTop: "3px solid #C85A2A" }}
            >
              <div className="mb-3 flex items-center justify-between">
                <card.icon className="size-5 text-[#C85A2A]" />
                <Sparkline />
              </div>
              <p className="text-xs font-medium text-[#6B5347]">{card.label}</p>
              <p className="mt-1 font-heading font-mono text-5xl text-[#2C1810]">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── Check-in Chart ── */}
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E8D5C4] sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-heading text-lg font-semibold text-[#2C1810]">
              Check-in Trends
            </h2>
            <Tabs defaultValue="30d">
              <TabsList>
                <TabsTrigger value="7d">7d</TabsTrigger>
                <TabsTrigger value="30d">30d</TabsTrigger>
                <TabsTrigger value="90d">90d</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
              >
                <defs>
                  <linearGradient
                    id="checkinGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#C85A2A" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#C85A2A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#E8D5C4"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 11, fill: "#6B5347" }}
                  tickLine={false}
                  axisLine={false}
                  interval={6}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B5347" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #E8D5C4",
                    background: "#fff",
                    fontSize: "13px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="checkins"
                  stroke="#C85A2A"
                  strokeWidth={2}
                  fill="url(#checkinGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ── Active Routes ── */}
        <div className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-semibold text-[#2C1810]">
            Active Routes
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {routes.map((route) => {
              const color = themeColors[route.theme]
              return (
                <div
                  key={route.name}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E8D5C4]"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="font-medium text-[#2C1810]">{route.name}</h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${color.bg} ${color.text}`}
                    >
                      {route.themeLabel}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-[#6B5347]">
                    <span>{route.stops} stops</span>
                    <span>{route.checkins} check-ins</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Recent Activity ── */}
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E8D5C4] sm:p-6">
          <h2 className="mb-4 font-heading text-lg font-semibold text-[#2C1810]">
            Recent Activity
          </h2>
          <ul className="divide-y divide-[#E8D5C4]">
            {activities.map((a, i) => (
              <li key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                <Clock className="mt-0.5 size-4 shrink-0 text-[#C85A2A]" />
                <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm text-[#2C1810]">{a.text}</span>
                  <span className="text-xs text-[#6B5347]">{a.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Quick Actions ── */}
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E8D5C4] sm:p-6">
          <h2 className="mb-4 font-heading text-lg font-semibold text-[#2C1810]">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              className="h-10 gap-2 rounded-full bg-[#C85A2A] text-white hover:bg-[#A84520]"
              render={<Link href="/routes/create" />}
            >
              <Plus className="size-4" />
              Create New Route
            </Button>
            <Button variant="outline" className="h-10 gap-2 rounded-full">
              <Download className="size-4" />
              Download QR Poster
            </Button>
            <Button variant="outline" className="h-10 gap-2 rounded-full">
              <BarChart3 className="size-4" />
              View Analytics
            </Button>
            <Button variant="outline" className="h-10 gap-2 rounded-full">
              <Share2 className="size-4" />
              Share Route
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
