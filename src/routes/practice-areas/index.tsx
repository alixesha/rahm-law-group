import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale } from "lucide-react";
import { mainCategories } from "@/data/practiceAreas";

export const Route = createFileRoute("/practice-areas/")({
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <main>
      <section className="bg-[#101a2b] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b66d]">
            Our Legal Services
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Legal Guidance.
            <br />
            <span className="text-[#d9b66d]">Focused Representation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Explore the areas of law handled by Rahm Law Group, APC.
            Contact the firm to discuss your specific circumstances and
            determine whether representation may be appropriate.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Practice Areas
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[#101a2b] sm:text-4xl">
              How We May Be Able to Help
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainCategories.map((area) => (
              <Link
                key={area.slug}
                to="/practice-areas/$slug"
                params={{ slug: area.slug }}
                className="group flex flex-col border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#c6a15b] hover:shadow-xl"
              >
                <div className="mb-5 flex size-12 items-center justify-center bg-[#101a2b] text-[#d9b66d] transition group-hover:bg-[#d9b66d] group-hover:text-[#101a2b]">
                  <Scale size={23} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#101a2b]">
                  {area.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {area.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#997126]">
                  Explore Service
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-[#101a2b] sm:text-4xl">
            Have Questions About Your Case?
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Contact Rahm Law Group to discuss your concerns and possible next steps.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-[#101a2b] px-7 py-4 font-semibold text-white transition hover:bg-[#263750]"
          >
            Contact Our Firm <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
