import { BookOpen } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="bg-[#FDF6EE]">
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex size-20 items-center justify-center rounded-2xl bg-[#F2DDD0]">
          <BookOpen className="size-10 text-[#C85A2A]" />
        </div>
        <h1 className="mt-8 font-heading text-3xl font-semibold text-[#2C1810] sm:text-4xl">
          Documentation
        </h1>
        <p className="mt-4 text-lg text-[#6B5347]">
          Our API documentation and integration guides are coming soon.
        </p>
        <p className="mt-2 text-[#6B5347]">
          In the meantime, reach out to{" "}
          <a
            href="mailto:support@crawlguide.com"
            className="text-[#C85A2A] underline underline-offset-2 hover:text-[#A84520]"
          >
            support@crawlguide.com
          </a>{" "}
          for technical questions.
        </p>
      </section>
    </div>
  )
}
