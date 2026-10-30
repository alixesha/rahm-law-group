
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Scale,
  ShieldCheck,
  Award,
  Star,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { FIRM } from "@/data/firm";
import { Reveal } from "@/components/Reveal";
import attorneyImage from "@/assets/attorney.jpg";
import officeImage from "@/assets/office.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const education = [
  {
    title: "Juris Doctor (J.D.)",
    institution: "Trinity Law School",
    year: "2009",
  },
  {
    title: "Bachelor of Arts (B.A.)",
    institution: "University of California, Los Angeles (UCLA)",
    year: "2007",
  },
];

const experience = [
  {
    title: "Attorney",
    institution: "Rahm Law Group, APC",
    year: "2014 – Present",
  },
  {
    title: "Certified Law Clerk",
    institution: "Los Angeles County District Attorney's Office",
    year: "2009",
  },
  {
    title: "Extern",
    institution: "Los Angeles Superior Court",
    year: "2008",
  },
];

const associations = [
  "DUI Defense Lawyers Association — Member",
  "State Bar of California — Criminal Law Section",
  "State Bar of California — Labor and Employment Law Section",
  "Los Angeles County Bar Association — Member",
  "Beverly Hills Bar Association — Member",
  "American Bar Association — Member",
  "California Attorneys for Criminal Justice — Member",
];

