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
  verdict: string;
  lastReviewed: string;
  recommendedSkills: Skill[];
  resourceSlugs: string[];
  comparisonRows: Array<{
    label: string;
    bestPick: string;
    note: string;
  }>;
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
    verdict:
      "Most beginners should start with HelloChinese or Duolingo for habit and structure, then add Pleco immediately for lookup and Du Chinese once reading practice becomes useful.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Listening", "Speaking", "Reading", "Characters"],
    resourceSlugs: ["hellochinese", "duolingo-chinese", "pleco", "du-chinese"],
    comparisonRows: [
      {
        label: "Best first app",
        bestPick: "HelloChinese",
        note: "Mandarin-first sequencing makes it easier for absolute beginners than broad language apps."
      },
      {
        label: "Best free habit builder",
        bestPick: "Duolingo Chinese",
        note: "Useful for daily consistency, but weaker as a complete speaking or character system."
      },
      {
        label: "Best companion tool",
        bestPick: "Pleco",
        note: "A dictionary workflow prevents beginners from guessing pinyin, tones and character meanings."
      }
    ],
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
    verdict:
      "A lean HSK 1-2 stack should combine one guided app, one reading source and one character-review tool instead of collecting too many disconnected resources.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["HSK Prep", "Reading", "Listening", "Characters"],
    resourceSlugs: ["hellochinese", "du-chinese", "the-chairmans-bao", "skritter"],
    comparisonRows: [
      {
        label: "Core curriculum",
        bestPick: "HelloChinese",
        note: "Good for early vocabulary, sentence order and routine before exam-specific drilling."
      },
      {
        label: "Reading practice",
        bestPick: "Du Chinese",
        note: "Short graded texts help HSK words appear in sentences instead of isolated flashcards."
      },
      {
        label: "Character recall",
        bestPick: "Skritter",
        note: "Best when handwriting and radical awareness matter for the learner's goal."
      }
    ],
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
    verdict:
      "Du Chinese is the easiest first graded reader for many learners; The Chairman's Bao is stronger when learners want news-style HSK reading and more topical material.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Reading", "Listening", "HSK Prep", "Characters"],
    resourceSlugs: ["du-chinese", "the-chairmans-bao", "pleco", "chineseclass101"],
    comparisonRows: [
      {
        label: "Best beginner reading flow",
        bestPick: "Du Chinese",
        note: "Pinyin, audio and lookup tools make early reading feel less punishing."
      },
      {
        label: "Best topical reading",
        bestPick: "The Chairman's Bao",
        note: "News-style texts fit learners who want HSK-aligned but less story-like practice."
      },
      {
        label: "Best lookup workflow",
        bestPick: "Pleco",
        note: "Useful beside any reader because vocabulary lookup becomes part of the habit."
      }
    ],
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
    verdict:
      "Skritter is the strongest dedicated writing trainer, while Pleco is the better daily companion for character lookup, examples and reading support.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Characters", "Writing", "Dictionary"],
    resourceSlugs: ["skritter", "pleco", "mandarin-blueprint", "hellochinese"],
    comparisonRows: [
      {
        label: "Best handwriting practice",
        bestPick: "Skritter",
        note: "Focused stroke-order and recall practice for learners who want to write, not only recognize."
      },
      {
        label: "Best character reference",
        bestPick: "Pleco",
        note: "Better as a dictionary, reader and example bank than as a course."
      },
      {
        label: "Best structured method",
        bestPick: "Mandarin Blueprint",
        note: "More course-like for learners who want a full character memory system."
      }
    ],
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
    verdict:
      "Learners who need correction should book tutor time; learners who still lack phrases should first build an audio base with ChinesePod or Yoyo Chinese.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Speaking", "Listening", "Tutoring"],
    resourceSlugs: ["italki-chinese", "preply-chinese", "chinesepod", "yoyo-chinese"],
    comparisonRows: [
      {
        label: "Best live correction",
        bestPick: "italki Chinese Tutors",
        note: "A broad teacher marketplace for pronunciation, tones and conversation repair."
      },
      {
        label: "Best tutor filtering",
        bestPick: "Preply Chinese Tutors",
        note: "Useful when price, schedule and trial lesson flow matter most."
      },
      {
        label: "Best audio bridge",
        bestPick: "ChinesePod",
        note: "Dialogue lessons give learners phrases to reuse in tutor sessions."
      }
    ],
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
    verdict:
      "Most beginners should not replace Pleco; they should pair it with a guided course app and a reader so lookup, lessons and sentence exposure work together.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Dictionary", "Reading", "Characters"],
    resourceSlugs: ["pleco", "hellochinese", "du-chinese", "skritter"],
    comparisonRows: [
      {
        label: "Best dictionary",
        bestPick: "Pleco",
        note: "Still the strongest reference tool for serious beginner-to-advanced workflows."
      },
      {
        label: "Best course companion",
        bestPick: "HelloChinese",
        note: "Adds sequencing and daily practice that a dictionary cannot provide."
      },
      {
        label: "Best reading companion",
        bestPick: "Du Chinese",
        note: "Turns dictionary lookup into sentence-level reading practice."
      }
    ],
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
  },
  {
    slug: "hellochinese-vs-duolingo-chinese",
    title: "HelloChinese vs Duolingo Chinese",
    h1: "HelloChinese vs Duolingo Chinese: which should beginners use first?",
    description:
      "A practical comparison of HelloChinese and Duolingo Chinese for beginner Mandarin structure, pronunciation, characters and daily habit building.",
    eyebrow: "App comparison",
    keywords: [
      "HelloChinese vs Duolingo Chinese",
      "is HelloChinese better than Duolingo for Chinese",
      "Duolingo Chinese alternatives beginner",
      "best first Mandarin app"
    ],
    image: "/images/ai/apps-download.png",
    intent:
      "Searchers are usually choosing between two familiar apps and need a clear beginner recommendation rather than a broad app list.",
    verdict:
      "Choose HelloChinese if Mandarin is the main goal; choose Duolingo Chinese if the goal is a low-pressure habit. Serious learners can use both, but should add Pleco early.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Listening", "Speaking", "Characters", "Reading"],
    resourceSlugs: ["hellochinese", "duolingo-chinese", "pleco", "du-chinese"],
    comparisonRows: [
      {
        label: "Curriculum fit",
        bestPick: "HelloChinese",
        note: "More Mandarin-specific sequencing for tones, pinyin and basic character exposure."
      },
      {
        label: "Daily habit",
        bestPick: "Duolingo Chinese",
        note: "Strong for consistency and low friction, especially for casual learners."
      },
      {
        label: "Long-term stack",
        bestPick: "HelloChinese + Pleco",
        note: "A guided app plus dictionary workflow ages better than one app alone."
      }
    ],
    sections: [
      {
        heading: "HelloChinese is usually the better first Mandarin app.",
        body: "HelloChinese is built around Mandarin-specific problems such as pinyin, tones, character recognition and pronunciation practice. That makes it a clearer primary app for learners who want Chinese as a serious project."
      },
      {
        heading: "Duolingo is useful when the habit is the hard part.",
        body: "Duolingo Chinese is easy to start and easy to repeat daily. It is less convincing as a complete Mandarin path, but it can keep beginners engaged long enough to build momentum."
      }
    ],
    faqs: [
      {
        question: "Can I use HelloChinese and Duolingo Chinese together?",
        answer: "Yes, but avoid duplicating easy lessons forever. Use one as the main path and the other as light review."
      },
      {
        question: "Do I need Pleco if I use HelloChinese?",
        answer: "Yes. Pleco solves lookup, examples and dictionary habits that course apps do not fully replace."
      }
    ]
  },
  {
    slug: "du-chinese-alternatives",
    title: "Du Chinese Alternatives",
    h1: "Du Chinese alternatives for graded Mandarin reading practice.",
    description:
      "Compare Du Chinese alternatives for HSK graded reading, audio, pinyin toggles, dictionary lookup and news-style Mandarin practice.",
    eyebrow: "Reader alternatives",
    keywords: [
      "Du Chinese alternatives",
      "apps like Du Chinese",
      "The Chairman's Bao vs Du Chinese",
      "Chinese graded reader alternatives"
    ],
    image: "/images/ai/skills-reading.png",
    intent:
      "Learners already know graded reading matters and are comparing paid reader tools before committing.",
    verdict:
      "The Chairman's Bao is the closest alternative for HSK news-style reading; Pleco is the best companion if the learner wants a more flexible dictionary-led workflow.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Reading", "Listening", "HSK Prep", "Dictionary"],
    resourceSlugs: ["du-chinese", "the-chairmans-bao", "pleco", "chineseclass101"],
    comparisonRows: [
      {
        label: "Closest alternative",
        bestPick: "The Chairman's Bao",
        note: "HSK-level news-style reading for learners who want topical texts."
      },
      {
        label: "Best original flow",
        bestPick: "Du Chinese",
        note: "Strong beginner reading experience with audio, pinyin and approachable stories."
      },
      {
        label: "Best companion",
        bestPick: "Pleco",
        note: "Useful when readers need deeper dictionary lookup and examples."
      }
    ],
    sections: [
      {
        heading: "Choose by text style, not only HSK level.",
        body: "Du Chinese often feels more story-led and beginner-friendly, while The Chairman's Bao feels more topical. Both can fit HSK study, but they train slightly different reading habits."
      },
      {
        heading: "A dictionary can be the missing alternative.",
        body: "Some learners do not need another subscription reader. Pairing Pleco with short web texts, graded articles or course transcripts can create a flexible reading workflow."
      }
    ],
    faqs: [
      {
        question: "Is The Chairman's Bao better than Du Chinese?",
        answer: "It depends on text preference. The Chairman's Bao is stronger for news-style reading; Du Chinese is often easier for beginner story reading."
      },
      {
        question: "What should I check before paying for a reader?",
        answer: "Check level control, audio quality, pinyin toggles, dictionary lookup and whether the library includes texts you actually want to finish."
      }
    ]
  },
  {
    slug: "best-chinese-app-stack-for-self-study",
    title: "Best Chinese App Stack for Self-Study",
    h1: "Best Chinese app stack for self-study without wasting months.",
    description:
      "Build a practical Mandarin self-study stack with one course app, one dictionary, one reader and one speaking feedback option.",
    eyebrow: "Self-study stack",
    keywords: [
      "best Chinese app stack",
      "Mandarin self study app stack",
      "Chinese self study resources beginner",
      "learn Mandarin app combination"
    ],
    image: "/images/ai/methodology-data.png",
    intent:
      "Self-study learners need a small working system rather than a long directory of unrelated apps.",
    verdict:
      "A strong beginner stack is HelloChinese for structure, Pleco for lookup, Du Chinese for reading and italki or Preply when pronunciation feedback becomes necessary.",
    lastReviewed: "2026-06-03",
    recommendedSkills: ["Listening", "Reading", "Dictionary", "Tutoring"],
    resourceSlugs: ["hellochinese", "pleco", "du-chinese", "italki-chinese"],
    comparisonRows: [
      {
        label: "Course slot",
        bestPick: "HelloChinese",
        note: "Keeps beginners moving through a coherent Mandarin-first path."
      },
      {
        label: "Reference slot",
        bestPick: "Pleco",
        note: "Prevents stalled study whenever new characters or words appear."
      },
      {
        label: "Feedback slot",
        bestPick: "italki Chinese Tutors",
        note: "Live correction is the fastest way to find tone and pronunciation problems."
      }
    ],
    sections: [
      {
        heading: "Do not use five course apps at once.",
        body: "The most common self-study mistake is collecting overlapping apps. Pick one primary course, then add tools that solve different jobs: lookup, reading, review and speaking feedback."
      },
      {
        heading: "Add speaking feedback before confidence collapses.",
        body: "Even occasional tutor sessions can catch pronunciation problems early. Waiting until intermediate level can make speaking feel more intimidating than it needs to be."
      }
    ],
    faqs: [
      {
        question: "How many Mandarin apps should I use at once?",
        answer: "Most beginners only need three or four: one course, one dictionary, one reader and optionally one tutor or speaking tool."
      },
      {
        question: "Can I self-study Mandarin without a teacher?",
        answer: "You can build a lot alone, but periodic feedback helps with tones, pronunciation and conversation repair."
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
