import Link from "next/link"

const teamMembers = [
  { name: "Alex Chen", role: "Co-founder & CEO" },
  { name: "Maria Santos", role: "Co-founder & CTO" },
  { name: "James Okafor", role: "Head of Partnerships" },
]

const values = [
  {
    title: "Local first",
    description:
      "Every decision we make starts with the question: does this help a local business owner?",
  },
  {
    title: "Data-driven",
    description:
      "We measure foot traffic, not followers. Real visits, not vanity metrics.",
  },
  {
    title: "No vanity metrics",
    description:
      "Impressions don't pay rent. We track the things that actually matter to your business.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#FDF6EE]">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold leading-snug text-[#2C1810] sm:text-4xl lg:text-5xl">
          We built this because a coffee shop owner couldn&apos;t tell if her
          $50 Instagram boost drove anyone through the door.
        </h1>
      </section>

      {/* Mission */}
      <section className="border-t border-[#E8D5C4] bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-[#2C1810] sm:text-3xl">
            Our mission is simple: foot traffic you can prove.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#6B5347]">
            CrawlGuide turns neighboring local businesses into curated walking
            routes with QR check-ins. Every scan is a data point. Every route is
            a story. Every check-in is proof that your business matters to your
            neighborhood.
          </p>
        </div>
      </section>

      {/* Built by ChimeStream */}
      <section className="border-t border-[#E8D5C4] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#C85A2A]">
            Built by
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-[#2C1810] sm:text-3xl">
            ChimeStream
          </h2>
          <p className="mt-4 text-[#6B5347]">
            We build tools that help local businesses compete — not with bigger
            budgets, but with better data.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-[#E8D5C4] bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-[#2C1810]">
            The Team
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-[#F2DDD0] text-xl font-semibold text-[#C85A2A]">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="mt-3 font-medium text-[#2C1810]">
                  {member.name}
                </p>
                <p className="text-sm text-[#6B5347]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[#E8D5C4] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl font-semibold text-[#2C1810]">
            What We Believe
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-lg font-semibold text-[#2C1810]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5347]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E8D5C4] bg-white px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-[#2C1810]">
          Ready to prove your foot traffic?
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/signup"
            className="rounded-full bg-[#C85A2A] px-8 py-3 font-medium text-white transition-colors hover:bg-[#A84520]"
          >
            Start Free Trial
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#E8D5C4] px-8 py-3 font-medium text-[#2C1810] transition-colors hover:bg-[#F2DDD0]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
