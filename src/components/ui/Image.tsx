import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageProps extends Omit<NextImageProps, "src"> {
  src: string;
  alt: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export function Image({ src, alt, className, objectFit = "cover", ...props }: ImageProps) {
  const objectFitClass = {
    contain: "object-contain",
    cover: "object-cover",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit];

  return <NextImage src={src} alt={alt} className={cn(objectFitClass, className)} {...props} />;
}
