import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Home,
  Palette,
  Users,
} from "lucide-react";
import FlipGallery from "@/components/flip-gallery";
import MobileNavbar from "@/components/mobile-navbar";
import DesktopNavbar from "@/components/desktop-navbar";
import StickyScroll from "@/components/sticky-scroll";

export default function InteriorDesignHome() {
  const whatsappLink = "https://wa.me/918529594634";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50">
        <MobileNavbar whatsappLink={whatsappLink} />
        <DesktopNavbar whatsappLink={whatsappLink} />
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Interior Design
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  Transform Your Space Into
                  <span className="text-slate-600 dark:text-slate-400">
                    {" "}
                    Art
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Create stunning, functional interiors that reflect your unique
                  style. Our expert designers bring your vision to life with
                  modern elegance and timeless appeal.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <a href="/#portfolio">View Portfolio</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    5+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <FlipGallery />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Sticky Scroll Gallery */}
      <section
        id="portfolio"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
            Portfolio
          </h2>

          {/* Use images from public folder. These are relative paths under /public */}
          <StickyScroll
            leftImages={[
              "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/1.jpg",
              "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/2.jpg",
              "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/3.jpg",
            ]}
            centerImages={[
              "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/1.jpeg",
              "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/2.jpeg",
              "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/3.jpeg",
            ]}
            rightImages={[
              "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/1.jpg",
              "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/2.jpg",
              "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/3(1).jpg",
            ]}
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive interior design
              solutions tailored to your needs and budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                  <Home className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </div>
                <CardTitle>Residential Design</CardTitle>
                <CardDescription>
                  Transform your home into a personalized sanctuary with our
                  residential interior design services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                  <Palette className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </div>
                <CardTitle>Color Consultation</CardTitle>
                <CardDescription>
                  Expert color schemes that enhance your space and reflect your
                  personality and lifestyle.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                  <Users className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </div>
                <CardTitle>Space Planning</CardTitle>
                <CardDescription>
                  Optimize your space layout for maximum functionality and
                  aesthetic appeal.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
            About Aakar design studio
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-center">
            Aakar design studio is a boutique design studio focused on creating
            thoughtful, functional spaces with a modern and timeless aesthetic.
            Our team combines creativity, craftsmanship and attention to detail
            to deliver interiors that truly reflect you.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Our Approach</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We start by understanding your needs and preferences, then craft
                tailored design solutions that balance beauty and utility. From
                concept to execution, we ensure a seamless experience and
                outstanding results.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Our Team</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our experienced designers and project managers work closely with
                trusted trades to bring each project to life on time and on
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Get in touch with our design experts and start your interior
              design journey today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Call Us
                  </h3>
                  <a
                    href={whatsappLink}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    +91 85295 94634
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@elegantinteriors.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    info@elegantinteriors.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Visit Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Bhaktinagar Society, Gurukul road Memnagar Ahmedabad 380052
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-6 sm:p-8">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  Get Free Consultation
                </CardTitle>
                <CardDescription>
                  Schedule a free consultation to discuss your project
                  requirements and get expert advice.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" asChild>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Us Now
                  </a>
                </Button>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                  We typically respond within 2 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Home className="h-8 w-8" />
                <span className="text-2xl font-bold">Aakar design studio</span>
              </div>
              <p className="text-slate-300">
                Creating beautiful, functional spaces that inspire and delight.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Residential Design</li>
                <li>Commercial Design</li>
                <li>Space Planning</li>
                <li>Color Consultation</li>
              </ul>
            </div>

           
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-300">
                <li>+91 85295 94634</li>
                <li>info@elegantinteriors.com</li>
                <li>Bhaktinagar Society, Gurukul road Memnagar Ahmedabad 380052</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="text-center text-slate-400">
            <p>&copy; 2024 Aakar design studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
