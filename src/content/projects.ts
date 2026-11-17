/**
 * The projects on the page, as data. Adding or reordering a project is an
 * edit to this file; the components draw whatever is listed here.
 */

/**
 * What a project shows: a still image, or a silent clip.
 *
 * This is a "discriminated union": two shapes that share one field, `kind`.
 * Once code checks `kind`, TypeScript knows which of the other fields exist,
 * so a clip can never be drawn with an image's fields by mistake.
 */
export type Media =
  | { kind: "image"; src: string; width: number; height: number; alt: string }
  | {
      kind: "video";
      /** The file in /public/media, without its ending. The still has the same name. */
      name: string;
      width: number;
      height: number;
      /** What the clip shows, for someone who cannot see it. */
      label: string;
    };

export type Project = {
  name: string;
  /** The small label above the name: what kind of work this is. */
  kind: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Left out when the project has no live site to visit. */
  link?: { label: string; href: string };
  media: Media;
};

export const featuredProjects: Project[] = [
  {
    name: "Provven",
    kind: "Flagship",
    role: "Co-founder, lead developer and architect",
    summary:
      "Provven lets a truck driver build their resume, employment history and credentials once, as a Career Card they own, and reuse it for every job. It is built on Midnight, a privacy-first blockchain, and uses zero-knowledge proofs for selective disclosure: an employer can confirm a fact is true without seeing the document behind it.",
    highlights: [
      "A driver shares a verified fact and keeps the file it came from.",
      "A Career Card is built from blocks, such as a resume, a CDL or a DOT application, and is live from the first one.",
      "Facts from licensed screeners carry a badge. Self-reported entries stay labeled as the driver's own.",
      "No wallets, seed phrases or tokens. The cryptography stays out of the user's way.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Midnight",
      "Compact",
    ],
    link: { label: "provven.com", href: "https://provven.com" },
    media: {
      kind: "image",
      src: "/media/provven-home.png",
      width: 2880,
      height: 1744,
      alt: "The Provven homepage. A sample Career Card lists which facts are on file and which stay visible only to the driver.",
    },
  },
  {
    name: "Riffster",
    kind: "In development",
    role: "Designer and developer",
    summary:
      "Riffster is a practice app for bass and guitar. A tab scrolls sideways along a fretboard into a playhead, and the app listens through a cable and marks each note on time, early, late or missed. An early Windows build is available to download.",
    highlights: [
      "A pluck and pitch detector written for the instrument's range, with timing corrected for each input's delay.",
      "A native C++ audio thread plays the instrument through the speakers while Dart reads the pitch.",
      "Opens Guitar Pro files and scrolls the part you choose.",
      "No account and no internet needed to practice.",
    ],
    stack: ["Flutter", "Dart", "C++", "alphaTab"],
    link: { label: "riffster.xyz", href: "https://riffster.xyz" },
    media: {
      kind: "video",
      name: "app-run",
      width: 1896,
      height: 874,
      label:
        "Riffster playing a bass warm-up. Notes scroll along a fretboard toward a gold playhead and turn green when played on time.",
    },
  },
];

export const clientProjects: Project[] = [
  {
    name: "ShardSwap",
    kind: "Client work",
    role: "Built for Flux Point Studios",
    summary:
      "A peer-to-peer token marketplace on Cardano. Traders swap assets directly between wallets through a smart contract, and holders of the TALOS token unlock an AI analytics dashboard.",
    highlights: [
      "Wallet connection for Nami and Eternl through the CIP-30 standard.",
      "Offers and swaps through Maestro's Managed Contracts API.",
    ],
    stack: ["Next.js", "React", "MeshJS", "Cardano"],
    // No link: shard-swap.xyz stopped resolving (checked 2026-11-17).
    media: {
      kind: "image",
      src: "/media/shardswap.png",
      width: 1696,
      height: 1259,
      alt: "The ShardSwap app with a wallet connected, showing the token-gated AI insights panel above the marketplace.",
    },
  },
];
