"use client";

import { FaWhatsapp } from "react-icons/fa";
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
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-gray-100 transition-colors" />

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
