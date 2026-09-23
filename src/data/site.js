// Central content + config for Pixlverse.
// Keep marketing copy and structured data in one place so pages stay in sync.
// Copy source: "Website Content, Version 2" (updated-content.docx).

export const SITE = {
  name: "Pixlverse",
  legalName: "Pixlverse",
  tagline: "Website Design & Development in Kerala, India",
  url: "https://www.pixlverse.in",
  email: "explore.pixlverse@gmail.com",
  instagram: "https://www.instagram.com/explore.pixlverse/",
  region: "Kerala",
  country: "India",
  // Schema.org-friendly names
  areasServed: [
    "Kerala",
    "India",
    "United Kingdom",
    "Qatar",
    "United Arab Emirates",
  ],
  // Human-readable list used in body copy
  countries: "India, the UK, Qatar and Dubai",
  countryCount: "4",
  projectCount: "25+",
  founded: "2023",
  responseTime: "24 hours",
  defaultOgImage: "https://www.pixlverse.in/images/pixlverse-og.png",
  /* square, light-background mark — what Google wants for Organization.logo */
  organizationLogo: "https://www.pixlverse.in/images/pixlverse-logo-white-bg.png",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

/**
 * SERVICES
 * `card`  — short copy for the Home services grid.
 * `blurb` — the longer intro used on the Services page.
 * `heading` / `slug` — the Services page H2 and its jump-link anchor.
 * `titleTop` / `titleBottom` — the two-tone title on the Home cards.
 * `seoTitle` / `seoDescription` — for the service's own page at
 *   /services/<slug>. Each one targets a distinct search, which is the whole
 *   point of splitting six services off a single URL.
 */
export const SERVICES = [
  {
    icon: "design",
    slug: "website-design",
    seoTitle: "Custom Website Design Company in Kerala",
    seoDescription:
      "Custom website design in Kerala built around your customers: clean, mobile-first layouts that tell your brand story and turn visitors into enquiries.",
    title: "Website Design",
    titleTop: "Website",
    titleBottom: "Design",
    heading: "Website Design That Turns Visitors Into Customers",
    card:
      "Clean, modern layouts designed around your customers, so visitors understand what you do in seconds and know exactly what to do next.",
    blurb:
      "People decide in seconds whether to trust a business online. We design clean, modern, mobile-first layouts that tell your brand story clearly and guide visitors toward one action: contacting you.",
    points: [
      "Custom UI/UX wireframes planned around your customers",
      "Responsive, mobile-first layouts for every screen size",
      "Brand colour and typography systems for a consistent look",
      "Figma mockups on request, so you approve the design before we build",
    ],
    bestFor:
      "New businesses, rebrands and anyone whose site doesn't reflect the quality of their work.",
  },
  {
    icon: "code",
    slug: "web-development",
    seoTitle: "Web Development Company in Kerala & India",
    seoDescription:
      "Web development in Kerala and across India: fast, secure, SEO-ready sites and web apps built with clean code, from static pages to full-stack builds.",
    title: "Web Development",
    titleTop: "Web",
    titleBottom: "Development",
    heading: "Fast, Secure Web Development for Growing Businesses",
    card:
      "Fast, secure, mobile-friendly websites, from simple business sites to full web apps, built to grow with you.",
    blurb:
      "Speed and reliability directly affect both Google rankings and sales. We build sites with clean, efficient code, from simple static pages to full-stack web apps.",
    points: [
      "Static, dynamic and full-stack websites",
      "Optimised code and lazy loading for faster pages",
      "Tested across all major browsers and devices",
      "APIs and third-party integrations (payments, forms, booking, CRM)",
    ],
    bestFor:
      "Business websites, online stores, portals and custom web applications.",
  },
  {
    icon: "seo",
    slug: "seo-optimization",
    seoTitle: "SEO Services in Kerala | Technical & Local SEO",
    seoDescription:
      "SEO services in Kerala covering technical SEO, local search, structured data and speed tuning, so customers searching for your business actually find it.",
    title: "SEO Optimization",
    titleTop: "SEO",
    titleBottom: "Optimization",
    heading: "SEO Services to Help Your Business Get Found on Google",
    card:
      "Technical SEO, clean code and speed tuning built in from day one, so customers in Kerala and across India can find you on Google.",
    blurb:
      "Great design means little if nobody finds it. We build technical SEO into every site and help local businesses show up when nearby customers search.",
    points: [
      "Technical and on-page SEO",
      "Structured data and XML sitemaps",
      "Core Web Vitals and page-speed tuning",
      "Local search optimisation for Kerala and India",
    ],
    bestFor:
      "Businesses that want more enquiries from search rather than relying on referrals or ads alone.",
  },
  {
    icon: "tools",
    slug: "maintenance-support",
    seoTitle: "Website Maintenance & Support in Kerala",
    seoDescription:
      "Website maintenance and support in Kerala: backups, security checks, uptime monitoring, updates and quick fixes, so your site stays fast and safe.",
    title: "Maintenance & Support",
    titleTop: "Maintenance",
    titleBottom: "& Support",
    heading: "Website Maintenance and Support After Launch",
    card:
      "Backups, updates, security checks and quick fixes. Your website stays fast and safe while you run your business.",
    blurb:
      "Websites need care: updates, backups and protection. We keep yours secure, fast and current, so you never need to worry about it.",
    points: [
      "Regular backups",
      "Security and uptime monitoring",
      "Performance audits",
      "Bug fixes and content updates",
    ],
    bestFor:
      "Anyone who'd rather run their business than manage their website.",
  },
  {
    icon: "revamp",
    slug: "website-revamps",
    seoTitle: "Website Redesign & Revamp Services in Kerala",
    seoDescription:
      "Website redesign in Kerala for slow, dated sites that aren't bringing in enquiries. We audit, redesign and rebuild so your site performs again.",
    title: "Website Revamps",
    titleTop: "Website",
    titleBottom: "Revamps",
    heading: "Website Redesign: Upgrade Your Look Without Starting Over",
    card:
      "Is your site slow, dated or not bringing in enquiries? We audit it, redesign it and rebuild it into a site that performs.",
    blurb:
      "If your website is slow, outdated or not generating leads, we'll find out why. We audit what exists, keep what's working and rebuild the rest into something modern that converts.",
    points: [
      "Visual and functional audit",
      "Redesigned UI/UX",
      "Content optimisation for search and clarity",
      "Rebranding support",
    ],
    bestFor:
      "Businesses whose website is 3+ years old, isn't mobile-friendly or has stopped bringing in enquiries.",
  },
  {
    icon: "hosting",
    slug: "domain-hosting",
    seoTitle: "Domain Registration & Website Hosting in Kerala",
    seoDescription:
      "Domain registration, DNS, SSL and website hosting set up for you in Kerala, so your site launches smoothly without you wrestling with the technical side.",
    title: "Domain & Hosting",
    titleTop: "Domain",
    titleBottom: "& Hosting",
    heading: "Domain and Hosting Setup, Handled for You",
    card:
      "We set up your domain, DNS, hosting and SSL, so you launch smoothly without wrestling with tech.",
    blurb:
      "We take the technical setup off your plate so you can launch with confidence.",
    points: [
      "Domain registration help",
      "DNS and CNAME configuration",
      "Hosting setup and deployment",
      "SSL certificate installation (the padlock that builds trust)",
    ],
    bestFor: "First-time website owners and anyone migrating from another host.",
  },
];

/**
 * PROJECTS
 * `featured` — shown in the Home page "Websites We've Built" grid.
 * `result`   — one-line outcome. Awaiting client input, so it renders only
 *              when a string is supplied (see Section 9 of the content doc).
 * `image` / `url` may be null; cards fall back to a monogram tile and drop
 *              the "Visit live site" link.
 */
export const PROJECTS = [
  {
    name: "Hiwaga Makers",
    url: "https://hiwagamakers.com/",
    image: "/images/hiwaga-makers.webp",
    category: "Advertising",
    location: null,
    blurb:
      "A full-service advertising and marketing agency that grew from video production and storytelling into a strategic creative partner. We built a website that reflects that story and helps them win brands through strategy, content and campaigns. Hiwaga Makers is also our creative partner.",
    result: null,
    featured: false,
  },
  {
    name: "Nearbymart",
    url: "https://www.thenearbymart.com/",
    image: "/images/nearbymart.webp",
    category: "E-commerce",
    location: null,
    blurb:
      "An online storefront for Nearbymart Hypermarket, bringing quality products and everyday convenience to the neighbourhood at prices customers love.",
    result: null,
    featured: false,
  },
  {
    name: "Mio Pizzeria",
    url: "https://mio-pizzeria.com/",
    image: "/images/mio-pizzeria.webp",
    partner: "Hiwaga Makers",
    category: "Restaurant",
    location: "Qatar",
    blurb:
      "A website for Mio Pizzeria in Qatar, giving the restaurant a polished online home that reflects its brand and makes it easy for customers to find and choose it. Built in collaboration with Hiwaga Makers.",
    result: null,
    featured: true,
  },
  {
    name: "Alisha Tours & Travels",
    url: "https://alishatravels.in/",
    image: "/images/alisha-tours-travels.webp",
    partner: "Hiwaga Makers",
    category: "Travel",
    location: null,
    blurb:
      "Alisha Tours & Travels creates personalised travel experiences with over a decade of expertise, offering customised leisure, corporate and MICE journeys with seamless planning and exceptional service worldwide.",
    result: null,
    featured: true,
  },
  {
    name: "AJ Homes & Lettings Ltd",
    url: "https://www.ajhomeslettings.co.uk/",
    image: "/images/aj-homes-lettings-ltd.webp",
    category: "Real Estate",
    location: "Birmingham, UK",
    blurb:
      "A website for one of Birmingham's leading property agencies, showcasing their lettings and sales services and property listings clearly for tenants, landlords and buyers.",
    result: null,
    featured: true,
  },
  {
    name: "Komath & Associates",
    url: "https://komathassociates.in/",
    image: "/images/komath-associates.webp",
    category: "Legal",
    location: "Kerala",
    blurb:
      "A professional website for a respected Kerala law firm with nearly two decades of experience, built to communicate trust and make it easy for clients to get in touch.",
    result: null,
    featured: false,
  },
  {
    name: "Evolvers Career Clinic",
    url: "https://www.evolverscareerclinic.com/",
    image: "/images/evolvers-career-clinic.webp",
    category: "Careers",
    location: null,
    blurb:
      "A career transformation platform offering recruiter-backed resumes, LinkedIn profiles, interview prep and global application support, presented clearly so job seekers know exactly how to get started.",
    result: null,
    featured: false,
  },
  {
    name: "Government High School for the Blind, Olassa",
    url: "https://blindschoolktm.com/",
    image: "/images/government-high-school-for-the-blind-olassa.webp",
    category: "Non-profit",
    location: "Kottayam, Kerala",
    blurb:
      "A website for the only high school for visually challenged students owned by the Government of Kerala, designed with accessibility at its core.",
    result: null,
    featured: false,
  },
  {
    name: "Intern-Preneur Development Program",
    url: "https://internpreneur.in/",
    image: "/images/intern-preneur-development-program.webp",
    category: "EdTech",
    location: null,
    blurb:
      "A website for India's exclusive online finishing school, helping students and professionals build employability through real-world, career-ready training.",
    result: null,
    featured: false,
  },
  {
    name: "N'Able by Shibi Anand",
    url: "https://shibianand.com/",
    image: "/images/nable-by-shibi-anand.webp",
    category: "Education",
    location: null,
    blurb:
      "A website for a personalised support and learning practice that helps individuals and institutions realise their full potential.",
    result: null,
    featured: false,
  },
];

/** Creative partnership section on the Projects page. */
/**
 * Our creative partner. Projects delivered together carry a `partner` tag in
 * PROJECTS above; this is the note that explains what that tag means. The
 * standalone "Built Together" section it replaced said the same thing at
 * section length and duplicated two projects already listed.
 */
export const PARTNER = {
  name: "Hiwaga Makers",
  note:
    "Their strategy, content and campaigns meet our design and development, so the brand looks and feels the same from the first ad to the final click.",
};

export const TESTIMONIALS = [
  {
    name: "Ananthu Vasudev",
    role: "Founder, Evolvers",
    img: "/images/ananthu.webp",
    message:
      "I have been working with the team at Pixlverse since 2023, right from their early stages. Having collaborated with several developers over the past 13 years, I can confidently say this is the best team I have worked with. They value their words and our time, and communicate clearly without over-committing. Completely dependable, trustworthy and a true pleasure to work with.",
  },
  {
    name: "Shibi Anand",
    role: "Founder, N'Able",
    img: "/images/shibi.webp",
    message:
      "The Pixlverse team built my website and made the whole process easy. They were approachable, patient and open to feedback. What I really valued was their balance of professionalism and flexibility. If you're looking for a team that listens, understands what you need and actually delivers, I'd recommend them without hesitation.",
  },
];

/** `desc` is used on Home; `descShort` on the Services page. */
export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn about your business, customers and goals, then plan a website strategy that fits.",
    descShort: "We learn your business, goals and audience, then map a strategy.",
  },
  {
    step: "02",
    title: "Design",
    desc: "You see clean, on-brand layouts and interactive prototypes before we build anything.",
    descShort:
      "You see and approve layouts and prototypes before development starts.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "We turn the approved design into fast, SEO-ready code that works on every phone, tablet and browser.",
    descShort:
      "We build clean, fast, SEO-ready code that works on every device.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We go live, optimise for search and stay on as your ongoing website partner.",
    descShort:
      "We deploy, optimise for search and stay on to keep things sharp.",
  },
];

