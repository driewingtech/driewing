import realEstateHero from "../assets/real-estate-hero.png";
import priyamImg from "../assets/priyam.png";
import nftMarketplace from "../assets/nft-marketplace.png";
import adminDashboard from "../assets/admin-dashboard.png";
import solanaDapp from "../assets/solana-dapp.png";
import dexTrading from "../assets/dex-trading-dashboard.png";

export const projects = [
  {
    id: "driewinge-real-estate",
    title: "Driewinge Real Estate",
    category: "Real Estate",
    tags: ["React.js", "Vercel", "CSS Modules", "Responsive"],
    imgUrl: realEstateHero,
    client: "Driewinge Real Estate",
    timeline: "2 Weeks · April 2025",
    description: "Bringing Property Excellence Online with a premium digital presence and conversion-focused UI.",
    highlights: [
      "Property Showcase & Listing Pages",
      "Brand-First Hero Section",
      "Mobile-First Responsive Layout",
      "About & Contact Section"
    ],
    overview: "Driewinge Real Estate is a modern property listing and showcase website built to help a real estate brand establish a premium digital presence. The goal was to craft an experience that mirrors the trust and professionalism of the physical real estate world.",
    approach: "We used a warm, neutral colour palette with strong typographic hierarchy to create a sense of authority. Component reusability was prioritised from day one — property cards, section blocks, and navigation were all built as isolated components.",
    liveUrl: "https://driewingrealestate.vercel.app/"
  },
  {
    id: "priyam-digital-studio",
    title: "Priyam Digital Studio",
    category: "Portfolio",
    tags: ["Next.js", "Google Drive API", "UI/UX Design", "React"],
    imgUrl: priyamImg,
    client: "Priyam Digital Studio",
    timeline: "3 Weeks · 2024",
    description: "A refined digital storefront for a photography studio that needed stronger presentation and smoother browsing.",
    highlights: [
      "Responsive gallery experience",
      "Automated image management",
      "Performance-focused front-end",
      "Premium brand presentation"
    ],
    overview: "A refined digital storefront for a photography studio that needed stronger presentation, smoother browsing, and a site that could evolve without constant developer overhead.",
    approach: "Elegant portfolio browsing with streamlined gallery updates and a stronger premium brand feel.",
    liveUrl: "https://priyam-digital-stilllifestudio.netlify.app/"
  },
  {
    id: "nft-marketplace",
    title: "Web3 NFT Marketplace",
    category: "Blockchain",
    tags: ["Node.js", "MongoDB", "Web3.js", "Ethereum"],
    imgUrl: nftMarketplace,
    client: "MetaVentures",
    timeline: "4 Weeks · 2024",
    description: "Backend services for a blockchain-based NFT application with integrated smart contracts.",
    highlights: [
      "Smart Contract Integration",
      "Scalable MongoDB Architecture",
      "User Wallet Management",
      "Real-time Auction System"
    ],
    overview: "Developed backend services for a blockchain-based NFT application. Integrated smart contracts using web3.js and managed scalable data with MongoDB.",
    approach: "Focus on security and scalability, ensuring seamless interactions between the frontend and the Ethereum blockchain.",
    liveUrl: "#"
  },
  {
    id: "full-stack-dashboard",
    title: "Full-Stack SaaS Dashboard",
    category: "SaaS",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    imgUrl: adminDashboard,
    client: "Nexus Solutions",
    timeline: "5 Weeks · 2023",
    description: "A comprehensive MERN stack application featuring secure authentication and data visualization.",
    highlights: [
      "Secure JWT Authentication",
      "Interactive Data Charts",
      "User Role Management",
      "RESTful API Architecture"
    ],
    overview: "A comprehensive MERN stack application featuring secure authentication, data visualization, and user management.",
    approach: "Built with a focus on data integrity and user experience, providing a powerful yet intuitive interface for administrators.",
    liveUrl: "#"
  },
  {
    id: "solana-dapp",
    title: "Solana DApp Component",
    category: "Blockchain",
    tags: ["Rust", "Solana", "Blockchain", "Smart Contracts"],
    imgUrl: solanaDapp,
    client: "SolStream",
    timeline: "3 Weeks · 2024",
    description: "Developed Rust-based blockchain components and contract interactions for the Solana ecosystem.",
    highlights: [
      "Rust Program Development",
      "Solana Web3 Integration",
      "High-Performance On-chain Logic",
      "DeFi Protocol Support"
    ],
    overview: "Developed Rust-based blockchain components and contract interactions for the Solana ecosystem.",
    approach: "Leveraging Solana's high throughput and low latency to build efficient and secure on-chain logic.",
    liveUrl: "#"
  },
  {
    id: "dex-defi-trading",
    title: "DeFi & DEX Trading Platform",
    category: "Blockchain",
    tags: ["React", "Web3.js", "Solidity", "Node.js"],
    imgUrl: dexTrading,
    client: "TradeFi Protocol",
    timeline: "8 Weeks · 2024",
    description: "A high-performance decentralized exchange (DEX) and DeFi trading platform built for seamless token swaps and liquidity provision.",
    highlights: [
      "Real-time Trading Charts",
      "Automated Market Maker (AMM)",
      "Secure Wallet Integration",
      "Liquidity Pool Management"
    ],
    overview: "We architected and developed a fully decentralized trading platform that enables users to securely swap tokens, provide liquidity, and stake assets. The platform features an intuitive, professional-grade interface tailored for both novice and expert traders.",
    approach: "Performance and security were our top priorities. We integrated robust smart contracts with a highly responsive React frontend, utilizing Web3.js to ensure lightning-fast transaction updates and accurate real-time market data.",
    liveUrl: "#"
  }
];
