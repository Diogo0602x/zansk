import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  as?: "div" | "section" | "article" | "aside" | "main" | "header" | "footer" | "nav";
}

export function Box({ children, as: Component = "div", className, ...props }: BoxProps) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}
