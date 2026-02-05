"use client";

import { motion, useReducedMotion } from "motion/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { TYPOGRAPHY } from "@/lib/constants";
import { FAQ } from "@/lib/constants";

/**
 * FAQ Section with accessible accordion
 * Premium typography and refined animations
 * Includes JSON-LD structured data for SEO
 */
export default function FAQSection() {
    const shouldReduceMotion = useReducedMotion();

    const getVariants = (variants: typeof fadeInUp) =>
        shouldReduceMotion
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : variants;

    // Structured data for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <section id="faq" className="bg-secondary-background py-28 md:py-36">
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <MaxWidthWrapper>
                <motion.div
                    className="mx-auto max-w-3xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {/* Section header with refined hierarchy */}
                    <motion.div
                        className="mb-16 text-center"
                        variants={getVariants(fadeInUp)}
                    >
                        <span className={`mb-4 inline-block rounded-base border-2 border-border bg-chart-3 px-3 py-1.5 text-white ${TYPOGRAPHY.eyebrow}`}>
                            Got Questions?
                        </span>
                        <h2 className={`mt-4 ${TYPOGRAPHY.h1}`}>
                            Frequently Asked{" "}
                            <span className="bg-main px-3 py-1 text-main-foreground">
                                Questions
                            </span>
                        </h2>
                        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                            Everything you need to know about our AI Resume Builder
                        </p>
                    </motion.div>

                    {/* FAQ Accordion with refined styling */}
                    <motion.div variants={getVariants(fadeInUp)}>
                        <Accordion
                            type="single"
                            collapsible
                            className="space-y-4"
                        >
                            {FAQ.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: shouldReduceMotion ? 0 : index * 0.08,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <AccordionItem
                                        value={`item-${index}`}
                                        className="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                                    >
                                        <AccordionTrigger className="text-left text-base md:text-lg">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
