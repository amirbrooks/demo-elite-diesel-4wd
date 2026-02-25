import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { business } from "@/lib/site-data";

const basePath = "/lead/elite-diesel-4wd";

export function Footer() {
  return (
    <footer className="bg-forge border-t border-iron/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-bone uppercase tracking-wide mb-3">
              Elite Diesel 4WD
            </h3>
            <p className="text-ash text-sm leading-relaxed">
              Wangaratta&rsquo;s trusted diesel specialist. ECU remapping, DPF
              solutions, and precision diagnostics for every 4WD.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-smoke uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/about-karl", label: "About Karl" },
                { href: "/diagnostics", label: "Diagnostics" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`${basePath}${link.href}`}
                    className="text-ash text-sm hover:text-bone transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-smoke uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ash">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rust mt-0.5 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rust shrink-0" />
                <a href={business.phoneTel} className="hover:text-bone transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-rust mt-0.5 shrink-0" />
                <span>Mon–Fri 8am–5pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-iron/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ash">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-iron">
            Wangaratta, Victoria
          </p>
        </div>
      </div>
    </footer>
  );
}
