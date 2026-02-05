"use client";

import { Composition } from "remotion";
import { GeometricBackground } from "./GeometricBackground";

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="GeometricBackground"
                component={GeometricBackground}
                durationInFrames={300}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