export const STATS = [
  { value: "25+", label: "Websites delivered", note: null },
  { value: "4", label: "Countries served", note: "India · UK · Qatar · Dubai" },
  { value: "2023", label: "Crafting since", note: null },
  { value: "100%", label: "Client-first focus", note: null },
];

/**
 * Hero proof — the three claims worth a headline figure. The reply-time
 * promise is not one of them: it is an undertaking rather than a track
 * record, and it already appears on the Contact page.
 */
export const HERO_TRUST = [
  { value: "25+", label: "Websites launched", note: "Live and in business" },
  {
    value: "4",
    label: "Countries served",
    note: null,
    /* ISO codes drive the flag art; `name` is the text that stays in the
       markup for crawlers and screen readers. Dubai flies the UAE flag. */
    flags: [
      { code: "in", name: "India" },
      { code: "gb", name: "UK" },
      { code: "qa", name: "Qatar" },
      { code: "ae", name: "Dubai" },
    ],
  },
  { value: "2023", label: "Building since", note: "Independent studio" },
];


/** "Why Pixlverse" differentiators on the Home page. */
export const WHY_POINTS = [
  {
    icon: "details",
    color: "#7b3fe4",
    title: "Sharp on the details",
    text: "Spacing, speed, and how a page feels on a phone. We sweat the small stuff so you don't have to.",
  },
  {
    icon: "found",
    color: "#f5a524",
    title: "Built to be found",
    text: "Every site ships with technical SEO and fast load times, because a beautiful site nobody finds earns nothing.",
  },
  {
    icon: "plain",
    color: "#00abff",
    title: "Plain-English communication",
    text: "We say what we'll do, do what we said and never over-promise.",
  },
  {
    icon: "roof",
    color: "#b43f8f",
    title: "Design and engineering under one roof",
    text: "Your site looks great and runs great.",
  },
  {
    icon: "stay",
    color: "#24b700",
    title: "We don't vanish after launch",
    text: "Ongoing support is part of how we work.",
  },
];

