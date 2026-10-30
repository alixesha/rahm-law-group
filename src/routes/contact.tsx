
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { FIRM } from "@/data/firm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section className="bg-[#101a2b] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b66d]">
            Get in Touch
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            Contact Our Firm.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-white/75">
            Contact Rahm Law Group, APC to discuss your legal concerns
            and learn about possible next steps.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Firm Information
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#101a2b]">
              We're Here to Listen.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Please contact our office to discuss your situation.
              Information shared during an initial inquiry does not
              automatically establish an attorney-client relationship.
            </p>

            <div className="mt-8 space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center bg-[#101a2b] text-[#d9b66d]">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#101a2b]">Call Our Office</h3>
                  <a
                    href={FIRM.phoneHref}
                    className="mt-2 inline-block text-lg font-semibold text-[#997126] hover:underline"
                  >
                    {FIRM.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center bg-[#101a2b] text-[#d9b66d]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#101a2b]">Office Address</h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    {FIRM.addressLine1}
                    <br />
                    {FIRM.addressLine2}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FIRM.addressQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#997126] hover:underline"
                  >
                    Get Directions <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center bg-[#101a2b] text-[#d9b66d]">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#101a2b]">Consultations</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Call the office to ask about availability and
                    arrangements for an initial consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[#101a2b] p-7 text-white sm:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b66d]">
                Take the Next Step
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Let's Talk About Your Legal Concerns.
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Every matter is different. A conversation can help identify
                the issues involved and whether the firm may be able to assist.
              </p>
              <p className="mt-5 leading-8 text-white/70">
                When calling, you can briefly describe the type of legal
                matter involved and ask what information may be useful
                for an initial discussion.
              </p>
            </div>

            <div className="mt-10">
              <a
                href={FIRM.phoneHref}
                className="flex items-center justify-center gap-3 bg-[#d9b66d] px-6 py-4 font-bold text-[#101a2b] transition hover:bg-white"
              >
                <Phone size={18} /> Call {FIRM.phoneDisplay}
              </a>
              <Link
                to="/practice-areas/"
                className="mt-4 flex items-center justify-center gap-2 border border-white/30 px-6 py-4 font-semibold transition hover:border-[#d9b66d] hover:text-[#d9b66d]"
              >
                Explore Practice Areas <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
