import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="BilCekap logo"
                className="h-10 w-10 rounded"
              />
              <Link to="/" className="text-xl font-bold text-primary">
                BilCekap
              </Link>
            </div>
            <div className="hidden md:flex justify-center space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Background
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Features
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Technology
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Team
              </Link>
            </div>
            <div />
          </div>
        </div>
      </nav>
      <div className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-2">
            <div className="mb-3 md:hidden">
              <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
            </div>
            <div className="relative flex items-center justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-0 hidden md:inline-flex"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center">
                Privacy Policy
              </h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-8 text-center">
            Last updated: 29 Oct 2025
          </p>

          <Card className="p-6 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This Privacy Policy explains how BilCekap ("we", "us", or "our")
              collects, uses, discloses, and safeguards your information when
              you use our website and services. By using BilCekap, you agree to
              the collection and use of information in accordance with this
              policy.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Account data: name, email, phone number, business information.
                </li>
                <li>
                  Invoice and payment data: invoice details, amounts, status,
                  customer information.
                </li>
                <li>
                  Content you upload: images of receipts or documents you submit
                  for processing.
                </li>
                <li>
                  Usage and device data: IP address, browser type, device
                  identifiers, logs, cookies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide and improve services, including AI-OCR receipt
                  matching and reminders.
                </li>
                <li>
                  Operate analytics, fraud prevention, and security monitoring.
                </li>
                <li>
                  Send service communications, alerts, and optional marketing
                  with your consent.
                </li>
                <li>Comply with legal obligations and enforce our terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Legal Bases
              </h2>
              <p>
                We process data under: performance of a contract, legitimate
                interests, legal obligation, and consent (where required).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Sharing of Information
              </h2>
              <p>We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Service providers and subprocessors (e.g., cloud hosting,
                  analytics, messaging).
                </li>
                <li>
                  Integrations you enable (e.g., messaging delivery, cloud
                  storage).
                </li>
                <li>
                  Authorities where required by law, to protect rights, or
                  prevent abuse.
                </li>
                <li>
                  Business transfers in case of merger, acquisition, or asset
                  sale.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                International Transfers
              </h2>
              <p>
                Data may be processed in countries outside your own. We use
                appropriate safeguards (such as standard contractual clauses)
                where required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Data Retention
              </h2>
              <p>
                We retain personal data only as long as necessary for the
                purposes described or as required by law. You may request
                deletion subject to legal holds.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Security
              </h2>
              <p>
                We implement administrative, technical, and physical safeguards
                to protect data. No method of transmission or storage is
                completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Your Rights
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, rectify, or delete your personal data.</li>
                <li>Object to or restrict processing in certain cases.</li>
                <li>Portability of data where applicable.</li>
                <li>
                  Withdraw consent at any time where processing is based on
                  consent.
                </li>
              </ul>
              <p className="mt-2">
                Requests can be made via the contact details below. We will
                respond in accordance with applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Cookies and Similar Technologies
              </h2>
              <p>
                We use cookies and similar technologies for authentication,
                preferences, analytics, and performance. You can control cookies
                through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Third-Party Services
              </h2>
              <p>
                Our service may link to or integrate with third-party services
                (e.g., messaging, cloud, analytics). Their privacy practices are
                governed by their policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Children's Privacy
              </h2>
              <p>
                BilCekap is not directed to children under 13. We do not
                knowingly collect personal data from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                post the new effective date and, where appropriate, notify you
                of material changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Contact Us
              </h2>
              <p>
                If you have questions or requests, contact us at:
                privacy@bilcekap.com
              </p>
            </div>
          </Card>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-accent/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                BilCekap
              </h3>
              <p className="text-sm text-muted-foreground">
                Streamline your invoicing process with smart receipt
                verification, automated follow-ups, and agentic payment
                tracking.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 BilCekap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
