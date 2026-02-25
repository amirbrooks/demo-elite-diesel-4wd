import Image from "next/image";
import { business, images } from "@/lib/site-data";

export const metadata = {
  title: "Contact | Elite Diesel 4WD & Performance",
  description:
    "Contact Elite Diesel 4WD in Wangaratta. Call (03) 5798 3960 or visit us at 140 Greta Rd. Mon-Fri 8am-5pm.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Image
          src={images.workshop}
          alt="Elite Diesel workshop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot via-soot/95 to-soot/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-rust font-[family-name:var(--font-heading)] text-base uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-bone uppercase">
            Contact
          </h1>
        </div>
      </section>

      {/* ─── CONTACT INFO + HOURS ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Contact details */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-6">
                Call or visit
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-ash uppercase tracking-wider mb-1">
                    Phone
                  </h3>
                  <a
                    href={business.phoneTel}
                    className="text-bone text-2xl font-[family-name:var(--font-heading)] hover:text-ember transition-colors"
                  >
                    {business.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm text-ash uppercase tracking-wider mb-1">
                    Address
                  </h3>
                  <p className="text-smoke">{business.address}</p>
                </div>

                <div>
                  <h3 className="text-sm text-ash uppercase tracking-wider mb-2">
                    What to expect
                  </h3>
                  <p className="text-smoke text-sm leading-relaxed">
                    Call ahead or drop in during business hours. Karl will
                    discuss your vehicle&rsquo;s issues, give you an honest
                    assessment, and book it in. Most diagnostic jobs are
                    completed same-day.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={business.phoneTel}
                  className="bg-rust text-bone px-6 py-3 text-sm font-semibold rounded hover:bg-ember transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right — Hours grid */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-6">
                Opening Hours
              </h2>

              <div className="border border-iron/20 rounded-lg overflow-hidden">
                {business.hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between px-4 py-3 text-sm ${
                      i % 2 === 0 ? "bg-forge" : "bg-soot"
                    } ${h.time === "Closed" ? "text-ash" : "text-smoke"}`}
                  >
                    <span className="font-medium">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>

              <p className="text-ash text-xs mt-3">
                Public holidays may affect hours. Call ahead to confirm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP EMBED ─── */}
      <section className="bg-forge py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-bone uppercase mb-6">
            Find Us
          </h2>
          <div className="relative w-full h-[350px] sm:h-[400px] rounded-lg overflow-hidden border border-iron/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5!2d146.30!3d-36.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1f7!2sElite+Diesel+4WD!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Diesel 4WD location"
            />
          </div>
          <p className="text-ash text-sm mt-3">
            140 Greta Rd, Wangaratta VIC 3677 — on the Greta Road heading south
            from town.
          </p>
        </div>
      </section>

      {/* ─── QUICK INFO ─── */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-ash text-sm">
            4.9★ from 123 Google reviews · 860 Facebook followers · 12
            specialist services
          </p>
        </div>
      </section>
    </>
  );
}
