"use client";

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom 
        luminanceThreshold={0.2} 
        mipmapBlur 
        intensity={0.5} 
      />
      <Vignette 
        eskil={false} 
        offset={0.1} 
        darkness={1.1} 
        blendFunction={BlendFunction.NORMAL} 
      />
    </EffectComposer>
  );
}

