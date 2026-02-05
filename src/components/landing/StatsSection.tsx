"use client";

import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";
import { STATS } from "@/lib/constants";

/**
 * Stats section with animated counters
 * Premium visual weight and refined spacing
 */
export default function StatsSection() {
    return (
        <section className="bg-main py-20 md:py-28">
            <MaxWidthWrapper>
                <motion.div
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="relative text-center text-main-foreground"
                            variants={fadeInUp}
                        >
                            <AnimatedCounter
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                            />
                            {/* Decorative divider (hidden on last item per row) */}
                            {index < STATS.length - 1 && (
                                <div className="absolute -right-4 top-1/2 hidden h-12 w-0.5 -translate-y-1/2 bg-main-foreground/20 lg:block" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
