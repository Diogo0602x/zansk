"use client";

import { createElement, useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { loadMotionModules } from "@/lib/motion/engine";
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface ParallaxProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  speed?: number;
}

export function Parallax({
  children,
  as = "div",
  speed = 0.12,
  className,
  ...props
}: ParallaxProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    let cleanup = () => {};
    let cancelled = false;

    void (async () => {
      const { gsap } = await loadMotionModules();
      if (cancelled || !ref.current) return;

      const target = ref.current;
      const yPercentTo = Math.max(-10, Math.min(10, speed * -100));

      const ctx = gsap.context(() => {
        gsap.fromTo(
          target,
          { yPercent: -yPercentTo },
          {
            yPercent: yPercentTo,
            ease: "none",
            scrollTrigger: {
              trigger: target,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, target);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [prefersReducedMotion, speed]);

  return createElement(
    as,
    {
      ref,
      "data-animate": "parallax",
      className: cn("motion-safe:will-change-transform", className),
      ...props,
    },
    children
  );
}
