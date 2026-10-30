import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAVY = "#1c4e93";
const NAVY_DARK = "#163b73";

/* Credential badges recreated as vector artwork from the firm's ratings and memberships. */

export function AvvoRatingBadge() {
  return (
    <svg viewBox="0 0 180 212" className="h-30 w-auto" role="img" aria-label="Avvo Rating 8.0 — Michael F. Rahmanou, Top Attorney">
      <path d="M30 132 L10 146 L30 154 Z" fill={NAVY_DARK} />
      <path d="M150 132 L170 146 L150 154 Z" fill={NAVY_DARK} />
      <rect x="26" y="124" width="128" height="42" rx="4" fill={NAVY} />
      <path d="M30 12 H150 V124 C150 154 122 170 90 184 C58 170 30 154 30 124 Z" fill="#ffffff" stroke={NAVY} strokeWidth="7" />
      <text x="90" y="52" textAnchor="middle" fontSize="18" fontStyle="italic" fontWeight="700" fill={NAVY}>Avvo Rating</text>
      <text x="90" y="104" textAnchor="middle" fontSize="54" fontWeight="800" fill="#d0021b">8.0</text>
      <text x="90" y="142" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#ffffff">Michael F. Rahmanou</text>
      <text x="90" y="158" textAnchor="middle" fontSize="12" fill="#ffffff">Top Attorney</text>
    </svg>
  );
}

export function SuperLawyersBadge() {
  return (
    <svg viewBox="0 0 210 84" className="h-20 w-auto" role="img" aria-label="Rated by Super Lawyers">
      <rect x="4" y="8" width="202" height="68" rx="6" fill="none" stroke="#f6a01a" strokeWidth="3" />
      <text x="24" y="32" fontSize="12" letterSpacing="4" fill="#7a7a7a">RATED BY</text>
      <text x="24" y="62" fontSize="27" fontStyle="italic" fontWeight="600" fill="#4a4a4a" fontFamily="Georgia, serif">Super Lawyers</text>
    </svg>
  );
}

export function StateBarBadge() {
  return (
    <svg viewBox="0 0 170 170" className="h-28 w-auto" role="img" aria-label="Member, The State Bar of California">
      <circle cx="85" cy="85" r="78" fill="#ffffff" stroke="#8d8d8d" strokeWidth="5" />
      <circle cx="85" cy="85" r="56" fill="none" stroke="#8d8d8d" strokeWidth="1.5" />
      <defs>
        <path id="seal-top-arc" d="M 85,85 m -66,0 a 66,66 0 1 1 132,0" />
        <path id="seal-bottom-arc" d="M 85,85 m -60,0 a 60,60 0 1 0 120,0" />
      </defs>
      <text fontSize="10.5" letterSpacing="2.2" fill="#6f6f6f" fontWeight="600">
        <textPath href="#seal-top-arc" startOffset="50%" textAnchor="middle">THE STATE BAR OF CALIFORNIA</textPath>
      </text>
      <text fontSize="9" letterSpacing="2" fill="#8d8d8d">
        <textPath href="#seal-bottom-arc" startOffset="50%" textAnchor="middle">JULY 29, 1927</textPath>
      </text>
      <g stroke="#6f6f6f" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <line x1="85" y1="50" x2="85" y2="104" />
        <line x1="57" y1="58" x2="113" y2="58" />
        <line x1="57" y1="58" x2="45" y2="72" />
        <line x1="57" y1="58" x2="69" y2="72" />
        <path d="M33 72 A12 12 0 0 0 57 72" />
        <line x1="113" y1="58" x2="101" y2="72" />
        <line x1="113" y1="58" x2="125" y2="72" />
        <path d="M89 72 A12 12 0 0 0 113 72" />
        <line x1="72" y1="104" x2="98" y2="104" />
        <line x1="76" y1="110" x2="94" y2="110" />
      </g>
      <polygon points="85,118 86.5,122.3 91.5,122.3 87.5,125.2 89,129.5 85,126.8 81,129.5 82.5,125.2 78.5,122.3 83.5,122.3" fill="#8d8d8d" />
    </svg>
  );
}

