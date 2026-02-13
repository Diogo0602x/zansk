export const motionTokens = {
  duration: {
    fast: 160,
    medium: 240,
    slow: 360,
    extraSlow: 600,
  },
  easing: {
    standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    emphasized: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
  distance: {
    sm: 8,
    md: 16,
    lg: 28,
  },
  stagger: {
    tight: 0.04,
    base: 0.06,
    relaxed: 0.07,
  },
} as const;

export type MotionDurationKey = keyof typeof motionTokens.duration;
export type MotionDistanceKey = keyof typeof motionTokens.distance;

export function durationMsToSeconds(durationKey: MotionDurationKey): number {
  return motionTokens.duration[durationKey] / 1000;
}
