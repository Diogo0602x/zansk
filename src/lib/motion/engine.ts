import type { gsap as GsapInstance } from "gsap";
import type { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";

type MotionModules = {
  gsap: typeof GsapInstance;
  ScrollTrigger: typeof ScrollTriggerInstance;
};

let modulesPromise: Promise<MotionModules> | null = null;

export async function loadMotionModules(): Promise<MotionModules> {
  if (typeof window === "undefined") {
    throw new Error("loadMotionModules deve ser executado apenas no client.");
  }

  if (modulesPromise) {
    return modulesPromise;
  }

  modulesPromise = (async () => {
    const gsapModule = await import("gsap");
    let scrollTriggerModule: { ScrollTrigger: typeof ScrollTriggerInstance };

    try {
      scrollTriggerModule = await import("gsap/ScrollTrigger");
    } catch {
      // Fallback para ambientes em que o path padrão do plugin falha.
      scrollTriggerModule = await import("gsap/dist/ScrollTrigger");
    }

    const gsap = gsapModule.gsap;
    const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    return { gsap, ScrollTrigger };
  })();

  return modulesPromise;
}
