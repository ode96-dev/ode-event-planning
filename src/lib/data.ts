import { EventItem, ServiceItem } from "@/types";

export interface CategoryInfo {
  id: "galas" | "weddings" | "soirees" | "activations";
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  quote: string;
  volume: string;
}

export const PORTFOLIO_CATEGORIES: CategoryInfo[] = [
  {
    id: "galas",
    number: "01",
    title: "Galas & Sovereign Summits",
    shortTitle: "Galas & Summits",
    description:
      "Grand-scale diplomatic gatherings, sovereign banquets, and high-stakes philanthropic benefactor galas requiring architectural precision and multi-zone ceremonial protocol.",
    quote: "Transforming historic halls into majestic sensory sanctuaries.",
    volume: "$18M+ Curated Production",
  },
  {
    id: "weddings",
    number: "02",
    title: "Luxury Nuptial Conservatories",
    shortTitle: "Luxury Weddings",
    description:
      "Multi-day destination weddings engineered across historic European villas, cliffside estates, and custom glass conservatory pavilions over open water.",
    quote: "Ephemeral architectural love letters crafted for generations.",
    volume: "24 Multi-Day Celebrations",
  },
  {
    id: "soirees",
    number: "03",
    title: "Private VIP Rooftop & Estate Soirées",
    shortTitle: "Private Soirées",
    description:
      "Intimate, highly confidential gatherings for global collectors, private families, and high-jewelry patron societies with sommelier pairings and tailored soundscapes.",
    quote:
      "The ultimate luxury is absolute intimacy and effortless discretion.",
    volume: "100% NDA Protected",
  },
  {
    id: "activations",
    number: "04",
    title: "Immersive Brand Activations & Couture Galas",
    shortTitle: "Brand Activations",
    description:
      "Pioneering sensory launches, kinetic runway scenography, and tech keynote pavilions uniting architectural lighting with high-impact cultural moments.",
    quote: "Where physical spatial engineering meets global media resonance.",
    volume: "14M+ Media Impressions",
  },
];

