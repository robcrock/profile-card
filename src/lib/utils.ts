import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateInitials = (name: string) => {
  const nameArr = name?.split(" ");
  if (!nameArr?.length) return;
  const firstInitial = nameArr[0][0];
  const lastInitial = nameArr[1][0];
  const initials = `${firstInitial} ${lastInitial}`;
  return initials;
};
