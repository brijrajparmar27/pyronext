"use client";

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom 
        luminanceThreshold={0.25} 
        luminanceSmoothing={0.9}
        mipmapBlur 
        intensity={0.4} 
      />
      <Vignette 
        eskil={false} 
        offset={0.1} 
        darkness={1.0} 
        blendFunction={BlendFunction.NORMAL} 
      />
    </EffectComposer>
  );
}

