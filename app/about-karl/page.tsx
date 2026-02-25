import Image from "next/image";
import Link from "next/link";
import { business, images, reviews, partners, vehicles } from "@/lib/site-data";

const basePath = "/lead/elite-diesel-4wd";

export const metadata = {
  title: "About Karl | Elite Diesel 4WD & Performance",
  description:
    "Meet Karl — Wangaratta's most trusted diesel specialist. The mechanic other mechanics recommend, with 123 five-star Google reviews.",
};

export default function AboutKarlPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
        <Image
          src={images.tools}
          alt="Workshop tools close-up"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot via-soot/95 to-soot/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-rust font-[family-name:var(--font-heading)] text-base uppercase tracking-widest mb-2">
            The mechanic behind the reputation
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-bone uppercase">
            About Karl
          </h1>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Text — wider */}
            <div className="md:col-span-3">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-6">
                The mechanic other mechanics recommend
              </h2>
              <div className="space-y-4 text-smoke leading-relaxed">
                <p>
                  In Wangaratta, Karl&rsquo;s name comes up before you even
                  start looking. Other mechanics in the region refer their
                  toughest diesel jobs to Elite Diesel — the ones they
                  can&rsquo;t crack with standard tools or generic scan data.
                </p>
                <p>
                  That reputation didn&rsquo;t come from marketing. It came from
                  123 five-star Google reviews earned one vehicle at a time.
                  From customers who drove in with a $5,000 quote and drove out
                  having spent a few hundred, because Karl found the actual
                  problem instead of replacing parts until something worked.
                </p>
                <p>
                  Elite Diesel runs dealer-level diagnostic equipment — the same
                  scan tools the Isuzu and Toyota dealerships use — but
                  combined with the experience to interpret what the data
                  actually means. Injector balance rates, turbo actuator
                  testing, DPF root-cause analysis. This is precision diesel
                  work.
                </p>
                <p>
                  Every ECU remap is custom-written on the dyno for the
                  specific vehicle. Not a downloaded flash file. Customers
                  towing caravans regularly report fuel savings of 15-20%, with
                  one customer dropping from 17.5L/100km to 14.5L/100km while
                  towing 2.8 tonnes.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ash mt-8 pt-6 border-t border-iron/20">
                <span>4.9★ Google · 123 reviews</span>
                <span>5.0 Facebook · 860 followers</span>
                <span>Mon–Fri 8am–5pm</span>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={images.diesel}
                  alt="Diesel mechanical work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT PEOPLE SAY ─── */}
      <section className="py-16 bg-forge">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-bone uppercase mb-10">
            What customers say about Karl
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[reviews[0], reviews[2], reviews[4], reviews[5], reviews[7], reviews[8]].map(
              (r, i) => (
                <blockquote
                  key={i}
                  className="border-l-2 border-rust/30 pl-4 py-2"
                >
                  <p className="text-smoke text-sm italic leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <cite className="text-iron text-xs not-italic mt-2 block">
                    — {r.by}
                  </cite>
                </blockquote>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── VEHICLES + PARTNERS ─── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-bone uppercase mb-4">
                Vehicles We Work On
              </h3>
              <div className="flex flex-wrap gap-2">
                {vehicles.map((v) => (
                  <span
                    key={v}
                    className="text-sm text-smoke border border-iron/30 px-3 py-1 rounded"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-bone uppercase mb-4">
                Brands We Trust
              </h3>
              <p className="text-ash text-sm leading-relaxed">
                {partners.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-20">
        <Image
          src={images.vehicle}
          alt="Vehicle on the road"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-soot/80 backdrop-blur-sm" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl text-bone uppercase mb-4">
            Talk to Karl
          </h2>
          <p className="text-smoke mb-6">
            Got a diesel problem nobody can solve? Call the workshop.
          </p>
          <a
            href={business.phoneTel}
            className="bg-rust text-bone px-8 py-3 text-sm font-semibold rounded hover:bg-ember transition-colors"
          >
            Call {business.phone}
          </a>
        </div>
      </section>
    </>
  );
}
