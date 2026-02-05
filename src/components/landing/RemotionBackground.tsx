"use client";

import React, { Suspense, lazy } from "react";

const Player = lazy(() => import("@remotion/player").then(mod => ({ default: mod.Player })));
import { GeometricBackground } from "./remotion/GeometricBackground";

/**
 * Client-only wrapper for Remotion Player to avoid SSR issues
 * Displays the high-performance animated geometric background
 */
export default function RemotionBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 pointer-events-none">
            <Suspense fallback={<div className="w-full h-full bg-background" />}>
                <Player
                    component={GeometricBackground}
                    durationInFrames={300}
                    compositionWidth={1920}
                    compositionHeight={1080}
                    fps={30}
                    loop
                    autoPlay
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    controls={false}
                />
            </Suspense>
        </div>
    );
}
