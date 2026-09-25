import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classList: ClassValue[]) {
  return twMerge(clsx(classList));
}