/** Values on the About page. */
export const VALUES = [
  {
    icon: "clarity",
    color: "#7b3fe4",
    title: "Clarity over jargon",
    text: "We explain things in plain language and never over-commit. You always know where your project stands.",
  },
  {
    icon: "craft",
    color: "#2b7fff",
    title: "Craft over shortcuts",
    text: "Clean, maintainable code and considered design, built to last and to scale.",
  },
  {
    icon: "partnership",
    color: "#12b886",
    title: "Partnership over hand-offs",
    text: "We don't disappear at launch. We're your long-term digital partner.",
  },
];

/** Industries served — shown on the About page. */
export const SECTORS = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Consulting",
  "Logistics",
  "Real estate",
  "Legal",
  "Restaurants",
  "Travel",
  "E-commerce",
];

/** "What do you need?" options in the contact form. */
export const ENQUIRY_TYPES = [
  "Website design",
  "Web development",
  "SEO",
  "Website revamp",
  "Maintenance",
  "Domain & hosting",
  "Not sure yet",
];

/** "What happens after you send your message" — Contact page. */
export const NEXT_STEPS = [
  {
    step: "01",
    title: "We read it properly",
    text: "A real person reads every request.",
  },
  {
    step: "02",
    title: "We reply within 24 hours",
    text: "With questions, ideas or a quick call, whichever suits you.",
  },
  {
    step: "03",
    title: "You get a clear quote",
    text: "Transparent, no-obligation and written in plain English.",
  },
];

