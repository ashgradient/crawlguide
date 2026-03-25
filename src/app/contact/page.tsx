"use client"

import { Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const subjects = [
  "General Inquiry",
  "Technical Support",
  "BID Partnership",
  "Feature Request",
  "Other",
]

export default function ContactPage() {
  return (
    <div className="bg-[#FDF6EE]">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-[#2C1810] sm:text-4xl lg:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-[#6B5347]">
            Have a question, want to partner, or need help? We respond within 24
            hours.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2C1810]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="h-10 rounded-lg border-[#E8D5C4] bg-[#FDF6EE]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-[#2C1810]">
                    Business Name
                  </Label>
                  <Input
                    id="business"
                    placeholder="Your business"
                    className="h-10 rounded-lg border-[#E8D5C4] bg-[#FDF6EE]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#2C1810]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-10 rounded-lg border-[#E8D5C4] bg-[#FDF6EE]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[#2C1810]">Subject</Label>
                <Select defaultValue="General Inquiry">
                  <SelectTrigger className="h-10 w-full rounded-lg border-[#E8D5C4] bg-[#FDF6EE]">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2C1810]">
                  Message
                </Label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-[#E8D5C4] bg-[#FDF6EE] px-3 py-2 text-sm text-[#2C1810] outline-none transition-colors placeholder:text-[#6B5347]/50 focus-visible:border-[#C85A2A] focus-visible:ring-3 focus-visible:ring-[#C85A2A]/20"
                />
              </div>

              <Button className="rounded-full bg-[#C85A2A] px-8 py-3 text-sm font-medium text-white hover:bg-[#A84520]">
                Send Message
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-2xl border border-[#E8D5C4] bg-white p-8 shadow-sm">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#F2DDD0]">
                <Mail className="size-5 text-[#C85A2A]" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#2C1810]">
                BID Partnerships
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B5347]">
                Managing a Business Improvement District? We offer custom plans
                for BIDs with 10+ businesses. Let&apos;s talk.
              </p>
              <a
                href="mailto:partnerships@crawlguide.com"
                className="mt-4 inline-block text-sm font-medium text-[#C85A2A] transition-colors hover:text-[#A84520]"
              >
                partnerships@crawlguide.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
