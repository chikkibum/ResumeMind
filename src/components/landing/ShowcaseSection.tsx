"use client";

import { motion, useReducedMotion } from "motion/react";
import BrowserMockup from "./BrowserMockup";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations/variants";
import { TYPOGRAPHY } from "@/lib/constants";
import { Check, Sparkles } from "lucide-react";

/**
 * Platform showcase section with browser mockup
 */
export default function ShowcaseSection() {
    const shouldReduceMotion = useReducedMotion();

    const getVariants = (variants: typeof fadeInUp) =>
        shouldReduceMotion
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : variants;

    return (
        <section id="showcase" className="bg-background py-24 md:py-32">
            <MaxWidthWrapper>
                {/* Section header */}
                <motion.div
                    className="mx-auto mb-16 max-w-2xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={getVariants(fadeInUp)}
                >
                    <span className="mb-4 inline-block rounded-base border-2 border-border bg-chart-2 px-3 py-1 text-sm font-bold text-white">
                        See It In Action
                    </span>
                    <h2 className={TYPOGRAPHY.h1}>
                        A Resume Builder That{" "}
                        <span className="bg-main px-2 text-main-foreground">Just Works</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-base md:text-lg">
                        Intuitive interface, powerful AI assistance, and beautiful templates —
                        all in one place.
                    </p>
                </motion.div>

                {/* Browser mockup with content */}
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Feature list */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={getVariants(fadeInLeft)}
                    >
                        <div className="space-y-6">
                            {[
                                {
                                    title: "AI-Powered Suggestions",
                                    description:
                                        "Get intelligent recommendations for bullet points, skills, and more.",
                                },
                                {
                                    title: "Real-Time Preview",
                                    description:
                                        "See your changes instantly as you build your perfect resume.",
                                },
                                {
                                    title: "Multiple Export Options",
                                    description:
                                        "Download as PDF, share via link, or print directly from the app.",
                                },
                                {
                                    title: "ATS-Optimized",
                                    description:
                                        "Templates designed to pass applicant tracking systems.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-base border-2 border-border bg-main">
                                        <Check className="h-5 w-5 text-main-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Browser mockup */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={getVariants(fadeInRight)}
                    >
                        <BrowserMockup>
                            {/* Simulated editor interface */}
                            <div className="p-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    {/* Editor side */}
                                    <div className="space-y-4 rounded-base border-2 border-border bg-secondary-background p-4">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="h-5 w-5 text-main" />
                                            <span className="font-bold">AI Writing Assistant</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-3 w-full rounded bg-muted" />
                                            <div className="h-3 w-4/5 rounded bg-muted" />
                                            <div className="h-3 w-3/4 rounded bg-muted" />
                                        </div>
                                        <motion.div
                                            className="rounded-base border-2 border-main bg-main/10 p-3"
                                            animate={
                                                shouldReduceMotion
                                                    ? {}
                                                    : { opacity: [0.5, 1, 0.5] }
                                            }
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <p className="text-sm text-main">
                                                ✨ AI is generating suggestions...
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Preview side */}
                                    <div className="rounded-base border-2 border-border bg-white p-4">
                                        <div className="mb-4 space-y-1">
                                            <div className="h-6 w-40 rounded bg-foreground" />
                                            <div className="h-3 w-32 rounded bg-muted" />
                                        </div>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="mb-1 h-4 w-24 rounded bg-main" />
                                                <div className="h-2 w-full rounded bg-muted" />
                                                <div className="mt-1 h-2 w-4/5 rounded bg-muted" />
                                            </div>
                                            <div>
                                                <div className="mb-1 h-4 w-20 rounded bg-main" />
                                                <div className="h-2 w-full rounded bg-muted" />
                                                <div className="mt-1 h-2 w-3/4 rounded bg-muted" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BrowserMockup>
                    </motion.div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