/** Areas listed in the footer. */
export const SERVING = [
  "Kerala",
  "Across India",
  "UK, Qatar & Dubai",
  "International clients",
];

export const FAQS = [
  {
    icon: "location",
    q: "Are you a website development company based in Kerala?",
    a: "Yes. Pixlverse is a web design and development studio based in Kerala, India. We work with businesses across Kerala, the rest of India and international clients in the UK, Qatar and Dubai, through video calls, email and clear project updates.",
  },
  {
    icon: "price",
    q: "How much does a website cost?",
    a: "It depends on the number of pages, features and goals. A simple business site is very different from an online store or a custom web app. Tell us what you need and we'll send a clear, no-obligation quote within 24 hours.",
  },
  {
    icon: "ranking",
    q: "Do you help with SEO so my site ranks on Google?",
    a: "Yes. Every site we build includes technical SEO: clean code, fast loading, mobile-friendly layouts, structured data and sitemaps. We also offer local SEO and ongoing optimisation. No honest agency can guarantee a #1 ranking, but we make sure your site has every advantage.",
  },
  {
    icon: "upkeep",
    q: "Will you maintain my website after launch?",
    a: "Yes, and we encourage it. Our Maintenance & Support covers regular backups, security and uptime monitoring, performance checks, bug fixes and content updates.",
  },
  {
    icon: "rebuild",
    q: "Can you redesign or rebuild my existing website?",
    a: "Absolutely. We audit your current site, keep what works, fix what doesn't and rebuild it to look modern, load fast and convert better.",
  },
  {
    icon: "worldwide",
    q: "Do you work with clients outside India?",
    a: "Yes. We've delivered websites for clients in India, the UK, Qatar and Dubai. Our process works fully online, so distance is never a barrier.",
  },
];
