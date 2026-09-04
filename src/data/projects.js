export const projects = [
  {
    slug: 'lumina',
    title: 'Lumina',
    tagline: 'A calmer path to daily practice.',
    description:
      'Redesigning a meditation app so first-time users make it to session two — and stay.',
    tag: 'UX Case Study',
    industry: 'Wellness',
    year: '2025',
    role: 'Lead UX Designer',
    duration: '12 weeks',
    team: 'Solo — with 1 PM, 2 engineers',
    cover:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80',
    accent: 'oklch(0.72 0.14 195)',
    metrics: [
      { label: 'Session 2 return rate', value: '+62%' },
      { label: 'Onboarding drop-off', value: '−41%' },
      { label: 'App Store rating', value: '4.8 ★' },
    ],
    problem:
      'The old onboarding threw seven screens of questions at first-time users before ever letting them meditate. 68% of users never opened the app a second time.',
    approach: [
      'Diary studies with 14 users across 3 experience levels',
      '2 rounds of usability testing on paper + mid-fi prototypes',
      'Built a friction map of the first 72 hours after install',
    ],
    outcome:
      'A one-tap "first breath" that opens straight into a 60-second guided session, with personalization deferred until users have felt the value.',
    gallery: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'nova-ui',
    title: 'Nova UI',
    tagline: 'One system, seven products.',
    description:
      'A design system built for a 40-person product org to ship consistent UI at 3× the pace.',
    tag: 'Design System',
    industry: 'B2B SaaS',
    year: '2024',
    role: 'Design Systems Lead',
    duration: '9 months',
    team: '3 designers, 2 engineers, 1 writer',
    cover:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80',
    accent: 'oklch(0.7 0.16 300)',
    metrics: [
      { label: 'Design-to-ship time', value: '3× faster' },
      { label: 'Components adopted', value: '146' },
      { label: 'Design debt tickets', value: '−78%' },
    ],
    problem:
      'Seven product teams were each maintaining their own buttons, forms, and dialogs. Every launch reopened the same accessibility and consistency battles.',
    approach: [
      'Audit of 1,400+ UI instances across live products',
      'Token architecture: color, type, space, motion, elevation',
      'Component API contracts shipped with Figma + Storybook in lockstep',
    ],
    outcome:
      'A single source of truth teams actually use — because it was faster than the old copy-paste, not slower.',
    gallery: [
      'https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1611175694989-4870fafa4494?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'kaya',
    title: 'Kaya',
    tagline: 'Personal finance that feels personal.',
    description:
      'A mobile-first banking experience for freelancers who never fit inside a spreadsheet.',
    tag: 'Product Design',
    industry: 'Fintech',
    year: '2024',
    role: 'Product Designer',
    duration: '6 months',
    team: 'Squad of 6',
    cover:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    accent: 'oklch(0.72 0.17 45)',
    metrics: [
      { label: 'Weekly active users', value: '+124%' },
      { label: 'Feature discovery', value: '+87%' },
      { label: 'Support tickets', value: '−34%' },
    ],
    problem:
      'Freelancers were bolting personal-finance apps onto business banking, then a spreadsheet on top of that. Nothing spoke to their variable income.',
    approach: [
      'Contextual interviews with 22 freelancers across 6 countries',
      'Prototyped 4 income-smoothing models with real transaction data',
      'Shipped weekly to a 200-user closed beta over 12 weeks',
    ],
    outcome:
      'A home screen that treats variable income as the default — not the edge case — with a "next 30 days" projection that reads like a story, not a chart.',
    gallery: [
      'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    ],
  },
]

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug)
