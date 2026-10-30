import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, Scale, X } from "lucide-react";
import { FIRM } from "@/data/firm";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-shadow",
        scrolled && "shadow-lg shadow-navy/10",
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Scale className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-wide text-foreground">
              Rahm Law Group<span className="text-gold">,</span> APC
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Beverly Hills &middot; California
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className={({ isActive }) =>
                cn(
                  "border-b-2 py-1 text-sm font-medium tracking-wide transition-colors",
                  isActive
                    ? "border-gold text-foreground"
                    : "border-transparent text-muted-foreground hover:border-gold/40 hover:text-foreground",
                )
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={FIRM.phoneHref}
          className="hidden items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft md:inline-flex"
        >
          <Phone className="size-4" aria-hidden="true" />
          {FIRM.phoneDisplay}
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex size-10 items-center justify-center rounded-sm border text-foreground md:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-background md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={({ isActive }) =>
                  cn(
                    "rounded-sm px-3 py-3 text-sm font-medium",
                    isActive ? "bg-secondary text-foreground" : "text-muted-foreground",
                  )
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={FIRM.phoneHref}
              className="mt-2 mb-3 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              Get Help Now &mdash; {FIRM.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
