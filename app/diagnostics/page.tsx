import Image from "next/image";
import { business, images, reviews } from "@/lib/site-data";

export const metadata = {
  title: "Diesel Diagnostics | Elite Diesel 4WD & Performance",
  description:
    "Dealer-level diesel diagnostics in Wangaratta. Injector balance, turbo actuator testing, DPF analysis. Find the fault, fix it once.",
};

export default function DiagnosticsPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24">
        <Image
          src={images.engine}
          alt="Engine diagnostics close-up"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soot via-soot/90 to-soot/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-rust font-[family-name:var(--font-heading)] text-base uppercase tracking-widest mb-2">
            Specialist diagnostic service
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-bone uppercase mb-4">
            Diesel Diagnostics
          </h1>
          <p className="text-smoke max-w-lg text-lg">
            Find the fault. Fix it once. No guesswork, no parts-swapping.
          </p>
        </div>
      </section>

      {/* ─── WHAT WE TEST ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-bone uppercase mb-6">
                Dealer-level tools,
                <br />
                real-world experience
              </h2>
              <div className="space-y-4 text-smoke leading-relaxed">
                <p>
                  Most workshops run a basic OBD scan and start replacing parts
                  based on fault codes. Karl runs the same diagnostic equipment
                  as Isuzu and Toyota dealerships — but with the diesel-specific
                  experience to interpret what the data actually means.
                </p>
                <p>
                  That&rsquo;s the difference between a $5,000 quote to replace
                  an entire DPF system and a few hundred dollars to fix the
                  actual sensor that&rsquo;s causing the problem.
                </p>
              </div>

              <blockquote className="border-l-2 border-rust/40 pl-4 mt-8">
                <p className="text-ash text-sm italic">
                  &ldquo;{reviews[3].quote}&rdquo;
                </p>
                <cite className="text-iron text-xs not-italic mt-1 block">
                  — {reviews[3].by}
                </cite>
              </blockquote>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={images.tools}
                alt="Diagnostic tools"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIAGNOSTIC CAPABILITIES ─── */}
      <section className="py-16 bg-forge">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-bone uppercase mb-10">
            What we test
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-1">
            {[
              {
                name: "Injector Balance Rates",
                desc: "Individual injector performance measurement to pinpoint failing or imbalanced injectors before they cause engine damage",
              },
              {
                name: "Turbo Actuator Testing",
                desc: "Electronic turbo actuator calibration and function tests — diagnosing boost issues, limp mode triggers, and wastegate faults",
              },
              {
                name: "DPF System Analysis",
                desc: "Pressure differential testing, soot loading measurement, and forced regeneration when the root cause has been addressed",
              },
              {
                name: "EGR System Diagnostics",
                desc: "Exhaust gas recirculation valve testing, cooler inspection, and carbon buildup assessment",
              },
              {
                name: "Common Rail Pressure",
                desc: "Fuel rail pressure testing under load to identify failing high-pressure pumps, leaking injectors, or regulator issues",
              },
              {
                name: "Full System Scan",
                desc: "Complete vehicle module scan — not just engine codes. Transmission, ABS, body control, and all electronic systems",
              },
            ].map((item) => (
              <div key={item.name} className="rust-border-left py-3">
                <h3 className="text-bone font-medium text-sm">{item.name}</h3>
                <p className="text-ash text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-bone uppercase mb-10">
            How it works
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Drop off & describe the issue",
                text: "Tell Karl what's happening — warning lights, performance loss, unusual behaviour. The more detail, the faster the diagnosis.",
              },
              {
                step: "02",
                title: "Full diagnostic scan",
                text: "Dealer-level scan tools read every module. Karl interprets the data in context — not just reading codes, but understanding what's actually failing and why.",
              },
              {
                step: "03",
                title: "Clear diagnosis & honest quote",
                text: "You get a plain-English explanation of what's wrong and what it costs to fix. No surprises, no unnecessary work, no parts-swapping.",
              },
              {
                step: "04",
                title: "Fix it right the first time",
                text: "The actual repair — targeted at the root cause. Most diagnostic jobs are completed same-day.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="text-rust font-[family-name:var(--font-heading)] text-3xl font-bold shrink-0 w-10">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-bone font-medium mb-1">{item.title}</h3>
                  <p className="text-ash text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-20">
        <Image
          src={images.diesel}
          alt="Diesel engine detail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-soot/80 backdrop-blur-sm" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl text-bone uppercase mb-4">
            Got a warning light?
          </h2>
          <p className="text-smoke mb-6">
            Don&rsquo;t wait for it to get worse. Call Karl for a proper
            diagnosis.
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
