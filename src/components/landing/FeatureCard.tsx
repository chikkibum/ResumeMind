"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeInUp } from "@/lib/animations/variants";
import {
    Sparkles,
    CheckCircle,
    Layout,
    Eye,
    Download,
    Users,
    LucideIcon,
} from "lucide-react";

// Icon mapping for features
const ICONS: Record<string, LucideIcon> = {
    sparkles: Sparkles,
    "check-circle": CheckCircle,
    layout: Layout,
    eye: Eye,
    download: Download,
    users: Users,
};

interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
    colorClass: string;
    index: number;
}

/**
 * Feature card with neobrutalist styling and hover animation
 */
export default function FeatureCard({
    title,
    description,
    icon,
    colorClass,
    index,
}: FeatureCardProps) {
    const shouldReduceMotion = useReducedMotion();
    const IconComponent = ICONS[icon] || Sparkles;

    const cardVariants = shouldReduceMotion
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : fadeInUp;

    return (
        <motion.div
            className="group relative rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow transition-all duration-200 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            variants={cardVariants}
            custom={index}
        >
            {/* Icon container */}
            <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-base border-2 border-border ${colorClass}`}
            >
                <IconComponent className="h-6 w-6 text-main-foreground" />
            </div>

            {/* Content */}
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>

            {/* Decorative corner accent */}
            <div
                className={`absolute -right-1 -top-1 h-4 w-4 rounded-br-base border-b-2 border-r-2 border-border ${colorClass} opacity-0 transition-opacity group-hover:opacity-100`}
            />
        </motion.div>
    );
}
