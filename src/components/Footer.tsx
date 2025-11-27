"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const footerLinks = {
    company: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Our Services", href: "/#services" },
      { label: "Portfolio", href: "/portfolio" },
    ],
    services: [
      { label: "Import", href: "/#import" },
      { label: "Export", href: "/#export" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.replace("/#", "");
      
      // Check if we're on the home page
      if (window.location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home page with hash
        router.push(href);
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.92-8 10-4.93-1.08-8-5.46-8-10V8.18l8-4z" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">
                MEBA GENERAL TRADING
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for global import and export
            </p>
            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold">Phone:</span> +251 911-21-99-16
              </p>
              <p>
                <span className="font-semibold">Email:</span> info@mebatrading.com
              </p>
              <p>
                <span className="font-semibold">Address:</span> Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Meba General Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

