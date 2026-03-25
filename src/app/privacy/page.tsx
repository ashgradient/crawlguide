export default function PrivacyPage() {
  return (
    <div className="bg-[#FDF6EE]">
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-[#2C1810] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[#6B5347]">
          Last updated: March 25, 2026
        </p>

        <div className="mt-12 space-y-10 text-[#2C1810]">
          <section>
            <h2 className="font-heading text-xl font-semibold">
              What We Collect
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              When you use CrawlGuide, we collect check-in timestamps to track
              route participation. If you choose to provide it, we collect your
              email address for stamp collection and route updates. For business
              owners, we collect business information including name, address,
              category, and hours of operation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              What We Don&apos;t Collect
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              We do not track your location beyond the moment of a QR check-in.
              We do not use GPS, geofencing, or background location tracking. We
              do not sell your data to third parties, ever.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Visitor Privacy
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              Visitors can check in to businesses completely anonymously. No
              account is required. Providing your email address is entirely
              optional and only used if you want to save your stamp collection
              progress across devices.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Business Data
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              Business owners see aggregate check-in data — total visits, peak
              times, and route performance. They do not have access to individual
              visitor information or personal details.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">Payments</h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              All payment processing is handled by Stripe. We do not store
              credit card numbers, CVVs, or other payment credentials on our
              servers. For more information, see{" "}
              <a
                href="https://stripe.com/privacy"
                className="text-[#C85A2A] underline underline-offset-2 hover:text-[#A84520]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stripe&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Data Retention
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              Check-in data is retained for 2 years from the date of the
              check-in. You may request deletion of your account and all
              associated data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">Contact</h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              If you have questions about this privacy policy or your data,
              contact us at{" "}
              <a
                href="mailto:privacy@crawlguide.com"
                className="text-[#C85A2A] underline underline-offset-2 hover:text-[#A84520]"
              >
                privacy@crawlguide.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
