"use client";

import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const GeometricBackground = () => {
    const frame = useCurrentFrame();
    const { width, height, durationInFrames } = useVideoConfig();

    return (
        <AbsoluteFill style={{ backgroundColor: "#ffffff" }}>
            {/* Animated squares */}
            {Array.from({ length: 12 }).map((_, i) => {
                const initialX = (i % 4) * (width / 4) + (width / 8);
                const initialY = Math.floor(i / 4) * (height / 3) + (height / 6);

                const moveX = interpolate(
                    frame,
                    [0, durationInFrames],
                    [0, Math.sin(i) * 50],
                    { extrapolateRight: "clamp" }
                );

                const moveY = interpolate(
                    frame,
                    [0, durationInFrames],
                    [0, Math.cos(i) * 50],
                    { extrapolateRight: "clamp" }
                );

                const rotation = interpolate(
                    frame,
                    [0, durationInFrames],
                    [0, 360 * (i % 2 === 0 ? 1 : -1)]
                );

                const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#B8FF9F", "#FF9F1C"];
                const color = colors[i % colors.length];

                return (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            left: initialX + moveX,
                            top: initialY + moveY,
                            width: 100,
                            height: 100,
                            backgroundColor: color,
                            border: "4px solid #000000",
                            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                            opacity: 0.6,
                        }}
                    />
                );
            })}

            {/* Floating lines */}
            {Array.from({ length: 8 }).map((_, i) => {
                const initialY = (i * height) / 8;
                const x = interpolate(
                    frame,
                    [0, durationInFrames],
                    [-200, width + 200]
                );

                return (
                    <div
                        key={`line-${i}`}
                        style={{
                            position: "absolute",
                            left: x,
                            top: initialY,
                            width: 300,
                            height: 8,
                            backgroundColor: "#000000",
                            transform: `rotate(${i * 15}deg)`,
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};
