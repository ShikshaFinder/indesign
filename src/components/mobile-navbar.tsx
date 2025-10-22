"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Menu, X, Phone, Mail, MapPin } from "lucide-react";

interface MobileNavbarProps {
  whatsappLink: string;
}

export default function MobileNavbar({ whatsappLink }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 85295 94634",
      href: whatsappLink,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@elegantinteriors.com",
      href: "mailto:info@elegantinteriors.com",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Bhaktinagar Society, Gurukul road Memnagar Ahmedabad 380052",
      href: "#",
    },
  ];

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between h-16 px-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-slate-700 dark:text-slate-300" />
          <span className="text-xl font-bold text-slate-800 dark:text-slate-200">
            Aakar design studio
          </span>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Home className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                  <span className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Aakar design studio
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                        <contact.icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          {contact.label}
                        </p>
                        {contact.href === whatsappLink ? (
                          <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                          >
                            {contact.value}
                          </a>
                        ) : contact.href ===
                          "mailto:info@elegantinteriors.com" ? (
                          <a
                            href={contact.href}
                            className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <Button
                  className="w-full mt-6"
                  size="lg"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Us Now
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
