"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
    fadeInUp,
    staggerContainer,
    float,
} from "@/lib/animations/variants";
import { TYPOGRAPHY } from "@/lib/constants";

/**
 * Hero section with animated entrance and dual CTAs
 */
export default function HeroSection() {
    const shouldReduceMotion = useReducedMotion();

    const getVariants = (variants: typeof fadeInUp) =>
        shouldReduceMotion
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : variants;

    return (
        <section className="relative overflow-hidden bg-background py-24 md:py-32">
            {/* Decorative background elements */}
            <motion.div
                className="absolute -left-20 top-20 h-40 w-40 rounded-base border-2 border-border bg-main opacity-20"
                variants={float}
                initial="initial"
                animate={shouldReduceMotion ? {} : "animate"}
            />
            <motion.div
                className="absolute -right-10 bottom-40 h-32 w-32 rounded-base border-2 border-border bg-chart-2 opacity-20"
                variants={float}
                initial="initial"
                animate={shouldReduceMotion ? {} : "animate"}
                style={{ animationDelay: "1s" }}
            />

            <MaxWidthWrapper>
                <motion.div
                    className="mx-auto max-w-4xl text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Badge */}
                    <motion.div
                        className="mb-6 inline-flex items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-4 py-2 shadow-shadow"
                        variants={getVariants(fadeInUp)}
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-main" />
                        <span className="text-sm font-bold">AI-Powered Resume Builder</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className={`mb-6 ${TYPOGRAPHY.hero}`}
                        variants={getVariants(fadeInUp)}
                    >
                        Build Your{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-main px-3 text-main-foreground">
                                Dream Career
                            </span>
                            <span className="absolute -bottom-1 -right-1 -z-0 h-full w-full bg-border" />
                        </span>
                        <br />
                        One Resume at a Time
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className={`mx-auto mb-10 max-w-2xl text-muted-foreground ${TYPOGRAPHY.bodyLarge}`}
                        variants={getVariants(fadeInUp)}
                    >
                        Create stunning, ATS-optimized resumes in minutes with our AI-powered builder.
                        Stand out from the crowd and land interviews faster.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        variants={getVariants(fadeInUp)}
                    >
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/resumes">
                                Start Building Free
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="gap-2">
                            <Link href="#showcase">
                                <Play className="h-5 w-5" />
                                See How It Works
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                        variants={getVariants(fadeInUp)}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-foreground">50K+</span>
                            Resumes Created
                        </div>
                        <div className="h-4 w-px bg-border" />
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-foreground">4.9★</span>
                            User Rating
                        </div>
                        <div className="h-4 w-px bg-border" />
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-foreground">Free</span>
                            to Start
                        </div>
                    </motion.div>
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
