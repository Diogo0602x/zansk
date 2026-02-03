import { ReactNode, HTMLAttributes, createElement } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "display" | "title" | "subtitle" | "body" | "caption";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "semibold" | "bold";
}

const variantStyles = {
  display: "text-4xl md:text-5xl lg:text-6xl leading-tight",
  title: "text-2xl md:text-3xl lg:text-4xl leading-tight",
  subtitle: "text-xl md:text-2xl leading-relaxed",
  body: "text-base md:text-lg leading-relaxed",
  caption: "text-sm md:text-base leading-relaxed",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export function Typography({
  children,
  variant = "body",
  as,
  align = "left",
  weight = "normal",
  className,
  ...props
}: TypographyProps) {
  const defaultTags = {
    display: "h1",
    title: "h2",
    subtitle: "h3",
    body: "p",
    caption: "p",
  } as const;

  const tag = as || defaultTags[variant];

  return createElement(
    tag,
    {
      className: cn(variantStyles[variant], alignClasses[align], weightClasses[weight], className),
      ...props,
    },
    children
  );
}
