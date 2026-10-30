import { Link } from "@tanstack/react-router";
import { Phone, Scale } from "lucide-react";
import { FIRM } from "@/data/firm";
import { mainCategories } from "@/data/practiceAreas";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-sm border border-gold/40 text-gold">
              <Scale className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg font-bold tracking-wide">{FIRM.name}</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/60">
                Beverly Hills &middot; California
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/70">
            Trial-ready representation for the injured, the accused and employees facing injustice
            across Los Angeles County. Free initial consultation.
          </p>
          <a
            href={FIRM.phoneHref}
            className="mt-5 inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
          >
            <Phone className="size-4" aria-hidden="true" />
            {FIRM.phoneDisplay}
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Practice Areas</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
            {mainCategories.map((area) => (
              <li key={area.slug}>
                <Link to="/practice-areas/$slug" params={{ slug: area.slug }} className="transition-colors hover:text-gold">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Office</h3>
          <address className="mt-4 space-y-1 text-sm not-italic text-ivory/75">
            <p>{FIRM.addressLine1}</p>
            <p>{FIRM.addressLine2}</p>
          </address>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
            <li>
              <Link to="/about" className="transition-colors hover:text-gold">About the Firm</Link>
            </li>
            <li>
              <Link to="/faq" className="transition-colors hover:text-gold">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-gold">Contact &amp; Directions</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <p className="text-xs leading-relaxed text-ivory/55">
            The information on this website is for general information purposes only. Nothing on this
            site should be taken as legal advice for any individual case or situation. This information
            is not intended to create, and receipt or viewing does not constitute, an
            attorney-client relationship.
          </p>
          <p className="mt-3 text-xs text-ivory/55">
            &copy; {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
