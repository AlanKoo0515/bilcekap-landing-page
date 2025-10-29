import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Menu,
  X,
  Download,
  Users,
  Target,
  Package,
  Shield,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "background", "mvp", "hms", "team"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "background", label: "Background" },
    { id: "mvp", label: "Features" },
    { id: "hms", label: "Technology" },
    { id: "team", label: "Team" },
  ];

  const teamMembers = [
    {
      name: "Alpha Chong Shu Siang",
      role: "Project Lead",
      image: "/alpha.jpeg",
    },
    { name: "Koo Ming Zhe", role: "Lead Developer", image: "/mz.JPG" },
  ];

  const mvpFeatures = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Smart Receipt Verification (AI-OCR)",
      description:
        "Scan and match payment receipts from WhatsApp or uploads to invoices automatically.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Automated Follow-Ups",
      description:
        "Personalized messages and payment plan suggestions to improve collection rate.",
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Agentic Payment Tracking",
      description:
        "AI agents monitor payment status, send polite reminders, and update invoice records.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Predictive Analytics",
      description: "ML-powered cash-flow forecasting and late-payer detection.",
    },
  ];

  const hmsKits = [
    {
      name: "HMS ML Kit (OCR Service)",
      description:
        "Extracts payment details from uploaded or WhatsApp receipt images for automatic invoice–payment matching.",
    },
    {
      name: "HMS Push Kit",
      description:
        "Sends real-time notifications for invoice approval, payment reminders, and verification updates.",
    },
    {
      name: "HMS Cloud DB",
      description:
        "Stores invoices, payment records, and transaction data securely in Huawei Cloud.",
    },
    {
      name: "HMS Account Kit",
      description:
        "Simplifies user login/registration via Huawei ID for merchants and customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="BilCekap logo"
                className="h-10 w-10 rounded"
              />
              <span className="text-xl font-bold text-primary">BilCekap</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* removed CTA button */}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="col-start-3 justify-self-end md:hidden text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* AppGallery Banner */}
      {showBanner && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-primary text-primary-foreground shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1 justify-center flex-wrap">
              <Download className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                Available on Huawei AppGallery
              </span>
              <Button
                size="sm"
                variant="secondary"
                className="text-xs sm:text-sm"
                onClick={() => {
                  toast({
                    title: "Coming Soon",
                    description:
                      "The app will be available on Huawei AppGallery soon!",
                  });
                }}
              >
                Download
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 flex-shrink-0"
              onClick={() => setShowBanner(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className={`${
          showBanner ? "pt-44" : "pt-32"
        } pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            BilCekap
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Streamline your invoicing process with smart receipt verification,
            automated follow-ups, and agentic payment tracking.
          </p>
          {/* removed hero CTA buttons */}
        </div>
      </section>

      {/* Background Section */}
      <section
        id="background"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
            Project Background
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              Our e-Invoice application revolutionizes the way businesses handle
              invoicing by integrating cutting-edge technology with government
              compliance systems. Built to meet the demands of modern
              businesses, our platform combines ease of use with powerful
              automation.
            </p>
            <p className="text-lg">
              By leveraging Huawei Mobile Services (HMS) Core, we provide a
              secure, reliable, and feature-rich experience that empowers
              businesses to create, verify, and deliver invoices seamlessly. Our
              mission is to simplify invoice management while ensuring full
              compliance with government regulations.
            </p>
          </div>
        </div>
      </section>

      {/* MVP Features Section */}
      <section id="mvp" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mvpFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HMS Core Kits Section */}
      <section id="hms" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
            Powered by HMS Core
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Our application integrates multiple Huawei Mobile Services to
            provide a robust and feature-rich experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hmsKits.map((kit, index) => (
              <Card key={index} className="p-6 border-none shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {kit.name}
                </h3>
                <p className="text-muted-foreground">{kit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch justify-center max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 border-none shadow-sm text-center w-full h-full max-w-sm flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("background")}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("mvp")}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Team
                  </button>
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
                  <a
                    href="/faq"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </a>
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

export default Landing;
