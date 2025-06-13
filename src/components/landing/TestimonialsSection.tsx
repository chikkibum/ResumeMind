"use client";

import { motion, useReducedMotion } from "motion/react";
import TestimonialCard from "./TestimonialCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";
import { TYPOGRAPHY, TESTIMONIALS } from "@/lib/constants";

/**
 * Testimonials section with scroll-triggered animations
 */
export default function TestimonialsSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-secondary py-24 md:py-32">
            <MaxWidthWrapper>
                {/* Section header */}
                <motion.div
                    className="mx-auto mb-16 max-w-2xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={
                        shouldReduceMotion
                            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                            : fadeInUp
                    }
                >
                    <span className="mb-4 inline-block rounded-base border-2 border-border bg-chart-4 px-3 py-1 text-sm font-bold text-main-foreground">
                        Testimonials
                    </span>
                    <h2 className={TYPOGRAPHY.h1}>
                        Loved by{" "}
                        <span className="underline decoration-main decoration-4 underline-offset-4">
                            50,000+
                        </span>{" "}
                        Job Seekers
                    </h2>
                    <p className="mt-4 text-muted-foreground text-base md:text-lg">
                        See what our users have to say about their experience with ResumeMind.
                    </p>
                </motion.div>

                {/* Testimonials grid */}
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.name}
                            name={testimonial.name}
                            role={testimonial.role}
                            content={testimonial.content}
                            index={index}
                        />
                    ))}
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
