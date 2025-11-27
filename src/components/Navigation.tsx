"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  hasDropdown: boolean;
  href?: string;
}

interface NavigationProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", hasDropdown: false, href: "/" },
  { label: "About Us", hasDropdown: false, href: "/#about" },
  { label: "Our Services", hasDropdown: false, href: "/#services" },
  { label: "Export", hasDropdown: false, href: "/#export" },
  { label: "Import", hasDropdown: false, href: "/#import" },
  { label: "Portfolio", hasDropdown: false, href: "/portfolio" },
  { label: "Contact", hasDropdown: false, href: "/contact" },
];

export default function Navigation({ navItems = defaultNavItems }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 text-gray-900 px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-gray-900">
              MEBA GENERAL TRADING
            </span>
            <span className="text-xs text-gray-500 font-medium">PLC</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.hasDropdown && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href || "#"}
                className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
       
      </div>
    </nav>
  );
}

