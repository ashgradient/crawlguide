"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Check, Download, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const steps = ["Create Account", "Add Your Business", "Your QR Code"] as const

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center">
          {i > 0 && (
            <div
              className={`h-0.5 w-8 sm:w-12 ${
                i <= current ? "bg-[#C85A2A]" : "bg-[#E8D5C4]"
              }`}
            />
          )}
          <div className="flex flex-col items-center gap-1">
            <div
              className={`flex size-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                i < current
                  ? "bg-[#C85A2A] text-white"
                  : i === current
                    ? "bg-[#C85A2A] text-white"
                    : "bg-[#F2DDD0] text-[#6B5347]"
              }`}
            >
              {i < current ? <Check className="size-4" /> : i + 1}
            </div>
            <span className="hidden text-xs font-medium text-[#6B5347] sm:block">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function QrCodeGrid() {
  // 7x7 stylized grid
  const pattern = [
    [1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1],
  ]

  return (
    <div className="mx-auto grid w-fit grid-cols-7 gap-1.5">
      {pattern.flat().map((filled, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: filled ? 1 : 0,
            opacity: filled ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.02,
          }}
          className="size-6 rounded-sm bg-[#C85A2A] sm:size-8"
        />
      ))}
    </div>
  )
}

export default function SignupPage() {
  const [step, setStep] = useState(0)

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[#FDF6EE] px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Step indicator */}
        <div className="mb-8">
          <StepIndicator current={step} />
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E8D5C4] sm:p-8">
          <AnimatePresence mode="wait">
            {/* ──── Step 1 ──── */}
            {step === 0 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="mb-1 font-heading text-xl font-semibold text-[#2C1810]">
                  Create Account
                </h2>
                <p className="mb-6 text-sm text-[#6B5347]">
                  Get started with CrawlGuide in seconds.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      placeholder="Jane Smith"
                      className="h-10 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-10 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      className="h-10 rounded-full"
                    />
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-[#E8D5C4]" />
                    <span className="text-xs text-[#6B5347]">or</span>
                    <span className="h-px flex-1 bg-[#E8D5C4]" />
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 rounded-full"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mr-2 size-4"
                      aria-hidden
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Or sign up with Google
                  </Button>
                </form>
              </motion.div>
            )}

            {/* ──── Step 2 ──── */}
            {step === 1 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="mb-1 font-heading text-xl font-semibold text-[#2C1810]">
                  Add Your Business
                </h2>
                <p className="mb-6 text-sm text-[#6B5347]">
                  Tell us about your business so we can get you set up.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="biz-name">Business name</Label>
                    <Input
                      id="biz-name"
                      placeholder="Sip & Stroll Coffee"
                      className="h-10 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="biz-address">Address</Label>
                    <Input
                      id="biz-address"
                      placeholder="123 Main St, Portland, OR"
                      className="h-10 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label>Category</Label>
                    <Select defaultValue="">
                      <SelectTrigger className="h-10 w-full rounded-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cafe">Cafe / Coffee Shop</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="retail">Retail Shop</SelectItem>
                        <SelectItem value="gallery">Art Gallery</SelectItem>
                        <SelectItem value="bar">Bar / Brewery</SelectItem>
                        <SelectItem value="bakery">Bakery</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="biz-desc">Description</Label>
                    <textarea
                      id="biz-desc"
                      rows={3}
                      placeholder="A cozy neighborhood coffee shop with house-roasted beans..."
                      className="w-full rounded-2xl border border-[#E8D5C4] bg-transparent px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-[#6B5347]/60 focus-visible:border-[#C85A2A] focus-visible:ring-3 focus-visible:ring-[#C85A2A]/20"
                    />
                  </div>

                  {/* Map placeholder */}
                  <div className="flex h-40 items-center justify-center gap-2 rounded-2xl bg-[#F2DDD0]/50 text-sm text-[#6B5347]">
                    <MapPin className="size-5" />
                    Map preview
                  </div>
                </form>
              </motion.div>
            )}

            {/* ──── Step 3 ──── */}
            {step === 2 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <h2 className="mb-1 font-heading text-xl font-semibold text-[#2C1810]">
                  Your QR Code
                </h2>
                <p className="mb-8 text-sm text-[#6B5347]">
                  Print this poster and display it at your business. Customers
                  scan to check in!
                </p>

                {/* QR code animation */}
                <div className="mb-8 rounded-2xl border border-[#E8D5C4] bg-white p-6">
                  <QrCodeGrid />
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <Button className="h-10 flex-1 gap-2 rounded-full bg-[#C85A2A] text-white hover:bg-[#A84520]">
                    <Download className="size-4" />
                    Download QR Poster
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 flex-1 gap-2 rounded-full"
                    render={<Link href="/dashboard" />}
                  >
                    Go to Dashboard
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step < 2 && (
            <div className="mt-6 flex items-center justify-between">
              <Button
                variant="ghost"
                className="h-10 gap-1.5 rounded-full"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                <ArrowLeft className="size-4" />
                Back
              </Button>
              <Button
                className="h-10 gap-1.5 rounded-full bg-[#C85A2A] text-white hover:bg-[#A84520]"
                onClick={() => setStep((s) => Math.min(2, s + 1))}
              >
                Next
                <ArrowRight className="size-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="mt-4 flex justify-center">
              <Button
                variant="ghost"
                className="h-10 gap-1.5 rounded-full"
                onClick={() => setStep(1)}
              >
                <ArrowLeft className="size-4" />
                Back
              </Button>
            </div>
          )}
        </div>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-[#6B5347]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#C85A2A] hover:text-[#A84520]"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
