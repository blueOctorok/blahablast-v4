/**
 * Everything the page says about Sam, kept apart from how it is drawn.
 * To change wording, a link or a list, edit this file and no component.
 */

export const profile = {
  name: "Sam Blaha",
  location: "Westlake, Ohio",
  pitch:
    "I build products end to end: web apps, zero-knowledge credentials on Midnight, and applications in Flutter.",
  email: "blahasam@gmail.com",
  github: "https://github.com/blueOctorok",
  /** Files in /public. Replacing a file under the same name updates the site. */
  resume: "/Resume.pdf",
  certificate: "/blockchain-cert.pdf",
};

export const disciplines = [
  {
    name: "Web",
    detail: "Next.js, React and TypeScript, from the database to the deploy.",
  },
  {
    name: "Blockchain",
    detail:
      "Zero-knowledge proofs on Midnight, and smart contracts in Solidity and on Cardano.",
  },
  {
    name: "Flutter",
    detail:
      "Application development in Dart, for mobile and desktop.",
  },
];

export const bio = [
  "I'm a full-stack developer, and I have written software professionally since 2021. I work across the whole product: the interface, the API, the database and, since 2025, the chain underneath.",
  "Today I'm a software architect at Pace Drivers. Provven, built for them, is where I'm co-founder, lead developer and the architect who designed it. I also build Riffster, a practice app for bass and guitar in Flutter.",
  "Before software I worked in IT, and before that I served in the U.S. Navy.",
];

export const toolGroups = [
  {
    name: "Web",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "PHP / Laravel",
      "REST APIs",
    ],
  },
  {
    name: "Blockchain",
    tools: [
      "Midnight",
      "Compact",
      "Zero-knowledge proofs",
      "Solidity",
      "Cardano",
      "MeshJS",
      "ERC-20 / ERC-721",
    ],
  },
  {
    name: "Flutter",
    tools: ["Flutter", "Dart", "iOS", "Android", "Windows"],
  },
];

/** One row of a fact list: a name, what it was, and an optional link. */
export type Fact = {
  label: string;
  detail: string;
  link?: { label: string; href: string };
};

/** No dates on purpose: the resume carries them, and this list cannot go stale. */
export const companies: Fact[] = [
  { label: "Pace Drivers", detail: "Software architect" },
  { label: "Flux Point Studios", detail: "Blockchain developer" },
  { label: "MRI Software", detail: "Full-stack developer, PHP and Laravel" },
  { label: "We Can Code IT", detail: "Lead Java and JavaScript developer" },
  { label: "PNC Bank", detail: "Software developer" },
];

export const background: Fact[] = [
  {
    label: "Dapp University",
    detail: "Blockchain Developer Mentorship, graduated June 2025",
    link: { label: "Certificate", href: profile.certificate },
  },
  { label: "We Can Code IT", detail: "Full-stack C# bootcamp, 2020" },
  {
    label: "Cleveland State University",
    detail: "Coursework in networking software and computer science",
  },
  {
    label: "U.S. Navy",
    detail: "Aviation ordnance, USS Ronald Reagan, 2007 to 2011",
  },
];
