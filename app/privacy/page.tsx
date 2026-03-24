export const metadata = {
  title: "Privacy Policy | Pipeline Engine",
  description: "How Pipeline Engine collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-accent uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-text-muted text-sm">
              Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-10 text-text-muted">

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">1. Who we are</h2>
              <p>
                Pipeline Engine is a trading name of My OPMA Ltd, a company registered in England
                and Wales. In this policy, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot; refer to Pipeline Engine / My OPMA Ltd.
              </p>
              <p className="mt-3">
                If you have any questions about this policy or how we handle your data, contact us at{" "}
                <a href="mailto:hello@thepipelineengine.com" className="text-accent hover:underline">
                  hello@thepipelineengine.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">2. What data we collect</h2>
              <p>We collect personal data in the following ways:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <span className="font-medium text-text-primary">Booking a discovery call</span> — when you
                  book through our Cal.com scheduling link, we receive your name, email address, and any
                  information you provide in the booking form.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Contacting us by email</span> — when you
                  email us directly, we receive your name, email address, and the contents of your message.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Becoming a client</span> — if we enter into
                  a service agreement, we may collect additional business information such as your company
                  name, billing details, and relevant contact information.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Website usage</span> — we may use
                  analytics tools that collect anonymised data about how visitors interact with our site
                  (pages visited, time on site, device type). This data does not identify you personally.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">3. How we use your data</h2>
              <p>We use your personal data to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Respond to your enquiry or booking request</li>
                <li>Conduct the discovery call you have requested</li>
                <li>Deliver the services set out in our service agreement</li>
                <li>Send you relevant information about our services where you have given consent or where we have a legitimate interest in doing so</li>
                <li>Comply with our legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">4. Our lawful basis for processing</h2>
              <p>We process your personal data on the following bases under UK GDPR:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <span className="font-medium text-text-primary">Contract</span> — processing is necessary
                  to perform our services or to take steps at your request before entering into a contract.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Legitimate interests</span> — we have a
                  legitimate interest in responding to enquiries and communicating with prospective and
                  existing clients in the course of running our business.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Legal obligation</span> — where we are
                  required to process data to comply with the law.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">5. Third parties</h2>
              <p>We use a small number of trusted third-party services to operate our business:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <span className="font-medium text-text-primary">Cal.com</span> — our scheduling platform.
                  When you book a call, your name and email are stored by Cal.com under their own privacy
                  policy.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Email providers</span> — we use standard
                  email services to communicate with you.
                </li>
                <li>
                  <span className="font-medium text-text-primary">Analytics</span> — we may use tools such
                  as Google Analytics or Microsoft Clarity to understand site usage. These tools collect
                  anonymised, aggregated data.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal data to third parties. We do not share your data with
                anyone other than the service providers listed above, and only to the extent necessary
                to deliver our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">6. How long we keep your data</h2>
              <p>
                We keep your data for as long as is necessary for the purpose it was collected:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Enquiry and booking data — up to 12 months if no service agreement is entered into</li>
                <li>Client data — for the duration of the engagement and up to 6 years thereafter, in line with standard accounting and legal requirements</li>
              </ul>
              <p className="mt-3">
                After these periods, your data is securely deleted or anonymised.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">7. Your rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (the &quot;right to be forgotten&quot;)</li>
                <li>Object to or restrict our processing of your data</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@thepipelineengine.com" className="text-accent hover:underline">
                  hello@thepipelineengine.com
                </a>. We will respond within 30 days.
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office
                (ICO) at{" "}
                <span className="text-text-primary">ico.org.uk</span> if you believe we have handled
                your data unlawfully.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">8. Cookies</h2>
              <p>
                This website may use cookies to support analytics and basic site functionality. Analytics
                cookies collect anonymised data only and do not identify you personally. You can disable
                cookies in your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">9. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. The date at the top of this page will always
                reflect when it was last revised. We encourage you to review it periodically.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3">10. Contact</h2>
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
    </>
  );
}
