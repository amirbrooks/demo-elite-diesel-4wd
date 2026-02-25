"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/lib/site-data";

const basePath = "/lead/elite-diesel-4wd";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-karl", label: "About Karl" },
  { href: "/diagnostics", label: "Diagnostics" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-soot/90 backdrop-blur-md border-b border-iron/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`${basePath}/`} className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-bone uppercase tracking-wide">
              Elite Diesel
            </span>
            <span className="text-rust font-[family-name:var(--font-heading)] text-lg hidden sm:block">
              4WD
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`${basePath}${link.href}`}
                className="text-sm text-smoke hover:text-bone transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.phoneTel}
              className="inline-flex items-center gap-2 bg-rust text-bone px-4 py-2 text-sm font-medium rounded hover:bg-ember transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-bone p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-soot border-t border-iron/20 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`${basePath}${link.href}`}
              className="block py-3 text-smoke hover:text-bone border-b border-iron/10 text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={business.phoneTel}
            className="mt-3 inline-flex items-center gap-2 bg-rust text-bone px-4 py-2 text-sm font-medium rounded"
          >
            <Phone className="w-4 h-4" />
            {business.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
