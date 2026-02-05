"use client";

import { motion, useReducedMotion } from "motion/react";
import FeatureCard from "./FeatureCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";
import { TYPOGRAPHY, FEATURES, FEATURE_COLORS } from "@/lib/constants";

/**
 * Features section with staggered card animations
 * Premium typography hierarchy and refined spacing
 */
export default function FeaturesSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="features" className="bg-secondary py-28 md:py-36">
            <MaxWidthWrapper>
                {/* Section header with refined hierarchy */}
                <motion.div
                    className="mx-auto mb-20 max-w-2xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={shouldReduceMotion ? {} : fadeInUp}
                >
                    <span className={`mb-4 inline-block rounded-base border-2 border-border bg-main px-3 py-1.5 text-main-foreground ${TYPOGRAPHY.eyebrow}`}>
                        Features
                    </span>
                    <h2 className={`mt-4 ${TYPOGRAPHY.h1}`}>
                        Everything You Need to{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">Land the Job</span>
                            <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-main opacity-40" />
                        </span>
                    </h2>
                    <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                        Our AI-powered platform provides all the tools you need to create
                        professional resumes that get noticed by recruiters.
                    </p>
                </motion.div>

                {/* Features grid with refined gap */}
                <motion.div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
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
