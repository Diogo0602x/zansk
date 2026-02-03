import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className, variant = "text", width, height }: SkeletonProps) {
  const variantClasses = {
    text: "rounded h-4",
    rectangular: "rounded-lg",
    circular: "rounded-full",
  };

  const style = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
  };

  return (
    <div
      className={cn("animate-pulse bg-white/10", variantClasses[variant], className)}
      style={style}
    />
  );
}
