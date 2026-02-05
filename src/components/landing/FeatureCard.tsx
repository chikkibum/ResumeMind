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
 * Feature card with neobrutalist styling and refined hover animation
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
            className="group relative rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            variants={cardVariants}
            custom={index}
            whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
        >
            {/* Icon container with micro-interaction */}
            <motion.div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-base border-2 border-border ${colorClass} transition-transform duration-300`}
                whileHover={shouldReduceMotion ? {} : { rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
            >
                <IconComponent className="h-6 w-6 text-main-foreground" />
            </motion.div>

            {/* Content with refined typography */}
            <h3 className="mb-2.5 text-xl font-bold tracking-tight">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

            {/* Decorative corner accent */}
            <div
                className={`absolute -right-1 -top-1 h-4 w-4 rounded-br-base border-b-2 border-r-2 border-border ${colorClass} opacity-0 transition-all duration-300 group-hover:opacity-100`}
            />
        </motion.div>
    );
}
