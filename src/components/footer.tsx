import Link from "next/link"

const productLinks = [
  { href: "/routes", label: "Routes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dashboard", label: "Dashboard" },
]

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]

const resourceLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/deck", label: "Deck" },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#F2DDD0]">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[#FDF6EE]/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#FDF6EE]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-heading text-xl font-semibold text-[#C85A2A]"
            >
              CrawlGuide
            </Link>
            <p className="mt-3 text-sm text-[#FDF6EE]/70">
              Foot traffic you can prove.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#FDF6EE]/10 pt-8">
          <p className="text-center text-sm text-[#FDF6EE]/50">
            &copy; 2024 CrawlGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
