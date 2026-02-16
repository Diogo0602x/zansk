"use client";

import { contactInfo } from "@/constants/contact";
import { cn } from "@/lib/utils";
import { Box, Typography } from "@/components/ui";

export function WhatsAppButton() {
  const handleClick = () => {
    const message = "Olá! Vim através do site da Zansk Tech e gostaria de saber mais sobre os serviços.";
    window.open(contactInfo.getWhatsAppLink(message), "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 md:w-16 md:h-16",
        "bg-gray-900/90 hover:bg-gray-900 backdrop-blur-md",
        "border border-gray-700 hover:border-gray-600",
        "rounded-full shadow-lg hover:shadow-xl",
        "flex items-center justify-center",
        "transition-all duration-300",
        "hover:scale-110",
        "group"
      )}
      aria-label="Falar no WhatsApp"
    >
      <svg
        className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-gray-100 transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1.04C5.57.04.24 5.37.24 11.9c0 2.08.54 4.11 1.56 5.9L0 24l6.37-1.67a11.83 11.83 0 0 0 5.72 1.46h.01c6.52 0 11.85-5.33 11.86-11.86 0-3.16-1.23-6.13-3.44-8.35Zm-8.42 18.3h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.87 9.87 0 0 1-1.51-5.24c0-5.44 4.42-9.86 9.87-9.86 2.64 0 5.11 1.03 6.97 2.89a9.8 9.8 0 0 1 2.9 6.97c0 5.44-4.43 9.87-9.87 9.87Zm5.41-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.46a9.08 9.08 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.5.71.3 1.26.47 1.69.6.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>

      <Box
        className={cn(
          "absolute right-full mr-3",
          "px-3 py-2 bg-gray-900/90 backdrop-blur-sm",
          "rounded-lg shadow-lg border border-gray-700",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-200",
          "pointer-events-none"
        )}
      >
        <Typography variant="caption" className="text-white whitespace-nowrap">
          Fale conosco no WhatsApp
        </Typography>
      </Box>
    </button>
  );
}
