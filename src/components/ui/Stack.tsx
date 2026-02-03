import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: "row" | "col";
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

const spacingClasses = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export function Stack({
  children,
  direction = "col",
  spacing = "md",
  align = "stretch",
  justify = "start",
  className,
  ...props
}: StackProps) {
  const directionClass = direction === "row" ? "flex-row" : "flex-col";

  return (
    <div
      className={cn(
        "flex",
        directionClass,
        spacingClasses[spacing],
        alignClasses[align],
        justifyClasses[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
