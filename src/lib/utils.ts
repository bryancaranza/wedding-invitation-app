import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const formatWeddingDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export const formatDate = (dateString: string, format: string) => {
  const date = new Date(dateString);

  const map: Record<string, string> = {
    yyyy: date.getFullYear().toString(),
    MMMM: date.toLocaleString("en-US", { month: "long" }),
    MMM: date.toLocaleString("en-US", { month: "short" }),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    dd: String(date.getDate()).padStart(2, "0"),
    d: String(date.getDate()),
    EEEE: date.toLocaleString("en-US", { weekday: "long" }),
    EEE: date.toLocaleString("en-US", { weekday: "short" }),
  };

  let formatted = format;

  Object.keys(map)
    .sort((a, b) => b.length - a.length) // replace longer tokens first
    .forEach((key) => {
      // Use word boundary \b for single-character tokens like d
      const regex =
        key.length === 1
          ? new RegExp(`\\b${key}\\b`, "g")
          : new RegExp(key, "g");
      formatted = formatted.replace(regex, map[key]);
    });

  return formatted;
};
