import { BlogPost, Project } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of SEO in 2025: AI Overviews & Voice Search",
    excerpt: "Search is evolving rapidly. Discover how Generative AI is changing the SEO landscape and what you need to do to stay ahead of the curve.",
    category: "SEO Strategy",
    author: "Michael Chen",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Why Brand Identity Matters More Than Ever",
    excerpt: "In a crowded digital marketplace, trust is your most valuable currency. Learn how a strong visual identity builds lasting customer loyalty.",
    category: "Branding",
    author: "Jessica Ross",
    date: "Oct 08, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Maximizing ROI with Social Media Ads",
    excerpt: "Stop wasting budget on ineffective campaigns. We break down the targeting strategies that are driving the highest conversions right now.",
    category: "Paid Social",
    author: "Sarah Jenkins",
    date: "Sep 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Content Marketing Trends for Q4",
    excerpt: "From short-form video to interactive whitepapers, here are the content formats that are capturing attention this quarter.",
    category: "Content",
    author: "David Kim",
    date: "Sep 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "The Death of Third-Party Cookies",
    excerpt: "Privacy changes are shaking up digital advertising. Here is your survival guide to first-party data collection.",
    category: "Data & Privacy",
    author: "Michael Chen",
    date: "Sep 02, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Scaling Your E-commerce Store",
    excerpt: "Case study: How we helped a local boutique scale to 7-figures using a multi-channel marketing approach.",
    category: "Case Study",
    author: "Sarah Jenkins",
    date: "Aug 20, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80"
  }
];

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "NeonVerse Tech",
    category: "Rebranding & Web Design",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    description: "Complete visual identity overhaul and website redesign for a leading AI startup.",
    stats: { value: "300%", label: "Increase in Leads" },
    tags: ["Branding", "UI/UX", "Development"],
    challenge: "NeonVerse had groundbreaking AI technology but a dated, confusing web presence that failed to communicate their value proposition to enterprise clients. They needed a futuristic, high-performance website that would build trust and drive demos.",
    solution: "We developed a comprehensive brand strategy centered around 'illuminating the future'. We designed a dark-mode first UI with neon accents, implemented complex 3D visualizations using WebGL, and streamlined the conversion funnel.",
    results: [
      "300% increase in qualified inbound leads within 3 months",
      "50% reduction in bounce rate",
      "Featured in Awwwards Site of the Day"
    ],
    client: "NeonVerse AI Solutions",
    year: "2024"
  },
  {
    id: 2,
    title: "Organic Roots",
    category: "Social Media Strategy",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?auto=format&fit=crop&w=800&q=80",
    description: "Viral social campaign and community management for an organic skincare line.",
    stats: { value: "50k+", label: "New Followers" },
    tags: ["Social Media", "Content", "Influencer"],
    challenge: "Organic Roots was struggling to gain traction in a saturated beauty market. Their engagement rates were low, and they lacked a cohesive visual language on social platforms.",
    solution: "We launched the #RootedInNature campaign, partnering with 20 micro-influencers in the sustainability space. We created a user-generated content framework and revamped their daily content mix to focus on educational reels and behind-the-scenes production.",
    results: [
      "Gained 50,000+ new followers across Instagram and TikTok",
      "Achieved a 4.5% engagement rate (industry average is 1.2%)",
      "Sold out of their hero product within 48 hours of campaign launch"
    ],
    client: "Organic Roots Skincare",
    year: "2023"
  },
  {
    id: 3,
    title: "FinStream App",
    category: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "User acquisition campaign across Google and Meta for a new fintech application.",
    stats: { value: "-40%", label: "Cost Per Acquisition" },
    tags: ["PPC", "Analytics", "Strategy"],
    challenge: "FinStream needed to acquire 10,000 initial users for their beta launch but was facing high CPAs (Cost Per Acquisition) on their initial self-managed ads.",
    solution: "We implemented a granular account structure, testing over 50 ad creative variations. We utilized lookalike audiences based on their waiting list and set up advanced conversion API tracking to optimize for downstream events (account funding) rather than just installs.",
    results: [
      "Reduced CPA by 40% while doubling daily spend",
      "Acquired 15,000 verified users in 6 weeks",
      "Improved app store conversion rate by 12% through A/B testing screenshots"
    ],
    client: "FinStream Technologies",
    year: "2024"
  },
  {
    id: 4,
    title: "Urban Coffee Co.",
    category: "Local SEO & Content",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description: "Localized SEO strategy to dominate search results for a chain of 15 coffee shops.",
    stats: { value: "#1", label: "Rank for Local Keywords" },
    tags: ["SEO", "Copywriting", "Maps"],
    challenge: "Despite having 15 locations, Urban Coffee Co. was invisible in 'near me' searches, losing foot traffic to major chains.",
    solution: "We conducted a massive citation cleanup, optimized Google Business Profiles for all 15 locations with regular posts and photo updates, and created location-specific landing pages with hyper-local content.",
    results: [
      "Achieved #1 ranking for 'coffee shop near me' in 12/15 neighborhoods",
      "85% increase in 'Get Directions' requests from Maps",
      "Organic website traffic grew by 150% year-over-year"
    ],
    client: "Urban Coffee Holdings",
    year: "2023"
  },
  {
    id: 5,
    title: "Velvet Fashion",
    category: "E-commerce Growth",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    description: "Email marketing automation and conversion rate optimization for a luxury brand.",
    stats: { value: "2.5x", label: "ROI in 3 Months" },
    tags: ["Email", "CRO", "E-commerce"],
    challenge: "Velvet Fashion had a large email list but low open rates and revenue per recipient. They were leaving money on the table with generic blast campaigns.",
    solution: "We implemented Klaviyo and set up sophisticated flows: Welcome Series, Browse Abandonment, and VIP Tiers. We also redesigned their product pages to reduce friction.",
    results: [
      "Generated 35% of total revenue from email (up from 10%)",
      "Increased Customer Lifetime Value (CLV) by 25%",
      "Recovered $150k in abandoned carts in Q4 alone"
    ],
    client: "Velvet Fashion Group",
    year: "2023"
  },
  {
    id: 6,
    title: "GreenEnergy Corp",
    category: "B2B Lead Gen",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    description: "LinkedIn thought leadership and whitepaper campaign targeting enterprise decision makers.",
    stats: { value: "$2M", label: "Pipeline Generated" },
    tags: ["B2B", "LinkedIn", "Content"],
    challenge: "GreenEnergy needed to reach C-suite executives at manufacturing firms to sell large-scale solar installations. Cold calling was no longer effective.",
    solution: "We produced a high-value industry report on 'The Future of Industrial Energy'. We used this as a lead magnet for a LinkedIn InMail and Sponsored Content campaign, coupled with a thought leadership strategy for their CEO.",
    results: [
      "Generated $2M in qualified sales pipeline",
      "Acquired 3 Fortune 500 clients",
      "Report was downloaded 1,200+ times by target decision makers"
    ],
    client: "GreenEnergy Solutions",
    year: "2024"
  }
];
