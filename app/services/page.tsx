import Image from "next/image";
import Link from "next/link";
import {
  business,
  images,
  signatureServices,
  additionalServices,
  reviews,
} from "@/lib/site-data";

const basePath = "/lead/elite-diesel-4wd";

export const metadata = {
  title: "Services | Elite Diesel 4WD & Performance",
  description:
    "Diesel diagnostics, ECU remapping, DPF solutions, and 9 more specialist services for 4WD and diesel vehicles in Wangaratta.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Image
          src={images.engine}
          alt="Diesel engine bay close-up"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot via-soot/95 to-soot/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-rust font-[family-name:var(--font-heading)] text-base uppercase tracking-widest mb-2">
            12 specialist services
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-bone uppercase">
            Services
          </h1>
          <p className="text-smoke mt-4 max-w-lg">
            From full diagnostic scans to custom ECU tunes — every service is
            backed by Karl&rsquo;s 4.9★ reputation and real diesel experience.
          </p>
        </div>
      </section>

      {/* ─── SIGNATURE SERVICES (editorial blocks) ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-16">
            Signature Services
          </h2>

          <div className="space-y-24">
            {signatureServices.map((service, i) => (
              <div
                key={service.slug}
                className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center`}
                style={i % 2 === 1 ? { direction: "rtl" } : undefined}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={images[service.image]}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div style={{ direction: "ltr" }}>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-2">
                    {service.name}
                  </h3>
                  <p className="text-ember text-sm font-medium mb-4">
                    {service.headline}
                  </p>
                  <p className="text-smoke leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <blockquote className="border-l-2 border-rust/40 pl-4 mb-6">
                    <p className="text-ash text-sm italic">
                      &ldquo;{service.review.quote}&rdquo;
                    </p>
                    <cite className="text-iron text-xs not-italic mt-1 block">
                      — {service.review.by}
                    </cite>
                  </blockquote>

                  <a
                    href={business.phoneTel}
                    className="text-rust text-sm font-medium hover:text-ember transition-colors"
                  >
                    Book this service →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL SERVICES ─── */}
      <section className="py-20 bg-forge">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-10">
            Additional Services
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-1">
            {additionalServices.map((s) => (
              <div key={s.name} className="rust-border-left py-3">
                <h3 className="text-bone font-medium text-sm">{s.name}</h3>
                <p className="text-ash text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE QUOTE + CTA ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote>
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-bone uppercase leading-tight mb-4">
              &ldquo;{reviews[2].quote}&rdquo;
            </p>
            <cite className="text-ash text-sm not-italic">
              — {reviews[2].by}
            </cite>
          </blockquote>
          <div className="mt-8">
            <a
              href={business.phoneTel}
              className="bg-rust text-bone px-8 py-3 text-sm font-semibold rounded hover:bg-ember transition-colors"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
