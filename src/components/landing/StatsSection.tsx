"use client";

import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { staggerContainer } from "@/lib/animations/variants";
import { STATS } from "@/lib/constants";

/**
 * Stats section with animated counters
 * Uses consistent padding with other sections
 */
export default function StatsSection() {
    return (
        <section className="bg-main py-16 md:py-24">
            <MaxWidthWrapper>
                <motion.div
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center text-main-foreground"
                        >
                            <AnimatedCounter
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                            />
                        </div>
                    ))}
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
