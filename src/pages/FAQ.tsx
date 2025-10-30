import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar (same as site) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            <div className="flex items-center gap-2">
              <img
                src="/logo.webp"
                width={40}
                height={40}
                loading="eager"
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

      {/* Body */}
      <div className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-6 flex items-center justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-0"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center">
              Frequently Asked Questions
            </h1>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is BilCekap?</AccordionTrigger>
              <AccordionContent>
                BilCekap helps SMEs automate receipt verification, follow-ups,
                and payment tracking with AI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How does AI-OCR receipt matching work?
              </AccordionTrigger>
              <AccordionContent>
                You can upload or forward receipt images; our OCR extracts
                values and matches them to invoices automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you store my receipt images?
              </AccordionTrigger>
              <AccordionContent>
                Images are stored securely and retained only as long as needed
                for verification and legal requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I export my invoice and payment data?
              </AccordionTrigger>
              <AccordionContent>
                Yes. You can export structured data for accounting or analysis
                from your account settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do reminders work?</AccordionTrigger>
              <AccordionContent>
                AI agents send polite reminders on a schedule you control and
                stop automatically after payment is recorded.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Who can I contact for support?
              </AccordionTrigger>
              <AccordionContent>
                Reach us at support@bilcekap.com for assistance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Is there a free plan or trial?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a free trial with limited usage so you can test
                receipt matching and reminders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What file formats do you support for receipts?
              </AccordionTrigger>
              <AccordionContent>
                JPEG, PNG, and PDF uploads are supported. WhatsApp-forwarded
                images work as well.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Does BilCekap integrate with accounting tools?
              </AccordionTrigger>
              <AccordionContent>
                We provide CSV export today and are working on integrations with
                popular accounting suites.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Can I customize reminder schedules and messages?
              </AccordionTrigger>
              <AccordionContent>
                Yes. You can configure timing, frequency, and message templates
                per customer segment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>How is my data secured?</AccordionTrigger>
              <AccordionContent>
                Data is encrypted in transit and at rest. Access is restricted
                with strict audit logging.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>Where is my data stored?</AccordionTrigger>
              <AccordionContent>
                We use secure cloud infrastructure. See our Privacy Policy for
                details on regions and safeguards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Footer (same as site) */}
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

export default FAQ;
