// Single source of truth for portfolio content — derived from Sathyan's resume.

export const profile = {
  name: "Sathyan Elangovan",
  firstName: "Sathyan",
  title: "Mobile App Architect",
  tagline: "iOS & Android · AI-Driven Mobile Solutions",
  blurb:
    "Mobile App Architect with 5+ years designing, building, and leading iOS & Android products end-to-end — now bringing AI into production apps.",
  location: "Chennai, India",
  email: "sathyan576@gmail.com",
  phone: "+91 63833 62545",
  experienceYears: "5+",
  links: {
    linkedin: "https://www.linkedin.com/in/sathyan-elangovan-60784b166/",
    github: "https://github.com/",
    leetcode: "https://leetcode.com/",
    email: "mailto:sathyan576@gmail.com",
  },
};

export const summary = `Mobile App Architect with 5+ years of experience designing, building, and leading iOS and Android products end-to-end. Deep expertise in Swift, SwiftUI, Kotlin, Jetpack Compose, SDK architecture, and clean architecture patterns, with growing specialization in integrating AI capabilities — including on-device machine learning, LLM-powered chat experiences, and intelligent automation — into production mobile apps. Proven track record of shipping apps at scale, leading mobile teams, and mentoring engineers, with a long-term goal of growing into a Mobile, Backend, and AI Systems Architect.`;

