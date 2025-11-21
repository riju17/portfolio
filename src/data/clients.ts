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
      { label: 'Display', family: 'Bebas Neue / Anton', sample: 'SPORTIFY 2165' },
      { label: 'Body', family: 'Inter / Space Grotesk', sample: 'Captions, analysis notes, stat overlays.' }
    ],
    logos: [
      { label: 'Primary Logo', src: '/Besportify.jpg' },
      { label: 'Badge / Icon', src: '/Besportify.jpg' },
      { label: 'Pattern System', src: '/Besportify.jpg' }
    ],
    mockupGroups: [
      {
        title: 'UI mockups',
        items: [
          { title: 'Dashboard Overview', src: '/Besportify/UI mockups/Gemini_Generated_Image_9xjiij9xjiij9xji.png' },
          { title: 'Dashboard Variation', src: '/Besportify/UI mockups/Gemini_Generated_Image_9xjiij9xjiij9xji-2.png' },
          { title: 'Player Profile', src: '/Besportify/UI mockups/Gemini_Generated_Image_ajzg80ajzg80ajzg.png' },
          { title: 'Match Insights', src: '/Besportify/UI mockups/Gemini_Generated_Image_btaf8hbtaf8hbtaf.png' },
          { title: 'Live Tracker', src: '/Besportify/UI mockups/Gemini_Generated_Image_h4irz9h4irz9h4ir.png' },
          { title: 'Mobile Screens', src: '/Besportify/UI mockups/Gemini_Generated_Image_hosa40hosa40hosa.png' },
          { title: 'Lineup Panel', src: '/Besportify/UI mockups/Gemini_Generated_Image_lpne9tlpne9tlpne.png' },
          { title: 'Schedule Grid', src: '/Besportify/UI mockups/Gemini_Generated_Image_mpnyrdmpnyrdmpny.png' }
        ]
      },
      {
        title: 'Pattern System',
        items: [
          { title: 'Primary Pattern', src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf.png' },
          { title: 'Diagonal Grid', src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-2.png' },
          { title: 'Contrast Motif', src: '/Besportify/Pattern System/Gemini_Generated_Image_jt7mcjjt7mcjjt7m.png' },
          { title: 'Texture Variant', src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-3.png' },
          { title: 'Gradient Layer', src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-4.png' },
          { title: 'Stadium Wave', src: '/Besportify/Pattern System/Gemini_Generated_Image_7gyftm7gyftm7gyf-5.png' }
        ]
      },
      {
        title: 'Printables mockups',
        items: [
          { title: 'Flyer Stack', src: '/Besportify/Printables mockups/Gemini_Generated_Image_cw4czrcw4czrcw4c.png' },
          { title: 'Poster Set', src: '/Besportify/Printables mockups/Gemini_Generated_Image_ocx239ocx239ocx2.png' },
          { title: 'Tickets', src: '/Besportify/Printables mockups/Gemini_Generated_Image_sxkm5wsxkm5wsxkm.png' },
          { title: 'Event Badges', src: '/Besportify/Printables mockups/Gemini_Generated_Image_triklbtriklbtrik.png' },
          { title: 'Magazine Spread', src: '/Besportify/Printables mockups/Gemini_Generated_Image_yq62axyq62axyq62.png' }
        ]
      },
      {
        title: 'Merch',
        items: [
          { title: 'Jersey Concept', src: '/Besportify/Merch /Gemini_Generated_Image_qo2sqbqo2sqbqo2s.png' },
          { title: 'Jersey Alt Color', src: '/Besportify/Merch /Gemini_Generated_Image_qo2sqbqo2sqbqo2s-2.png' },
          { title: 'Jersey Detail', src: '/Besportify/Merch /Gemini_Generated_Image_qo2sqbqo2sqbqo2s-3.png' },
          { title: 'Cap + Scarf', src: '/Besportify/Merch /Gemini_Generated_Image_sc4gsssc4gsssc4g.png' },
          { title: 'Stadium Merch Table', src: '/Besportify/Merch /Gemini_Generated_Image_dysjcjdysjcjdysj.png' },
          { title: 'Hoodie Lockup', src: '/Besportify/Merch /Gemini_Generated_Image_c6l6suc6l6suc6l6.png' },
          { title: 'Jacket Concept', src: '/Besportify/Merch /Gemini_Generated_Image_6e8yrk6e8yrk6e8y.png' },
          { title: 'Cap Detail', src: '/Besportify/Merch /Gemini_Generated_Image_5pzh845pzh845pzh.png' }
        ]
      }
    ],
    story: {
      context:
        'Sportify 2165 shines a light on grassroots cricket, street matches, and underdog athlete stories via fast-paced analysis.',
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
    year: '2023–2025',
    services: ['Editorial', 'Digital', 'Social Design'],
    tools: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro'],
    heroImage: '/kalamkatha.PNG',
    palette: [
      { name: 'Kesar', hex: '#F6A848' },
      { name: 'Koyal Black', hex: '#1A1A1A' },
      { name: 'Turmeric Sand', hex: '#E3C078' },
      { name: 'Peepal Green', hex: '#4F704B' },
      { name: 'Gulabi Tint', hex: '#C7668C' }
    ],
    typography: [
      { label: 'Display', family: 'Poppins Bold', sample: 'Kalam Katha Stories' },
      { label: 'Body', family: 'Inter / Space Grotesk', sample: 'Subtitles and descriptions for digital viewers.' }
    ],
    logos: [
      { label: 'Primary Logo', src: '/kalamkatha.PNG' },
      { label: 'Icon / Badge', src: '/Kalam Katha/Gemini_Generated_Image_7fzulc7fzulc7fzu.png' },
      { label: 'Pattern System', src: '/Kalam Katha/Gemini_Generated_Image_4fu71e4fu71e4fu7.png' }
    ],
    mockups: [
      { title: 'Story Gallery', src: '/Kalam Katha/Gemini_Generated_Image_j0vwxcj0vwxcj0vw.png' },
      { title: 'Chapter Card', src: '/Kalam Katha/Gemini_Generated_Image_j0vwxcj0vwxcj0vw copy.png' },
      { title: 'Motion Sticker Pack', src: '/Kalam Katha/Gemini_Generated_Image_w38hjcw38hjcw38h.png' },
      { title: 'Social Kit Templates', src: '/Kalam Katha/Gemini_Generated_Image_p2v0jzp2v0jzp2v0.png' }
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
    heroImage: '/Kala Katha.jpeg',
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
      { label: 'Primary Logo', src: '/Kala Katha.jpeg' },
      { label: 'Icon / Badge', src: '/Kala Katha.jpeg' },
      { label: 'Pattern System', src: '/Kala Katha.jpeg' }
    ],
    patternSystemAlbum: [
      {
        src: '/Kala katha pattern system/ps1.png',
        label: 'PS-1 · Core Weave',
        description: 'Hero lattice blending saffron + charcoal strokes, used as the base background for most layouts.'
      },
      {
        src: '/Kala katha pattern system/ps2.png',
        label: 'PS-2 · Lotus Bloom',
        description: 'Radial lotus bloom with teal petals that punctuates intermission slates and CTA blocks.'
      },
      {
        src: '/Kala katha pattern system/ps3.png',
        label: 'PS-3 · Folk Florals',
        description: 'Repeating vine illustration inspired by Mithila murals for long scroll posts and covers.'
      },
      {
        src: '/Kala katha pattern system/ps4.png',
        label: 'PS-4 · Story Window',
        description: 'Golden arch windows referencing temple doorways for chapter dividers and act changes.'
      },
      {
        src: '/Kala katha pattern system/ps5.png',
        label: 'PS-5 · Border Tiles',
        description: 'Checkered tiles that frame thumbnail edges and hold social quote cards.'
      },
      {
        src: '/Kala katha pattern system/ps6.png',
        label: 'PS-6 · Night Sky',
        description: 'Indigo starfield overlay that signals mystery tales and nighttime folktales.'
      },
      {
        src: '/Kala katha pattern system/ps7.png',
        label: 'PS-7 · Glyph Mix', 
        description: 'Loose glyph collage built for reels, sticker packs, and energetic bumpers.'
      }
    ],
    iconBadgeAlbum: [
      {
        src: '/Kala Katha icons/icon1.jpeg',
        label: 'Icon 01 · Story Glyph',
        description: 'Pen-stroke monogram that carries the primary avatar and favicon duties.'
      },
      {
        src: '/Kala Katha icons/icon2.JPG',
        label: 'Icon 02 · Stamp Seal',
        description: 'Rounded seal with ornate flourishes used on posters, bumpers, and merch.'
      },
      {
        src: '/Kala Katha icons/icon3.jpeg',
        label: 'Icon 03 · Crescent Badge',
        description: 'Half-moon badge deployed on video lower thirds and info cards.'
      },
      {
        src: '/Kala Katha icons/icon4.JPG',
        label: 'Icon 04 · Window Crest',
        description: 'Arched crest mirroring temple windows for mid-roll transitions.'
      },
      {
        src: '/Kala Katha icons/icon5.JPG',
        label: 'Icon 05 · Bloom Mark',
        description: 'Lotus-inspired bloom for sticker packs and CTA buttons.'
      },
      {
        src: '/Kala Katha icons/icon6.JPG',
        label: 'Icon 06 · Glyph Cluster',
        description: 'Cluster of supporting glyphs dedicated to reels and social avatars.'
      }
    ],
    mockups: [
      { title: 'Branding Tags', src: '/Kala Katha branding/Branding tags.png' },
      { title: 'Sticker Pack', src: '/Kala Katha branding/Stickers.png' },
      { title: 'Thank You Card', src: '/Kala Katha branding/Thank you card.png' },
      { title: 'Visiting Card', src: '/Kala Katha branding/Visiting card.png' },
      { title: 'Packaging Tape', src: '/Kala Katha branding/packaging tape.png' },
      { title: 'Ink Stamp', src: '/Kala Katha branding/ink stamp.png' },
      { title: 'Complete Mockup 01', src: '/Kala Katha branding/complete mockup1.png' },
      { title: 'Complete Mockup 02', src: '/Kala Katha branding/complete mockup2.png' }
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
    year: '2022',
    services: ['Branding', 'UI/UX'],
    tools: ['Figma', 'Cinema4D'],
    heroImage: '/Statstr.JPG',
    palette: [
      { name: 'Neon Lime', hex: '#B4FF39' },
      { name: 'Midnight Turf', hex: '#071727' },
      { name: 'Graphite', hex: '#1F2A37' },
      { name: 'Frost', hex: '#F1F5F9' }
    ],
    typography: [
      { label: 'Display', family: 'Clash Display', sample: 'STAT STRIKE' },
      { label: 'Body', family: 'General Sans', sample: 'Data dashboards built for fans & athletes.' }
    ],
    logos: [
      { label: 'Primary Mark', src: '/Statstr.JPG' },
      { label: 'Glyphs', src: '/Statstr.JPG' },
      { label: 'Jersey Tag', src: '/Statstr.JPG' }
    ],
    mockups: [
      { title: 'Mobile UI', src: '' },
      { title: 'Scoreboard stickers', src: '' },
      { title: 'Event signage', src: '' }
    ],
    story: {
      context: 'StatStrike delivers real-time analytics across cricket, football, and tennis broadcasts.',
      challenge: 'Make complex stats feel cinematic and accessible on mobile dashboards + broadcast overlays.',
      approach: 'Built neon-lime palette, kinetic typography, and modular card system for quicker storytelling.',
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
      { name: 'Pitch Green', hex: '#1C7C54' },
      { name: 'Sunset Orange', hex: '#FF7A3D' },
      { name: 'Chalk White', hex: '#F6F6F6' },
      { name: 'Night Sky', hex: '#0B1A2C' }
    ],
    typography: [
      { label: 'Display', family: 'Druk Wide', sample: 'DEV\'S CRICKET' },
      { label: 'Body', family: 'General Sans', sample: 'Training programs, drills, fixtures.' }
    ],
    logos: [
      { label: 'Primary Crest', src: '/Devs.JPEG' },
      { label: 'Pitch Icon', src: '/Devs.JPEG' },
      { label: 'Pattern', src: '/Devs.JPEG' }
    ],
    mockups: [
      { title: 'Training app UI', src: '' },
      { title: 'Jersey kit', src: '' },
      { title: 'Social drills series', src: '' }
    ],
    story: {
      context: 'Dev’s Academy needed a modern identity to excite young players & parents alike.',
      challenge: 'Balance pro-level credibility with sneakers-and-smiles energy on social media.',
      approach: 'Built a bold athletic palette, stat overlays, and motion templates for game-day updates.',
      outcome: 'Programs feel premium yet approachable, sparking more sign-ups and sponsorship interest.'
    }
  },
  {
    slug: 'sillynions',
    name: 'Sillynions',
    shortDescription: 'Whimsical illustration studio turning quirky characters into merch & content.',
    year: '2019–Present',
    services: ['Branding', 'Illustration', 'Packaging'],
    tools: ['Procreate', 'Figma', 'Blender'],
    heroImage: '',
    palette: [
      { name: 'Marshmallow', hex: '#F9EAE1' },
      { name: 'Berry Pop', hex: '#FF4FA1' },
      { name: 'Mint Soda', hex: '#5DE0C1' },
      { name: 'Ink Outline', hex: '#2D1E2F' }
    ],
    typography: [
      { label: 'Display', family: 'Cabin Sketch', sample: 'SILLYNIONS' },
      { label: 'Body', family: 'Space Grotesk', sample: 'Product drop notes & comic captions.' }
    ],
    logos: [
      { label: 'Wordmark', src: '' },
      { label: 'Character badge', src: '' },
      { label: 'Pattern assets', src: '' }
    ],
    mockups: [
      { title: 'Sticker pack', src: '' },
      { title: 'Apparel mockups', src: '' },
      { title: 'Social comic panels', src: '' }
    ],
    story: {
      context: 'Sillynions spreads joy through character-led storytelling and merch drops.',
      challenge: 'Create an identity toolkit that’s flexible for new characters, collabs, and product lines.',
      approach: 'Developed playful typography, candy gradients, and modular grid for comics & reels.',
      outcome: 'Stronger brand recall and faster launch cycles for new characters + community campaigns.'
    }
  }
];

// To add a new client, copy one of the objects above and update the data points.
