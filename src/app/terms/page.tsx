export default function TermsPage() {
  return (
    <div className="bg-[#FDF6EE]">
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-[#2C1810] sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-[#6B5347]">
          Last updated: March 25, 2026
        </p>

        <div className="mt-12 space-y-10 text-[#2C1810]">
          <section>
            <h2 className="font-heading text-xl font-semibold">Acceptance</h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              By accessing or using CrawlGuide, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, do not use
              the service.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Service Description
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              CrawlGuide provides a platform for local businesses to create
              curated walking routes with QR-based check-in functionality.
              Visitors scan QR codes at participating businesses to collect
              stamps and complete routes. Business owners access analytics
              through a dashboard.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              User Accounts
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              Visitors may use CrawlGuide without creating an account. Creating
              an account is optional and enables features like saving stamp
              progress across devices. You are responsible for maintaining the
              confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Business Accounts
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              Business owners must provide accurate information about their
              business, including name, address, and operating hours. You
              represent that you are authorized to act on behalf of the business
              you register.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Subscriptions &amp; Billing
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              Paid subscriptions are billed monthly or annually through Stripe.
              You may cancel your subscription at any time. Cancellation takes
              effect at the end of your current billing period. Refunds are not
              provided for partial billing periods.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Acceptable Use
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              You agree not to use CrawlGuide for any unlawful purpose, to
              interfere with the service, to impersonate others, or to submit
              false or misleading business information. We reserve the right to
              suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Intellectual Property
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              CrawlGuide and its original content, features, and functionality
              are owned by ChimeStream and are protected by copyright, trademark,
              and other intellectual property laws. You retain ownership of any
              content you submit through the platform.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              CrawlGuide is provided &ldquo;as is&rdquo; without warranties of
              any kind. We are not liable for any indirect, incidental, special,
              or consequential damages arising from your use of the service. Our
              total liability shall not exceed the amount you have paid us in the
              12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">
              Changes to Terms
            </h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              We may update these terms from time to time. We will notify you of
              material changes by posting the updated terms on this page and
              updating the &ldquo;Last updated&rdquo; date. Continued use of the
              service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold">Contact</h2>
            <p className="mt-3 leading-relaxed text-[#6B5347]">
              If you have questions about these terms, contact us at{" "}
              <a
                href="mailto:legal@crawlguide.com"
                className="text-[#C85A2A] underline underline-offset-2 hover:text-[#A84520]"
              >
                legal@crawlguide.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
