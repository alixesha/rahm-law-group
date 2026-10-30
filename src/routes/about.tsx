
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Scale, ShieldCheck } from "lucide-react";
import { FIRM } from "@/data/firm";
import attorneyImage from "@/assets/attorney.jpg";
import officeImage from "@/assets/office.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="bg-[#101a2b] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b66d]">
            About Our Firm
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Thoughtful Counsel.
            <br />
            <span className="text-[#d9b66d]">Purposeful Advocacy.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {FIRM.name} provides focused legal representation with an emphasis
            on preparation, communication, and understanding each client's
            individual circumstances.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#d9b66d] px-7 py-4 font-bold text-[#101a2b] transition hover:bg-white"
          >
            Contact Our Firm <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Our Commitment
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#101a2b] sm:text-4xl">
              Every Matter Deserves Individual Attention.
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Legal problems can affect every part of a person's life. We
              believe clients deserve to understand their options, the
              challenges they may face, and the steps involved in their case.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Our approach emphasizes careful fact-gathering, thoughtful legal
              analysis, and clear communication throughout the representation.
              The right strategy depends on the facts and circumstances of
              each individual matter.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <Scale className="mt-1 shrink-0 text-[#b58b3b]" size={25} />
                <div>
                  <h3 className="font-bold text-[#101a2b]">
                    Preparation With Purpose
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    Careful review of the facts and legal issues that matter
                    to your situation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 shrink-0 text-[#b58b3b]" size={25} />
                <div>
                  <h3 className="font-bold text-[#101a2b]">
                    Clear Communication
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    An emphasis on explaining the process, your options,
                    and important developments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 shrink-0 text-[#b58b3b]" size={25} />
                <div>
                  <h3 className="font-bold text-[#101a2b]">
                    Individualized Strategy
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    A practical approach informed by the circumstances
                    and goals of each client.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <img
              src={attorneyImage}
              alt="Attorney Michael Rahm"
              className="max-h-[520px] w-full object-cover object-top shadow-xl"
            />
            <div className="border-l-2 border-[#c6a15b] bg-[#f8f6f1] p-6">
              <p className="font-display text-xl font-bold text-[#101a2b]">
                {FIRM.attorney}
              </p>
              <p className="mt-1 text-sm text-gray-600">{FIRM.name}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img
              src={officeImage}
              alt="Professional law office"
              className="h-72 w-full object-cover shadow-lg md:h-96"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Beverly Hills, California
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#101a2b] sm:text-4xl">
              A Direct Conversation Is the First Step.
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Contact our office to discuss your legal concerns and learn
              whether the firm may be able to assist. Any decision about
              representation depends on a review of your specific circumstances.
            </p>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              {FIRM.addressLine1}
              <br />
              {FIRM.addressLine2}
            </p>
            <a
              href={FIRM.phoneHref}
              className="mt-5 inline-block font-bold text-[#997126] hover:underline"
            >
              {FIRM.phoneDisplay}
            </a>
            <div>
              <Link
                to="/practice-areas"
                className="mt-7 inline-flex items-center gap-2 bg-[#101a2b] px-6 py-3 font-semibold text-white transition hover:bg-[#263750]"
              >
                Explore Practice Areas <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101a2b] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let's Discuss Your Situation.
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Reach out to learn more about the firm and discuss possible next steps.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-[#d9b66d] px-7 py-4 font-bold text-[#101a2b] transition hover:bg-white"
          >
            Contact Rahm Law Group <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
      }
