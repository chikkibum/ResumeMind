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
 * Testimonial card with neobrutalist styling
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
    const accentColors = ["bg-main", "bg-chart-2", "bg-chart-3"];
    const accentColor = accentColors[index % accentColors.length];

    return (
        <motion.div
            className="relative rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
            variants={cardVariants}
            custom={index}
        >
            {/* Quote icon */}
            <div
                className={`absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-base border-2 border-border ${accentColor}`}
            >
                <Quote className="h-4 w-4 text-main-foreground" />
            </div>

            {/* Content */}
            <p className="mb-6 mt-4 text-lg leading-relaxed text-foreground">
                &ldquo;{content}&rdquo;
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4">
                {/* Avatar placeholder - initial letter */}
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-base border-2 border-border ${accentColor} font-bold text-main-foreground`}
                >
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-sm text-muted-foreground">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}
