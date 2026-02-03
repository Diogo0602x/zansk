import NextLink from "next/link";
import { ReactNode, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
  variant?: "default" | "nav" | "footer";
  external?: boolean;
}

const variantClasses = {
  default: "text-primary underline underline-offset-4 hover:text-primary-200 transition-all duration-200",
  nav: "text-primary/90 hover:text-primary transition-all duration-200",
  footer: "text-secondary-300 hover:text-primary hover:translate-x-1 transition-all duration-200",
};

export function Link({
  href,
  children,
  variant = "default",
  external = false,
  className,
  ...props
}: LinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </NextLink>
  );
}