export type SkillGroup = {
  category: string;
  icon: string; // lucide icon name
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "iOS",
    icon: "Apple",
    skills: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Combine",
      "Core Data",
      "AVFoundation",
      "SPM",
      "CocoaPods",
      "Objective-C",
    ],
  },
  {
    category: "Android",
    icon: "Smartphone",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "Flow",
      "Data Binding",
      "Jetpack Navigation",
      "RxJava",
      "Java",
    ],
  },
  {
    category: "Architecture",
    icon: "Boxes",
    skills: [
      "MVVM",
      "MVP",
      "MVC",
      "Clean Architecture",
      "Modularization",
      "SDK Design",
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: [
      "OpenAI API",
      "Claude API",
      "LangChain",
      "Core ML",
      "ML Kit",
      "TensorFlow Lite",
      "Firebase Vertex AI",
      "RAG",
      "Prompt Engineering",
      "AI Chat SDKs",
    ],
  },
  {
    category: "Integrations",
    icon: "Plug",
    skills: [
      "Firebase",
      "RazorPay",
      "Juspay",
      "Google Maps",
      "Alamofire",
      "Retrofit",
      "Branch.io",
      "Lottie",
    ],
  },
  {
    category: "Backend & Cloud",
    icon: "Server",
    skills: [
      "Node.js",
      "REST API Design",
      "Firebase Functions",
      "Cloud Firestore",
      "AWS",
      "Azure",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      "Xcode",
      "Android Studio",
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "Jira",
      "Slack",
      "CI/CD",
    ],
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experience: Job[] = [
  {
    role: "Tech Lead, Mobile Apps",
    company: "Kynhood Technologies",
    location: "Chennai, India",
    period: "Jul 2024 — Present",
    current: true,
    highlights: [
      "Architected and led the full mobile product roadmap for KYN iOS & Android, working directly with Product and Business stakeholders.",
      "Mentored mobile developers and established code review processes and release pipelines that improved team delivery velocity.",
      "Owned the end-to-end hiring process for fresher and intern mobile developers.",
      "Piloted AI-assisted development workflows — Claude & GPT-based code review and SwiftUI/Compose code generation — to speed up delivery.",
      "Owned end-to-end delivery of KYN iOS Events Ticket Booking, Spaces, and Neighbourhood modules (Swift, SwiftUI) from ideation to App Store.",
      "Built the KYN Android Events Ticket Booking module from scratch (Kotlin, Compose) with payments supporting 10,000+ concurrent bookings.",
    ],
  },
  {
    role: "SDE II, Mobile SDK",
    company: "Kommunicate (Intentive Technologies)",
    location: "Bangalore, India",
    period: "Sep 2021 — Jun 2024",
    highlights: [
      "Architected and maintained AI-powered customer support SDKs for native Android, iOS, Flutter, and React Native.",
      "Partnered with founders on mobile roadmap planning and ran client-facing sessions for custom feature scoping and PoCs.",
      "Contributed to AI chatbot integration features within the SDK, improving automated response accuracy for support flows.",
      "Built and deployed iOS SDK features to CocoaPods (Swift, Objective-C, UIKit), maintaining Objective-C interop for legacy clients.",
    ],
  },
  {
    role: "Mobile App Developer",
    company: "Infoscalze Technology",
    location: "Bangalore, India",
    period: "Sep 2020 — Aug 2021",
    highlights: [
      "Single-handedly developed the DairyBuddy Customer and Delivery Boy apps on Android and iOS.",
      "Customized and deployed 40+ white-label apps across the App Store and Play Store.",
    ],
  },
  {
    role: "Android Developer Intern",
    company: "Quick Ride",
    location: "Bangalore, India",
    period: "Aug 2020 — Sep 2020",
    highlights: [
      "Contributed to UI development of a new Android rental platform using Kotlin.",
    ],
  },
];

export type Achievement = {
  metric: string;
  label: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    metric: "1.2L+",
    label: "Tickets Processed",
    detail:
      "Built the Event Ticket Booking module from scratch with Juspay payments, scaled to 120,000+ tickets to date.",
  },
  {
    metric: "40+",
    label: "Apps Shipped",
    detail:
      "Delivered 40+ white-label mobile apps across the App Store and Play Store within tight timelines.",
  },
  {
    metric: "10K+",
    label: "Concurrent Bookings",
    detail:
      "Engineered a payment-integrated booking flow on Android handling 10,000+ concurrent bookings.",
  },
  {
    metric: "5+",
    label: "Years Leading",
    detail:
      "Led mobile teams as Tech Lead, improving release cadence, code quality, and onboarding documentation.",
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  role: string;
  platforms: string[];
  stack: string[];
  featured?: boolean;
  stores?: string[]; // e.g. "App Store", "Play Store"
};

export const projects: Project[] = [
  {
    name: "Healthy Buddha",
    tagline: "Online organic grocery e-commerce",
    description:
      "An online organic e-commerce platform built end-to-end as a freelance product — single-handedly developed, tested, and shipped to both the App Store and Play Store. Owned everything from architecture and UI to payments, testing, and release.",
    role: "Freelance · Solo Developer",
    platforms: ["iOS", "Android"],
    stack: ["Swift", "Kotlin", "REST APIs", "Payments", "Firebase"],
    stores: ["App Store", "Play Store"],
    featured: true,
  },
  {
    name: "KYN — Events & Community",
    tagline: "Ticket booking, Spaces & Neighbourhood",
    description:
      "Led and delivered the Events Ticket Booking, Spaces, and Neighbourhood modules for KYN. Built the Android booking flow from scratch with a payment gateway supporting 10,000+ concurrent bookings.",
    role: "Tech Lead · Kynhood",
    platforms: ["iOS", "Android"],
    stack: ["SwiftUI", "Jetpack Compose", "Juspay", "Clean Architecture"],
    stores: ["App Store", "Play Store"],
  },
  {
    name: "DairyBuddy",
    tagline: "Customer & Delivery Boy apps",
    description:
      "Single-handedly built the DairyBuddy Customer and Delivery Boy applications across Android and iOS — full lifecycle from development through store deployment.",
    role: "Mobile Developer · Infoscalze",
    platforms: ["iOS", "Android"],
    stack: ["Swift", "Kotlin", "Google Maps", "Firebase"],
    stores: ["App Store", "Play Store"],
  },
  {
    name: "Kommunicate SDK",
    tagline: "AI-powered customer support SDK",
    description:
      "Architected and maintained AI-powered chat support SDKs across native Android, iOS, Flutter, and React Native — including chatbot integration and CocoaPods distribution with Objective-C interop for legacy clients.",
    role: "SDE II · Kommunicate",
    platforms: ["iOS", "Android", "Flutter", "React Native"],
    stack: ["Swift", "Objective-C", "Kotlin", "AI Chat", "CocoaPods"],
  },
];

export const focusAreas = [
  "LLM Integration",
  "RAG Pipelines",
  "On-device ML",
  "SDK Architecture",
  "Team Leadership",
];
