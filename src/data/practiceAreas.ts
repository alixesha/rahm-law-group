export interface PracticeArea {
  slug: string;
  name: string;
  category: string;
  parent?: string;
  short: string;
  tagline: string;
  overview: string[];
  approach: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "personal-injury",
    name: "Personal Injury",
    category: "Personal Injury",
    short:
      "Serious injury cases handled with personal attention — car, truck, motorcycle, premises and wrongful-death claims.",
    tagline: "Full-service injury representation for the seriously injured.",
    overview: [
      "Rahm Law Group, APC represents people who have been hurt because someone else was careless. From the first phone call, Michael Rahm personally reviews the facts of your case, explains your rights in plain language, and builds a strategy around what you need to move forward — medical care, lost income, and accountability.",
      "The firm handles injury claims on a contingency fee basis: you pay no attorney's fee unless we recover money for you. Every case is prepared as if it will be tried to a jury, which is what insurance companies respect and what produces meaningful settlements.",
    ],
    approach: [
      "A thorough, independent investigation of the accident and your injuries",
      "Working with medical and accident-reconstruction experts who strengthen your claim",
      "Direct, honest communication — you always know where your case stands",
      "Trial-ready preparation that drives full-value settlements",
    ],
  },
  {
    slug: "animal-dog-bites",
    name: "Animal & Dog Bites",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "California holds dog owners responsible when their pets seriously injure people.",
    tagline: "Strict-liability claims that hold owners accountable.",
    overview: [
      "California is a strict-liability state for dog bites: the owner is responsible when their dog injures someone, in almost any setting, whether or not the dog ever showed aggression before. That legal advantage matters when medical bills, scarring and trauma pile up.",
      "Rahm Law Group, APC documents your injuries, identifies the owner's homeowner or renter insurance, and negotiates settlements that account for surgery, scarring and the fear a serious attack leaves behind — especially with children.",
    ],
    approach: [
      "Strict-liability claims under California's dog-bite statute",
      "Coordination with plastic surgeons and scar-revision specialists",
      "Claims against homeowner and renter insurance policies",
      "Sensitive handling of cases involving children",
    ],
  },
  {
    slug: "brain-injury",
    name: "Brain Injury",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "Concussion and traumatic brain injury cases that demand serious resources and patience.",
    tagline: "Invisible injuries proven with real evidence.",
    overview: [
      "Traumatic brain injuries are unlike other injuries: symptoms can be delayed, invisible and life-altering. Insurance companies routinely undervalue them because there may be nothing dramatic on a scan. Proving the real impact takes medical experts and a lawyer who listens carefully to you and your family.",
      "Michael Rahm works with neurologists, neuropsychologists and life-care planners to document how a TBI changes memory, mood, work and relationships — and fights for compensation that covers long-term care, not just today's bills.",
    ],
    approach: [
      "Collaboration with neurologists and neuropsychologists",
      "Claims built on functional impact, not just imaging results",
      "Life-care planning for long-term treatment needs",
      "Full accounting of lost earnings and diminished career capacity",
    ],
  },
  {
    slug: "car-accidents",
    name: "Car Accidents",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "Rear-end, intersection, hit-and-run and rideshare crashes across Los Angeles.",
    tagline: "Full compensation for crashes big and small.",
    overview: [
      "Car accidents are the most common serious-injury cases in Los Angeles — and the most commonly undervalued. Adjusters push quick, low offers before you understand the full extent of your injuries. Signing too early can leave you paying for future treatment out of your own pocket.",
      "Rahm Law Group, APC investigates the crash, preserves evidence like camera footage and vehicle data, handles the insurance companies for you, and pursues every available source of coverage, including uninsured-motorist claims.",
    ],
    approach: [
      "Rapid evidence preservation — video, photos, vehicle data and witnesses",
      "Full valuation of future medical care and lost earnings",
      "Uninsured and underinsured motorist claims when the other driver is not properly insured",
      "No fee unless we recover for you",
    ],
  },
  {
    slug: "construction-accidents",
    name: "Construction Accidents",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "Falls, scaffolding collapses, crane and heavy-equipment injuries on California job sites.",
    tagline: "Every responsible party, every source of recovery.",
    overview: [
      "Construction sites are governed by strict Cal/OSHA safety regulations, and violations of those rules are powerful evidence in an injury case. Falls from heights, scaffolding collapses, trench cave-ins, crane and equipment accidents cause catastrophic injuries — and multiple parties are often responsible.",
      "Beyond workers' compensation, third parties such as general contractors, property owners, equipment manufacturers and subcontractors can be held liable. Rahm Law Group, APC identifies every responsible party and every source of insurance.",
    ],
    approach: [
      "Claims against all responsible third parties, not just workers' comp",
      "Use of Cal/OSHA regulations and violation records as evidence",
      "Experts in construction safety, engineering and economics",
      "Serious-injury resources for catastrophic claims",
    ],
  },
  {
    slug: "motorcycle-accidents",
    name: "Motorcycle Accidents",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "Riders face biased insurers and devastating injuries — we level the playing field.",
    tagline: "Defeating rider bias with facts and physics.",
    overview: [
      "Motorcycle crashes cause some of the most severe injuries on the road, and riders are often blamed before anyone looks at the evidence. Insurers lean on stereotypes to reduce or deny valid claims.",
      "Michael Rahm counters with reconstruction experts, witness statements and the physics of the collision to establish what really happened, and pursues full compensation for road rash, fractures, surgeries and long-term rehabilitation.",
    ],
    approach: [
      "Accident reconstruction to defeat rider bias",
      "Full documentation of road rash, orthopedic and head injuries",
      "Helmet-injury analysis that preempts comparative-fault arguments",
      "Pursuit of every available insurance policy",
    ],
  },
  {
    slug: "premises-liability",
    name: "Premises Liability",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "Slip-and-fall, unsafe property and negligent-security claims across Los Angeles.",
    tagline: "Unsafe property has a responsible owner.",
    overview: [
      "Property owners in California must keep their premises reasonably safe — fixing hazards, warning visitors and providing adequate security in high-crime areas. When they don't, people get hurt: slip-and-falls, falling merchandise, stairway collapses, assaults in poorly lit parking structures.",
      "These cases turn on evidence that disappears quickly. Rahm Law Group, APC moves fast to obtain inspection records, maintenance logs, surveillance video and incident reports before they are lost or destroyed.",
    ],
    approach: [
      "Immediate preservation of surveillance video and maintenance records",
      "Building-code and ADA violations used to establish negligence",
      "Negligent-security claims for foreseeable assaults",
      "Thorough documentation of every stage of your recovery",
    ],
  },
  {
    slug: "truck-accidents",
    name: "Truck Accidents",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "Collisions with commercial trucks — cases built on federal safety rules and corporate records.",
    tagline: "Going toe-to-toe with the trucking company's defense team.",
    overview: [
      "Collisions with 80,000-pound commercial trucks are devastating, and the trucking company's defense team starts working immediately. Federal rules govern driver hours, maintenance, drug testing and load securement — and violations of those rules often explain why the crash happened.",
      "Rahm Law Group, APC sends preservation letters from day one to secure driver logs, vehicle data, maintenance records and dash-camera footage before they can be overwritten or destroyed.",
    ],
    approach: [
      "Immediate preservation letters to the trucking company",
      "Analysis of hours-of-service records and vehicle data",
      "Claims against the driver, carrier, broker and loader",
      "Catastrophic-injury resources and full trial preparation",
    ],
  },
  {
    slug: "wrongful-death",
    name: "Wrongful Death",
    category: "Personal Injury",
    parent: "personal-injury",
    short: "Compassionate, determined advocacy for families who have lost a loved one.",
    tagline: "Accountability for families facing an unbearable loss.",
    overview: [
      "No settlement can replace a spouse, parent or child. But California law allows families to recover for the loss of financial support, companionship and guidance — and holding the responsible party accountable matters to a family's ability to move forward.",
      "Rahm Law Group, APC handles wrongful-death claims arising from fatal crashes, unsafe property, dog attacks and other negligence, with the patience and discretion grieving families deserve.",
    ],
    approach: [
      "Compassionate, responsive guidance through every step",
      "Economist-supported calculations of lifetime losses",
      "Claims for statutory heirs and dependents",
      "No fee unless we recover for your family",
    ],
  },
  {
    slug: "criminal-law",
    name: "Criminal Law",
    category: "Criminal Law",
    short:
      "Focused criminal defense — from drug and gun charges to fraud, theft, sex crimes and violent felonies.",
    tagline: "Strategic defense for people whose freedom and future are on the line.",
    overview: [
      "When you are under investigation or facing charges, everything is at stake: your freedom, your record, your family and your career. Rahm Law Group, APC defends clients throughout Los Angeles County against misdemeanor and felony charges, challenging the government's evidence at every stage.",
      "Michael Rahm believes every client deserves a defense built on facts, not fear. He reviews police reports, video, forensic evidence and witness statements, files strategic motions to suppress illegally obtained evidence, and negotiates from a position of strength — always ready to take a case to trial when that is the right call.",
    ],
    approach: [
      "Early intervention — the sooner an attorney is involved, the more options you have",
      "Challenging unlawful searches, seizures and interrogations",
      "Pursuing dismissals, diversions and reduced charges wherever the evidence allows",
      "Clear guidance on every plea and trial decision, with no pressure",
    ],
  },
  {
    slug: "criminal-appeals",
    name: "Criminal Appeals",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Challenging convictions and sentences in the California appellate courts.",
    tagline: "A conviction is not the end of the road.",
    overview: [
      "A conviction is not the end of the road. Trial errors — improper evidence, flawed jury instructions, ineffective assistance — can be raised on appeal, and sentencing errors can often be corrected even after a plea.",
      "Rahm Law Group, APC prepares appellate briefs grounded in the trial record and California case law, and identifies post-conviction options such as habeas petitions and resentencing under recent reforms.",
    ],
    approach: [
      "Full review of the trial record for preserved and unpreserved error",
      "Petitions for writ of habeas corpus where appropriate",
      "Resentencing petitions under recent California reforms",
      "Clear, realistic assessment of your appellate options",
    ],
  },
  {
    slug: "drug-crimes",
    name: "Drug Crimes",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Defense of possession, sales and manufacturing charges — from diversion to dismissal.",
    tagline: "The defense usually starts with the search.",
    overview: [
      "California treats drug charges with increasing nuance: simple possession can often be resolved through diversion and treatment, while possession for sale and manufacturing allegations carry serious felony exposure.",
      "The defense usually starts with the search. If police found the drugs through an unlawful detention or search, the evidence can be suppressed and the case dismissed. Michael Rahm examines every report and video for the moment the constitutional line was crossed.",
    ],
    approach: [
      "Suppression motions targeting unlawful searches and detentions",
      "Drug-diversion programs in lieu of conviction",
      "Challenging possession-for-sale allegations built on weak inference",
      "Expungement and record relief after the case ends",
    ],
  },
  {
    slug: "expungement",
    name: "Expungement",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Clearing old convictions so they stop following you through jobs, licenses and housing.",
    tagline: "A second chance, petitioned and won.",
    overview: [
      "An old conviction can block job offers, professional licenses and housing long after the sentence ends. California's expungement and record-sealing laws can dismiss the conviction, and in some cases seal the arrest record entirely.",
      "Rahm Law Group, APC evaluates your record, identifies every available remedy — expungement, early termination of probation, certificates of rehabilitation, record sealing — and handles the petition from start to finish.",
    ],
    approach: [
      "Petitions to dismiss convictions after completed probation",
      "Early termination of probation where eligible",
      "Record sealing for qualifying arrests and juvenile matters",
      "Guidance on what employers and licensing boards will still see",
    ],
  },
  {
    slug: "fraud",
    name: "Fraud",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Defense of theft-by-deception, insurance and white-collar fraud allegations.",
    tagline: "A defense that speaks the language of documents.",
    overview: [
      "Fraud cases hinge on intent — and prosecutors build them from thousands of pages of financial records. Insurance fraud, welfare fraud, identity theft and investment-fraud allegations require a defense that reads the documents as fluently as the government does.",
      "Michael Rahm works with forensic accountants to trace where the alleged scheme does and doesn't hold up, and challenges intent evidence that often depends on inference rather than fact.",
    ],
    approach: [
      "Forensic-accounting review of the government's financial case",
      "Challenging specific-intent evidence",
      "Negotiated resolutions and restitution where the facts support it",
      "Protection of professional licenses during the case",
    ],
  },
  {
    slug: "gun-crimes",
    name: "Gun Crimes",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Firearms possession, concealed-carry and weapons-enhancement charges.",
    tagline: "Firearms charges demand a firearms-literate defense.",
    overview: [
      "California's firearms laws are among the most complex in the country, and gun allegations — possession by a prohibited person, unregistered assault weapons, carrying concealed — carry mandatory prison exposure when enhancements attach.",
      "The defense starts with the search and the definitions. Many cases turn on whether the recovery was lawful, whether the item meets the legal definition of the charged weapon, and whether the government can prove knowledge and possession.",
    ],
    approach: [
      "Fourth Amendment challenges to gun recoveries",
      "Definitional defenses under California's weapons statutes",
      "Fighting firearm enhancements that drive prison exposure",
      "Record relief where available",
    ],
  },
  {
    slug: "internet-crimes",
    name: "Internet Crimes",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Cyber fraud, hacking, solicitation and online-offense defense.",
    tagline: "Digital evidence tested by independent experts.",
    overview: [
      "Internet crimes are prosecuted aggressively by specialized units, and allegations often rest on digital forensics, chat logs and IP attribution. Wrong attribution — shared networks, spoofed accounts, hacked devices — is a genuine defense in many of these cases.",
      "The firm engages its own digital-forensics experts to test the government's chain of custody and attribution, and defends clients against charges ranging from phishing and hacking to online solicitation allegations.",
    ],
    approach: [
      "Independent digital-forensics analysis of the evidence",
      "Challenging attribution, chain of custody and search warrants",
      "Defending against enhancements based on alleged loss amounts",
      "Discreet handling of sensitive personal matters",
    ],
  },
  {
    slug: "sex-crimes",
    name: "Sex Crimes",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Vigorous, discreet defense of allegations that can define the rest of your life.",
    tagline: "Early, discreet, relentless defense.",
    overview: [
      "Sex-crime allegations carry registration requirements and prison exposure that make early, strategic defense critical. These cases are often decided long before trial — on the strength of the investigation, the motions and the credibility work done in the first months.",
      "Michael Rahm handles these matters with total discretion, engaging forensic experts to challenge the evidence and insisting the government prove its case rather than rely on assumption.",
    ],
    approach: [
      "Early, discreet intervention before charges are filed",
      "Forensic and digital-evidence challenges",
      "Fighting registration requirements and enhancements",
      "Jury trials when the accusation cannot be fairly resolved",
    ],
  },
  {
    slug: "theft",
    name: "Theft",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Petty theft, grand theft, shoplifting and burglary defense.",
    tagline: "First chances and strong defenses for theft charges.",
    overview: [
      "Theft charges range from infractions to felonies depending on the value and circumstances alleged — and the difference between a misdemeanor and a felony often comes down to evidence the prosecution has to prove, not just assert.",
      "Many first-offense theft cases can be resolved with diversion and dismissed. Rahm Law Group, APC pursues those outcomes and challenges identification, intent and value evidence where it is weak.",
    ],
    approach: [
      "Diversion and civil-compromise resolutions for first offenses",
      "Challenging value allegations that drive felony charging",
      "Suppression of evidence from unlawful stops",
      "Expungement after successful resolution",
    ],
  },
  {
    slug: "violent-crimes",
    name: "Violent Crimes",
    category: "Criminal Law",
    parent: "criminal-law",
    short: "Assault, battery, robbery and homicide defense at every level.",
    tagline: "Preparation and trial skill where it matters most.",
    overview: [
      "Violent-crime charges — assault with a deadly weapon, robbery, domestic violence, homicide — expose clients to strike sentences under California's Three Strikes law. These are the cases where preparation and trial skill matter most.",
      "The defense examines self-defense claims, identification evidence, forensics and witness credibility with total rigor, and prepares every case as if it will be tried.",
    ],
    approach: [
      "Self-defense and defense-of-others strategies where the facts support them",
      "Challenging eyewitness identification and lineup procedures",
      "Forensic review of injury and ballistics evidence",
      "Three-Strikes mitigation and negotiated alternatives",
    ],
  },
  {
    slug: "dui-dwi",
    name: "DUI & DWI",
    category: "DUI & DWI",
    short:
      "Defense against DUI and drunk-driving charges throughout Los Angeles — from the first court date through DMV hearings.",
    tagline: "Protecting your license, your record and your future.",
    overview: [
      "A DUI charge in California carries two separate battles: the criminal case and the DMV proceeding that can suspend your license. Rahm Law Group, APC handles both, meeting every deadline and attacking the weaknesses in the traffic stop, the field sobriety tests and the chemical testing.",
      "First-offense and repeat DUI charges are defensible. Breath machines fail, blood samples are mishandled, and stops are made without legal cause. Michael Rahm examines every link in the chain, and pursues reduced charges, diversion or dismissal whenever the evidence supports it.",
    ],
    approach: [
      "Immediate DMV hearing requests to protect your driving privilege",
      "Scrutiny of breath and blood testing equipment, calibration and procedures",
      "Challenging the legality of the stop and the arrest",
      "Negotiating reduced charges and alternative sentences where possible",
    ],
  },
  {
    slug: "employment-law",
    name: "Employment Law",
    category: "Employment Law",
    short:
      "Standing up for employees — discrimination, harassment, unpaid wages, retaliation and wrongful termination.",
    tagline: "When work treats you unfairly, we fight back.",
    overview: [
      "California employees enjoy the strongest workplace protections in the country — but employers don't follow them unless someone holds them accountable. Rahm Law Group, APC represents employees in claims for discrimination, harassment, retaliation, wrongful termination and unpaid wages.",
      "The firm offers honest, practical advice about your options: internal complaints, agency filings with the Civil Rights Department, the EEOC or the Labor Commissioner, negotiation, or litigation.",
    ],
    approach: [
      "Careful evaluation of your evidence before you sign anything or walk away",
      "Demand letters and settlement negotiations that get results without a lawsuit",
      "Representing you before the Labor Commissioner, CRD and EEOC",
      "Litigating wage-and-hour, discrimination and wrongful-termination claims",
    ],
  },
  {
    slug: "employee-benefits",
    name: "Employee Benefits",
    category: "Employment Law",
    parent: "employment-law",
    short: "Enforcing ERISA-governed benefits — pensions, health, disability and life insurance.",
    tagline: "Denied benefits are challengeable — on strict deadlines.",
    overview: [
      "When an employer or insurance company denies a pension, health, disability or life-insurance benefit, ERISA provides a path to challenge that decision — but on strict deadlines and with a record built during the administrative appeal.",
      "Rahm Law Group, APC prepares the administrative record carefully from day one, because in most ERISA cases that record is what the court will review. Deadlines are short and unforgiving; early legal help matters.",
    ],
    approach: [
      "ERISA appeals of denied disability, health and pension benefits",
      "Building the administrative record before litigation",
      "Statutory penalties for claims-processing violations",
      "Recovery of attorney's fees where the law allows",
    ],
  },
  {
    slug: "employment-contracts",
    name: "Employment Contracts",
    category: "Employment Law",
    parent: "employment-law",
    short: "Reviewing, negotiating and litigating employment agreements and severance offers.",
    tagline: "Never sign without knowing what it means.",
    overview: [
      "Employment agreements shape everything from your compensation to where you can work next. Offer letters, bonus plans, non-compete and non-solicitation clauses and severance agreements deserve careful review before you sign — California voids most non-compete clauses, but employers keep trying.",
      "The firm negotiates improved terms for executives and employees, challenges unlawful restrictive covenants, and litigates disputes over commissions, bonuses and earned compensation.",
    ],
    approach: [
      "Pre-signing review of offers, comp plans and severances",
      "Challenging void non-compete and illegal restrictive covenants",
      "Commission and bonus disputes under California wage law",
      "Negotiating stronger severance and release terms",
    ],
  },
  {
    slug: "employment-discrimination",
    name: "Employment Discrimination",
    category: "Employment Law",
    parent: "employment-law",
    short: "Claims for discrimination based on race, sex, age, disability, religion and more.",
    tagline: "Discrimination is rarely announced — it is proven.",
    overview: [
      "California's Fair Employment and Housing Act prohibits discrimination based on protected characteristics — race, sex, pregnancy, age, disability, religion, national origin and more. Discrimination is rarely announced; it shows up in patterns of discipline, pay, promotion and termination.",
      "Rahm Law Group, APC evaluates the pattern behind the decision, files with the CRD and EEOC where required, and litigates through settlement or trial. Administrative deadlines are short — speak to an attorney early.",
    ],
    approach: [
      "FEHA claims through the Civil Rights Department",
      "Federal Title VII, ADA and ADEA claims",
      "Discovery of comparator and statistical evidence",
      "Settlement or trial based on what the evidence supports",
    ],
  },
  {
    slug: "erisa",
    name: "ERISA",
    category: "Employment Law",
    parent: "employment-law",
    short: "ERISA and employee-benefit disputes — short deadlines demand early action.",
    tagline: "Federal benefits law, decoded and enforced.",
    overview: [
      "ERISA governs employer benefit plans — and its deadlines and appeal procedures trip up unrepresented employees constantly. A denied long-term-disability claim, for example, must usually be appealed within 180 days.",
      "The firm handles ERISA benefit denials, fiduciary-breach claims and interference with protected rights, and builds appeals that survive judicial review.",
    ],
    approach: [
      "Long-term and short-term disability denial appeals",
      "Health, life and pension benefit claims",
      "Fiduciary-breach and interference claims",
      "Federal-court litigation of unresolved denials",
    ],
  },
  {
    slug: "overtime-unpaid-wages",
    name: "Overtime & Unpaid Wages",
    category: "Employment Law",
    parent: "employment-law",
    short: "Unpaid overtime, missed breaks, minimum-wage violations and final-pay claims.",
    tagline: "You earned it. We collect it.",
    overview: [
      "California wage law is among the most protective in the nation: daily overtime after eight hours, meal and rest breaks, accurate wage statements and waiting-time penalties. Employers misclassify employees as exempt or as independent contractors to avoid paying it.",
      "Rahm Law Group, APC calculates what you are owed — often including penalties and interest — and pursues claims through the Labor Commissioner or court.",
    ],
    approach: [
      "Overtime and double-time claims, including misclassification",
      "Meal- and rest-break premium pay",
      "Waiting-time and wage-statement penalties",
      "Challenging independent-contractor misclassification",
    ],
  },
  {
    slug: "sexual-harassment",
    name: "Sexual Harassment",
    category: "Employment Law",
    parent: "employment-law",
    short: "Holding harassers and the employers who enable them accountable.",
    tagline: "Discreet, determined advocacy for employees.",
    overview: [
      "Sexual harassment — unwanted advances, comments, images, or a workplace that punishes you for refusing — is illegal under both California and federal law. Retaliation for reporting it is a separate, independent violation.",
      "The firm handles harassment claims with the discretion these matters require, building the documentary record, filing with the CRD and EEOC on time, and pursuing meaningful settlements or verdicts.",
    ],
    approach: [
      "Hostile-work-environment and quid-pro-quo claims",
      "Retaliation claims for reporting or refusing harassment",
      "Claims against individuals as well as employers",
      "Confidential, respectful handling of sensitive facts",
    ],
  },
  {
    slug: "whistleblower",
    name: "Whistleblower",
    category: "Employment Law",
    parent: "employment-law",
    short: "Protection for employees who report illegality, fraud or safety violations.",
    tagline: "Speaking up should never cost you your job.",
    overview: [
      "California protects employees who report legal violations — to a supervisor, to a government agency, or by refusing to participate in something unlawful. Retaliation in the weeks after a protected report creates a powerful presumption.",
      "Rahm Law Group, APC represents employees facing demotion, termination or a hostile response after speaking up, and pursues reinstatement, back pay and damages.",
    ],
    approach: [
      "California Labor Code retaliation claims",
      "Guidance on reporting fraud and safety violations",
      "Reinstatement, back pay and punitive damages",
      "Careful documentation of the protected-activity timeline",
    ],
  },
  {
    slug: "wrongful-termination",
    name: "Wrongful Termination",
    category: "Employment Law",
    parent: "employment-law",
    short: "Fired for an illegal reason? California law gives you real remedies.",
    tagline: "At-will never means without limits.",
    overview: [
      "California is an at-will state — but at-will employment never permits firing someone for a discriminatory reason, in retaliation for protected activity, for reporting illegal conduct, or in violation of an implied or written agreement.",
      "The firm evaluates terminations against the full landscape of California protections, identifies the strongest claims, and pursues them through negotiation, agency filings or litigation.",
    ],
    approach: [
      "Discrimination, retaliation and public-policy claims",
      "Implied-contract and breach-of-written-agreement claims",
      "Severance negotiation before claims are signed away",
      "Punitive damages where the conduct warrants them",
    ],
  },
];

export const mainCategories = practiceAreas.filter((area) => !area.parent);

export const getArea = (slug: string) => practiceAreas.find((area) => area.slug === slug);

export const subAreasOf = (parentSlug: string) =>
  practiceAreas.filter((area) => area.parent === parentSlug);

/** Sibling areas to cross-link on a detail page. */
export const relatedAreasOf = (area: PracticeArea): PracticeArea[] =>
  area.parent ? subAreasOf(area.parent).filter((a) => a.slug !== area.slug) : subAreasOf(area.slug);
