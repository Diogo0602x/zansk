import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LoadingOverlayProps {
  loading: boolean;
  children?: ReactNode;
  message?: string;
  className?: string;
}

export function LoadingOverlay({
  loading,
  children,
  message = "Carregando...",
  className,
}: LoadingOverlayProps) {
  if (!loading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center",
        "bg-dark/80 backdrop-blur-md",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        {message && <p className="text-lg text-primary font-medium">{message}</p>}
        {children}
      </div>
    </div>
  );
}
