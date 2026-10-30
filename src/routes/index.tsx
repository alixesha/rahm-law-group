
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Scale, ShieldCheck, Phone, Gavel, BriefcaseBusiness, Car } from "lucide-react";
import { FIRM } from "@/data/firm";
import { mainCategories } from "@/data/practiceAreas";
import attorneyImage from "@/assets/attorney.jpg";
import heroImage from "@/assets/hero.jpg";
import justiceImage from "@/assets/justice.jpg";
import officeImage from "@/assets/office.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#101a2b] text-white md:min-h-[700px]">
        <img
          src={heroImage}
          alt="Professional law office at sunset"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1423]/95 via-[#101a2b]/80 to-[#101a2b]/35" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:min-h-[650px] md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b66d]">
              <span className="h-px w-10 bg-[#d9b66d]" />
              Rahm Law Group, APC
            </p>

            <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Experience.
              <br />
              Preparation.
              <br />
              <span className="text-[#d9b66d]">Relentless Advocacy.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Strategic legal representation for people facing serious injuries,
              criminal charges, and workplace injustice throughout Los Angeles County.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d9b66d] px-7 py-4 text-sm font-bold text-[#101a2b] transition duration-300 hover:bg-white"
              >
                Request a Consultation <ArrowRight size={18} />
              </a>
              <a
                href={FIRM.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-4 text-sm font-semibold transition duration-300 hover:border-[#d9b66d] hover:text-[#d9b66d]"
              >
                <Phone size={17} /> {FIRM.phoneDisplay}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#d9b66d]" />
                Personal Attention
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#d9b66d]" />
                Trial-Ready Strategy
              </span>
            </div>
          </div>

          <div className="hidden justify-end md:flex">
            <div className="w-full max-w-sm border border-[#d9b66d]/50 bg-[#101a2b]/65 p-3 shadow-2xl backdrop-blur-sm transition duration-500 hover:-translate-y-2">
              <img
                src={attorneyImage}
                alt="Attorney Michael Rahm"
                className="h-[390px] w-full object-cover object-top"
              />
              <div className="border-t border-[#d9b66d]/40 px-4 py-5">
                <p className="font-display text-xl font-bold">Michael Rahm</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d9b66d]">
                  Rahm Law Group, APC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-8 text-[#101a2b]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:grid-cols-3 sm:gap-8">
          <div className="flex items-center gap-4">
            <Scale className="shrink-0 text-[#b58b3b]" size={30} />
            <div>
              <p className="font-display font-bold">Strategic Counsel</p>
              <p className="mt-1 text-sm text-gray-600">A plan built around your case</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="shrink-0 text-[#b58b3b]" size={30} />
            <div>
              <p className="font-display font-bold">Client-Focused</p>
              <p className="mt-1 text-sm text-gray-600">Clear guidance at every step</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Gavel className="shrink-0 text-[#b58b3b]" size={30} />
            <div>
              <p className="font-display font-bold">Trial-Ready Approach</p>
              <p className="mt-1 text-sm text-gray-600">Preparation with purpose</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              How We Can Help
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#101a2b] sm:text-4xl md:text-5xl">
              Focused Representation.
              <br />
              Meaningful Results.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Every legal matter deserves careful attention, a clear strategy,
              and an advocate who takes your concerns seriously.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainCategories.slice(0, 6).map((area, index) => (
              <a
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#c6a15b] hover:shadow-xl"
              >
                <div className="mb-6 flex size-12 items-center justify-center bg-[#101a2b] text-[#d9b66d] transition duration-300 group-hover:bg-[#c6a15b] group-hover:text-[#101a2b]">
                  {index % 3 === 0 ? (
                    <Scale size={23} />
                  ) : index % 3 === 1 ? (
                    <BriefcaseBusiness size={23} />
                  ) : (
                    <Car size={23} />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-[#101a2b]">
                  {area.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Explore how our firm approaches your legal concerns with
                  careful preparation and individualized attention.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#997126]">
                  Learn More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/practice-areas"
              className="inline-flex items-center gap-2 border border-[#101a2b] px-7 py-3 font-semibold text-[#101a2b] transition hover:bg-[#101a2b] hover:text-white"
            >
              Explore All Practice Areas <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white">
        <div className="grid md:grid-cols-2">
          <div className="min-h-[350px] md:min-h-[570px]">
            <img
              src={justiceImage}
              alt="The scales of justice"
              className="h-full min-h-[350px] w-full object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-12 md:px-16 md:py-24">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
                Our Approach
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#101a2b] sm:text-4xl">
                Your Case Deserves More Than a Standard Approach.
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
                Legal challenges can affect your health, freedom, livelihood,
                and family. We focus on understanding the facts, explaining
                your options, and developing a strategy suited to your situation.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                From the initial consultation through the next steps in your
                matter, our goal is to provide direct communication and
                thoughtful legal guidance.
              </p>
              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#997126] hover:gap-3"
              >
                Learn About Our Firm <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101a2b] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b66d]">
              Start With a Conversation
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Get Clear Answers About Your Legal Options.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              Tell us about your situation and contact the firm to discuss
              possible next steps. Every matter is different, and no outcome
              can be guaranteed.
            </p>
          </div>

          <div className="border border-white/15 bg-white/5 p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center bg-[#d9b66d] text-[#101a2b]">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm text-white/60">Call Rahm Law Group</p>
                <a
                  href={FIRM.phoneHref}
                  className="mt-1 block text-2xl font-bold text-[#d9b66d] hover:text-white sm:text-3xl"
                >
                  {FIRM.phoneDisplay}
                </a>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {FIRM.addressLine1}
                  <br />
                  {FIRM.addressLine2}
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="mt-8 flex w-full items-center justify-center gap-2 bg-[#d9b66d] px-6 py-4 text-sm font-bold text-[#101a2b] transition hover:bg-white"
            >
              Contact the Firm <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Our Office
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#101a2b]">
              A Professional Setting. Personal Attention.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Contact our Beverly Hills office to discuss your situation and
              learn whether the firm may be able to assist.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#997126]"
            >
              Office Information <ArrowRight size={17} />
            </a>
          </div>
          <img
            src={officeImage}
            alt="Rahm Law Group office"
            className="h-72 w-full object-cover shadow-lg md:h-80"
          />
        </div>
      </section>
    </div>
  );
            }
