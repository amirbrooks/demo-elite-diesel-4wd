import Image from "next/image";
import Link from "next/link";
import {
  business,
  images,
  signatureServices,
  additionalServices,
  reviews,
  partners,
  vehicles,
} from "@/lib/site-data";

const basePath = "/lead/elite-diesel-4wd";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center">
        <Image
          src={images.hero}
          alt="Diesel engine close-up in a specialist workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot via-soot/95 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="max-w-xl">
            <p className="text-rust font-[family-name:var(--font-heading)] text-lg uppercase tracking-widest mb-3">
              Wangaratta&rsquo;s Diesel Specialist
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl text-bone uppercase leading-[0.95] mb-6">
              Get it fixed right
              <br />
              <span className="text-ember">the first time</span>
            </h1>
            <p className="text-smoke text-lg leading-relaxed mb-8 max-w-md">
              Karl&rsquo;s the mechanic other mechanics call when they&rsquo;re
              stuck. Dealer-level diagnostics, custom ECU tunes, and DPF
              solutions that actually work.
            </p>

            {/* Proof strip — static text, no animation */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ash mb-8">
              <span>4.9★ from 123 Google reviews</span>
              <span className="hidden sm:inline text-iron">·</span>
              <span>860 Facebook followers</span>
              <span className="hidden sm:inline text-iron">·</span>
              <span>12 specialist services</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={business.phoneTel}
                className="bg-rust text-bone px-6 py-3 text-sm font-semibold rounded hover:bg-ember transition-colors"
              >
                Call {business.phone}
              </a>
              <Link
                href={`${basePath}/services`}
                className="border border-smoke/30 text-smoke px-6 py-3 text-sm font-semibold rounded hover:border-bone hover:text-bone transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VEHICLES STRIP ─── */}
      <div className="bg-forge border-y border-iron/15 py-4 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="text-ash font-medium">We specialise in:</span>
            {vehicles.map((v) => (
              <span key={v} className="text-smoke font-[family-name:var(--font-heading)] text-base uppercase tracking-wide">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SIGNATURE SERVICES ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-rust font-[family-name:var(--font-heading)] text-base uppercase tracking-widest mb-2">
            What we do best
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-bone uppercase mb-16">
            Signature Services
          </h2>

          <div className="space-y-20 sm:space-y-28">
            {signatureServices.map((service, i) => (
              <div
                key={service.slug}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
                style={i % 2 === 1 ? { direction: "rtl" } : undefined}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={images[service.image]}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div style={{ direction: "ltr" }}>
                  <span className="text-rust font-[family-name:var(--font-heading)] text-6xl sm:text-7xl font-bold opacity-15 leading-none select-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase -mt-4 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-ember text-sm font-medium mb-4">
                    {service.headline}
                  </p>
                  <p className="text-smoke leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Inline review quote */}
                  <blockquote className="border-l-2 border-rust/40 pl-4 mb-6">
                    <p className="text-ash text-sm italic leading-relaxed">
                      &ldquo;{service.review.quote}&rdquo;
                    </p>
                    <cite className="text-iron text-xs not-italic mt-1 block">
                      — {service.review.by}
                    </cite>
                  </blockquote>

                  <Link
                    href={`${basePath}/services`}
                    className="text-rust text-sm font-medium hover:text-ember transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMAGE BREAK — workshop full bleed, no heavy overlay ─── */}
      <section className="relative h-[40vh] sm:h-[50vh]">
        <Image
          src={images.workshop}
          alt="Workshop interior"
          fill
          className="object-cover"
        />
        {/* Subtle bottom fade only */}
        <div className="absolute inset-0 bg-gradient-to-t from-soot via-transparent to-transparent" />
      </section>

      {/* ─── ADDITIONAL SERVICES ─── */}
      <section className="py-20 sm:py-24 bg-forge">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-rust font-[family-name:var(--font-heading)] text-base uppercase tracking-widest mb-2">
            Also available
          </p>
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

      {/* ─── REVIEWS ─── */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 dyno-lines" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-rust font-[family-name:var(--font-heading)] text-base uppercase tracking-widest mb-2">
            What customers say
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-12">
            Real reviews, real results
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured large quote */}
            <blockquote className="md:row-span-2">
              <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase leading-tight mb-4">
                &ldquo;{reviews[0].quote}&rdquo;
              </p>
              <cite className="text-ash text-sm not-italic">
                — {reviews[0].by}
              </cite>
            </blockquote>

            {/* Smaller quotes */}
            {[reviews[1], reviews[3], reviews[4], reviews[6]].map((r, i) => (
              <blockquote key={i} className="border-l-2 border-iron/30 pl-4">
                <p className="text-smoke text-sm leading-relaxed italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <cite className="text-iron text-xs not-italic mt-2 block">
                  — {r.by}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="py-10 border-y border-iron/15 bg-forge">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-ash text-xs uppercase tracking-widest">Trusted brands:</span>
            {partners.map((p) => (
              <span
                key={p}
                className="text-smoke/60 font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — frosted glass over vehicle image ─── */}
      <section className="relative py-24 sm:py-32">
        <Image
          src={images.fourwd}
          alt="4WD vehicle on the road"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-soot/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-bone uppercase mb-4">
            Ready to book?
          </h2>
          <p className="text-smoke mb-8 leading-relaxed">
            Whether it&rsquo;s a diagnostic check, ECU tune, or DPF fix — Karl
            will get it sorted. Call now or drop in to the workshop on Greta Rd.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={business.phoneTel}
              className="bg-rust text-bone px-8 py-3 text-sm font-semibold rounded hover:bg-ember transition-colors"
            >
              Call {business.phone}
            </a>
            <Link
              href={`${basePath}/contact`}
              className="border border-bone/30 text-bone px-8 py-3 text-sm font-semibold rounded hover:bg-bone/10 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
