"use client";

import { motion, useReducedMotion } from "motion/react";
import FeatureCard from "./FeatureCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";
import { TYPOGRAPHY, FEATURES, FEATURE_COLORS } from "@/lib/constants";

/**
 * Features section with staggered card animations
 */
export default function FeaturesSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="features" className="bg-secondary py-24 md:py-32">
            <MaxWidthWrapper>
                {/* Section header */}
                <motion.div
                    className="mx-auto mb-16 max-w-2xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={shouldReduceMotion ? {} : fadeInUp}
                >
                    <span className="mb-4 inline-block rounded-base border-2 border-border bg-main px-3 py-1 text-sm font-bold text-main-foreground">
                        Features
                    </span>
                    <h2 className={TYPOGRAPHY.h1}>
                        Everything You Need to{" "}
                        <span className="underline decoration-main decoration-4 underline-offset-4">
                            Land the Job
                        </span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-base md:text-lg">
                        Our AI-powered platform provides all the tools you need to create
                        professional resumes that get noticed by recruiters.
                    </p>
                </motion.div>

                {/* Features grid */}
                <motion.div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {FEATURES.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            colorClass={FEATURE_COLORS[index % FEATURE_COLORS.length]}
                            index={index}
                        />
                    ))}
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
