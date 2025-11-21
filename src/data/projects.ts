/**
 * Technical Lab projects shown as arcade missions.
 * Populate cover/gallery paths later once assets exist inside /public.
 */
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  genre: string;
  techStack: string[];
  status: 'Online' | 'In Progress' | 'Archived';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  shortDescription: string;
  coverImage: string;
  githubUrl: string;
  demoUrl?: string;
  objective: string;
  approach: string;
  architecture: string;
  role: string;
  highlights: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: 'the-food-crew',
    title: 'The Food Crew',
    tagline: 'Full-stack restaurant discovery platform with admin ops.',
    genre: 'Full-stack',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'MySQL'],
    status: 'Online',
    difficulty: 'Medium',
    shortDescription: 'Menu browsing, user auth, and order workflows crafted for neighborhood pop-ups.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/The-Food-Crew',
    demoUrl: 'https://the-food-crew.vercel.app',
    objective: 'Give small crews a polished, mobile-first digital home without touching code.',
    approach: 'Next.js app router + Prisma/MySQL backbone, with CMS-like dashboards for managing menus and blog drops.',
    architecture: 'Next.js UI → API routes → Prisma ORM → PlanetScale/MySQL, plus Vercel edge caching for fast reads.',
    role: 'Sole engineer/designer: led UX, built auth, order flows, and admin tooling.',
    highlights: [
      'Responsive UI themed for culinary storytelling',
      'Role-based dashboards for staff vs. visitors',
      'Deployed on Vercel with CI/CD from GitHub'
    ],
    gallery: ['', '']
  },
  {
    slug: 'advanced-hospital-management',
    title: 'Advanced Hospital Management System',
    tagline: 'Ops cockpit for admissions, doctors, pharmacy, and billing.',
    genre: 'Enterprise',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Redux'],
    status: 'Online',
    difficulty: 'Hard',
    shortDescription: 'Full workflow suite modernizing hospital intake, records, and finance dashboards.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Advanced-Hospital-Management-System',
    demoUrl: 'https://advanced-hospital.vercel.app',
    objective: 'Digitize the messy spreadsheets and whiteboards clinics rely on into a single secure system.',
    approach: 'Modular role-based Next.js app with protected routes, REST APIs for departments, and Mongo persistence.',
    architecture: 'Next.js app router → Express API → MongoDB Atlas, with Redis caching for quick patient lookups.',
    role: 'Led product + engineering, designed schemas, built dashboards, and tuned deployment pipelines.',
    highlights: [
      'Patient intake to discharge tracking with analytics',
      'Prescription + pharmacy inventory modules',
      'Integrated billing + audit logs for compliance'
    ],
    gallery: ['', '']
  },
  {
    slug: 'arrhythmia-detection',
    title: 'Arrhythmia Detection',
    tagline: 'Real-time ECG anomaly detection pipeline with dashboards.',
    genre: 'Computer Vision',
    techStack: ['Python', 'TensorFlow', 'Next.js', 'FastAPI'],
    status: 'In Progress',
    difficulty: 'Hard',
    shortDescription: 'Streams patient ECG data into ML models to flag arrhythmias and surface alerts to clinicians.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Arrhythmia-Detection',
    objective: 'Give cardiology teams a proactive warning system rather than reactive chart review.',
    approach: 'Built data ingestion with FastAPI, trained CNN/LSTM hybrid, and layered Next.js dashboards over alerts.',
    architecture: 'Wearable devices → MQTT broker → FastAPI → TensorFlow serving → Next.js clinician console.',
    role: 'Researched ML models, tuned inference, and designed the UI for reviewing alerts & metrics.',
    highlights: ['0.91 F1 on MIT-BIH dataset', 'Streaming pipeline handles 150 devices', 'Alert UX with trend charts'],
    gallery: ['', '']
  },
  {
    slug: 'furniture-shop',
    title: 'Furniture Shop',
    tagline: 'Headless commerce experience for bespoke furniture houses.',
    genre: 'E-commerce',
    techStack: ['Next.js', 'Stripe', 'Sanity CMS', 'Tailwind'],
    status: 'Online',
    difficulty: 'Medium',
    shortDescription: 'Immersive catalog with AR-inspired gallery, cart, and checkout built for interior designers.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Furniture-Shop',
    demoUrl: 'https://furniture-shop-rj.vercel.app',
    objective: 'Help boutique furniture studios tell richer product stories and take orders globally.',
    approach: 'Next.js storefront plugged into Sanity for content, Stripe checkout, and a 3D-inspired product viewer.',
    architecture: 'Next.js → Sanity content API → Stripe payments, with ISR for product launches and webhooks for orders.',
    role: 'Designed the UX, implemented CMS schemas, and wired transactional emails + analytics.',
    highlights: [
      '3D-lookbook style product pages',
      'Persistent cart + wishlist',
      'Live inventory synced from CMS'
    ],
    gallery: ['', '']
  },
  {
    slug: 'adult-health-care-app',
    title: 'Adult Health Care App',
    tagline: 'Wellness companion for monitoring vitals, meds, and care plans.',
    genre: 'Health Tech',
    techStack: ['React Native', 'Next.js', 'Firebase', 'Python'],
    status: 'Online',
    difficulty: 'Medium',
    shortDescription: 'Cross-platform experience for adults & caretakers to log vitals, chat with doctors, and manage meds.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Adult-Health-Care-App',
    objective: 'Provide aging communities a friendly app that keeps families and physicians in sync.',
    approach: 'React Native mobile client paired with a Next.js admin portal, Firebase auth, and Python services for analytics.',
    architecture: 'Mobile app ↔ Firebase RTDB ↔ Next.js dashboard + Python insights microservice.',
    role: 'Product + engineering lead: prototyped flows, implemented messaging, vitals tracking, and notification logic.',
    highlights: [
      'Medication reminders with caregiver acknowledgements',
      'Pulse/BP charts with anomaly alerts',
      'Secure messaging + visit journaling'
    ],
    gallery: ['', '']
  },
  {
    slug: 'booktraker',
    title: 'BookTraker',
    tagline: 'Minimalist reading tracker with stats, notes, and cover art grids.',
    genre: 'Productivity',
    techStack: ['Next.js', 'Supabase', 'Tailwind', 'Chart.js'],
    status: 'In Progress',
    difficulty: 'Easy',
    shortDescription: 'Log what you’re reading, capture quotes, and visualize pace with playful charts.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/BookTraker',
    objective: 'Make reading logs feel as beautiful as the books themselves rather than spreadsheet chores.',
    approach: 'Next.js frontend + Supabase auth/db, dynamic bookshelves, and data viz for pages per day + genre mix.',
    architecture: 'Next.js app router → Supabase (auth + tables) → Chart.js visualizations, with ISR for sharing shelves.',
    role: 'Designer/developer building the UX, data schema, and analytics.',
    highlights: [
      'Mood-based bookshelves & quote capture',
      'Progress charts by month/genre',
      'Shareable public profile for reading lists'
    ],
    gallery: ['', '']
  },
  {
    slug: 'postcards',
    title: 'Postcards',
    tagline: 'Generative typography postcard builder for sending tiny digital love notes.',
    genre: 'Creative Tech',
    techStack: ['Next.js', 'WebGL', 'Framer Motion', 'Cloudinary'],
    status: 'Online',
    difficulty: 'Medium',
    shortDescription: 'Compose animated postcards with custom gradients, fonts, and motion stickers, then share or print.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Postcards',
    demoUrl: 'https://postcards.riju.dev',
    objective: 'Make it ridiculously fun to send artful notes that feel tactile without opening Illustrator.',
    approach: 'Next.js canvas playground powered by WebGL shaders, asset uploads via Cloudinary, and Framer Motion exports.',
    architecture: 'Next.js client-side editor → URL encoded scene data → API routes for renders/storage in Cloudinary.',
    role: 'Product + creative developer handling shader experiments, UI polish, and shareable exports.',
    highlights: [
      'Live 3D gradient controls + typography library',
      'Animated exports to GIF/MP4',
      'Community gallery with remix links'
    ],
    gallery: ['', '']
  }
];

// Add more missions by pushing to the `projects` array above.
