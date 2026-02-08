"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import logo from "@/assets/resumeMind.jpeg";

const SOCIAL_LINKS = [
    { icon: Twitter, href: "https://x.com/Bhaskar_690", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com/in/dev-bhaskar", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/chikkibum", label: "Github" },
];

/**
 * Footer section with brand info and social icons
 * Clean layout with left-aligned brand and right-aligned socials
 */
export default function FooterSection() {
    const shouldReduceMotion = useReducedMotion();
    const currentYear = new Date().getFullYear();

    const getVariants = () =>
        shouldReduceMotion
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : fadeInUp;

    return (
        <footer className="border-t-2 border-border bg-main py-12 md:py-16">
            <MaxWidthWrapper>
                <motion.div
                    className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {/* Brand section - Left */}
                    <motion.div
                        className="max-w-md"
                        variants={getVariants()}
                    >
                        <Link href="/" className="mb-5 flex items-center gap-3 group">
                            <div className="overflow-hidden rounded-base border-2 border-border bg-background transition-transform duration-300 group-hover:scale-105 shadow-shadow">
                                <Image
                                    src={logo}
                                    alt="ResumeMind"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-main-foreground">ResumeMind</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-main-foreground/80">
                            Build professional, ATS-optimized resumes in minutes with our AI-powered builder. Land your dream job faster. ✨
                        </p>
                    </motion.div>

                    {/* Social icons - Right */}
                    <motion.div
                        className="flex flex-col items-start gap-6 md:items-end"
                        variants={getVariants()}
                    >
                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-background shadow-[3px_3px_0px_0px_var(--border)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-main-foreground hover:text-main"
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-border/30 pt-6 md:flex-row"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={getVariants()}
                >
                    <p className="text-sm text-main-foreground/70">
                        © {currentYear} ResumeMind | Built with ❤️ by Bhaskar
                    </p>
                    <div className="flex items-center gap-4 md:gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-main-foreground/70 underline-offset-2 transition-all duration-200 hover:text-main-foreground hover:underline"
                        >
                            Privacy policy
                        </Link>
                        <Link
                            href="/tos"
                            className="text-sm text-main-foreground/70 underline-offset-2 transition-all duration-200 hover:text-main-foreground hover:underline"
                        >
                            Terms of use
                        </Link>
                    </div>
                </motion.div>
            </MaxWidthWrapper>
        </footer>
    );
}
