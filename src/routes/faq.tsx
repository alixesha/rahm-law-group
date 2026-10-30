
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <section className="bg-[#101a2b] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b66d]">
            Frequently Asked Questions
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            Questions Answered.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-white/75">
            Learn more about contacting our firm, consultations, and the
            legal process. Every case is different, so answers depend on
            the facts and applicable law.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
            Helpful Information
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#101a2b] sm:text-4xl">
            Common Questions
          </h2>

          <div className="mt-9 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                  >
                    <span className="font-display text-lg font-bold text-[#101a2b]">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#a77d31] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 leading-8 text-gray-600 sm:px-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-[#101a2b] p-7 text-white sm:p-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Have a Question About Your Situation?
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Contact the firm to discuss your concerns and ask about
              the possibility of an initial consultation.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-[#d9b66d] px-6 py-4 font-bold text-[#101a2b] transition hover:bg-white"
            >
              Contact Our Firm <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
