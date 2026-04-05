export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "PG Centre Mega Mall",
    legalName: "PG Centre Mega Mall",
    tagline: "Everything You Need to Build. Under One Roof.",
    description:
      "PG Centre Mega Mall is Harare's premier building materials and hardware destination. From industrial-grade tools to premium finishes, we stock everything contractors, developers, and homeowners need to bring their construction visions to life.",
    phone: "+263 78 214 9955",
    phoneRaw: "+263782149955",
    whatsappNumber: "263782149955",
    email: "info@pgcentremegamall.co.zw",
    address: "21 Chinhoyi St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.4,
    ratingRounded: 4,
    reviewCount: 77,
    established: "2008",
    yearsExperience: "16+",
    projectsCompleted: "10,000+",
    employees: "80+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "pg-centre-mega-mall-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/PGIndustriesZIM/videos/at-pg-we-bring-you-a-curated-collection-of-the-most-reliable-and-beloved-brands-/1404601860232332/",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "PG",
    logoLine2: "Centre Mega Mall",
  },

  hero: {
    badge: "Harare's Largest Hardware & Building Supplies Destination",
    titleParts: [
      { text: "BUILD " },
      { text: "BIGGER", highlight: true },
      { text: " BUILD BETTER." },
    ],
    subtitle:
      "From foundation to finish, PG Centre stocks over 15,000 products across 80+ trusted brands. One stop. Every material. No compromise.",
    ctaPrimary: "Browse Products",
    ctaSecondary: "Get a Quote",
    trustBadge: "10,000+ Projects Supplied",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "PG Centre Mega Mall professional image 1" },
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85", alt: "PG Centre Mega Mall professional image 2" },
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "PG Centre Mega Mall showcase" },
    ],
  },

  stats: [
    { number: "10000+", label: "Projects Supplied" },
    { number: "16+", label: "Years in Business" },
    { number: "80+", label: "Trusted Brands" },
    { number: "15000+", label: "Products Stocked" },
  ],

  servicesPreview: [
    {
      title: "Building Materials",
      desc: "Cement, bricks, sand, aggregates, roofing sheets, and structural steel for every construction phase.",
      icon: "HardHat",
    },
    {
      title: "Plumbing Supplies",
      desc: "Copper piping, PVC fittings, geysers, water tanks, and sanitaryware for residential and commercial builds.",
      icon: "Wrench",
    },
    {
      title: "Electrical Components",
      desc: "Distribution boards, cabling, switches, lighting, and circuit breakers meeting ZESA compliance.",
      icon: "Lightbulb",
    },
    {
      title: "Paint & Finishes",
      desc: "Premium paints, varnishes, and coatings from Dulux, Plascon, and Crown in every colour.",
      icon: "Star",
    },
    {
      title: "Tools & Equipment",
      desc: "Power tools, hand tools, safety gear, and measuring instruments from DeWalt, Bosch, and Makita.",
      icon: "Buildings",
    },
    {
      title: "Timber & Doors",
      desc: "Treated timber, door frames, security doors, plywood, and MDF in standard and custom sizes.",
      icon: "Ruler",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Building Materials",
        slug: "building-materials",
        desc: "Cement, bricks, sand, aggregates, roofing sheets, and structural steel for every construction phase.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Plumbing Supplies",
        slug: "plumbing-supplies",
        desc: "Copper piping, PVC fittings, geysers, water tanks, and sanitaryware for residential and commercial builds.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
      {
        title: "Electrical Components",
        slug: "electrical-components",
        desc: "Distribution boards, cabling, switches, lighting, and circuit breakers meeting ZESA compliance.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Paint & Finishes",
        slug: "paint-and-finishes",
        desc: "Premium paints, varnishes, and coatings from Dulux, Plascon, and Crown in every colour.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
      {
        title: "Tools & Equipment",
        slug: "tools-and-equipment",
        desc: "Power tools, hand tools, safety gear, and measuring instruments from DeWalt, Bosch, and Makita.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Timber & Doors",
        slug: "timber-and-doors",
        desc: "Treated timber, door frames, security doors, plywood, and MDF in standard and custom sizes.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial PG",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in building materials.",
        client: "Commercial Client",
        services: ["Building Materials", "Plumbing Supplies"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential PG",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in plumbing supplies.",
        client: "Residential Client",
        services: ["Plumbing Supplies", "Electrical Components"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial PG",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in electrical components.",
        client: "Industrial Client",
        services: ["Electrical Components", "Paint & Finishes"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional PG",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in paint & finishes.",
        client: "Institutional Client",
        services: ["Paint & Finishes", "Tools & Equipment"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial PG",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in tools & equipment.",
        client: "Commercial Client",
        services: ["Tools & Equipment", "Timber & Doors"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential PG",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in timber & doors.",
        client: "Residential Client",
        services: ["Timber & Doors", "Building Materials"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "PG Centre is our first stop for every project. The range is unmatched in Harare and the staff actually understand construction.",
      name: "Tapiwa Mhuriro",
      role: "Site Manager, Borrowdale Developments",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "I renovated my entire home using materials from PG Centre. The paint department helped me choose the perfect colours.",
      name: "Chipo Masunda",
      role: "Homeowner, Avondale",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "As an electrical contractor, I need reliable components. PG Centre stocks genuine brands at competitive prices.",
      name: "Bernard Nyamupfukudza",
      role: "Electrical Contractor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "The convenience of getting everything under one roof cannot be overstated. PG Centre is the standard for hardware in Zimbabwe.",
      name: "Memory Dzomba",
      role: "Property Developer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Founded in 2008, PG Centre Mega Mall transformed Chinhoyi Street into Harare's ultimate hardware destination. Our 5,000 square metre showroom and warehouse stocks over 15,000 products from 80+ trusted brands, making us the go-to source for builders, contractors, and homeowners across Zimbabwe.",
      "Today, PG Centre serves thousands of customers monthly, from individual homeowners picking up a tin of paint to commercial developers sourcing bulk materials for multi-storey projects. Our 80+ staff members bring decades of combined construction knowledge.",
    ],
    values: [
      { title: "One-Stop Convenience", desc: "Every material, tool, and finish under one roof. Save time, fuel, and hassle on every project." },
      { title: "Expert Guidance", desc: "Our team includes qualified builders, electricians, and plumbers who speak your language." },
      { title: "Competitive Pricing", desc: "Bulk discounts, trade accounts, and price-match guarantees on major brands." },
      { title: "Quality Guaranteed", desc: "We only stock genuine products from verified manufacturers. No cheap imitations." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "PG Centre is our first stop for every project. The range is unmatched in Harare and the staff actually understand construction.", name: "Tapiwa Mhuriro", role: "Site Manager, Borrowdale Developments", rating: 5 },
      { text: "I renovated my entire home using materials from PG Centre. The paint department helped me choose the perfect colours.", name: "Chipo Masunda", role: "Homeowner, Avondale", rating: 5 },
      { text: "As an electrical contractor, I need reliable components. PG Centre stocks genuine brands at competitive prices.", name: "Bernard Nyamupfukudza", role: "Electrical Contractor", rating: 5 },
      { text: "The convenience of getting everything under one roof cannot be overstated. PG Centre is the standard for hardware in Zimbabwe.", name: "Memory Dzomba", role: "Property Developer", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "PG Centre Mega Mall",
        address: "21 Chinhoyi St, Harare, Zimbabwe",
        phone: "+263 78 214 9955",
        email: "info@pgcentremegamall.co.zw",
      },
    ],
  },

  homeCta: {
    title: "BUILD WITH CONFIDENCE",
    subtitle: "From a single bag of cement to a full project supply list, PG Centre has everything you need. Visit our showroom or call for a bulk quote today.",
    ctaPrimary: "Browse Products",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello PG Centre! I need a quote for building materials.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85",
  },

  footer: {
    description: "PG Centre Mega Mall is Harare's premier building materials and hardware destination. From industrial-grade tools to premium finishes, we stock everyth...",
    copyright: "PG Centre Mega Mall",
  },
};

export default siteData;
