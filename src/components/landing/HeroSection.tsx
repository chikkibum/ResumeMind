"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star, CheckCircle } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
    fadeInUp,
    staggerContainer,
    float,
} from "@/lib/animations/variants";
import { TYPOGRAPHY } from "@/lib/constants";

/**
 * Hero section with animated entrance and dual CTAs
 * Features floating resume preview cards
 */
export default function HeroSection() {
    const shouldReduceMotion = useReducedMotion();

    const getVariants = (variants: typeof fadeInUp) =>
        shouldReduceMotion
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : variants;

    return (
        <section className="relative overflow-hidden bg-background py-28 md:py-36 lg:py-44">
            {/* Floating ATS Score - Left */}
            <motion.div
                className="absolute left-4 top-32 hidden rotate-[-6deg] rounded-base border-2 border-border bg-chart-4 px-4 py-3 shadow-shadow lg:block"
                variants={float}
                initial="initial"
                animate={shouldReduceMotion ? {} : "animate"}
            >
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-foreground bg-main-foreground/10">
                        <span className="text-sm font-black text-main-foreground">95</span>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-wide text-main-foreground/70">ATS Score</div>
                        <div className="text-xs font-bold text-main-foreground">Excellent</div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Keywords Match - Right */}
            <motion.div
                className="absolute right-4 bottom-48 hidden rotate-[5deg] rounded-base border-2 border-border bg-chart-2 px-4 py-3 shadow-shadow lg:block"
                variants={float}
                initial="initial"
                animate={shouldReduceMotion ? {} : "animate"}
                style={{ animationDelay: "1.2s" }}
            >
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-black text-main-foreground">12/14</span>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-main-foreground/70">Keywords</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="h-1.5 w-8 rounded-full bg-main-foreground" />
                        <div className="h-1.5 w-6 rounded-full bg-main-foreground/60" />
                        <div className="h-1.5 w-7 rounded-full bg-main-foreground/80" />
                    </div>
                </div>
            </motion.div>

            {/* Floating ATS Check Badge - Top Right */}
            <motion.div
                className="absolute right-12 top-28 hidden items-center gap-2 rounded-base border-2 border-border bg-main px-4 py-2.5 shadow-shadow lg:flex"
                variants={float}
                initial="initial"
                animate={shouldReduceMotion ? {} : "animate"}
                style={{ animationDelay: "0.6s" }}
            >
                <CheckCircle className="h-5 w-5 text-main-foreground" />
                <span className="text-sm font-bold text-main-foreground">ATS Check Passed</span>
            </motion.div>

            {/* Floating Beat The Bots - Bottom Left */}
            <motion.div
                className="absolute bottom-36 left-8 hidden rotate-[-4deg] rounded-base border-2 border-border bg-secondary-background px-3 py-2 shadow-shadow lg:block"
                variants={float}
                initial="initial"
                animate={shouldReduceMotion ? {} : "animate"}
                style={{ animationDelay: "1.8s" }}
            >
                <div className="flex items-center gap-2">
                    <span className="text-lg">🤖</span>
                    <span className="text-xs font-bold text-foreground">Beat The Bots</span>
                </div>
            </motion.div>

            <MaxWidthWrapper>
                <motion.div
                    className="mx-auto max-w-4xl text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Badge with subtle animation */}
                    <motion.div
                        className="mb-8 inline-flex items-center gap-2.5 rounded-base border-2 border-border bg-secondary-background px-4 py-2 shadow-shadow"
                        variants={getVariants(fadeInUp)}
                    >
                        <motion.span
                            className="flex h-2 w-2 items-center justify-center"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="h-full w-full rounded-full bg-main" />
                        </motion.span>
                        <span className={TYPOGRAPHY.eyebrow}>AI-Powered Resume Builder</span>
                    </motion.div>

                    {/* Headline with improved visual impact */}
                    <motion.h1
                        className={`mb-8 ${TYPOGRAPHY.hero}`}
                        variants={getVariants(fadeInUp)}
                    >
                        Build Your{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-main px-4 py-1 text-main-foreground">
                                Dream Career
                            </span>
                            <motion.span
                                className="absolute -bottom-1.5 -right-1.5 -z-0 h-full w-full bg-border"
                                initial={{ opacity: 0, x: -10, y: -10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            />
                        </span>
                        <br className="hidden sm:block" />
                        <span className="mt-2 inline-block">One Resume at a Time</span>
                    </motion.h1>

                    {/* Description with better spacing and hierarchy */}
                    <motion.p
                        className={`mx-auto mb-12 max-w-2xl text-muted-foreground ${TYPOGRAPHY.bodyLarge}`}
                        variants={getVariants(fadeInUp)}
                    >
                        Create stunning, ATS-optimized resumes in minutes with our AI-powered builder.
                        Stand out from the crowd and land interviews faster.
                    </motion.p>

                    {/* CTAs with enhanced styling */}
                    <motion.div
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
                        variants={getVariants(fadeInUp)}
                    >
                        <Button asChild size="lg" className="gap-2.5 px-8 text-base">
                            <Link href="/resumes">
                                <Sparkles className="h-4 w-4" />
                                Start Building Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="gap-2.5 px-8 text-base">
                            <Link href="#showcase">
                                <Play className="h-4 w-4" />
                                See How It Works
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Trust indicators with refined visual hierarchy */}
                    <motion.div
                        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm"
                        variants={getVariants(fadeInUp)}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-foreground">50K+</span>
                            <span className="text-muted-foreground">Resumes Created</span>
                        </div>
                        <div className="hidden h-6 w-px bg-border sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-foreground">4.9</span>
                            <Star className="h-4 w-4 fill-main text-main" />
                            <span className="text-muted-foreground">User Rating</span>
                        </div>
                        <div className="hidden h-6 w-px bg-border sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="rounded-base bg-main px-2 py-0.5 text-sm font-bold text-main-foreground">Free</span>
                            <span className="text-muted-foreground">to Start</span>
                        </div>
                    </motion.div>
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
