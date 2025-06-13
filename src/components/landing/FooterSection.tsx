"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { FOOTER_LINKS } from "@/lib/constants";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const SOCIAL_LINKS = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

/**
 * Footer section with links and social icons
 */
export default function FooterSection() {
    const shouldReduceMotion = useReducedMotion();
    const currentYear = new Date().getFullYear();

    const getVariants = () =>
        shouldReduceMotion
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : fadeInUp;

    return (
        <footer className="border-t-2 border-border bg-secondary-background py-16 md:py-20">
            <MaxWidthWrapper>
                <motion.div
                    className="grid gap-12 md:grid-cols-2 lg:grid-cols-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {/* Brand column */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={getVariants()}
                    >
                        <Link href="/" className="mb-4 flex items-center gap-3">
                            <div className="overflow-hidden rounded-base border-2 border-border">
                                <Image
                                    src={logo}
                                    alt="ResumeMind"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold">ResumeMind</span>
                        </Link>
                        <p className="mb-6 max-w-sm text-sm text-muted-foreground">
                            Build professional resumes in minutes with our AI-powered builder.
                            Land your dream job faster.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-base border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--border)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Link columns */}
                    {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                        <motion.div key={category} variants={getVariants()}>
                            <h3 className="mb-4 font-bold capitalize">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-border pt-8 md:flex-row"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={getVariants()}
                >
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} ResumeMind. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/tos"
                            className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </MaxWidthWrapper>
        </footer>
    );
}
