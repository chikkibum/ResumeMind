"use client";

import React from "react";
import { AnimatedList } from "@/components/ui/animated-list";
import { ANIMATED_FEATURES, FEATURE_COLORS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface FeatureItemProps {
    title: string;
    description: string;
    icon: string;
    color: string;
}

const FeatureItem = ({ title, description, icon, color }: FeatureItemProps) => {
    // Dynamically get the icon component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (LucideIcons as any)[
        icon.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("")
    ] as LucideIcon || LucideIcons.Zap;

    return (
        <div className="flex w-full max-w-[400px] gap-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-base border-2 border-border ${color}`}>
                <IconComponent className="h-6 w-6 text-main-foreground" />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};

/**
 * Animated Feature List using the notification-style AnimatedList component
 * Staggers items and provides a dynamic, "live" feel to feature exhibition
 */
export default function AnimatedFeatureList() {
    return (
        <div className="relative h-[400px] w-full max-w-lg overflow-hidden py-4">
            <AnimatedList delay={2500} >
                {ANIMATED_FEATURES.map((feature, idx) => (
                    <FeatureItem
                        key={feature.title}
                        {...feature}
                        color={FEATURE_COLORS[idx % FEATURE_COLORS.length]}
                    />
                ))}
            </AnimatedList>

            {/* Fade effect at the bottom */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-100 to-transparent" />
        </div>
    );
}
