/**
 * Design tokens and constants for the landing page
 * Centralized values for consistent design system
 */

// Spacing scale (in Tailwind units)
export const SPACING = {
    section: "py-24 md:py-32",
    sectionSmall: "py-16 md:py-24",
    container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
} as const;

// Typography sizes
export const TYPOGRAPHY = {
    hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
    h1: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight",
    h3: "text-xl sm:text-2xl font-bold",
    body: "text-base md:text-lg",
    bodyLarge: "text-lg md:text-xl",
    small: "text-sm",
} as const;

// Neobrutalist border styles
export const BORDERS = {
    default: "border-2 border-border",
    thick: "border-4 border-border",
    bottom: "border-b-2 border-border",
} as const;

// Shadow styles
export const SHADOWS = {
    default: "shadow-shadow",
    pressed: "shadow-none translate-x-boxShadowX translate-y-boxShadowY",
    large: "shadow-[8px_8px_0px_0px_var(--border)]",
} as const;

// Common component styles
export const COMPONENT_STYLES = {
    card: `rounded-base ${BORDERS.default} bg-secondary-background ${SHADOWS.default} transition-all`,
    cardHover: `hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none`,
    button: `rounded-base ${BORDERS.default} font-bold ${SHADOWS.default} transition-all`,
    input: `rounded-base ${BORDERS.default} bg-secondary-background px-4 py-3`,
} as const;

// Feature card icon colors
export const FEATURE_COLORS = [
    "bg-main",
    "bg-chart-2",
    "bg-chart-3",
    "bg-chart-4",
    "bg-chart-5",
    "bg-chart-1",
] as const;

// Stats data
export const STATS = [
    { value: 50000, label: "Resumes Created", suffix: "+" },
    { value: 98, label: "Success Rate", suffix: "%" },
    { value: 150, label: "Countries", suffix: "+" },
    { value: 4.9, label: "User Rating", suffix: "/5" },
] as const;

// Features data
export const FEATURES = [
    {
        title: "AI-Powered Writing",
        description: "Let our AI craft compelling bullet points that highlight your achievements.",
        icon: "sparkles",
    },
    {
        title: "ATS-Optimized",
        description: "Beat applicant tracking systems with keyword-optimized resumes.",
        icon: "check-circle",
    },
    {
        title: "Multiple Templates",
        description: "Choose from dozens of professional, modern resume templates.",
        icon: "layout",
    },
    {
        title: "Real-time Preview",
        description: "See changes instantly as you build your perfect resume.",
        icon: "eye",
    },
    {
        title: "Export Anywhere",
        description: "Download as PDF or share with a custom link.",
        icon: "download",
    },
    {
        title: "Collaboration",
        description: "Get feedback from mentors and colleagues in real-time.",
        icon: "users",
    },
] as const;

// Testimonials data
export const TESTIMONIALS = [
    {
        name: "Sarah Chen",
        role: "Software Engineer at Google",
        content: "This resume builder helped me land my dream job. The AI suggestions were incredibly helpful!",
        avatar: "/avatars/sarah.jpg",
    },
    {
        name: "Marcus Johnson",
        role: "Product Manager at Meta",
        content: "I've tried many resume builders, but this one stands out. The neobrutalist design is unique and memorable.",
        avatar: "/avatars/marcus.jpg",
    },
    {
        name: "Emily Rodriguez",
        role: "UX Designer at Apple",
        content: "Clean, intuitive, and produces stunning resumes. I recommend it to everyone in my network.",
        avatar: "/avatars/emily.jpg",
    },
] as const;

// Pricing plans
export const PRICING = [
    {
        name: "Free",
        price: 0,
        description: "Perfect for getting started",
        features: ["1 Resume", "Basic Templates", "PDF Export", "7-day History"],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Pro",
        price: 12,
        description: "For serious job seekers",
        features: ["Unlimited Resumes", "All Templates", "AI Writing Assistant", "Cover Letters", "Priority Support"],
        cta: "Start Pro Trial",
        highlighted: true,
    },
    {
        name: "Team",
        price: 49,
        description: "For recruiters and teams",
        features: ["Everything in Pro", "Team Collaboration", "Analytics Dashboard", "API Access", "Dedicated Support"],
        cta: "Contact Sales",
        highlighted: false,
    },
] as const;

// Footer links
export const FOOTER_LINKS = {
    product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Templates", href: "/templates" },
        { label: "Examples", href: "/examples" },
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
    ],
    resources: [
        { label: "Help Center", href: "/help" },
        { label: "Community", href: "/community" },
        { label: "Guides", href: "/guides" },
        { label: "API Docs", href: "/docs" },
    ],
    legal: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/tos" },
        { label: "Cookies", href: "/cookies" },
    ],
} as const;
