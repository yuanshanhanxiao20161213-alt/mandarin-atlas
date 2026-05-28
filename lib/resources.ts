export type ResourceKind = "App" | "Website" | "Course" | "Tutor Marketplace";
export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Skill =
  | "Speaking"
  | "Listening"
  | "Reading"
  | "Writing"
  | "Characters"
  | "HSK Prep"
  | "Dictionary"
  | "Tutoring";
export type Platform = "Web" | "iOS" | "Android";
export type PriceModel = "Free" | "Freemium" | "Paid" | "Marketplace";

export type Resource = {
  slug: string;
  name: string;
  kind: ResourceKind;
  tagline: string;
  bestFor: string;
  levels: Level[];
  skills: Skill[];
  platforms: Platform[];
  priceModel: PriceModel;
  websiteUrl: string;
  iosUrl?: string;
  androidUrl?: string;
  image: string;
  accent: "cinnabar" | "jade" | "lapis" | "brass";
  coreStrengths: string[];
  limitations: string[];
  trafficEstimate: string;
  trafficSource: string;
  appRating: string;
  downloads: string;
  lastChecked: string;
  sourceLinks: Array<{ label: string; url: string }>;
};

const storeSearch = (query: string, store: "ios" | "android") =>
  store === "ios"
    ? `https://apps.apple.com/us/search?term=${encodeURIComponent(query)}`
    : `https://play.google.com/store/search?q=${encodeURIComponent(query)}&c=apps`;

