import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loaderTimer = async (path: string, timer?: number) => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import(`${path}`)), timer || 1000);
  });
};

export const createGoogleCalendarLink = () => {
  const title = encodeURIComponent("Jessa & Charlie's Wedding");
  const details = encodeURIComponent("Join us to celebrate our wedding!");
  const location = encodeURIComponent("Manila Cathedral");
  const start = "20261020T090000Z";
  const end = "20261020T150000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
};

export const titleCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
