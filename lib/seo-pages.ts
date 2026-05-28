import type { Resource, Skill } from "@/lib/resources";
import { resources } from "@/lib/resources";

export type SeoPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  keywords: string[];
  image: string;
  intent: string;
  recommendedSkills: Skill[];
  resourceSlugs: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const seoPages: SeoPage[] = [
  {
    slug: "best-chinese-learning-apps-for-beginners",
    title: "Best Chinese Learning Apps for Beginners",
    h1: "Best Chinese learning apps for beginners who need structure.",
    description:
      "Compare beginner-friendly Mandarin apps for pronunciation, characters, listening, reading and daily study habits.",
    eyebrow: "Beginner Mandarin apps",
    keywords: [
      "best Chinese learning app for beginners",
      "Mandarin app for absolute beginners",
      "learn Chinese app with pinyin and characters",
      "HelloChinese vs Duolingo Chinese"
    ],
    image: "/images/ai/apps-download.png",
    intent: "New learners want a simple first stack instead of a giant list of apps.",
    recommendedSkills: ["Listening", "Speaking", "Reading", "Characters"],
    resourceSlugs: ["hellochinese", "duolingo-chinese", "pleco", "du-chinese"],
    sections: [
      {
        heading: "Start with a guided app, then add a dictionary.",
        body: "For most beginners, a guided Mandarin-first app is more useful than a broad language platform alone. Pair it with a dictionary early so pinyin, tones and character lookup become normal habits."
      },
      {
        heading: "Do not optimize for downloads alone.",
        body: "High install counts are useful signals, but Mandarin needs pronunciation feedback, character support and review design. A smaller specialist app can be a better fit than the largest global app."
      }
    ],
    faqs: [
      {
        question: "Is Duolingo enough to learn Mandarin?",
        answer: "It is useful for habit building, but most learners should add pronunciation practice, character reading and a serious dictionary."
      },
      {
        question: "What should a beginner install first?",
        answer: "A structured beginner app, a dictionary such as Pleco, and one reading or audio resource after the first few weeks."
      }
    ]
  },
  {
    slug: "hsk-1-2-self-study-resources",
    title: "HSK 1-2 Self-Study Resources",
    h1: "HSK 1-2 self-study resources for a clean first plan.",
    description:
      "A focused guide to beginner HSK resources, apps, graded readers and tools for early Mandarin study.",
    eyebrow: "HSK starter path",
    keywords: [
      "HSK 1 self study resources",
      "HSK 2 learning apps",
      "beginner HSK Mandarin resources",
      "Chinese HSK app comparison"
    ],
    image: "/images/ai/methodology-data.png",
    intent: "HSK beginners need a practical path that mixes vocabulary, characters, listening and reading.",
    recommendedSkills: ["HSK Prep", "Reading", "Listening", "Characters"],
    resourceSlugs: ["hellochinese", "du-chinese", "the-chairmans-bao", "skritter"],
    sections: [
      {
        heading: "Build around recall, not passive review.",
        body: "HSK 1-2 learners move faster when new vocabulary appears in listening, reading and writing contexts. Pick resources that reinforce the same words across more than one skill."
      },
      {
        heading: "Use graded reading earlier than feels comfortable.",
        body: "Short graded texts help learners move from isolated flashcards to real sentence recognition. Audio support is especially helpful for tone memory."
      }
    ],
    faqs: [
      {
        question: "Can I self-study HSK 1 and HSK 2?",
        answer: "Yes. A structured app, spaced review, graded reading and occasional speaking feedback are enough for many learners."
      },
      {
        question: "Which skills matter most for early HSK?",
        answer: "Vocabulary, sentence patterns, listening recognition and character familiarity should grow together."
      }
    ]
  },
  {
    slug: "chinese-graded-reader-apps",
    title: "Chinese Graded Reader Apps",
    h1: "Chinese graded reader apps for building real reading stamina.",
    description:
      "Compare Mandarin graded reader apps and websites for HSK reading, audio support, pinyin toggles and dictionary workflows.",
    eyebrow: "Graded reading",
    keywords: [
      "Chinese graded reader app",
      "Mandarin graded reading app",
      "HSK graded reader online",
      "Du Chinese alternatives"
    ],
    image: "/images/ai/skills-reading.png",
    intent: "Learners searching this phrase usually already know they need reading practice and are close to choosing a paid tool.",
    recommendedSkills: ["Reading", "Listening", "HSK Prep", "Characters"],
    resourceSlugs: ["du-chinese", "the-chairmans-bao", "pleco", "chineseclass101"],
    sections: [
      {
        heading: "Look for level control and instant lookup.",
        body: "A useful graded reader lets learners choose text difficulty, hide or reveal pinyin, hear audio and look up unknown words without leaving the reading flow."
      },
      {
        heading: "News-style reading and story-style reading solve different problems.",
        body: "News-style platforms can feel fresh and topical, while story libraries often support repeated exposure and confidence at lower levels."
      }
    ],
    faqs: [
      {
        question: "Should I read with pinyin on or off?",
        answer: "Use pinyin as a scaffold, then hide it once the same words become familiar."
      },
      {
        question: "Are graded readers useful before intermediate level?",
        answer: "Yes. Beginner graded texts help connect isolated words to sentence patterns."
      }
    ]
  },
  {
    slug: "learn-chinese-characters-apps",
    title: "Apps to Learn Chinese Characters",
    h1: "Apps to learn Chinese characters without memorizing blindly.",
    description:
      "A comparison guide for Chinese character apps, stroke-order practice, radicals, handwriting and dictionary workflows.",
    eyebrow: "Characters and writing",
    keywords: [
      "app to learn Chinese characters",
      "Chinese handwriting app",
      "learn Chinese radicals app",
      "Skritter alternatives Chinese"
    ],
    image: "/images/ai/skills-characters.png",
    intent: "Character learners search for practical tools after realizing pinyin-only study is not enough.",
    recommendedSkills: ["Characters", "Writing", "Dictionary"],
    resourceSlugs: ["skritter", "pleco", "mandarin-blueprint", "hellochinese"],
    sections: [
      {
        heading: "Stroke order is useful, but recognition matters too.",
        body: "A good character stack combines handwriting practice, radical awareness, dictionary lookup and reading exposure. Writing alone is too narrow for most learners."
      },
      {
        heading: "Choose tools that make review unavoidable.",
        body: "Character memory fades quickly without spaced review. Apps that combine recall prompts with real examples tend to age better than static stroke sheets."
      }
    ],
    faqs: [
      {
        question: "Do I need to handwrite Chinese characters?",
        answer: "Not always, but handwriting practice can improve recognition and stroke awareness."
      },
      {
        question: "What is the best character tool for serious learners?",
        answer: "Skritter and Pleco solve different jobs: one trains writing recall, the other supports lookup and reading."
      }
    ]
  },
  {
    slug: "mandarin-speaking-practice-online",
    title: "Mandarin Speaking Practice Online",
    h1: "Mandarin speaking practice online: tutors, audio lessons and feedback.",
    description:
      "Compare live Mandarin tutor marketplaces, speaking apps and audio-first resources for pronunciation and conversation practice.",
    eyebrow: "Speaking practice",
    keywords: [
      "Mandarin speaking practice online",
      "Chinese pronunciation practice tutor",
      "online Mandarin tutor comparison",
      "Chinese conversation practice app"
    ],
    image: "/images/ai/tutoring-scene.png",
    intent: "Speaking-practice searches often come from learners who are stuck after app study and ready for tutoring.",
    recommendedSkills: ["Speaking", "Listening", "Tutoring"],
    resourceSlugs: ["italki-chinese", "preply-chinese", "chinesepod", "yoyo-chinese"],
    sections: [
      {
        heading: "Speaking improves fastest with feedback.",
        body: "Apps can build confidence, but pronunciation, tones and conversation repair usually need a teacher, tutor or structured feedback loop."
      },
      {
        heading: "Audio libraries are a strong bridge to live lessons.",
        body: "Dialogue-based audio gives learners sentence patterns to reuse in tutor sessions, making paid conversation time more efficient."
      }
    ],
    faqs: [
      {
        question: "When should I start speaking with a tutor?",
        answer: "Start once you can introduce yourself and recognize basic tone differences. Waiting too long can make speaking anxiety worse."
      },
      {
        question: "Are tutor marketplaces better than apps?",
        answer: "They solve different problems. Apps are convenient; tutors correct the mistakes you cannot hear yourself."
      }
    ]
  },
  {
    slug: "pleco-alternatives-for-beginners",
    title: "Pleco Alternatives for Beginners",
    h1: "Pleco alternatives and companion tools for beginner Chinese learners.",
    description:
      "Compare Pleco with beginner-friendly apps, readers and character tools so new Mandarin learners can build the right stack.",
    eyebrow: "Dictionary workflow",
    keywords: [
      "Pleco alternatives for beginners",
      "Chinese dictionary app for beginners",
      "Pleco vs HelloChinese",
      "best Mandarin dictionary app"
    ],
    image: "/images/ai/skills-characters.png",
    intent: "Dictionary comparison queries are niche but high-intent because users are choosing a durable study workflow.",
    recommendedSkills: ["Dictionary", "Reading", "Characters"],
    resourceSlugs: ["pleco", "hellochinese", "du-chinese", "skritter"],
    sections: [
      {
        heading: "Pleco is not really a course replacement.",
        body: "Pleco is a powerful reference tool. Beginners still need a guided app or teacher-led course to decide what to study next."
      },
      {
        heading: "The best alternative may be a companion.",
        body: "For many beginners, the right answer is not replacing Pleco, but pairing it with structured lessons, graded reading and character review."
      }
    ],
    faqs: [
      {
        question: "Is Pleco beginner-friendly?",
        answer: "Yes as a dictionary, but it is not a step-by-step Mandarin course."
      },
      {
        question: "What should I use with Pleco?",
        answer: "A beginner course app, a graded reader and a character practice tool if handwriting matters to you."
      }
    ]
  }
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function getSeoPageResources(page: SeoPage): Resource[] {
  return page.resourceSlugs
    .map((slug) => resources.find((resource) => resource.slug === slug))
    .filter(Boolean) as Resource[];
}