export const FEATURED_EVENTS: EventItem[] = [
  {
    id: "luminescence-gala",
    title: "Luminescence Grand Sovereign Gala",
    category: "galas",
    categoryLabel: "Corporate Gala",
    client: "Vanguard Global Financial Forum",
    location: "Eldoret, Kenya",
    year: "2025",
    guestCount: 680,
    durationHours: 6,
    lightingTheme: "Champagne Amber & Prismatic Indigo",
    heroImage: "/images/hero_luxury_gala_1791351046164.jpg",
    galleryImages: [
      "/images/hero_luxury_gala_1791351046164.jpg",
      "/images/event_corporate_summit_1791351056889.jpg",
      "/images/event_art_activation_1791351086146.jpg",
    ],
    tagline:
      "An architectural symphony of light, bespoke crystal chandeliers, and haute cuisine.",
    story:
      "Crafted for 680 international dignitaries and financial leaders, Luminescence transformed a 30,000 sq ft historic vaulted hall into an immersive luminous sanctum. Custom kinetic light rigs moved synchronously with live orchestral arrangements, paired with an eight-course Michelin-starred dining experience.",
    deliverables: [
      "Kinetic Light Art Architecture",
      "Michelin-Starred 8-Course Curated Menu",
      "VIP Diplomatic Security & Protocol Integration",
      "Multi-Zone Acoustic Calibration",
    ],
    metrics: [
      { label: "Guests Catered", value: "680 VIPs" },
      { label: "Kinetic Light Modules", value: "144 Units" },
      { label: "Press Impressions", value: "2.4M" },
    ],
  },
  {
    id: "elysium-celestial-benefit",
    title: "Elysium Celestial Winter Philanthropic Benefit",
    category: "galas",
    categoryLabel: "Charity Benefit",
    client: "International Humanitarian Fellowship",
    location: "Mombasa, Kenya",
    year: "2024",
    guestCount: 520,
    durationHours: 7,
    lightingTheme: "Silver Aurora & Starlit Platinum",
    heroImage: "/images/hero_luxury_gala_1791351046164.jpg",
    galleryImages: [
      "/images/hero_luxury_gala_1791351046164.jpg",
      "/images/event_private_soiree_1791351077332.jpg",
    ],
    tagline:
      "A winter starlit canopy featuring a 40-piece philharmonic orchestra and live benefactor auction.",
    story:
      "Elysium convened European patrons, philanthropists, and heads of state beneath a custom heated glass dome facing Lake Geneva. The evening raised over $14.2M for global clean water initiatives, punctuated by synchronized projection-mapped constellations across the ceiling.",
    deliverables: [
      "Custom 2,000m² Clear-Span Heated Thermal Pavilion",
      "Live Benefactor Auction Real-Time Ledger Display",
      "Rare Vintage Bordeaux Grand Cru Wine Pairing",
      "Spatial Acoustic Enclosure for 40-Piece Philharmonic",
    ],
    metrics: [
      { label: "Benefactor Capital Raised", value: "$14.2M" },
      { label: "Heated Dome Footprint", value: "2,000 m²" },
      { label: "Dignitary Protocol", value: "22 Nations" },
    ],
  },
  {
    id: "villa-serenata-wedding",
    title: "Villa Serenata Nuptial Conservatory",
    category: "weddings",
    categoryLabel: "Luxury Wedding",
    client: "Private International Family",
    location: "Nairobi, Kenya",
    year: "2024",
    guestCount: 240,
    durationHours: 14,
    lightingTheme: "Golden Hour Candlelight & Soft Starlight",
    heroImage: "/images/event_luxury_wedding_1791351067146.jpg",
    galleryImages: [
      "/images/event_luxury_wedding_1791351067146.jpg",
      "/images/hero_luxury_gala_1791351046164.jpg",
      "/images/event_private_soiree_1791351077332.jpg",
    ],
    tagline:
      "An open-air glass conservatory framed by thousands of cascading orchids above Lake Como.",
    story:
      "Spanning three consecutive days of celebrations across historical lakeside terraces, Villa Serenata united Italian heritage with modern sensory elegance. An ephemeral glass structure was erected over the lake waters, offering panoramic vistas during the sunset vow exchange.",
    deliverables: [
      "Custom Over-Water Glass Pavilion",
      "Bespoke Scent Architecture (Italian Cypress & Neroli)",
      "Historic Villa Restoration Safeguards",
      "3-Day Multi-Venue Guest Hospitality & Charter Fleet",
    ],
    metrics: [
      { label: "Floral Stems Curated", value: "45,000+" },
      { label: "Days of Celebration", value: "3 Days" },
      { label: "Bespoke Scent Zones", value: "4 Scents" },
    ],
  },
  {
    id: "palais-des-roses-nuptials",
    title: "Palais des Roses Riviera Royal Nuptials",
    category: "weddings",
    categoryLabel: "Luxury Wedding",
    client: "Private Dynasty Family",
    location: "Kakamega, Kenya",
    year: "2025",
    guestCount: 310,
    durationHours: 16,
    lightingTheme: "Mediterranean Dusk & Rose Gold Luminescence",
    heroImage: "/images/event_luxury_wedding_1791351067146.jpg",
    galleryImages: [
      "/images/event_luxury_wedding_1791351067146.jpg",
      "/images/event_corporate_summit_1791351056889.jpg",
    ],
    tagline:
      "Cliffside sea-spray ceremony followed by a 1,000-candle banquet and private midnight fireworks.",
    story:
      "Perched above the sapphire waters of the Côte d’Azur, this celebration transformed an 18th-century private estate into a floral dreamscape. Over 300 guests were transported via vintage mahogany Riva boats to a bespoke floating harbor dock before entering a candlelit rose labyrinth.",
    deliverables: [
      "Floating Riva Boat Pier & Maritime Security",
      "1,200 Hand-Dipped Beeswax Candelabra Installation",
      "3-Star Michelin Riviera Seafood Banqueting",
      "Synchronized Midnight Pyrotechnic Display over the Mediterranean",
    ],
    metrics: [
      { label: "Riva Boat Shuttles", value: "12 Vessels" },
      { label: "Heirloom Garden Roses", value: "60,000" },
      { label: "Fireworks Choreography", value: "18 Mins" },
    ],
  },
  {
    id: "skyline-noir-soiree",
    title: "Skyline Noir Private Rooftop Soirée",
    category: "soirees",
    categoryLabel: "Private Soirée",
    client: "Private Collector & Haute Horlogerie Society",
    location: "Busia, Kenya",
    year: "2025",
    guestCount: 150,
    durationHours: 5,
    lightingTheme: "Warm Velvet Amber & Smoke Quartz",
    heroImage: "/images/event_private_soiree_1791351077332.jpg",
    galleryImages: [
      "/images/event_private_soiree_1791351077332.jpg",
      "/images/hero_luxury_gala_1791351046164.jpg",
    ],
    tagline:
      "Intimate skyline mixology, rare vintage tastings, and private live jazz quartets.",
    story:
      "An ultra-exclusive evening for 150 patrons celebrating the launch of a one-of-a-kind timepiece collection. Custom Italian marble bars, velvet smoking cabanas, and rare single-cask tastings enveloped guests under a star-filled Manhattan night sky.",
    deliverables: [
      "Bespoke Marble & Brass Cocktail Installations",
      "Rare Sommelier & Spirits Curation",
      "Custom Acoustic Sound-Dampening Glass Lounges",
      "Ultra-Discreet Security & Guest Concierge",
    ],
    metrics: [
      { label: "Vintage Pourings", value: "28 Rare Casks" },
      { label: "Private Sommelier Staff", value: "1:4 Ratio" },
      { label: "Guest Discretion Index", value: "100% NDA" },
    ],
  },
  {
    id: "solstice-mirage-desert",
    title: "Solstice Mirage Desert Pavilion Soirée",
    category: "soirees",
    categoryLabel: "Private Soirée",
    client: "Private Family Office Consortium",
    location: "Kwale, Kenya",
    year: "2024",
    guestCount: 95,
    durationHours: 8,
    lightingTheme: "Ember Glow & Indigo Desert Twilight",
    heroImage: "/images/event_private_soiree_1791351077332.jpg",
    galleryImages: [
      "/images/event_private_soiree_1791351077332.jpg",
      "/images/event_art_activation_1791351086146.jpg",
    ],
    tagline:
      "A secluded desert canyon dinner enveloped by subterranean acoustic resonances and flame sculptures.",
    story:
      "Nestled between monolithic sandstone cliffs, 95 guests were welcomed into a hidden canyon oasis with zero light pollution. Bespoke sunken lounge pits with artisan woven textiles, an open woodfire feast by Michelin-guest chefs, and stargazing guided by renowned astrophysicists created an unrepeatable memory.",
    deliverables: [
      "Zero-Impact Ecological Desert Site Curation",
      "Sunken Sandstone Fire Lounges with Velvet Textiles",
      "Private Helicopter Transit Coordination",
      "Astronomical Observatory Setup with High-Power Telescopes",
    ],
    metrics: [
      { label: "Canyon Seclusion", value: "100% Off-Grid" },
      { label: "Private Heli Shuttles", value: "14 Flights" },
      { label: "Sommelier Pairings", value: "8 Rare Vintages" },
    ],
  },
  {
    id: "meridian-tech-summit",
    title: "Meridian Global Innovation Summit",
    category: "activations",
    categoryLabel: "Brand Activation",
    client: "Aetheria Cloud Technologies",
    location: "Tatu City, Kenya",
    year: "2025",
    guestCount: 1200,
    durationHours: 10,
    lightingTheme: "Deep Cobalt & Neon Quartz Glow",
    heroImage: "/images/event_corporate_summit_1791351056889.jpg",
    galleryImages: [
      "/images/event_corporate_summit_1791351056889.jpg",
      "/images/event_art_activation_1791351086146.jpg",
    ],
    tagline:
      "Futuristic stagecraft, 360-degree holographic keynotes, and curated executive lounges.",
    story:
      "Designed to unveil next-generation computing architectures, the Meridian Summit balanced high-octane stage presentations with contemplative networking salons. Over 1,200 tech founders and venture partners gathered amidst transparent OLED displays and custom acoustic baffling.",
    deliverables: [
      "Holographic Keynote Stage System",
      "Real-time Spatial Audio Spatialization",
      "Curated Executive VIP Lounges",
      "Zero-Carbon Waste Lifecycle Logistics",
    ],
    metrics: [
      { label: "Keynote Attendees", value: "1,200+" },
      { label: "Global Livestream", value: "180k Viewers" },
      { label: "Sponsor Engagement", value: "99.4%" },
    ],
  },
  {
    id: "prism-art-fashion-activation",
    title: "Prism Mirage Couture Runway & Gala",
    category: "activations",
    categoryLabel: "Brand Activation",
    client: "Maison Éternelle & Venice Biennale Patronage",
    location: "Garissa, Kenya",
    year: "2024",
    guestCount: 380,
    durationHours: 8,
    lightingTheme: "Monochromatic Architectural Spot & Soft Prism",
    heroImage: "/images/event_art_activation_1791351086146.jpg",
    galleryImages: [
      "/images/event_art_activation_1791351086146.jpg",
      "/images/event_corporate_summit_1791351056889.jpg",
    ],
    tagline:
      "A sculptural mirrored runway spanning ancient Venetian stone and contemporary art.",
    story:
      "Bridging centuries of architectural heritage with avant-garde fashion design, Prism Mirage featured a 60-meter infinity mirrored runway reflecting Venice lagoon reflections. The evening transitioned into a secret courtyard dinner bathed in dynamic optical projections.",
    deliverables: [
      "60-Meter Optical Infinity Runway",
      "Heritage Site Conservation Engineering",
      "Synchronized Spatial Mapping & Laser Scenography",
      "International Media & VIP Protocol Management",
    ],
    metrics: [
      { label: "Global Fashion Editors", value: "120 Top Tier" },
      { label: "Runway Reflection Length", value: "60 Meters" },
      { label: "Editorial Features", value: "48 Publications" },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "full-production",
    number: "01",
    title: "Complete Spatial & Event Architecture",
    summary:
      "Turnkey executive management from initial spatial blueprints to strike logistics.",
    description:
      "We oversee every dimension of your event with military precision and refined architectural elegance. From structural venue engineering and permits to VIP routing, soundproofing, and multi-day master schedules.",
    scopePoints: [
      "3D Scenography & CAD Spatial Blueprinting",
      "Multi-Vendor Symphony & Master Schedule Control",
      "Site Permits, Structural Engineering & Strict NDAs",
      "Comprehensive VIP Transit & Discretion Protocol",
    ],
    stat: {
      value: "100%",
      label: "On-Schedule Delivery Record",
    },
    svgShape: "M10 80 Q 95 10 180 80 T 350 80",
  },
  {
    id: "lighting-sound",
    number: "02",
    title: "Atmospheric Scenography",
    summary:
      "Emotionally calibrated lighting design, spatial soundscapes, and stagecraft.",
    description:
      "Light and sound define human memory. We design custom kinetic lighting rigs, dynamic projection mapping, and concert-grade acoustic environments that adapt as the evening progresses from arrival to crescendo.",
    scopePoints: [
      "Adaptive Intelligent Lighting Programming",
      "L-Acoustics & Meyer Sound Spatial Calibration",
      "Live Video Mapping & Kinetic Chandelier Modules",
      "Architectural Accentuation of Historic Venues",
    ],
    stat: {
      value: "4K+",
      label: "Lumen Dynamic Color Precision",
    },
    svgShape: "M10 40 Q 180 120 350 40",
  },
  {
    id: "culinary-hospitality",
    number: "03",
    title: "Haute Gastronomy & Sommelier Curation",
    summary:
      "Michelin-partnered dining concepts, bespoke mixology, and high-touch service.",
    description:
      "We collaborate with world-renowned chefs and master sommeliers to design menus that echo your event theme. Every course is paired with rare vintages and served with impeccable hospitality choreography.",
    scopePoints: [
      "Michelin-Starred Guest Chef Collaborations",
      "Bespoke Interactive Cocktail & Caviar Bars",
      "Rare Vintage Wine & Whiskey Cellar Sourcing",
      "Dietary Precision & Table-Side Artistry",
    ],
    stat: {
      value: "1:3",
      label: "Staff-to-VIP Guest Ratio",
    },
    svgShape: "M20 90 L 100 20 L 220 90 L 340 30",
  },
  {
    id: "brand-narrative",
    number: "04",
    title: "Sensory Storytelling & Creative Direction",
    summary:
      "Custom olfactory scents, bespoke typography, and unforgettable emotional arcs.",
    description:
      "Elevating gatherings into timeless cultural moments. We develop custom fragrance signatures, bespoke print invitations with wax seals, holographic reveals, and experiential guest gift curation.",
    scopePoints: [
      "Custom Olfactory Fragrance Signatures",
      "Artisanal Physical & Digital Invitation Suites",
      "Experiential Gifting & Unboxing Architecture",
      "Cinematic Documentary Photo & Film Units",
    ],
    stat: {
      value: "99.8%",
      label: "Client Delight Satisfaction",
    },
    svgShape: "M10 50 C 120 0, 240 100, 350 50",
  },
];

export const TRUST_METRICS = [
  { value: "$45M+", label: "Annual Production Volume" },
  { value: "500+", label: "Galas & Gatherings Delivered" },
  { value: "18", label: "Global Luxury Destinations" },
  { value: "99.8%", label: "Verified Client Net Promoter Score" },
];

export const CLIENT_TESTIMONIALS = [
  {
    id: "test-1",
    quote:
      "AURA transformed our sovereign summit into an architectural masterwork. The kinetic lighting and protocol handling for 680 heads of state were executed with military precision.",
    author: "Eleanor Vance-Sterling",
    role: "Chief Communications Officer",
    company: "Vanguard Global Forum",
    location: "Baringo",
    event: "Luminescence Grand Sovereign Gala",
    eventId: "luminescence-gala",
    highlight: "680 Dignitaries · Kinetic Light Rig",
  },
  {
    id: "test-2",
    quote:
      "Our three-day Lake Como nuptials exceeded our wildest imaginations. The glass conservatory constructed over the water left all our guests speechless. Pure perfection.",
    author: "Marcus & Giuliana Rossi",
    role: "Private Family Office",
    company: "Geneva & Milan",
    location: "Lake Como",
    event: "Villa Serenata Nuptials",
    eventId: "villa-serenata-wedding",
    highlight: "Over-Water Glass Conservatory",
  },
  {
    id: "test-3",
    quote:
      "For our couture launch in Venice, AURA navigated complex historic venue preservation laws while delivering a 60-meter infinity runway that dominated global fashion media.",
    author: "Christian Delaunay",
    role: "Global Creative Vice President",
    company: "Maison Éternelle Paris",
    location: "Mombasa",
    event: "Prism Mirage Venice Runway",
    eventId: "prism-art-fashion-activation",
    highlight: "48 Global Publications · 60m Runway",
  },
  {
    id: "test-4",
    quote:
      "The level of discretion and security provided for our private Tribeca penthouse gathering was absolute. AURA designed a multi-zone acoustic environment where conversation felt effortless.",
    author: "Julian Sterling-Cross",
    role: "President & Patron",
    company: "Haute Horlogerie Society",
    location: "Nairobi",
    event: "Skyline Noir Penthouse Soirée",
    eventId: "skyline-noir-soiree",
    highlight: "100% Strict NDA Discretion",
  },
  {
    id: "test-5",
    quote:
      "From holographic keynote staging to carbon-neutral catering logistics, the Meridian Summit redefined what an executive enterprise gathering can achieve in Silicon Valley.",
    author: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "Aetheria Cloud Technologies",
    location: "Eldoret",
    event: "Meridian Global Innovation Summit",
    eventId: "meridian-tech-summit",
    highlight: "1,200 Attendees · Holographic Keynote",
  },
  {
    id: "test-6",
    quote:
      "An astronomical feast orchestrated in the heart of Utah desert canyons. Subterranean flame acoustics and zero ambient light interference created an indelible sensory memory.",
    author: "Arthur Pendelton III",
    role: "Managing Partner",
    company: "Apex Crest Capital",
    location: "Machakos",
    event: "Solstice Mirage Desert Pavilion",
    eventId: "solstice-mirage-desert",
    highlight: "Off-Grid Heli Logistics · Michelin Feast",
  },
];
