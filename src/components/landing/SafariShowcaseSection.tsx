"use client";

import { motion } from "motion/react";
import { Safari } from "@/components/ui/safari";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { TYPOGRAPHY } from "@/lib/constants";
import AnimatedFeatureList from "./AnimatedFeatureList";
import { Sparkles } from "lucide-react";

/**
 * Enhanced showcase section featuring a Safari mockup and an animated feature list.
 * Integrates smooth entrance animations and neobrutalist styling.
 */
export default function SafariShowcaseSection() {
    return (
        <section id="platform-showcase" className="relative overflow-hidden bg-secondary py-24 md:py-32">
            <MaxWidthWrapper>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Content Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="flex flex-col gap-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="mb-4 inline-block rounded-base border-2 border-border bg-chart-4 px-3 py-1 text-sm font-bold text-white">
                                The Experience
                            </span>
                            <h2 className={TYPOGRAPHY.h1}>
                                Build Better Resumes,{" "}
                                <span className="bg-main px-2 text-main-foreground italic">Faster</span>
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Experience a platform designed for results. Our intelligent interface
                                guides you through every step of the professional resume-building process.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="w-full">
                            <AnimatedFeatureList />
                        </motion.div>
                    </motion.div>

                    {/* Mockup Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <Safari
                            url="app.resumemind.com/editor"
                            className="shadow-3xl"
                        >
                            <div className="flex h-full w-full flex-col bg-background p-6">
                                <div className="flex items-center justify-between border-b-2 border-border pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-base border-2 border-border bg-main" />
                                        <div>
                                            <div className="h-4 w-32 rounded bg-muted" />
                                            <div className="mt-1 h-2 w-20 rounded bg-muted/60" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-8 w-24 rounded-base border-2 border-border bg-secondary" />
                                        <div className="h-8 w-8 rounded-base border-2 border-border bg-main" />
                                    </div>
                                </div>
                                <div className="mt-8 grid grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="h-6 w-1/2 rounded bg-muted" />
                                        <div className="space-y-2">
                                            <div className="h-4 w-full rounded bg-muted/40" />
                                            <div className="h-4 w-full rounded bg-muted/40" />
                                            <div className="h-4 w-3/4 rounded bg-muted/40" />
                                        </div>
                                        <div className="flex items-center gap-2 rounded-base border-2 border-dashed border-main bg-main/5 p-4 animate-pulse">
                                            <Sparkles className="h-5 w-5 text-main" />
                                            <div className="h-3 w-32 rounded bg-main/20" />
                                        </div>
                                    </div>
                                    <div className="rounded-base border-2 border-border bg-white shadow-shadow">
                                        <div className="p-4 space-y-3">
                                            <div className="h-4 w-1/2 rounded bg-muted" />
                                            <div className="h-2 w-full rounded bg-muted/20" />
                                            <div className="h-2 w-full rounded bg-muted/20" />
                                            <div className="h-2 w-4/5 rounded bg-muted/20" />
                                            <div className="mt-4 flex gap-1">
                                                <div className="h-2 w-2 rounded bg-chart-1" />
                                                <div className="h-2 w-2 rounded bg-chart-1" />
                                                <div className="h-2 w-2 rounded bg-chart-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Safari>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 -top-8 h-16 w-16 rounded-base border-2 border-border bg-chart-2 shadow-shadow"
                        />
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-10 -left-10 h-24 w-24 rounded-base border-2 border-border bg-chart-3 shadow-shadow"
                        />
                    </motion.div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
