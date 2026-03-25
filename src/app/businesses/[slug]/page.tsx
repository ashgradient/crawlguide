"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ArrowLeft, Clock, Tag } from "lucide-react"

const mockBusiness = {
  name: "Sip & Stroll Coffee",
  address: "123 Main Street, Downtown",
  category: "Coffee & Tea",
  description:
    "A neighborhood favorite serving single-origin pour-overs and house-made pastries. Family-owned since 2018, Sip & Stroll is where locals start their morning and visitors discover the heart of Downtown.",
  hours: "Mon-Fri 7am-6pm, Sat-Sun 8am-5pm",
}

const routeStops = [
  { name: "Bloom Florals", done: true },
  { name: "The Bread Basket", done: true },
  { name: "Sip & Stroll Coffee", done: false, current: true },
  { name: "Vintage & Vine", done: false },
  { name: "Corner Bookshop", done: false },
]

function ConfettiDot({ index }: { index: number }) {
  const angle = (index / 8) * Math.PI * 2
  const distance = 60 + Math.random() * 40
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 size-3 rounded-full bg-[#C85A2A]"
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        opacity: 0,
        scale: 0,
      }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    />
  )
}

export default function BusinessCheckInPage() {
  const [checkedIn, setCheckedIn] = useState(false)

  return (
    <div className="min-h-screen bg-[#FDF6EE]">
      {/* Above the fold */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#F2DDD0] px-4 py-1.5 text-sm font-medium text-[#2C1810]">
          <Tag className="size-3.5" />
          {mockBusiness.category}
        </span>

        <h1 className="font-heading text-4xl font-semibold text-[#2C1810] sm:text-5xl">
          {mockBusiness.name}
        </h1>

        <p className="mt-3 flex items-center gap-1.5 text-[#6B5347]">
          <MapPin className="size-4" />
          {mockBusiness.address}
        </p>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            {!checkedIn ? (
              <motion.button
                key="checkin-btn"
                onClick={() => setCheckedIn(true)}
                className="rounded-full bg-[#C85A2A] px-12 py-6 text-xl font-semibold text-white transition-colors hover:bg-[#A84520]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Check In Here
              </motion.button>
            ) : (
              <motion.div
                key="checkedin"
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Stamp circle */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="flex size-28 items-center justify-center rounded-full bg-[#C85A2A]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    {/* Checkmark */}
                    <motion.svg
                      viewBox="0 0 24 24"
                      className="size-14 text-white"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <motion.path
                        d="M5 13l4 4L19 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      />
                    </motion.svg>
                  </motion.div>

                  {/* Confetti dots */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <ConfettiDot key={i} index={i} />
                  ))}
                </div>

                <motion.p
                  className="mt-6 font-heading text-2xl font-semibold text-[#2C1810]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Checked in!
                </motion.p>
                <motion.p
                  className="mt-1 text-[#6B5347]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Stamp collected for {mockBusiness.name}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Route progress stamps */}
        <div className="mt-16">
          <p className="mb-4 text-sm font-medium text-[#6B5347]">
            Route Progress
          </p>
          <div className="flex items-center gap-3">
            {routeStops.map((stop, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`flex size-12 items-center justify-center rounded-full border-2 transition-all ${
                    stop.done || (stop.current && checkedIn)
                      ? "border-[#C85A2A] bg-[#C85A2A] text-white"
                      : stop.current
                        ? "border-[#C85A2A] bg-[#FDF6EE] text-[#C85A2A]"
                        : "border-[#E8D5C4] bg-[#FDF6EE] text-[#E8D5C4]"
                  }`}
                >
                  {stop.done || (stop.current && checkedIn) ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium">{i + 1}</span>
                  )}
                </div>
                <span className="max-w-16 text-center text-xs text-[#6B5347]">
                  {stop.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Below the fold — business info */}
      <section className="border-t border-[#E8D5C4] bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold text-[#2C1810]">
            About {mockBusiness.name}
          </h2>
          <p className="mt-4 leading-relaxed text-[#6B5347]">
            {mockBusiness.description}
          </p>

          <div className="mt-8 flex items-center gap-2 text-[#6B5347]">
            <Clock className="size-4" />
            <span className="text-sm">{mockBusiness.hours}</span>
          </div>

          <div className="mt-8">
            <Link
              href="/routes"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C85A2A] transition-colors hover:text-[#A84520]"
            >
              <ArrowLeft className="size-4" />
              Back to route
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
