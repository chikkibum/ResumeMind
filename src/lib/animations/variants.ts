/**
 * Framer Motion animation variants and utilities
 * Reusable configurations for consistent animations across the landing page
 */

import { Variants, Transition } from "motion/react";

// Default spring transition for smooth, natural animations
export const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 25,
};

// Premium ease-out curve (Apple-style)
export const easeTransition: Transition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
};

// Fast ease for micro-interactions
export const fastEase: Transition = {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1],
};

// Fade in from bottom animation
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: easeTransition,
    },
};

// Fade in from left animation
export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: easeTransition,
    },
};

// Fade in from right animation
export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: easeTransition,
    },
};

// Scale in animation for cards and elements
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: springTransition,
    },
};

// Staggered container for child animations
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Staggered container with slower timing
export const slowStaggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Hover scale effect for buttons and cards - refined subtle scale
export const hoverScale = {
    scale: 1.015,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

// Tap scale effect for buttons - more responsive
export const tapScale = {
    scale: 0.985,
    transition: { duration: 0.1 },
};

// Subtle scale for cards - very refined
export const subtleScale: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
};

// Icon micro-interaction
export const iconBounce = {
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
};

// Neobrutalist press effect (simulates shadow removal)
export const neoBrutalPress: Variants = {
    rest: {
        x: 0,
        y: 0,
        boxShadow: "4px 4px 0px 0px var(--border)",
    },
    hover: {
        x: 4,
        y: 4,
        boxShadow: "0px 0px 0px 0px var(--border)",
        transition: { duration: 0.15 },
    },
    tap: {
        x: 4,
        y: 4,
        boxShadow: "0px 0px 0px 0px var(--border)",
        transition: { duration: 0.1 },
    },
};

// Float animation for decorative elements
export const float: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Pulse animation for attention-grabbing elements
export const pulse: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Viewport settings for scroll-triggered animations
export const viewportSettings = {
    once: true,
    margin: "-100px",
    amount: 0.3 as const,
};

// Check for prefers-reduced-motion
export const shouldReduceMotion = (): boolean => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get animation variants respecting reduced motion preference
export const getReducedMotionVariants = (variants: Variants): Variants => {
    if (shouldReduceMotion()) {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.01 } },
        };
    }
    return variants;
};
// Accordion content height animation
export const accordionContent: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: "auto",
        opacity: 1,
        transition: {
            height: {
                duration: 0.3,
            },
            opacity: {
                duration: 0.2,
                delay: 0.1,
            },
        },
    },
};

// Staggered reveal for lists
export const staggeredReveal: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};
