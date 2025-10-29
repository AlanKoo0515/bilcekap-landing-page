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
    { name: "John Doe", role: "Project Lead", avatar: "👨‍💼" },
    { name: "Jane Smith", role: "Lead Developer", avatar: "👩‍💻" },
  ];

  const mvpFeatures = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Invoice Creation",
      description:
        "Create professional invoices with all necessary details directly from your mobile device",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Government Verification",
      description:
        "Automatic verification through government portal with secure QR code generation",
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "AI-Powered Delivery",
      description:
        "Intelligent agent automatically sends verified e-invoices to customers via WhatsApp",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Revenue Analytics",
      description:
        "Real-time dashboard showing revenue trends and business performance metrics",
    },
  ];

  const hmsKits = [
    {
      name: "HMS Account Kit",
      description: "Secure user authentication and account management",
    },
    {
      name: "HMS Push Kit",
      description: "Real-time notifications for invoice status updates",
    },
    {
      name: "HMS ML Kit",
      description: "AI-powered features for intelligent invoice processing",
    },
    {
      name: "HMS Analytics Kit",
      description: "Detailed insights into app usage and user behavior",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">e-Invoice</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
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

            <div className="hidden md:block">
              <Button onClick={() => scrollToSection("mvp")}>
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
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
              <div className="px-3 py-2">
                <Button
                  className="w-full"
                  onClick={() => scrollToSection("mvp")}
                >
                  Get Started
                </Button>
              </div>
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
            Modern e-Invoice Solution
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Streamline your invoicing process with government-verified
            e-invoices, AI-powered delivery, and real-time analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("mvp")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("background")}
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 border-none shadow-sm text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                e-Invoice
              </h3>
              <p className="text-sm text-muted-foreground">
                Modern invoicing solution powered by HMS Core
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
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
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 e-Invoice. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