export function AvvoClientsChoiceBadge() {
  return (
    <svg viewBox="0 0 170 196" className="h-30 w-auto" role="img" aria-label="Avvo Clients' Choice — Michael F. Rahmanou">
      <circle cx="85" cy="78" r="71" fill="#ffffff" stroke={NAVY} strokeWidth="7" />
      <g transform="translate(85,56)">
        <path d="M0,-24 C4,-9 9,-4 24,0 C9,4 4,9 0,24 C-4,9 -9,4 -24,0 C-9,-4 -4,-9 0,-24 Z" fill="#00a5b5" />
        <path d="M0,-15 C2.5,-5.5 5.5,-2.5 15,0 C5.5,2.5 2.5,5.5 0,15 C-2.5,5.5 -5.5,2.5 -15,0 C-5.5,-2.5 -2.5,-5.5 0,-15 Z" fill="#f5821f" />
        <circle cx="0" cy="0" r="4.5" fill={NAVY} />
      </g>
      <text x="85" y="102" textAnchor="middle" fontSize="23" fontWeight="800" fill={NAVY}>Avvo</text>
      <text x="85" y="122" textAnchor="middle" fontSize="14" fontWeight="700" fill="#f5821f">{`Clients' Choice`}</text>
      <rect x="28" y="158" width="114" height="27" rx="4" fill={NAVY} />
      <text x="85" y="176" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">Michael F. Rahmanou</text>
    </svg>
  );
}

export function MartindaleBadge() {
  return (
    <svg viewBox="0 0 280 100" className="h-22 w-auto" role="img" aria-label="Martindale-Hubbell AV Preeminent, 2018">
      <rect x="4" y="8" width="62" height="62" rx="8" fill="#c8102e" />
      <text x="35" y="52" textAnchor="middle" fontSize="29" fontWeight="800" fontStyle="italic" fill="#ffffff">AV</text>
      <text x="82" y="26" fontSize="14" fontStyle="italic" fill="#8a8a8a" fontFamily="Georgia, serif">Martindale-Hubbell</text>
      <text x="82" y="56" fontSize="21" fontWeight="800" letterSpacing="1" fill="#25313d">PREEMINENT</text>
      <text x="82" y="68" fontSize="8" fill="#6a6a6a" />
      <rect x="4" y="76" width="212" height="17" fill="#1c2b3a" />
      <text x="12" y="88" fontSize="8.5" fill="#ffffff">Peer Rated for Highest Level of Professional Excellence</text>
      <rect x="220" y="76" width="34" height="17" fill="#c9a227" />
      <text x="237" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ffffff">2018</text>
    </svg>
  );
}

export function LacbaBadge() {
  return (
    <svg viewBox="0 0 210 78" className="h-20 w-auto" role="img" aria-label="Los Angeles County Bar Association">
      <text x="105" y="46" textAnchor="middle" fontSize="42" fontWeight="800" letterSpacing="2" fill="#1d1d1d">LACBA</text>
      <text x="105" y="66" textAnchor="middle" fontSize="9.5" letterSpacing="1.4" fill="#4d4d4d">LOS ANGELES COUNTY BAR ASSOCIATION</text>
    </svg>
  );
}

export function BhbaBadge() {
  return (
    <svg viewBox="0 0 180 116" className="h-28 w-auto" role="img" aria-label="Beverly Hills Bar Association — Lead. Advocate. Serve.">
      <text x="90" y="30" textAnchor="middle" fontSize="25" fill="#1e3a5f" fontFamily="Georgia, serif">Beverly</text>
      <text x="90" y="56" textAnchor="middle" fontSize="25" fill="#1e3a5f" fontFamily="Georgia, serif">Hills</text>
      <text x="90" y="84" textAnchor="middle" fontSize="32" fontWeight="700" fill="#3b6fa0" fontFamily="Georgia, serif">Bar</text>
      <text x="90" y="99" textAnchor="middle" fontSize="13" fill="#1e3a5f" fontFamily="Georgia, serif">Association</text>
      <text x="90" y="111" textAnchor="middle" fontSize="8.5" fontStyle="italic" fill="#5b7ba0" fontFamily="Georgia, serif">Lead. Advocate. Serve.</text>
    </svg>
  );
}

export interface BadgeEntry {
  id: string;
  label: string;
  node: ReactNode;
}

export const badgeList: BadgeEntry[] = [
  { id: "avvo-rating", label: "Avvo Rating 8.0 — Top Attorney", node: <AvvoRatingBadge /> },
  { id: "super-lawyers", label: "Rated by Super Lawyers", node: <SuperLawyersBadge /> },
  { id: "state-bar", label: "Member, The State Bar of California", node: <StateBarBadge /> },
  { id: "avvo-clients", label: "Avvo Clients' Choice", node: <AvvoClientsChoiceBadge /> },
  { id: "martindale", label: "Martindale-Hubbell AV Preeminent", node: <MartindaleBadge /> },
  { id: "lacba", label: "Los Angeles County Bar Association", node: <LacbaBadge /> },
  { id: "bhba", label: "Beverly Hills Bar Association", node: <BhbaBadge /> },
];

export function BadgeCard({ badge, className }: { badge: BadgeEntry; className?: string }) {
  return (
    <div className={cn("badge-card", className)} title={badge.label}>
      {badge.node}
    </div>
  );
}
