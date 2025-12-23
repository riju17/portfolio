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
  shortDescription: string;
  coverImage: string;
  githubUrl: string;
  demoUrl?: string;
  objective: string;
  approach: string;
  architecture: string;
  architectureDiagram?: string[][];
  role: string;
  highlights: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: 'the-food-crew',
    title: 'The Food Crew',
    tagline: 'Multi-city restaurant showcase with location stories and reservations.',
    genre: 'Full-stack',
    techStack: ['Node.js', 'Express', 'Handlebars', 'MySQL', 'Tailwind'],
    status: 'Online',
    shortDescription: 'Server-rendered dining hub featuring city-specific menus, stories, and contact/reservation flows.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/The-Food-Crew',
    demoUrl: 'https://the-food-crew.vercel.app',
    objective:
      'A multi-city restaurant showcase that lets visitors explore location-specific menus, read each city’s culinary story, and reach reservation/contact pages via a clean Express-Handlebars interface.',
    approach:
      'Node.js + Express serving Handlebars templates backed by MySQL for structured interactions (reservations today, auth flows later). Static assets and media live in /public for responsive, media-rich UI.',
    architecture:
      'Browser → Express (index.js routes) → Handlebars views → MySQL for users/reservations; static assets served from /public alongside the views.',
    architectureDiagram: [
      ['Browser', 'Express.js (index.js routes)', 'Handlebars views (city pages)', 'Public assets (images/JS/CSS)'],
      ['Express.js (index.js routes)', 'MySQL (users/reservations)']
    ],
    role:
      'Designed, developed, and deployed the full-stack app—routing, dynamic templating, MySQL integration, and project structure to enable extendable restaurant pages and future authentication.',
    highlights: [
      'Multi-city restaurant presentation with location-specific content',
      'Dynamic Handlebars views for reusable UI shells',
      'Express routing with static asset handling from /public',
      'MySQL-backed reservations with room for login/signup expansion'
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
    slug: 'elderly-care-app',
    title: 'Elderly Care App',
    tagline: 'Medication reminders, SOS, vitals, and documents in one Flutter app.',
    genre: 'Health Tech',
    techStack: ['Flutter', 'Dart', 'sqflite', 'shared_preferences', 'Firebase (Auth/Firestore/Storage)', 'ML Vision'],
    status: 'In Progress',
    shortDescription: 'Offline-first elderly support app with reminders, SOS flows, vitals tracking, and caregiver signals.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Elderly-Care-App',
    objective:
      'Build a real-time elderly care app that centralizes meds, vitals, contacts, documents, and hospital info so seniors stay independent and caregivers get timely updates.',
    approach:
      'Flutter (Material) app with offline-first storage (sqflite + shared_preferences + caching) plus Firebase (Auth/Firestore/Storage + ML Vision) for sync; integrates device services for SOS, location, calling/SMS, and document capture.',
    architecture:
      'UI layer (Flutter screens/widgets) → Service layer (get_it locator: notifications, SOS, location, messaging, routing, file system) → Data layer (local sqflite + preferences/cache + Firebase Auth/Firestore/Storage); optional TomTom/OpenCage for hospital locator and Jitsi for video calls; companion caregiver app mirrors critical signals.',
    architectureDiagram: [
      ['Camera/Device inputs', 'Service layer (notifications, location, comms)', 'Data layer: sqflite/shared_prefs + Firebase'],
      ['UI layer (reminders, vitals, docs, SOS)', 'Companion app signals']
    ],
    role:
      'Built end-to-end Flutter experience: screens/flows, reminders/alarms, SOS workflows, local persistence, Firebase modules, and integration of location/maps and communication services.',
    highlights: [
      'Medication reminders with multi-slot alarms, confirmations, missed-dose alerts',
      'SOS flow notifying contacts with live location/context',
      'Hospital locator with routing + reverse geocoding',
      'Vitals tracking (sleep, weight, BP, sugar) with charts',
      'Notes/document storage for prescriptions/IDs/discharge summaries',
      'Jitsi video calls for urgent check-ins'
    ],
    gallery: ['', '']
  },
  {
    slug: 'booktraker',
    title: 'BookTraker',
    tagline: 'Offline-first personal library dashboard built with Streamlit.',
    genre: 'Productivity',
    techStack: ['Python', 'Streamlit', 'SQLite'],
    status: 'In Progress',
    shortDescription: 'Local-first app to add books, log sessions, track goals, and manage reading habits.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/BookTraker',
    demoUrl: 'https://booktraker-ckegkdgebgwzlapxthtsp2.streamlit.app',
    objective:
      'Offline-first personal library dashboard that lets readers manage books, sessions, goals, and backups locally with a persistent SQLite database.',
    approach:
      'Streamlit web app that loads/visualizes reading data in real time, supports CSV import/export, and keeps everything running locally for privacy.',
    architecture:
      'Browser-rendered Streamlit UI ↔ app.py (core logic) ↔ SQLite for persistent storage; CSV import/export for backups.',
    architectureDiagram: [
      ['Browser (Streamlit UI)', 'app.py (core logic)', 'SQLite (books, sessions, goals)'],
      ['CSV import/export', 'app.py (import/export handlers)']
    ],
    role:
      'Designed and developed the Streamlit interface, SQLite schema, reading log features, goal tracking, CSV export/import, and deployment readiness.',
    highlights: [
      'Offline-first Streamlit dashboard for personal reading data',
      'Persistent SQLite database storing books and sessions',
      'CSV export/import for backups or transfers',
      'Simple deployment with Procfile for Render/Heroku'
    ],
    gallery: ['', '']
  },
  {
    slug: 'postcards',
    title: 'Winged Wonder',
    tagline: 'Winged Wonders — a static postcard exhibit of bird stories.',
    genre: 'Static Web',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    status: 'Online',
    shortDescription: 'Static microsite of postcard-style bird chapters with responsive layouts and gentle animations.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Postcards',
    demoUrl: 'https://tourmaline-lamington-88e1d0.netlify.app',
    objective:
      'A static microsite titled “Winged Wonders – Birds Postcard Exhibit” that walks users through curated bird stories via interactive postcard chapters and imagery.',
    approach:
      'Pure HTML/CSS/JS with GSAP for smooth transitions, responsive layouts for postcard chapters, and embedded imagery/QR assets — no backend required.',
    architecture:
      'Browser loads static pages (index + chapter HTML) and asset bundles; CSS/JS drive layout and animations; images/QRs are embedded for storytelling; deployable to any static host.',
    role:
      'Designed and implemented the structure, visual design, GSAP animations, chapter organization, and asset management for the static exhibit.',
    highlights: [
      'Responsive static microsite with postcard chapters',
      'Custom bird galleries for portrait and landscape imagery',
      'GSAP-powered scroll/timeline animations for reveals',
      'QR codes integrated to link physical signage to digital content',
      'Deployable on GitHub Pages or any static host'
    ],
    gallery: ['', '']
  },
  {
    slug: 'indian-sign-language-mlpfnn',
    title: 'Indian Sign Language with MLPFNN',
    tagline: 'Real-time ISL A–Z gesture recognition with lightweight hand landmarks.',
    genre: 'AI / Computer Vision',
    techStack: ['Python', 'MediaPipe', 'TensorFlow/Keras', 'OpenCV', 'NumPy'],
    status: 'In Progress',
    shortDescription: 'MediaPipe landmark features into an MLP classifier for fast Indian Sign Language A–Z recognition.',
    coverImage: '',
    githubUrl: 'https://github.com/riju17/Indian_SignLanguage_with_MLPFNN',
    objective:
      'Build a real-time Indian Sign Language (ISL) recognition system using 42 hand-landmark features to classify A–Z signs efficiently on modest hardware.',
    approach:
      'Use MediaPipe to extract 21 hand keypoints (42 numeric features), feed them into an MLP/MLPFNN classifier, and train on labeled ISL static sign data; plan extensions for dynamic signs, TTS, and multi-hand support.',
    architecture:
      'Camera frame → MediaPipe hand keypoints (42-dim feature vector) → MLP classifier (TensorFlow/Keras) → A–Z class → optional text/speech output.',
    role:
      'Implemented end-to-end pipeline: MediaPipe configuration, feature engineering, MLPFNN design/training, inference integration, and performance evaluation.',
    highlights: [
      'Lightweight real-time classifier using 42 hand landmark features',
      'MediaPipe-powered keypoint extraction without heavy preprocessing',
      'Trained/validated on labeled ISL alphabet dataset',
      'Clear project structure with training and evaluation scripts',
      'Designed for future dynamic gestures and text-to-speech output'
    ],
    gallery: ['', '']
  }
];

// Add more missions by pushing to the `projects` array above.
