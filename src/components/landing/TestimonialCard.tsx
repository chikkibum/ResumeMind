"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeInUp } from "@/lib/animations/variants";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    index: number;
}

/**
 * Testimonial card with neobrutalist styling and refined polish
 */
export default function TestimonialCard({
    name,
    role,
    content,
    index,
}: TestimonialCardProps) {
    const shouldReduceMotion = useReducedMotion();

    const cardVariants = shouldReduceMotion
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : fadeInUp;

    // Cycle through accent colors
    const accentColors = ["bg-main", "bg-chart-2", "bg-chart-4"];
    const accentColor = accentColors[index % accentColors.length];

    return (
        <motion.div
            className="group relative rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            variants={cardVariants}
            custom={index}
        >
            {/* Quote icon with subtle animation */}
            <motion.div
                className={`absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-base border-2 border-border ${accentColor} transition-transform duration-300 group-hover:scale-110`}
            >
                <Quote className="h-4 w-4 text-main-foreground" />
            </motion.div>

            {/* Content with improved typography */}
            <p className="mb-6 mt-4 text-base leading-relaxed text-foreground md:text-lg">
                &ldquo;{content}&rdquo;
            </p>

            {/* Author info with refined hierarchy */}
            <div className="flex items-center gap-4">
                {/* Avatar placeholder - initial letter */}
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-base border-2 border-border ${accentColor} text-lg font-bold text-main-foreground`}
                >
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-bold tracking-tight">{name}</p>
                    <p className="text-sm text-muted-foreground">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}
