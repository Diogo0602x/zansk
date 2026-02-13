"use client";

import { createElement, useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { loadMotionModules } from "@/lib/motion/engine";
import { durationMsToSeconds, motionTokens, type MotionDistanceKey, type MotionDurationKey } from "@/lib/motion/tokens";
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface StaggerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  childSelector?: string;
  distance?: MotionDistanceKey;
  duration?: MotionDurationKey;
  stagger?: keyof typeof motionTokens.stagger;
}

export function Stagger({
  children,
  as = "div",
  childSelector = "[data-stagger-item]",
  distance = "lg",
  duration = "slow",
  stagger = "base",
  className,
  ...props
}: StaggerProps) {
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

        const root = ref.current;
        const targets = Array.from(root.querySelectorAll<HTMLElement>(childSelector));
        if (targets.length === 0) return;
        const inInitialViewport = root.getBoundingClientRect().top <= window.innerHeight * 0.95;

        const ctx = gsap.context(() => {
          const toConfig: gsap.TweenVars = {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: durationMsToSeconds(duration),
            ease: motionTokens.easing.standard,
            stagger: motionTokens.stagger[stagger],
          };

          if (inInitialViewport) {
            gsap.fromTo(
              targets,
              { autoAlpha: 0, y: motionTokens.distance[distance], scale: 0.985 },
              toConfig
            );
          } else {
            gsap.fromTo(
              targets,
              { autoAlpha: 0, y: motionTokens.distance[distance], scale: 0.985 },
              {
                ...toConfig,
                scrollTrigger: {
                  trigger: root,
                  start: "top 92%",
                  once: true,
                },
              }
            );
          }
        }, root);

        cleanup = () => ctx.revert();
      } catch {
        // Mantém o conteúdo disponível mesmo se motion não inicializar.
      }
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [childSelector, distance, duration, prefersReducedMotion, stagger]);

  return createElement(
    as,
    {
      ref,
      "data-animate": "stagger",
      className: cn("motion-safe:will-change-transform", className),
      ...props,
    },
    children
  );
}
