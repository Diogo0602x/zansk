export const contactInfo = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+5561996332981",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/zansk",
  email: process.env.NEXT_PUBLIC_EMAIL || "zanskco@gmail.com",

  getWhatsAppLink: (message?: string) => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${phone}${encodedMessage}`;
  },
};
