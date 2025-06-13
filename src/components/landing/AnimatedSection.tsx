"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import {
    fadeInUp,
    staggerContainer,
    viewportSettings,
} from "@/lib/animations/variants";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    stagger?: boolean;
}

/**
 * Wrapper component for scroll-triggered animations
 * Respects prefers-reduced-motion accessibility setting
 */
export default function AnimatedSection({
    children,
    className = "",
    id,
    stagger = false,
}: AnimatedSectionProps) {
    const shouldReduceMotion = useReducedMotion();

    // Simplified animation for reduced motion preference
    const reducedVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
    };

    const variants = shouldReduceMotion
        ? reducedVariants
        : stagger
            ? staggerContainer
            : fadeInUp;

    return (
        <motion.section
            id={id}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={variants}
        >
            {children}
        </motion.section>
    );
}
