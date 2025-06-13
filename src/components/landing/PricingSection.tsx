"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";
import { TYPOGRAPHY, PRICING } from "@/lib/constants";

/**
 * Pricing section with highlighted recommended plan
 */
export default function PricingSection() {
    const shouldReduceMotion = useReducedMotion();

    const getVariants = () =>
        shouldReduceMotion
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : fadeInUp;

    return (
        <section id="pricing" className="bg-background py-24 md:py-32">
            <MaxWidthWrapper>
                {/* Section header */}
                <motion.div
                    className="mx-auto mb-16 max-w-2xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={getVariants()}
                >
                    <span className="mb-4 inline-block rounded-base border-2 border-border bg-chart-5 px-3 py-1 text-sm font-bold text-white">
                        Pricing
                    </span>
                    <h2 className={TYPOGRAPHY.h1}>
                        Simple,{" "}
                        <span className="bg-main px-2 text-main-foreground">Transparent</span>{" "}
                        Pricing
                    </h2>
                    <p className="mt-4 text-muted-foreground text-base md:text-lg">
                        Start for free, upgrade when you&apos;re ready. No hidden fees.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <motion.div
                    className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {PRICING.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`relative rounded-base border-2 border-border p-6 transition-all ${plan.highlighted
                                    ? "bg-main text-main-foreground shadow-[8px_8px_0px_0px_var(--border)] lg:-mt-4 lg:mb-4"
                                    : "bg-secondary-background shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                                }`}
                            variants={getVariants()}
                            custom={index}
                        >
                            {/* Popular badge */}
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-base border-2 border-border bg-chart-4 px-3 py-1 text-xs font-bold text-main-foreground">
                                    Most Popular
                                </div>
                            )}

                            {/* Plan info */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <p
                                    className={`text-sm ${plan.highlighted ? "text-main-foreground/80" : "text-muted-foreground"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-4xl font-bold">
                                    ${plan.price}
                                </span>
                                <span
                                    className={`${plan.highlighted ? "text-main-foreground/80" : "text-muted-foreground"
                                        }`}
                                >
                                    /month
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="mb-8 space-y-3">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <div
                                            className={`flex h-5 w-5 items-center justify-center rounded-base border ${plan.highlighted
                                                    ? "border-main-foreground bg-main-foreground/20"
                                                    : "border-border bg-main"
                                                }`}
                                        >
                                            <Check
                                                className={`h-3 w-3 ${plan.highlighted ? "text-main-foreground" : "text-main-foreground"
                                                    }`}
                                            />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button
                                asChild
                                variant={plan.highlighted ? "neutral" : "default"}
                                className="w-full"
                            >
                                <Link href="/resumes">{plan.cta}</Link>
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
