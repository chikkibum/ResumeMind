"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { Circle, Minus, X } from "lucide-react";

interface BrowserMockupProps {
    children: ReactNode;
    url?: string;
    className?: string;
}

/**
 * Realistic browser window mockup with neobrutalist styling
 */
export default function BrowserMockup({
    children,
    url = "resumemind.ai/editor",
    className = "",
}: BrowserMockupProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className={`overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-[8px_8px_0px_0px_var(--border)] ${className}`}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {/* Browser header */}
            <div className="flex items-center justify-between border-b-2 border-border bg-muted px-4 py-3">
                {/* Window controls */}
                <div className="flex items-center gap-2">
                    <div className="flex h-3 w-3 items-center justify-center rounded-full border border-border bg-chart-3">
                        <X className="h-2 w-2 text-main-foreground opacity-0 transition-opacity hover:opacity-100" />
                    </div>
                    <div className="flex h-3 w-3 items-center justify-center rounded-full border border-border bg-chart-4">
                        <Minus className="h-2 w-2 text-main-foreground opacity-0 transition-opacity hover:opacity-100" />
                    </div>
                    <div className="flex h-3 w-3 items-center justify-center rounded-full border border-border bg-main">
                        <Circle className="h-2 w-2 text-main-foreground opacity-0 transition-opacity hover:opacity-100" />
                    </div>
                </div>

                {/* URL bar */}
                <div className="mx-4 flex-1">
                    <div className="mx-auto max-w-md rounded-base border-2 border-border bg-secondary-background px-4 py-1.5 text-center">
                        <span className="text-sm text-muted-foreground">
                            <span className="text-main">https://</span>
                            {url}
                        </span>
                    </div>
                </div>

                {/* Placeholder for alignment */}
                <div className="w-[52px]" />
            </div>

            {/* Browser content */}
            <div className="relative overflow-hidden bg-background">
                {children}

                {/* Animated cursor indicator */}
                <motion.div
                    className="pointer-events-none absolute"
                    initial={{ opacity: 0 }}
                    animate={
                        shouldReduceMotion
                            ? { opacity: 1 }
                            : {
                                opacity: [0, 1, 1, 0],
                                x: [100, 200, 300, 350],
                                y: [100, 150, 120, 180],
                            }
                    }
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="drop-shadow-lg"
                    >
                        <path
                            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L6.35 2.88a.5.5 0 0 0-.85.33Z"
                            fill="currentColor"
                            className="text-foreground"
                        />
                        <path
                            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L6.35 2.88a.5.5 0 0 0-.85.33Z"
                            stroke="white"
                            strokeWidth="1.5"
                        />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}
