"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/routes", label: "Routes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-[#FDF6EE]/80 shadow-sm backdrop-blur-md"
          : "bg-[#FDF6EE]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-heading text-xl font-semibold text-[#C85A2A]"
        >
          CrawlGuide
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2C1810] transition-colors hover:text-[#C85A2A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-[#2C1810] transition-colors hover:bg-[#F2DDD0]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#C85A2A] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#A84520]"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="inline-flex items-center justify-center rounded-md p-2 text-[#2C1810] hover:bg-[#F2DDD0] md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-[#FDF6EE]">
            <SheetTitle className="font-heading text-lg font-semibold text-[#C85A2A]">
              CrawlGuide
            </SheetTitle>
            <nav className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <SheetClose key={link.href} render={<Link href={link.href} className="text-base font-medium text-[#2C1810] transition-colors hover:text-[#C85A2A]" />}>
                  {link.label}
                </SheetClose>
              ))}
              <hr className="my-2 border-[#F2DDD0]" />
              <SheetClose render={<Link href="/login" className="text-base font-medium text-[#2C1810] transition-colors hover:text-[#C85A2A]" />}>
                Login
              </SheetClose>
              <SheetClose render={<Link href="/signup" className="inline-block rounded-full bg-[#C85A2A] px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#A84520]" />}>
                Start Free
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
