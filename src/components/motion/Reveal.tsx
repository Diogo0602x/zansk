"use client";

import { createElement, useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { loadMotionModules } from "@/lib/motion/engine";
import { durationMsToSeconds, motionTokens, type MotionDistanceKey, type MotionDurationKey } from "@/lib/motion/tokens";
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type RevealVariant = "heading" | "rise" | "fade" | "image";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  variant?: RevealVariant;
  distance?: MotionDistanceKey;
  duration?: MotionDurationKey;
  delay?: number;
}

export function Reveal({
  children,
  as = "div",
  variant = "rise",
  distance = "lg",
  duration = "medium",
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    let cleanup = () => {};
    let cancelled = false;

    void (async () => {
      try {
        const { gsap } = await loadMotionModules();
        if (cancelled || !ref.current) return;

        const target = ref.current;
        const distancePx = motionTokens.distance[distance];
        const durationInSeconds = durationMsToSeconds(duration);
        const inInitialViewport = target.getBoundingClientRect().top <= window.innerHeight * 0.95;

        const fromByVariant: Record<RevealVariant, gsap.TweenVars> = {
          heading: { autoAlpha: 0, y: Math.max(12, distancePx), filter: "blur(3px)" },
          rise: { autoAlpha: 0, y: distancePx },
          fade: { autoAlpha: 0 },
          image: { autoAlpha: 0, y: 12, scale: 0.965, filter: "blur(10px)" },
        };

        const toByVariant: Record<RevealVariant, gsap.TweenVars> = {
          heading: { autoAlpha: 1, y: 0, filter: "blur(0px)" },
          rise: { autoAlpha: 1, y: 0 },
          fade: { autoAlpha: 1 },
          image: { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)" },
        };

        const ctx = gsap.context(() => {
          const toConfig: gsap.TweenVars = {
            ...toByVariant[variant],
            duration: durationInSeconds,
            delay,
            ease: motionTokens.easing.emphasized,
          };

          if (inInitialViewport) {
            gsap.fromTo(target, fromByVariant[variant], toConfig);
          } else {
            gsap.fromTo(target, fromByVariant[variant], {
              ...toConfig,
              scrollTrigger: {
                trigger: target,
                start: "top 92%",
                once: true,
              },
            });
          }
        }, target);

        cleanup = () => ctx.revert();
      } catch {
        // Se motion falhar, mantém conteúdo visível sem quebrar layout.
      }
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [delay, distance, duration, prefersReducedMotion, variant]);

  return createElement(
    as,
    {
      ref,
      "data-animate": "reveal",
      className: cn("motion-safe:will-change-transform", className),
      ...props,
    },
    children
  );
}
