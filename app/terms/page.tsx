import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata = {
  title: "Terms of Service | Pipeline Engine",
  description: "Terms and conditions for Pipeline Engine services.",
};

export default function Terms() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-accent uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Terms of Service
            </h1>
            <p className="text-text-muted text-sm">
              Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-10 text-text-muted">

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">1. About these terms</h2>
              <p>
                These terms govern the relationship between Pipeline Engine (a trading name of My OPMA Ltd,
                registered in England and Wales) and any individual or business (&quot;the Client&quot;) that
                engages our services. By entering into a service agreement with us, you agree to these terms.
              </p>
              <p className="mt-3">
                If you have any questions, contact us at{" "}
                <a href="mailto:hello@thepipelineengine.com" className="text-accent hover:underline">
                  hello@thepipelineengine.com
                </a>{" "}
                before signing any agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">2. Our services</h2>
              <p>Pipeline Engine provides done-for-you B2B lead generation services, structured in two phases:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <span className="font-medium text-text-primary">Phase 1 — The Build:</span> A 90-day
                  engagement in which we design, build, and launch your inbound and outbound pipeline
                  system. The exact scope is agreed in writing before work begins.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Phase 2 — The Fuel:</span> An ongoing
                  monthly engagement in which we maintain, operate, and optimise the system built in
                  Phase 1. This phase is optional and runs on a rolling monthly basis.
                </li>
              </ul>
              <p className="mt-3">
                The specific deliverables, timelines, and fees for each engagement are set out in a
                separate proposal or statement of work, which forms part of the agreement between us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">3. Fees and payment</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Fees are set out in the proposal or statement of work provided to you.</li>
                <li>Invoices are due within 14 days of the invoice date unless otherwise agreed in writing.</li>
                <li>We reserve the right to pause work on your project if invoices remain unpaid beyond their due date.</li>
                <li>All fees are exclusive of VAT where applicable.</li>
                <li>
                  For Phase 2, ad spend (e.g. paid advertising budgets) is separate from our management
                  fee and is agreed with you in advance. Ad spend is billed to you directly by the relevant
                  platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">4. Cancellation</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <span className="font-medium text-text-primary">Phase 1:</span> Once work has commenced,
                  the Phase 1 fee is non-refundable. If you choose to terminate Phase 1 before completion,
                  any work completed up to that point remains yours to keep.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Phase 2:</span> You may cancel Phase 2 at
                  any time by giving 30 days&apos; written notice. No penalty applies. The final month&apos;s fee
                  covers the notice period.
                </li>
                <li>
                  We reserve the right to terminate the engagement if fees remain unpaid for more than 30
                  days, or if the working relationship breaks down irreparably. In such cases, any assets
                  already delivered remain yours.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">5. Delivery guarantee</h2>
              <p>
                We commit to delivering the Phase 1 system within 90 days of the agreed start date. If we
                fail to deliver within this timeframe due to reasons within our control, you will not be
                charged for the final month of Phase 2 (if applicable). This guarantee does not apply where
                delays are caused by the Client (e.g. failure to provide required information, approvals,
                or access in a timely manner).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">6. Ownership of assets</h2>
              <p>
                All assets created during Phase 1 — including but not limited to copy, email sequences,
                landing pages, CRM configurations, and content — transfer to the Client upon completion of
                Phase 1, subject to full payment of Phase 1 fees.
              </p>
              <p className="mt-3">
                Assets created during Phase 2 transfer to the Client on an ongoing basis as they are
                delivered, subject to monthly fees being up to date.
              </p>
              <p className="mt-3">
                We retain the right to reference the engagement in general terms as part of our portfolio
                (e.g. &quot;worked with a B2B service business in X sector&quot;) unless you request otherwise in
                writing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">7. Client responsibilities</h2>
              <p>To allow us to deliver effectively, you agree to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Provide timely access to any tools, platforms, or accounts we reasonably require</li>
                <li>Review and approve deliverables within agreed timeframes</li>
                <li>Provide accurate information about your business, target market, and offer</li>
                <li>Make yourself available for scheduled calls and check-ins</li>
              </ul>
              <p className="mt-3">
                Delays caused by the Client do not entitle the Client to a refund or extension of the
                delivery guarantee.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">8. Results</h2>
              <p>
                We commit to building and maintaining the systems and activities set out in the agreed
                scope of work. We do not guarantee specific outcomes such as a defined number of leads,
                calls, or revenue, as these depend on factors outside our control including market
                conditions, your offer, and your ability to close conversations.
              </p>
              <p className="mt-3">
                What we guarantee is the work itself — the infrastructure built, the outreach conducted,
                and the systems maintained — delivered to a professional standard.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">9. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary or sensitive information shared
                during the engagement. This includes business strategy, client data, pricing, and any
                information marked as confidential. This obligation survives termination of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">10. Limitation of liability</h2>
              <p>
                To the extent permitted by law, our total liability to you in connection with our services
                shall not exceed the total fees paid by you to us in the three months preceding the claim.
              </p>
              <p className="mt-3">
                We are not liable for any indirect, consequential, or loss-of-profit damages arising from
                our services or any failure to deliver results.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">11. Governing law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes shall be subject
                to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">12. Changes to these terms</h2>
              <p>
                We may update these terms from time to time. The date at the top of this page reflects
                the latest revision. Continued use of our services after an update constitutes acceptance
                of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">13. Contact</h2>
              <p>
                Pipeline Engine / My OPMA Ltd
                <br />
                <a href="mailto:hello@thepipelineengine.com" className="text-accent hover:underline">
                  hello@thepipelineengine.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
