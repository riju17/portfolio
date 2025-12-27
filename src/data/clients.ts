/**
 * Studio client entries. Replace with your real projects.
 * Add image paths (e.g., '/images/aurora-hero.jpg') once your assets live inside /public.
 */
type BrandAlbumItem = { src: string; label: string; description: string };

export type Client = {
  slug: string;
  name: string;
  shortDescription: string;
  year: string;
  services: string[];
  tools: string[];
  heroImage: string;
  palette: { name: string; hex: string }[];
  typography: { label: string; family: string; sample: string }[];
  logos: { label: string; src: string }[];
  patternSystemAlbum?: BrandAlbumItem[];
  iconBadgeAlbum?: BrandAlbumItem[];
  mockups: { title: string; src: string }[];
  mockupGroups?: { title: string; items: { title: string; src: string }[] }[];
  story: {
    context: string;
    challenge: string;
    approach: string;
    outcome: string;
  };
};

export const clients: Client[] = [
 {
    slug: 'Besportify',
    name: 'Besportify',
    shortDescription: 'Grassroots sports storytelling packaged for YouTube & social.',
    year: '2021–Present',
    services: ['Analysis', 'Editorial', 'Digital', 'Sports Graphics'],
    tools: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
    heroImage: '/Besportify.jpg',
    palette: [
      { name: 'Red', hex: '#E4002B' },
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Soft Red', hex: '#FF6B6B' },
      { name: 'Silver', hex: '#CCCCCC' }
    ],
    typography: [
      { label: 'Display', family: 'Bebas Neue / Anton', sample: 'BESPORTIFY' },
      { label: 'Body', family: 'Inter / Space Grotesk', sample: 'Captions, analysis notes, stat overlays.' }
    ],
    logos: [
      { label: 'Primary Logo', src: '/Besportify.jpg' },
      { label: 'Badge / Icon', src: '/Besportify/stick figure.png' },
      { label: 'Pattern System', src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf.png' }
    ],
    patternSystemAlbum: [
      {
        src: '/Besportify/Pattern System/Gemini_Generated_Image_jt7mcjjt7mcjjt7m.png',
        label: 'Pattern 01 · Hero Net',
        description: 'Flagship weave used across hero frames and broadcast backgrounds.'
      },
      {
        src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf.png',
        label: 'Pattern 02 · Diagonal Grid',
        description: 'Sharp diagonal grid that nods to court markings and fast play.'
      },
      {
        src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-2.png',
        label: 'Pattern 03 · Contrast Motif',
        description: 'High-contrast motif for jersey inserts, stickers, and motion wipes.'
      },
      {
        src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-3.png',
        label: 'Pattern 04 · Texture Variant',
        description: 'Matte texture layer that adds tactile depth to social templates.'
      },
      {
        src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-4.png',
        label: 'Pattern 05 · Gradient Pulse',
        description: 'Diagonal gradient pulse for highlight slates and scoreboard wipes.'
      },
      {
        src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-5.png',
        label: 'Pattern 06 · Stadium Wave',
        description: 'Curving wave referencing stadium crowd energy and chants.'
      }
    ],
    mockups: [],
    mockupGroups: [
      {
        title: 'UI mockups',
        items: [
          { title: 'Dashboard Overview', src: '/Besportify/UI mockups/dashboard.png' },
          { title: 'Coach Analysis Sheet', src: '/Besportify/UI mockups/coach analysis sheet.png' },
          { title: 'Player Profile', src: '/Besportify/UI mockups/Player profile.png' },
          { title: 'Match Insights', src: '/Besportify/UI mockups/Match insights.png' },
          { title: 'Backdrop', src: '/Besportify/UI mockups/backdrop.png' },
          { title: 'UI Mockups', src: '/Besportify/UI mockups/mockups.png' },
          { title: 'UI Mockup Alt', src: '/Besportify/UI mockups/mockup2.png' },
          { title: 'Merch Mockup', src: '/Besportify/UI mockups/Merch mockup.png' }
        ]
      },
      {
        title: 'Printables mockups',
        items: [
          { title: 'Certificate', src: '/Besportify/Printables mockups/certificate.png' },
          { title: 'Visiting Card', src: '/Besportify/Printables mockups/visiting card.png' },
          { title: 'Analysis Sheet', src: '/Besportify/Printables mockups/analysis sheet mockup.png' },
          { title: 'Back Card', src: '/Besportify/Printables mockups/back card.png' },
          { title: 'Analytics UI', src: '/Besportify/Printables mockups/analytics ui.png' }
        ]
      },
      {
        title: 'Merch',
        items: [
          { title: 'T-Shirt', src: '/Besportify/Merch /tshirt.png' },
          { title: 'T-Shirt Alt', src: '/Besportify/Merch /tshirt2.png' },
          { title: 'Cap', src: '/Besportify/Merch /cap.png' },
          { title: 'Bottle', src: '/Besportify/Merch /bottle.png' },
          { title: 'Notebook', src: '/Besportify/Merch /notebook.png' },
          { title: 'ID Card', src: '/Besportify/Merch /id card.png' },
          { title: 'Complete Mockup 1', src: '/Besportify/Merch /completemockup1.png' },
          { title: 'Complete Mockup 2', src: '/Besportify/Merch /complete mockup2.png' }
        ]
      }
    ],
    story: {
      context:
        'Besportify shines a light on grassroots cricket, street matches, and underdog athlete stories via fast-paced analysis.',
      challenge:
        'Build a visual system that feels professional like broadcast networks yet relatable like street cricket for thumbnails, shorts, lives, and commentary.',
      approach:
        'Crafted a high-impact palette, modular thumbnail and scorecard templates, angular patterns, and bold type hierarchy for every content format.',
      outcome:
        'Clearer video identity, more recognizable thumbnails, and faster content production for lives, shorts, and analysis drops.'
    }
  },
  {
    slug: 'kalam-katha',
    name: 'Kalam Katha',
    shortDescription: 'Indian folk tales and mythological stories brought to life on YouTube.',
    year: '2020–present',
    services: ['Editorial', 'Digital', 'Social Design'],
    tools: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro'],
    heroImage: '/kalamkatha.PNG',
    palette: [
      { name: 'Mint Green (Soft)', hex: '#DCEBE2' },
      { name: 'Aqua Teal', hex: '#8FBFBA' },
      { name: 'Muted Teal', hex: '#7FAEAA' },
      { name: 'Peach Pastel', hex: '#F2C1A4' }
    ],
    typography: [
      { label: 'Display', family: 'Poppins Bold', sample: 'Kalam Katha Stories' },
      { label: 'Body', family: 'Inter / Space Grotesk', sample: 'Subtitles and descriptions for digital viewers.' }
    ],
    logos: [
      { label: 'Primary Logo', src: '/kalamkatha.PNG' },
      { label: 'Icon / Badge', src: '/Kalam%20Katha/bookmark.png' },
      { label: 'Pattern System', src: '/Kalam%20Katha/pattern%20sheet.png' }
    ],
    iconBadgeAlbum: [
      { src: '/Kalam%20Katha/elemt1.png', label: 'Element 1', description: 'Decorative motif used in headers and cards.' },
      { src: '/Kalam%20Katha/element2.png', label: 'Element 2', description: 'Supporting accent for chapter dividers.' },
      { src: '/Kalam%20Katha/element3.png', label: 'Element 3', description: 'Badge/spot illustration for story cues.' },
      { src: '/Kalam%20Katha/element4.png', label: 'Element 4', description: 'Icon treatment for navigation and CTA labels.' },
      { src: '/Kalam%20Katha/element5.png', label: 'Element 5', description: 'Floral-inspired accent for layout corners.' }
    ],
    mockups: [
      { title: 'Front Card', src: '/Kalam%20Katha/front%20card.png' },
      { title: 'Backdrop', src: '/Kalam%20Katha/backgdrop.png' },
      { title: 'Web Mockup', src: '/Kalam%20Katha/web.png' },
      { title: 'Thank You Card', src: '/Kalam%20Katha/thankyou%20yt%20card.png' },
      { title: 'Digital Mockup', src: '/Kalam%20Katha/digital%20mcokup.png' },
      { title: 'Complete Mockup', src: '/Kalam%20Katha/complete%20mockup.png' }
    ],
    story: {
      context: 'Kalam Katha shares traditional Indian stories across YouTube, Shorts, and social feeds.',
      challenge: 'Honor oral storytelling while staying modern, legible, and scroll-friendly for multi-platform content.',
      approach:
        'Crafted a warm color system inspired by folk motifs, bold thumbnail grids, pen-stroke textures, and motion intro kits.',
      outcome: 'A cohesive visual system boosting channel recall and speeding up content rollout across formats.'
    }
  },
  {
    slug: 'kala-katha',
    name: 'Kala Katha',
    shortDescription: 'A brand that preserves Indian textile heritage by blending traditional craftsmanship with refined, modern design.',
    year: '2025',
    services: ['Brand Identity Design','Packaging & Print Design','Pattern & Motif Design'],
    tools: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Canva'],
    heroImage: '/Kala%20Katha.jpeg',
    palette: [
      { name: 'Sindoor Red', hex: '#B1282C' },
      { name: 'Kashi Gold', hex: '#C49A43' },
      { name: 'Temple Black', hex: '#1A1A1A' },
      { name: 'Chalk White', hex: '#FAFAF7' },
      { name: 'Handloom Grey ', hex: '#A7A7A7' }
    ],
    typography: [
      { label: 'Display', family: 'Poppins Bold', sample: 'KALA KATHA' },
      {
        label: 'Body',
        family: 'Inter / Space Grotesk',
        sample: 'Subtitles, descriptions, and motion graphics for story series.'
      }
    ],
    logos: [
      { label: 'Primary Logo', src: '/Kala%20Katha.jpeg' },
      { label: 'Icon / Badge', src: '/Kala%20Katha.jpeg' },
      { label: 'Pattern System', src: '/Kala%20Katha.jpeg' }
    ],
    patternSystemAlbum: [
      {
        src: '/Kala%20katha%20pattern%20system/ps1.png',
        label: 'PS-1 · Core Weave',
        description: 'Hero lattice blending saffron + charcoal strokes, used as the base background for most layouts.'
      },
      {
        src: '/Kala%20katha%20pattern%20system/ps2.png',
        label: 'PS-2 · Lotus Bloom',
        description: 'Radial lotus bloom with teal petals that punctuates intermission slates and CTA blocks.'
      },
      {
        src: '/Kala%20katha%20pattern%20system/ps3.png',
        label: 'PS-3 · Folk Florals',
        description: 'Repeating vine illustration inspired by Mithila murals for long scroll posts and covers.'
      },
      {
        src: '/Kala%20katha%20pattern%20system/ps4.png',
        label: 'PS-4 · Story Window',
        description: 'Golden arch windows referencing temple doorways for chapter dividers and act changes.'
      },
      {
        src: '/Kala%20katha%20pattern%20system/ps5.png',
        label: 'PS-5 · Border Tiles',
        description: 'Checkered tiles that frame thumbnail edges and hold social quote cards.'
      },
      {
        src: '/Kala%20katha%20pattern%20system/ps6.png',
        label: 'PS-6 · Night Sky',
        description: 'Indigo starfield overlay that signals mystery tales and nighttime folktales.'
      },
      {
        src: '/Kala%20katha%20pattern%20system/ps7.png',
        label: 'PS-7 · Glyph Mix', 
        description: 'Loose glyph collage built for reels, sticker packs, and energetic bumpers.'
      }
    ],
    iconBadgeAlbum: [
      {
        src: '/Kala%20Katha%20icons/icon1.jpeg',
        label: 'Icon 01 · Story Glyph',
        description: 'Pen-stroke monogram that carries the primary avatar and favicon duties.'
      },
      {
        src: '/Kala%20Katha%20icons/icon2.JPG',
        label: 'Icon 02 · Stamp Seal',
        description: 'Rounded seal with ornate flourishes used on posters, bumpers, and merch.'
      },
      {
        src: '/Kala%20Katha%20icons/icon3.jpeg',
        label: 'Icon 03 · Crescent Badge',
        description: 'Half-moon badge deployed on video lower thirds and info cards.'
      },
      {
        src: '/Kala%20Katha%20icons/icon4.JPG',
        label: 'Icon 04 · Window Crest',
        description: 'Arched crest mirroring temple windows for mid-roll transitions.'
      },
      {
        src: '/Kala%20Katha%20icons/icon5.JPG',
        label: 'Icon 05 · Bloom Mark',
        description: 'Lotus-inspired bloom for sticker packs and CTA buttons.'
      },
      {
        src: '/Kala%20Katha%20icons/icon6.JPG',
        label: 'Icon 06 · Glyph Cluster',
        description: 'Cluster of supporting glyphs dedicated to reels and social avatars.'
      }
    ],
    mockups: [
      { title: 'Branding Tags', src: '/Kala%20Katha%20branding/Branding%20tags.png' },
      { title: 'Sticker Pack', src: '/Kala%20Katha%20branding/Stickers.png' },
      { title: 'Thank You Card', src: '/Kala%20Katha%20branding/Thank%20you%20card.png' },
      { title: 'Visiting Card', src: '/Kala%20Katha%20branding/Visiting%20card.png' },
      { title: 'Packaging Tape', src: '/Kala%20Katha%20branding/packaging%20tape.png' },
      { title: 'Ink Stamp', src: '/Kala%20Katha%20branding/ink%20stamp.png' },
      { title: 'Complete Mockup 01', src: '/Kala%20Katha%20branding/complete%20mockup1.png' },
      { title: 'Complete Mockup 02', src: '/Kala%20Katha%20branding/complete%20mockup2.png' }
    ],
    story: {
      context:
        'Kala Katha is a heritage-inspired fashion brand born from the desire to preserve India’s traditional textile wisdom while presenting it through a modern, minimal, globally relevant identity. The brand collaborates directly with local artisans and weavers, many of whom come from generational craft communities. The goal is to create a platform that elevates their handloom work, bringing authentic storytelling and craftsmanship into contemporary fashion spaces.',
      challenge:
        'The primary challenge was to design a visual identity that honored deep-rooted Indian culture without appearing old-fashioned or ornate. We needed a balance between traditional authenticity and modern design clarity—something that would resonate with global consumers yet stay true to the craft. Another major challenge was creating consistent branding across all touchpoints so the artisans’ work could be represented professionally, giving them a larger platform and greater visibility.',
      approach:
        'The design approach blended classical Indian motifs—such as mandala-inspired patterns, textile line-art, and Devanagari typography—with a minimal monochrome palette to maintain a clean, premium feel. Every element of the branding kit was designed to represent the duality of tradition and modernity: subtle borders, clean typography, structured layouts, and refined iconography.\n' +
        'Beyond visuals, the brand strategy focused on building a bridge between local weavers and modern buyers, ensuring the identity celebrated handcrafted artistry while presenting it in a refined, boutique-like manner suitable for both Indian and international markets.',
      outcome: 'The final identity system is elegant, cohesive, and culturally rich—successfully reflecting the brand’s mission. Kala Katha now functions as a modern platform that brings traditional weavers into the spotlight, enabling their artistry to be appreciated on a global scale. The clean, premium branding enhances product value, strengthens storytelling, and positions the brand as a leader in contemporary Indian heritage fashion.'
    }
  },
  {
    slug: 'statstrike',
    name: 'StatStrike',
    shortDescription: 'Sports analytics platform turning live stats into interactive stories.',
    year: '2025',
    services: ['Branding', 'UI/UX'],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Canva'],
    heroImage: '/Statstr.JPG',
    palette: [
      { name: 'Mint Edge', hex: '#9DD9D2' },
      { name: 'Jet Black', hex: '#0B0B0B' },
      { name: 'Gold Flame', hex: '#C9A875' },
      { name: 'Stat Blue', hex: '#4DBFD8' }
    ],
    typography: [
      { label: 'Display', family: 'Clash Display', sample: 'STAT STRIKE' },
      { label: 'Body', family: 'General Sans', sample: 'Data dashboards built for fans & athletes.' }
    ],
    logos: [
      { label: 'Primary Mark', src: '/Statstr.JPG' },
      { label: 'Badges & Icons', src: '/Statstrike/logos/l2.png' },
      { label: 'Pattern System', src: '/Statstrike/patterns/p1.png' }
    ],
    iconBadgeAlbum: [
      {
        src: '/Statstrike/logos/l1.png',
        label: 'Icon 01 · Core Crest',
        description: 'StatStrike monogram with mint capsule glow for hero placements.'
      },
      {
        src: '/Statstrike/logos/l2.png',
        label: 'Icon 02 · Wordmark',
        description: 'Extended logotype used on broadcast panels and jerseys.'
      },
      {
        src: '/Statstrike/logos/l3.png',
        label: 'Icon 03 · Badge',
        description: 'Condensed badge for avatars, watermarks, and stickers.'
      },
      {
        src: '/Statstrike/logos/l4.png',
        label: 'Icon 04 · Jersey Patch',
        description: 'Square badge paired with kit sleeves and digital tickets.'
      },
      {
        src: '/Statstrike/logos/l5.png',
        label: 'Icon 05 · Neon Glyph',
        description: 'Glow-backed glyph for scoreboard transitions and stings.'
      },
      {
        src: '/Statstrike/logos/l6.png',
        label: 'Icon 06 · Gradient Seal',
        description: 'Circular seal locking up the colors for event merch.'
      }
    ],
    patternSystemAlbum: [
      {
        src: '/Statstrike/patterns/p1.png',
        label: 'Pattern 01 · Pulse Grid',
        description: 'Primary grid referencing radar sweeps for dashboard panels.'
      },
      {
        src: '/Statstrike/patterns/p2.png',
        label: 'Pattern 02 · Match Waves',
        description: 'Signal waves layered over hero art for live match interstitials.'
      },
      {
        src: '/Statstrike/patterns/p3.png',
        label: 'Pattern 03 · Stat Blocks',
        description: 'Stacked block pattern framing comparison stats and charts.'
      },
      {
        src: '/Statstrike/patterns/p4.png',
        label: 'Pattern 04 · Vector Mesh',
        description: 'Wireframe mesh bridging AR scenes with UI cards.'
      },
      {
        src: '/Statstrike/patterns/p5.png',
        label: 'Pattern 05 · Kinetic Rings',
        description: 'Circular motion blur for highlight wipes and hero spreads.'
      },
      {
        src: '/Statstrike/patterns/p6.png',
        label: 'Pattern 06 · Infra Lines',
        description: 'Infrared line field backing charts and sponsorship wipes.'
      }
    ],
    mockups: [],
    mockupGroups: [
      {
        title: 'Digital System',
        items: [
          { title: 'App Logo', src: '/Statstrike/digital elements/app logo.png' },
          { title: 'Loading Logo', src: '/Statstrike/digital elements/loading logo.png' },
          { title: 'Dashboard Header', src: '/Statstrike/digital elements/dashboard header.png' },
          { title: 'Hero Banner', src: '/Statstrike/digital elements/banner.png' },
          { title: 'Wallpaper Pack', src: '/Statstrike/digital elements/wallpaper.png' }
        ]
      },
      {
        title: 'Printables & Reports',
        items: [
          { title: 'Performance UI', src: '/Statstrike/Printables/performance UI.png' },
          { title: 'Invoice Layout', src: '/Statstrike/Printables/invoice UI.png' },
          { title: 'Analysis Sheet', src: '/Statstrike/Printables/analysis sheet.png' },
          { title: 'Letterhead', src: '/Statstrike/Printables/Letterhead.png' },
          { title: 'Visiting Card', src: '/Statstrike/Printables/visiting card.png' }
        ]
      },
      {
        title: 'Merch & Desk',
        items: [
          { title: 'Badge Patch', src: '/Statstrike/mockups/patch.png' },
          { title: 'Bat Sticker', src: '/Statstrike/mockups/batsticker.png' },
          { title: 'Desk Mat', src: '/Statstrike/mockups/desk mat.png' },
          { title: 'Mousepad', src: '/Statstrike/mockups/mousepad.png' },
          { title: 'Laptop Sleeve', src: '/Statstrike/mockups/laptop sleeve.png' },
          { title: 'Clipboard', src: '/Statstrike/mockups/Clipboard.png' },
          { title: 'Bottle', src: '/Statstrike/mockups/bottle.png' },
          { title: 'Coffee Mug', src: '/Statstrike/mockups/coffee mug.png' },
          { title: 'Stat Card', src: '/Statstrike/mockups/statcard.png' }
        ]
      },
      {
        title: 'Typography Looks',
        items: [
          { title: 'Headline Grid', src: '/Statstrike/typography/semihead.png' },
          { title: 'Type Specimens', src: '/Statstrike/typography/Gemini_Generated_Image_ee7diyee7diyee7d.png' },
          { title: 'Editorial Spread', src: '/Statstrike/typography/complete mockup.png' }
        ]
      }
    ],
    story: {
      context: 'The game of cricket generates massive amounts of performance data, yet most players, academies, and coaches still rely on manual observation and fragmented tools. STATSTRIKE was created to bridge this gap — a modern, minimal, hyper-efficient analytics system designed to make data easy, accessible, and actionable for players across all levels. With a brand language inspired by precision, motion, and impact, STATSTRIKE positions itself as the new standard for sport-tech intelligence.',
      challenge: 'Cricket analytics platforms often feel cluttered, overly technical, or visually outdated. The challenge was to build a brand that communicates power and accuracy while staying clean, futuristic, and instantly recognizable. STATSTRIKE needed: \n A bold visual identity built around speed, flame-motion, and smart data.\n' +'A system simple enough for beginners but strong enough for competitive coaching. \n Branding assets that work both on the field (jerseys, gear, reports) and on-screen (app, dashboard, UI). \n A look that feels premium yet accessible to every level of cricket.',
      approach: 'The brand was built starting from the core symbol — a flaming cricket ball — representing momentum, sharpness, and game intelligence. From this, a minimal visual system was developed using: A mint–gold–black palette to reflect sport-tech clarity and premium performance. Analytical brand patterns like stat lines, trajectory arcs, dot matrices, and simplified flame strokes. A modern typography stack combining bold sports headings and mono-space data fonts. Clean layout systems for dashboards, match reports, performance cards, and digital screens. Every asset was designed to reflect the brand’s promise: sharp insights, fast decisions, smart cricket.',
      outcome: 'Improved viewer engagement with quicker highlight packages and social-ready stat snippets.'
    }
  },
  {
    slug: 'birdbook-podcast',
    name: 'The Birdbook Podcast',
    shortDescription: 'A serene, minimal brand world crafted to translate birdlife, nature, and storytelling into a modern podcast experience.',
    year: '2025',
    services: ['Digital Branding & Social Media Design', 'Editorial', 'Audio Design','Podcast Production Design'],
    tools: ['Figma', 'Studio flat-lay mockups', 'Adobe Illustrator','Adobe InDesign / Canva'],
    heroImage: '/Birdbook.JPG',
    palette: [
      { name: 'Feather Blue', hex: '#2C5F73' },
      { name: 'Warm Clay', hex: '#C79A72' },
      { name: 'Moss', hex: '#6B8B60' },
      { name: 'Eggshell', hex: '#FDF5E3' }
    ],
    typography: [
      { label: 'Display', family: 'Recoleta', sample: 'THE BIRDBOOK PODCAST' },
      { label: 'Body', family: 'Space Grotesk', sample: 'Field notes, species stories & conservation cards.' }
    ],
    logos: [
      { label: 'Primary Crest', src: '/Birdbook.JPG' },
      { label: 'Wing Icon', src: '/The Birdbook Podcast/Brand identity essential/Main logo.png' },
      { label: 'Pattern System', src: '/The Birdbook Podcast/patterns/pattern mockup.png' }
    ],
    patternSystemAlbum: [
      {
        src: '/The Birdbook Podcast/patterns/pattern mockup.png',
        label: 'Pattern System Overview',
        description: 'Collage of all 10 patterns working in harmony across various touchpoints.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p1.png',
        label: 'Pattern 01 · Feathertail Grid',
        description: 'Primary textile-inspired repeat that anchors merch and packaging.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p2.png',
        label: 'Pattern 02 · Flight Paths',
        description: 'Ribbon-like vector lines referencing migratory routes for longform spreads.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p3.png',
        label: 'Pattern 03 · Forest Canopy',
        description: 'Soft foliage illustration layered behind quotes and episode art.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p4.png',
        label: 'Pattern 04 · Echo Rings',
        description: 'Concentric radio waves representing audio storytelling moments.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p5.png',
        label: 'Pattern 05 · Feather Scatter',
        description: 'Floating feather icons for social overlays, zines, and stationary.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p6.png',
        label: 'Pattern 06 · Cliff Lines',
        description: 'Organic contour lines hinting at topographic maps for field journals.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p7.png',
        label: 'Pattern 07 · Dawn Gradient',
        description: 'Warm-toned gradient wash used on hero slides and playlists.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p8.png',
        label: 'Pattern 08 · Night Sky Grid',
        description: 'Starry dotted lattice for nighttime tales and celestial content.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p9.png',
        label: 'Pattern 09 · Water Ripples',
        description: 'Lake-inspired pattern for meditative episodes and ambient breaks.'
      },
      {
        src: '/The Birdbook Podcast/patterns/p10.png',
        label: 'Pattern 10 · Crest Collage',
        description: 'Collage of process sketches reserved for posters and limited prints.'
      }
    ],
    iconBadgeAlbum: [
      {
        src: '/The Birdbook Podcast/Brand identity essential/Main logo.png',
        label: 'Main Logo Lockup',
        description: 'Stacked wordmark with illustrated bird arch for premium touchpoints.'
      },
      {
        src: '/The Birdbook Podcast/Brand identity essential/Brandmark badge.png',
        label: 'Brandmark Badge',
        description: 'Circular badge for podcast avatars and wax seals.'
      },
      {
        src: '/The Birdbook Podcast/Brand identity essential/alternate circular logo.png',
        label: 'Alternate Circular Logo',
        description: 'Condensed crest tailored for stickers and enamel pins.'
      },
      {
        src: '/The Birdbook Podcast/Brand identity essential/minimal bird icon.png',
        label: 'Minimal Bird Icon',
        description: 'Single-line bird used at favicons/scaled micro UI moments.'
      },
      {
        src: '/The Birdbook Podcast/Brand identity essential/Feather symbol.png',
        label: 'Feather Symbol',
        description: 'Illustrated feather to accent typographic layouts.'
      }
    ],
    mockups: [
      { title: 'Digital Identity Spread', src: '/The Birdbook Podcast/digital identity/digital identity.png' },
      { title: 'Stationary Suite', src: '/The Birdbook Podcast/Stationary/complete stationary .png' },
      { title: 'Merch Drop', src: '/The Birdbook Podcast/Merch/merch mockup 1.png' }
    ],
    mockupGroups: [
      {
        title: 'Typography System',
        items: [
          { title: 'Primary Typeface', src: '/The Birdbook Podcast/Typography System/Primary font.png' },
          { title: 'Secondary Typeface', src: '/The Birdbook Podcast/Typography System/Secondary font.png' },
          { title: 'Accent Typeface', src: '/The Birdbook Podcast/Typography System/Accent Font.png' },
          { title: 'Letter Forms Study', src: '/The Birdbook Podcast/Typography System/Letter forms.png' }
        ]
      },
      {
        title: 'Stationary',
        items: [
          { title: 'Complete Stationary', src: '/The Birdbook Podcast/Stationary/complete stationary .png' },
          { title: 'Bookmark', src: '/The Birdbook Podcast/Stationary/Book mark.png' },
          { title: 'Sticker Sheet', src: '/The Birdbook Podcast/Stationary/Stickers.png' },
          { title: 'Thank You Card', src: '/The Birdbook Podcast/Stationary/Thank you card.png' },
          { title: 'Visiting card', src: '/The Birdbook Podcast/Stationary/Visiting card.png' },
          { title: 'QR Card', src: '/The Birdbook Podcast/Stationary/QR card.png' },
          { title: 'Envelope Kit', src: '/The Birdbook Podcast/Stationary/envelopes.png' }
        ]
      },
      {
        title: 'Digital Identity',
        items: [
          { title: 'Identity Overview', src: '/The Birdbook Podcast/digital identity/digital identity.png' },
          { title: 'Highlight Icons', src: '/The Birdbook Podcast/digital identity/d3.png' },
          { title: 'Spotify Cover Banners', src: '/The Birdbook Podcast/digital identity/d1.png' },
          { title: 'Youtube Banner', src: '/The Birdbook Podcast/digital identity/d2.png' },
          { title: 'Profile Stamp', src: '/The Birdbook Podcast/digital identity/d4.png' },
          { title: 'Social Media Templates', src: '/The Birdbook Podcast/digital identity/d5.png' }
        ]
      },
      {
        title: 'Merch Drops',
        items: [
          { title: 'Merch Mockup', src: '/The Birdbook Podcast/Merch/merch mockup 1.png' },
          { title: 'Collection', src: '/The Birdbook Podcast/Merch/merch mockup 2.png' },
          { title: 'Tote Bag', src: '/The Birdbook Podcast/Merch/m1.png' },
          { title: 'Enamel Pin', src: '/The Birdbook Podcast/Merch/m2.png' },
          { title: 'Sticker Pack', src: '/The Birdbook Podcast/Merch/m3.png' },
          {title: 'Diary', src: '/The Birdbook Podcast/Merch/m4.png' },
          {title: 'Web Page Layout', src: '/The Birdbook Podcast/Merch/m5.png' },
          {title: 'Newsletter Template', src: '/The Birdbook Podcast/Merch/m6.png' },
          {title: 'Print Poster Template', src: '/The Birdbook Podcast/Merch/m7.png' }
        ]
      }
    ],
    story: {
      context: 'The BirdBook Podcast was created to bring the beauty, intelligence, and stories of birds into a modern audio experience. The goal was to build a brand identity that felt calm, natural, and educational—something that captures the serenity of nature while appealing to a growing digital audience. The brand needed to represent the harmony between scientific knowledge, storytelling, and the wonder of wildlife.',
      challenge: 'The biggest challenge was crafting a design system that balances nature’s organic softness with a modern digital podcast aesthetic. It needed to feel premium and minimal while still carrying the warmth and personality of the birds featured in each episode. The brand also had to function across multiple platforms—Spotify, YouTube, Instagram—and support both audio and visual communication. Creating a cohesive identity that visually represents sound, wings, feathers, and movement was essential.',
      approach: 'The design approach centered around clean line-art, soft earth-toned palettes, and minimalist bird illustrations that evoke calmness and clarity. Patterns were inspired by feather geometry, flight silhouettes, and nature textures. Digital assets were built with a modular system so episode covers, highlight icons, and waveform visuals feel consistently branded. The overall direction blends editorial modern design with gentle organic motifs, creating a space where nature and digital storytelling meet.',
      outcome: 'The final branding system is serene, modern, and richly connected to nature. It gives the Bird Talk Podcast a distinct identity that stands out in the digital audio space while remaining true to the essence of wildlife storytelling. With cohesive visual assets, platform-ready templates, and nature-inspired patterns, the brand now communicates its message clearly, builds audience trust, and elevates the listening experience across every touchpoint.'
    }
  },
  {
    slug: 'devs-cricket-academy',
    name: "Dev's Cricket Academy",
    shortDescription: 'Youth cricket academy blending high-performance coaching with playful storytelling.',
    year: '2020–Present',
    services: ['Branding', 'Digital', 'Social Design'],
    tools: ['Figma', 'Illustrator', 'Premiere Pro'],
    heroImage: '/Devs.JPEG',
    palette: [
      { name: 'Academy Blue', hex: '#063B73' },
      { name: 'Red', hex: '#E03028' },
      { name: 'Chalk White', hex: '#FFFFFF' },
      { name: 'Sky Grey', hex: '#A9B0B8' },
      { name: 'Deep NAvy', hex: '#031F44' }
    ],
    typography: [
      { label: 'Display', family: 'Druk Wide', sample: 'DEV\'S CRICKET' },
      { label: 'Body', family: 'General Sans', sample: 'Training programs, drills, fixtures.' }
    ],
    logos: [
      { label: 'Primary Crest', src: '/Devs.JPEG' },
      { label: 'Icon & Badge Set', src: '/Devs cricket academy /Icons and badges/icon.png' }
    ],
    iconBadgeAlbum: [
      {
        src: '/Devs cricket academy /Icons and badges/icon.png',
        label: 'Icon 01 · Crest',
        description: 'Primary academy crest with wicket + ball centerpiece.'
      },
      {
        src: '/Devs cricket academy /Icons and badges/ball.png',
        label: 'Icon 02 · Power Seam',
        description: 'High-contrast cricket ball icon for overlays and badges.'
      },
      {
        src: '/Devs cricket academy /Icons and badges/stumps.png',
        label: 'Icon 03 · Guarded Stumps',
        description: 'Minimal stump illustration for defensive tips and stat cards.'
      },
      {
        src: '/Devs cricket academy /Icons and badges/bowler.png',
        label: 'Icon 04 · Pace Arc',
        description: 'Silhouette of a bowler captured mid action for hype graphics.'
      },
      {
        src: '/Devs cricket academy /Icons and badges/bat.png',
        label: 'Icon 05 · Bat Stroke',
        description: 'Flat illustration of the academy bat graphic for merch labels.'
      },
      {
        src: '/Devs cricket academy /Icons and badges/batsmen.png',
        label: 'Icon 06 · Batter Pose',
        description: 'Hero batter pose used on scorecards and recruitment decks.'
      }
    ],
    mockups: [
      { title: 'Scorecard UI', src: '/Devs cricket academy /socials and forms/Scorecard.png' },
      { title: 'Drills Poster Stack', src: '/Devs cricket academy /socials and forms/socials and posters.png' },
      { title: 'Certificate Template', src: '/Devs cricket academy /printables/certificate.png' }
    ],
    mockupGroups: [
      {
        title: 'Apparel Drop',
        items: [
          { title: 'Home Jersey', src: '/Devs cricket academy /apparelle/t1.png' },
          { title: 'Away Jersey', src: '/Devs cricket academy /apparelle/t2.png' },
          { title: 'Training Jersey', src: '/Devs cricket academy /apparelle/t3.png' },
          { title: 'Coach Tee', src: '/Devs cricket academy /apparelle/t4.png' },
          { title: 'Retro Tee', src: '/Devs cricket academy /apparelle/t5.png' },
          { title: 'Youth Tee', src: '/Devs cricket academy /apparelle/t6.png' },
          { title: 'Academy Tee', src: '/Devs cricket academy /apparelle/t7.png' },
          { title: 'Full Kit · White', src: '/Devs cricket academy /apparelle/complete mockup white.png' },
          { title: 'Full Kit · Blue', src: '/Devs cricket academy /apparelle/complete mockup blue.png' },
          { title: 'Cap Line', src: '/Devs cricket academy /apparelle/cap.png' },
          { title: 'Sticker Sheet', src: '/Devs cricket academy /apparelle/stickers.png' }
        ]
      },
      {
        title: 'Socials & Forms',
        items: [
          { title: 'Banner', src: '/Devs cricket academy /socials and forms/banner.png' },
          { title: 'Registration Form', src: '/Devs cricket academy /socials and forms/Registration form.png' },
          { title: 'Report Sheet', src: '/Devs cricket academy /socials and forms/Report sheet.png' },
          { title: 'Post Template', src: '/Devs cricket academy /socials and forms/post temp.png' },
          { title: 'YouTube Thumbnail', src: '/Devs cricket academy /socials and forms/thumbnail.png' }
        ]
      },
      {
        title: 'Printables Kit',
        items: [
          { title: 'Visiting Card', src: '/Devs cricket academy /printables/visiting card.png' },
          { title: 'Letterhead', src: '/Devs cricket academy /printables/letter head.png' },
          { title: 'ID Card', src: '/Devs cricket academy /printables/id card.png' }
        ]
      }
    ],
    story: {
      context: 'Dev’s Cricket Academy was founded with a simple goal: to give young players a space where technique, discipline, and modern cricketing intelligence come together. While many academies focus only on physical training, the vision here was to build a learning ecosystem — one that blends traditional coaching with structured analysis, progress tracking, and individualized development. The academy needed a brand identity that communicates trust, growth, and modern cricket excellence.',
      challenge: 'In a world where cricket academies look visually similar, the challenge was to create a brand presence that feels distinct, polished, and purpose-driven. Dev’s Cricket Academy required:A visual identity that reflects professionalism, youth development, and disciplined training.A system that works across field gear, report cards, posters, certificates, and digital platforms . Branding that communicates mentorship, growth, and skill-building—not just cricket practice. A style that feels premium but still warm, approachable, and inspiring for young players and parents.',
      approach: 'The identity was built around strong foundational elements — structured layout grids, confident typography, and sharp cricket-inspired visuals. The branding combines: A professional yet energetic color palette representing ambition and performance.Clean iconography and line-based motifs inspired by cricket strokes, seam patterns, and field setups. Simple, clear communication for training schedules, analytics sheets, and skill-progress tracking. A mix of bold display fonts for inspiration and clean sans-serifs for clarity and instruction. The brand direction mirrors the academy’s pedagogy: disciplined, modern, supportive, and high-impact.',
      outcome: 'Dev’s Cricket Academy now has a cohesive, inspiring brand identity that reflects its core mission — shaping confident, technically strong players. The final system includes field-friendly branding (jersey patches, bat stickers, training sheets), parent-friendly documents (performance reports, certificates), and digital assets (social banners, session updates). The identity elevates the academy’s presence, strengthens trust, and visually communicates its commitment to nurturing the next generation of cricketers.'
    }
  }
];

// To add a new client, copy one of the objects above and update the data points.