const strengths = [
  {
    title: "Individual Attention",
    description:
      "Understanding the facts, concerns, and priorities that make each client's situation unique.",
    icon: ShieldCheck,
  },
  {
    title: "Legal Preparation",
    description:
      "Careful consideration of the relevant facts, applicable law, and available legal options.",
    icon: Scale,
  },
  {
    title: "Clear Communication",
    description:
      "Helping clients understand the process, important developments, and potential next steps.",
    icon: CheckCircle2,
  },
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#101a2b]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101a2b]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(217,182,109,0.20),_transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d9b66d]">
              The Attorney Behind the Firm
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Experience Built on
              <span className="mt-2 block text-[#d9b66d]">
                Preparation & Purpose.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Learn about Michael Rahmanou, his legal education, professional
              experience, and commitment to helping clients navigate difficult
              legal matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#d9b66d] px-6 py-4 font-bold text-[#101a2b] transition duration-300 hover:bg-white"
              >
                Contact Our Firm <ArrowRight size={18} />
              </Link>
              <a
                href={FIRM.phoneHref}
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-4 font-semibold text-white transition hover:border-[#d9b66d] hover:text-[#d9b66d]"
              >
                <Phone size={17} /> {FIRM.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 translate-x-2 translate-y-2 border border-[#d9b66d]/50" />
              <div className="relative overflow-hidden bg-white p-2 shadow-2xl">
                <img
                  src={attorneyImage}
                  alt="Michael Rahmanou, attorney"
                  className="h-[390px] w-full object-cover object-top transition duration-700 hover:scale-[1.04] sm:h-[470px]"
                />
                <div className="bg-[#101a2b] px-5 py-5 text-center text-white">
                  <h2 className="font-display text-xl font-bold">
                    Michael Rahmanou, Esq.
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d9b66d]">
                    Rahm Law Group, APC
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left">
            <div className="relative">
              <img
                src={officeImage}
                alt="Professional law office interior"
                className="h-[320px] w-full object-cover shadow-xl sm:h-[440px]"
              />
              <div className="absolute -bottom-5 -right-3 bg-[#d9b66d] px-5 py-4 shadow-lg sm:-right-5 sm:px-7">
                <p className="font-display text-lg font-bold text-[#101a2b]">
                  Rahm Law Group
                </p>
                <p className="mt-1 text-xs text-[#101a2b]/80">
                  Beverly Hills, California
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Professional Background
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              A Foundation in Law, Service, and Preparation
            </h2>

            <div className="mt-7 space-y-5 leading-8 text-gray-600">
              <p>
                Michael Rahmanou earned his Bachelor of Arts degrees from the
                University of California, Los Angeles (UCLA), graduating with
                summa cum laude honors, before earning his Juris Doctor from
                Trinity Law School.
              </p>
              <p>
                During his legal education, he gained exposure to courtroom
                practice through an externship with the Los Angeles Superior
                Court and experience with the Los Angeles County District
                Attorney's Office.
              </p>
              <p>
                His professional background includes criminal law and other
                legal matters. His approach emphasizes careful preparation,
                understanding the circumstances of each case, and helping
                clients understand their legal options.
              </p>
              <p>
                The office reports that staff can speak Spanish and that
                resources are available for other languages.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-[#c6a15b] bg-[#f8f6f1] p-5">
                <GraduationCap className="text-[#a77d31]" size={27} />
                <p className="mt-3 font-bold">Legal Education</p>
                <p className="mt-1 text-sm text-gray-600">
                  Trinity Law School
                </p>
              </div>
              <div className="border-l-2 border-[#c6a15b] bg-[#f8f6f1] p-5">
                <BriefcaseBusiness className="text-[#a77d31]" size={27} />
                <p className="mt-3 font-bold">Professional Practice</p>
                <p className="mt-1 text-sm text-gray-600">
                  Rahm Law Group, APC
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-[#f8f6f1] px-5 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Academic Background
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Education
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              The academic foundation that supports the attorney's legal work.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.title} direction="left" delay={index * 150}>
                <article className="group h-full border border-gray-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#c6a15b] hover:shadow-xl sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center bg-[#101a2b] text-[#d9b66d] transition duration-300 group-hover:rotate-6 group-hover:bg-[#d9b66d] group-hover:text-[#101a2b]">
                      <GraduationCap size={25} />
                    </div>
                    <span className="border border-[#c6a15b]/50 px-3 py-1 text-sm font-semibold text-[#997126]">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {item.institution}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-5 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Career Journey
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Work Experience
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              A professional timeline spanning legal practice, court
              exposure, and public-sector legal experience.
            </p>
          </Reveal>

          <div className="relative mt-12 space-y-6 before:absolute before:bottom-6 before:left-[23px] before:top-6 before:w-px before:bg-[#c6a15b]/60 sm:before:left-[27px]">
            {experience.map((item, index) => (
              <Reveal key={item.title} direction="left" delay={index * 140}>
                <article className="group relative flex gap-5 sm:gap-7">
                  <div className="z-10 flex size-12 shrink-0 items-center justify-center border-2 border-[#c6a15b] bg-white text-[#997126] transition duration-300 group-hover:bg-[#101a2b] group-hover:text-[#d9b66d] sm:size-14">
                    <BriefcaseBusiness size={23} />
                  </div>
                  <div className="flex-1 border border-gray-200 bg-white p-5 transition duration-300 hover:border-[#c6a15b] hover:shadow-lg sm:p-7">
                    <p className="text-sm font-bold text-[#997126]">
                      {item.year}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">
                      {item.institution}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ASSOCIATIONS */}
      <section className="bg-[#101a2b] px-5 py-16 text-white sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b66d]">
              Professional Affiliations
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Associations & Memberships
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              Professional organizations listed in the attorney's supplied
              biography. Current membership status should be confirmed with
              the respective organizations.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {associations.map((association, index) => (
              <Reveal key={association} direction="left" delay={(index % 4) * 100}>
                <div className="group flex h-full items-start gap-4 border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:translate-x-2 hover:border-[#d9b66d]/60 hover:bg-white/[0.08]">
                  <div className="flex size-10 shrink-0 items-center justify-center bg-[#d9b66d]/15 text-[#d9b66d]">
                    <Scale size={20} />
                  </div>
                  <p className="pt-1 leading-7 text-white/85">
                    {association}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="px-5 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="right" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              The Client Experience
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A Thoughtful Approach to Your Legal Matter
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} direction="left" delay={index * 150}>
                  <article className="group h-full border border-gray-200 p-7 transition duration-500 hover:-translate-y-2 hover:border-[#c6a15b] hover:shadow-xl sm:p-8">
                    <div className="flex size-14 items-center justify-center bg-[#101a2b] text-[#d9b66d] transition duration-300 group-hover:rotate-6 group-hover:bg-[#d9b66d] group-hover:text-[#101a2b]">
                      <Icon size={27} />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="overflow-hidden bg-[#f8f6f1] px-5 py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d31]">
              Connect With Our Firm
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Discuss Your Legal Concerns.
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Contact the office to discuss your situation and ask whether
              the firm may be able to assist. Each matter is different,
              and no particular outcome can be guaranteed.
            </p>
            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-[#997126]" size={21} />
              <p className="leading-7 text-gray-600">
                {FIRM.addressLine1}
                <br />
                {FIRM.addressLine2}
              </p>
            </div>
            <a
              href={FIRM.phoneHref}
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#997126] hover:underline"
            >
              <Phone size={18} /> {FIRM.phoneDisplay}
            </a>
          </Reveal>

          <Reveal direction="left">
            <div className="bg-[#101a2b] p-8 text-white shadow-xl sm:p-10">
              <Award className="text-[#d9b66d]" size={36} />
              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                Take the Next Step.
              </h3>
              <p className="mt-4 leading-7 text-white/70">
                Reach out to learn about the firm's practice areas and
                discuss possible next steps for your situation.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#d9b66d] px-6 py-4 font-bold text-[#101a2b] transition duration-300 hover:bg-white"
              >
                Contact Rahm Law Group <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="sr-only" aria-hidden="true">
        <Star size={1} />
      </div>
    </main>
  );
                      }
