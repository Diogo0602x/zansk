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
        "bg-white/90 backdrop-blur-md",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent-500 border-t-transparent" />
        {message && <p className="text-lg text-gray-900 font-medium">{message}</p>}
        {children}
      </div>
    </div>
  );
}
