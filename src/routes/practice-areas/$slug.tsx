import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Scale } from "lucide-react";
import { mainCategories } from "@/data/practiceAreas";

export const Route = createFileRoute("/practice-areas/$slug")({
  component: PracticeAreaDetailPage,
});

function PracticeAreaDetailPage() {
  const { slug } = Route.useParams();
  const area = mainCategories.find((item) => item.slug === slug);

  if (!area) {
    return (
      <main className="min-h-[60vh] bg-[#f8f6f1] px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-[#101a2b]">
          Practice Area Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The requested legal service could not be found.
        </p>
        <Link
          to="/practice-areas/"
          className="mt-7 inline-flex items-center gap-2 bg-[#101a2b] px-6 py-3 text-white"
        >
          <ArrowLeft size={17} /> All Practice Areas
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-[#101a2b] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/practice-areas/"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[#d9b66d]"
          >
            <ArrowLeft size={16} /> All Practice Areas
          </Link>

          <div className="mt-10 flex size-14 items-center justify-center border border-[#d9b66d]/50 text-[#d9b66d]">
            <Scale size={28} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.28em] text-[#d9b66d]">
            Rahm Law Group, APC
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {area.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            {area.short}
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#d9b66d] px-7 py-4 font-bold text-[#101a2b] transition hover:bg-white"
          >
            Discuss Your Case <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_0.8fr]">
          <article className="bg-white p-7 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-bold text-[#101a2b] sm:text-3xl">
              Understanding Your Legal Options
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Legal matters can be stressful and complex. Understanding the
              relevant law, available options, and potential next steps is
              important when deciding how to proceed.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Rahm Law Group approaches each inquiry by considering the
              circumstances presented and the legal issues involved. The
              appropriate strategy depends on the facts of the individual case.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-[#101a2b]">
              A Thoughtful Approach
            </h2>

            <ul className="mt-5 space-y-4">
              {[
                "Review the circumstances and information relevant to your matter.",
                "Discuss potential legal options and important considerations.",
                "Explain possible next steps and the process involved.",
                "Develop an approach based on the facts and applicable law.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Scale className="mt-1 shrink-0 text-[#b58b3b]" size={19} />
                  <span className="leading-7 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l-2 border-[#c6a15b] bg-[#f8f6f1] p-5 text-sm leading-7 text-gray-600">
              The information on this page is general in nature and is not
              legal advice. Contacting the firm does not itself establish an
              attorney-client relationship.
            </p>
          </article>

          <aside>
            <div className="bg-[#101a2b] p-7 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b66d]">
                Need Legal Guidance?
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold">
                Let's Discuss Your Situation.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Contact the firm to discuss your concerns and learn whether
                assistance may be available.
              </p>
              <Link
                to="/contact"
                className="mt-7 flex items-center justify-center gap-2 bg-[#d9b66d] px-5 py-4 text-center text-sm font-bold text-[#101a2b] transition hover:bg-white"
              >
                Contact Our Firm <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-6 border border-gray-200 bg-white p-7">
              <h3 className="font-display text-xl font-bold text-[#101a2b]">
                Other Practice Areas
              </h3>
              <div className="mt-4 space-y-1">
                {mainCategories
                  .filter((item) => item.slug !== area.slug)
                  .slice(0, 5)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      to="/practice-areas/$slug"
                      params={{ slug: item.slug }}
                      className="flex items-center justify-between gap-3 border-b border-gray-100 py-3 text-sm text-gray-600 transition hover:text-[#997126]"
                    >
                      {item.name}
                      <ArrowRight size={15} />
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
