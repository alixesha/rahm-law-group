import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  ShieldCheck,
  Phone,
  BriefcaseBusiness,
  Car,
  Gavel,
} from "lucide-react";
import { FIRM } from "@/data/firm";
import { mainCategories } from "@/data/practiceAreas";
import { BadgeMarquee } from "@/components/BadgeMarquee";
import { Reveal } from "@/components/Reveal";
import attorneyImage from "@/assets/attorney.jpg";
import heroImage from "@/assets/hero.jpg";
import justiceImage from "@/assets/justice.jpg";
import officeImage from "@/assets/office.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101a2b] text-white">
        <img
          src={heroImage}
          alt="Elegant law office at sunset"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1423]/95 via-[#101a2b]/80 to-[#101a2b]/40" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 md:min-h-[680px] md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <Reveal direction="right">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#d9b66d]">
              <span className="h-px w-10 bg-[#d9b66d]" />
              {FIRM.name}
            </p>

            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Experience.
              <br />
              Preparation.
              <br />
              <span className="text-[#d9b66d]">
                Relentless Advocacy.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Strategic legal representation for people facing serious
              injuries, criminal charges, and workplace injustice.
              Every matter deserves careful preparation and individual attention.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d9b66d] px-7 py-4 text-sm font-bold text-[#101a2b] transition duration-300 hover:bg-white"
              >
                Request a Consultation <ArrowRight size={18} />
              </Link>

              <a
                href={FIRM.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-4 text-sm font-semibold transition hover:border-[#d9b66d] hover:text-[#d9b66d]"
              >
                <Phone size={17} />
                {FIRM.phoneDisplay}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#d9b66d]" />
                Personal Attention
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#d9b66d]" />
                Prepared Representation
              </span>
            </div>
          </Reveal>

          <Reveal direction="left" className="mx-auto w-full max-w-sm">
            <div className="border border-[#d9b66d]/50 bg-[#101a2b]/65 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src={attorneyImage}
                alt={`Attorney ${FIRM.attorney}`}
                className="h-[360px] w-full object-cover object-top sm:h-[420px]"
              />
              <div className="border-t border-[#d9b66d]/40 px-4 py-5">
                <p className="font-display text-xl font-bold">
                  {FIRM.attorney}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d9b66d]">
                  {FIRM.name}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FIRM HIGHLIGHTS */}
      <section className="border-b bg-white py-8 text-[#101a2b]">
        <div className="mx-auto grid max-w-6xl gap-7 px-5 sm:grid-cols-3 sm:gap-8">
          <Reveal direction="right" delay={0}>
            <div className="flex items-center gap-4">
              <Scale className="shrink-0 text-[#b58b3b]" size={30} />
              <div>
                <p className="font-display font-bold">Strategic Counsel</p>
                <p className="mt-1 text-sm text-gray-600">
                  A plan built around your case
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="flex items-center gap-4">
              <ShieldCheck className="shrink-0 text-[#b58b3b]" size={30} />
              <div>
                <p className="font-display font-bold">Client-Focused</p>
                <p className="mt-1 text-sm text-gray-600">
                  Clear guidance at every step
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="flex items-center gap-4">
              <Gavel className="shrink-0 text-[#b58b3b]" size={30} />
              <div>
                <p className="font-display font-bold">Prepared Advocacy</p>
                <p className="mt-1 text-sm text-gray-600">
                  Preparation with purpose
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CREDENTIAL BADGES */}
      <section className="overflow-hidden bg-[#e8e8e8] py-12 md:py-16">
        <Reveal direction="right" className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#997126]">
            Professional Recognition
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#101a2b] sm:text-4xl">
            Credentials & Affiliations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Professional ratings, recognitions, and legal affiliations
            associated with the firm.
          </p>
        </Reveal>

        <div className="mt-7">
          <BadgeMarquee />
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-[#f8f6f1] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal direction="right" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              How We Can Help
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#101a2b] sm:text-4xl md:text-5xl">
              Focused Representation.
              <br />
              Meaningful Advocacy.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Explore the legal services offered by Rahm Law Group.
              The appropriate approach depends on the facts of each case.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainCategories.map((area, index) => (
              <Reveal
                key={area.slug}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={(index % 3) * 100}
              >
                <Link
                  to="/practice-areas/$slug"
                  params={{ slug: area.slug }}
                  className="group flex h-full flex-col border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#c6a15b] hover:shadow-xl"
                >
                  <div className="mb-6 flex size-12 items-center justify-center bg-[#101a2b] text-[#d9b66d] transition group-hover:bg-[#d9b66d] group-hover:text-[#101a2b]">
                    {index === 0 ? (
                      <Scale size={23} />
                    ) : index === 1 ? (
                      <Gavel size={23} />
                    ) : index === 2 ? (
                      <Car size={23} />
                    ) : (
                      <BriefcaseBusiness size={23} />
                    )}
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
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/practice-areas/"
              className="inline-flex items-center gap-2 border border-[#101a2b] px-7 py-3 font-semibold text-[#101a2b] transition hover:bg-[#101a2b] hover:text-white"
            >
              Explore All Practice Areas <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="overflow-hidden bg-white">
        <div className="grid md:grid-cols-2">
          <Reveal direction="left" className="min-h-[350px] md:min-h-[570px]">
            <img
              src={justiceImage}
              alt="Scales of justice"
              className="h-full min-h-[350px] w-full object-cover"
            />
          </Reveal>

          <Reveal direction="right" className="flex items-center px-6 py-16 sm:px-12 md:px-16 md:py-24">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
                Our Approach
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#101a2b] sm:text-4xl">
                Your Case Deserves Individual Attention.
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
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#997126] hover:gap-3"
              >
                Learn About Our Firm <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFFICE */}
      <section className="bg-[#f8f6f1] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Our Office
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#101a2b] sm:text-4xl">
              Professional Service. Personal Attention.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Contact our Beverly Hills office to discuss your legal concerns
              and learn whether the firm may be able to assist.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              {FIRM.addressLine1}
              <br />
              {FIRM.addressLine2}
            </p>
            <a
              href={FIRM.phoneHref}
              className="mt-5 inline-flex font-bold text-[#997126] hover:underline"
            >
              {FIRM.phoneDisplay}
            </a>
            <div>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 bg-[#101a2b] px-6 py-3 font-semibold text-white transition hover:bg-[#263750]"
              >
                Contact Our Firm <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left">
            <img
              src={officeImage}
              alt="Professional law office interior"
              className="h-72 w-full object-cover shadow-lg md:h-96"
            />
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#101a2b] px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b66d]">
              Start With a Conversation
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Get Clear Answers About Your Legal Options.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              Tell us about your situation and contact the firm to discuss
              possible next steps. Every matter is different, and no outcome
              can be guaranteed.
            </p>
          </Reveal>

          <Reveal direction="left">
            <div className="border border-white/15 bg-white/5 p-7 sm:p-9">
              <p className="text-sm text-white/60">Call Rahm Law Group</p>
              <a
                href={FIRM.phoneHref}
                className="mt-2 block text-2xl font-bold text-[#d9b66d] transition hover:text-white sm:text-3xl"
              >
                {FIRM.phoneDisplay}
              </a>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {FIRM.addressLine1}
                <br />
                {FIRM.addressLine2}
              </p>
              <Link
                to="/contact"
                className="mt-8 flex w-full items-center justify-center gap-2 bg-[#d9b66d] px-6 py-4 text-sm font-bold text-[#101a2b] transition hover:bg-white"
              >
                Contact the Firm <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
        }
      