export const resources: Resource[] = [
  {
    slug: "duolingo-chinese",
    name: "Duolingo Chinese",
    kind: "App",
    tagline: "A low-friction daily habit builder for absolute beginners.",
    bestFor: "First contact with Mandarin and casual daily streak practice.",
    levels: ["Beginner"],
    skills: ["Listening", "Reading", "Speaking"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Freemium",
    websiteUrl: "https://www.duolingo.com/course/zh/en/Learn-Chinese",
    iosUrl: "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128",
    androidUrl: "https://play.google.com/store/apps/details?id=com.duolingo",
    image: "/images/ai/apps-download.png",
    accent: "jade",
    coreStrengths: ["Fast onboarding", "Gamified habit loop", "Very broad app availability"],
    limitations: ["Limited grammar depth", "Not ideal as a complete speaking system"],
    trafficEstimate: "Very high global platform traffic; Chinese course-specific traffic not public.",
    trafficSource: "Public store pages, official course page, and third-party traffic tools.",
    appRating: "Current rating varies by store and region.",
    downloads: "Google Play reports very large install volume for the overall Duolingo app.",
    lastChecked: "2026-05-26",
    sourceLinks: [
      { label: "Official Chinese course", url: "https://www.duolingo.com/course/zh/en/Learn-Chinese" },
      { label: "App Store", url: "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.duolingo" }
    ]
  },
  {
    slug: "hellochinese",
    name: "HelloChinese",
    kind: "App",
    tagline: "A polished beginner path built specifically for Mandarin.",
    bestFor: "Beginners who want a structured app with pronunciation and character basics.",
    levels: ["Beginner", "Intermediate"],
    skills: ["Listening", "Speaking", "Reading", "Writing", "Characters"],
    platforms: ["iOS", "Android"],
    priceModel: "Freemium",
    websiteUrl: "https://www.hellochinese.cc/en/",
    iosUrl: storeSearch("HelloChinese learn Chinese", "ios"),
    androidUrl: storeSearch("HelloChinese learn Chinese", "android"),
    image: "/images/ai/tutoring-scene.png",
    accent: "cinnabar",
    coreStrengths: ["Mandarin-first curriculum", "Speech practice", "Beginner-friendly sequencing"],
    limitations: ["Advanced depth is limited", "Best experience requires paid features"],
    trafficEstimate: "Niche-to-medium brand traffic; app usage likely larger than website visits.",
    trafficSource: "Official site, store listings, and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Android/iOS install figures vary by region and store visibility.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://www.hellochinese.cc/en/" }]
  },
  {
    slug: "pleco",
    name: "Pleco",
    kind: "App",
    tagline: "The serious learner's dictionary, reader and reference toolkit.",
    bestFor: "Learners who need a reliable Chinese dictionary and offline reference system.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Dictionary", "Reading", "Characters"],
    platforms: ["iOS", "Android"],
    priceModel: "Freemium",
    websiteUrl: "https://www.pleco.com/",
    iosUrl: "https://apps.apple.com/us/app/pleco-chinese-dictionary/id341922306",
    androidUrl: storeSearch("Pleco Chinese Dictionary", "android"),
    image: "/images/ai/skills-characters.png",
    accent: "lapis",
    coreStrengths: ["Excellent dictionary depth", "Offline workflows", "Add-on ecosystem"],
    limitations: ["Not a guided course", "Interface is utilitarian by design"],
    trafficEstimate: "Specialist tool traffic; strong reputation among serious learners.",
    trafficSource: "Official site, store listings, and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [
      { label: "Official site", url: "https://www.pleco.com/" },
      { label: "App Store", url: "https://apps.apple.com/us/app/pleco-chinese-dictionary/id341922306" }
    ]
  },
  {
    slug: "skritter",
    name: "Skritter",
    kind: "App",
    tagline: "A focused writing trainer for characters, tones and recall.",
    bestFor: "Learners who care about handwriting, radicals and long-term character memory.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Writing", "Characters", "HSK Prep"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Paid",
    websiteUrl: "https://skritter.com/",
    iosUrl: storeSearch("Skritter Chinese", "ios"),
    androidUrl: storeSearch("Skritter Chinese", "android"),
    image: "/images/ai/skills-writing.png",
    accent: "brass",
    coreStrengths: ["Stroke-order practice", "Spaced repetition", "Character-first learning"],
    limitations: ["Narrower than full course apps", "Subscription pricing"],
    trafficEstimate: "Specialist niche traffic; stronger among committed character learners.",
    trafficSource: "Official site, store listings, and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://skritter.com/" }]
  },
  {
    slug: "du-chinese",
    name: "Du Chinese",
    kind: "App",
    tagline: "Graded stories with pinyin, audio and approachable reading flow.",
    bestFor: "Learners who want to build reading stamina without drowning in unknown words.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Reading", "Listening", "Characters", "HSK Prep"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Freemium",
    websiteUrl: "https://duchinese.net/",
    iosUrl: storeSearch("Du Chinese", "ios"),
    androidUrl: storeSearch("Du Chinese", "android"),
    image: "/images/ai/skills-reading.png",
    accent: "jade",
    coreStrengths: ["Graded reading library", "Audio support", "Pinyin and translation toggles"],
    limitations: ["Not a full speaking course", "Best library access is paid"],
    trafficEstimate: "Niche-to-medium reading platform traffic.",
    trafficSource: "Official site, store listings, and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://duchinese.net/" }]
  },
  {
    slug: "chinesepod",
    name: "ChinesePod",
    kind: "Website",
    tagline: "A deep archive of audio lessons built around real-life situations.",
    bestFor: "Audio-first learners who want years of graded Mandarin lessons.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Listening", "Speaking", "Reading"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Paid",
    websiteUrl: "https://www.chinesepod.com/",
    iosUrl: storeSearch("ChinesePod", "ios"),
    androidUrl: storeSearch("ChinesePod", "android"),
    image: "/images/ai/skills-speaking.png",
    accent: "cinnabar",
    coreStrengths: ["Large lesson archive", "Dialogue-centered listening", "Good level range"],
    limitations: ["Interface can feel dense", "Requires self-directed study habits"],
    trafficEstimate: "Established Mandarin brand with specialist learner traffic.",
    trafficSource: "Official site and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://www.chinesepod.com/" }]
  },
  {
    slug: "chineseclass101",
    name: "ChineseClass101",
    kind: "Website",
    tagline: "A broad audio/video lesson library from Innovative Language.",
    bestFor: "Learners who like lesson libraries, transcripts and structured audio paths.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Listening", "Speaking", "Reading", "HSK Prep"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Freemium",
    websiteUrl: "https://www.chineseclass101.com/",
    iosUrl: storeSearch("ChineseClass101", "ios"),
    androidUrl: storeSearch("ChineseClass101", "android"),
    image: "/images/ai/chineseclass101-library.png",
    accent: "lapis",
    coreStrengths: ["Large course catalog", "Audio and video lessons", "Beginner onboarding"],
    limitations: ["Catalog can feel overwhelming", "Quality varies by lesson era"],
    trafficEstimate: "Established language-learning network traffic; Chinese-specific split not public.",
    trafficSource: "Official site and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://www.chineseclass101.com/" }]
  },
  {
    slug: "yoyo-chinese",
    name: "Yoyo Chinese",
    kind: "Course",
    tagline: "Clear video lessons with a friendly, course-like progression.",
    bestFor: "English-speaking beginners who want explanations from a human teacher.",
    levels: ["Beginner", "Intermediate"],
    skills: ["Speaking", "Listening", "Reading", "Characters"],
    platforms: ["Web"],
    priceModel: "Paid",
    websiteUrl: "https://www.yoyochinese.com/",
    image: "/images/ai/yoyo-course.png",
    accent: "cinnabar",
    coreStrengths: ["Teacher-led clarity", "Good pronunciation guidance", "Structured course packages"],
    limitations: ["Less app-native", "Advanced learner coverage is narrower"],
    trafficEstimate: "Recognized specialist course traffic among English-speaking learners.",
    trafficSource: "Official site and third-party traffic tools.",
    appRating: "Not primarily app-led.",
    downloads: "Not applicable for web-first course access.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://www.yoyochinese.com/" }]
  },
  {
    slug: "the-chairmans-bao",
    name: "The Chairman's Bao",
    kind: "App",
    tagline: "News-style graded reading mapped to HSK levels.",
    bestFor: "Learners who want frequent topical Chinese reading practice.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Reading", "Listening", "HSK Prep"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Paid",
    websiteUrl: "https://www.thechairmansbao.com/",
    iosUrl: storeSearch("The Chairman's Bao", "ios"),
    androidUrl: storeSearch("The Chairman's Bao", "android"),
    image: "/images/ai/mandarin-blueprint.png",
    accent: "brass",
    coreStrengths: ["HSK-level reading", "Current-events feel", "Integrated dictionary support"],
    limitations: ["Reading-first", "Subscription needed for full use"],
    trafficEstimate: "Niche-to-medium reading platform traffic.",
    trafficSource: "Official site, store listings, and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://www.thechairmansbao.com/" }]
  },
  {
    slug: "mandarin-blueprint",
    name: "Mandarin Blueprint",
    kind: "Course",
    tagline: "A systematic course for pronunciation, characters and memory.",
    bestFor: "Motivated self-learners who want a full method instead of scattered apps.",
    levels: ["Beginner", "Intermediate"],
    skills: ["Speaking", "Listening", "Reading", "Writing", "Characters"],
    platforms: ["Web"],
    priceModel: "Paid",
    websiteUrl: "https://www.mandarinblueprint.com/",
    image: "/images/ai/websites-comparison.png",
    accent: "lapis",
    coreStrengths: ["Method-driven progression", "Pronunciation emphasis", "Character memory framework"],
    limitations: ["Higher commitment", "Less casual than app-first tools"],
    trafficEstimate: "Specialist course traffic; verify campaign traffic before ranking.",
    trafficSource: "Official site and third-party traffic tools.",
    appRating: "Not primarily app-led.",
    downloads: "Not applicable for web-first course access.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Official site", url: "https://www.mandarinblueprint.com/" }]
  },
  {
    slug: "italki-chinese",
    name: "italki Chinese Tutors",
    kind: "Tutor Marketplace",
    tagline: "A global marketplace for one-on-one Mandarin teachers.",
    bestFor: "Learners who need live speaking practice and teacher feedback.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Speaking", "Listening", "Tutoring"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Marketplace",
    websiteUrl: "https://www.italki.com/en/teachers/chinese",
    iosUrl: storeSearch("italki", "ios"),
    androidUrl: storeSearch("italki", "android"),
    image: "/images/ai/italki-marketplace.png",
    accent: "jade",
    coreStrengths: ["Teacher choice", "Flexible pricing", "Real conversation practice"],
    limitations: ["Quality varies by tutor", "Requires scheduling and budget"],
    trafficEstimate: "Large global tutoring marketplace traffic; Chinese category split not public.",
    trafficSource: "Official marketplace pages and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Chinese tutors", url: "https://www.italki.com/en/teachers/chinese" }]
  },
  {
    slug: "preply-chinese",
    name: "Preply Chinese Tutors",
    kind: "Tutor Marketplace",
    tagline: "Structured tutor search with trial lessons and broad availability.",
    bestFor: "Learners comparing many tutors by price, accent, schedule and goals.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    skills: ["Speaking", "Listening", "Tutoring", "HSK Prep"],
    platforms: ["Web", "iOS", "Android"],
    priceModel: "Marketplace",
    websiteUrl: "https://preply.com/en/online/chinese-tutors",
    iosUrl: storeSearch("Preply", "ios"),
    androidUrl: storeSearch("Preply", "android"),
    image: "/images/ai/preply-tutor.png",
    accent: "brass",
    coreStrengths: ["Tutor filters", "Scheduling tools", "Speaking and exam prep options"],
    limitations: ["Marketplace quality varies", "Recurring lessons can become costly"],
    trafficEstimate: "Large global tutoring marketplace traffic; Chinese category split not public.",
    trafficSource: "Official marketplace pages and third-party traffic tools.",
    appRating: "Check live store listing for current regional rating.",
    downloads: "Store install data should be verified before publication.",
    lastChecked: "2026-05-26",
    sourceLinks: [{ label: "Chinese tutors", url: "https://preply.com/en/online/chinese-tutors" }]
  }
];

export const skillImages: Record<"Speaking" | "Reading" | "Writing" | "Characters" | "HSK Prep", string> = {
  Speaking: "/images/ai/skills-speaking.png",
  Reading: "/images/ai/skills-reading.png",
  Writing: "/images/ai/skills-writing.png",
  Characters: "/images/ai/skills-characters.png",
  "HSK Prep": "/images/ai/methodology-data.png"
};

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getQrUrl(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=10&data=${encodeURIComponent(url)}`;
}

export function appResources() {
  return resources.filter((resource) => resource.platforms.includes("iOS") || resource.platforms.includes("Android"));
}

export function websiteResources() {
  return resources.filter((resource) => resource.platforms.includes("Web"));
}
