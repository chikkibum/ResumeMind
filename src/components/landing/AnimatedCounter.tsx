"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { fadeInUp } from "@/lib/animations/variants";

interface AnimatedCounterProps {
    value: number;
    label: string;
    suffix?: string;
    duration?: number;
}

/**
 * Animated counter that counts up when in view
 * Respects prefers-reduced-motion
 */
export default function AnimatedCounter({
    value,
    label,
    suffix = "",
    duration = 2,
}: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!isInView) return;

        // Skip animation if user prefers reduced motion
        if (shouldReduceMotion) {
            setDisplayValue(value);
            return;
        }

        // Animate the counter
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const updateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);

            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(easeOut * value * 10) / 10;

            setDisplayValue(currentValue);

            if (now < endTime) {
                requestAnimationFrame(updateCounter);
            } else {
                setDisplayValue(value);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [isInView, value, duration, shouldReduceMotion]);

    // Format number display (handle decimals)
    const formattedValue =
        value % 1 === 0
            ? Math.round(displayValue).toLocaleString()
            : displayValue.toFixed(1);

    return (
        <motion.div
            ref={ref}
            className="text-center"
            variants={fadeInUp}
        >
            <div className="mb-2 text-4xl font-bold text-main md:text-5xl lg:text-6xl">
                {formattedValue}
                <span className="text-foreground">{suffix}</span>
            </div>
            <p className="text-lg font-medium text-muted-foreground">{label}</p>
        </motion.div>
    );
}
