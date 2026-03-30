import { formatDate } from "@/lib/utils";
import React from "react";

interface SaveTheDateProps {
  bride: string;
  groom: string;
  date: string;
  location?: string;
}

export const SaveTheDate: React.FC<SaveTheDateProps> = ({
  bride,
  groom,
  date,
  location = "",
}) => {
  const startDate = new Date(date);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

  const title = `${bride} & ${groom} Wedding`;

  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${formatICSDate(startDate)}/${formatICSDate(
    endDate
  )}&details=Save+the+date+for+our+wedding&location=${encodeURIComponent(
    location
  )}`;

  const icsUrl = generateICS({
    title,
    description: "Save the date",
    location,
    startDate,
    endDate,
  });

  return (
    <div className="w-full bg-[#9e8667] py-10 px-4">
      <div className="max-w-2xl mx-auto p-8 rounded-2xl text-white text-center flex flex-col gap-6 border border-white/20 shadow-xl backdrop-blur-md">

        {/* Title */}
        <h2 className="text-2xl tracking-[0.35em] uppercase font-light opacity-90">
          Save the Date
        </h2>

        {/* Couple */}
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-serif tracking-wide leading-tight">
            {bride}
          </p>

          <p className="text-sm italic opacity-70">&</p>

          <p className="text-3xl font-serif tracking-wide leading-tight">
            {groom}
          </p>
        </div>

        {/* Date */}
        <div className="mt-2">
          <p className="text-lg font-light tracking-widest">
            {formatDate(date, "EEEE")}
          </p>
          <p className="text-xl font-medium tracking-wide">
            {formatDate(date, "MMMM d, yyyy")}
          </p>
        </div>

        {/* Location */}
        {location && (
          <p className="text-sm opacity-80 italic mt-1">
            📍 {location}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <a
            href={googleCalendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white text-[#9e8667] text-sm font-medium tracking-wide hover:bg-white/90 transition shadow-sm"
          >
            Google Calendar
          </a>

          <a
            href={icsUrl}
            download="wedding.ics"
            className="px-5 py-2 rounded-full border border-white/40 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition"
          >
            iCal / Outlook
          </a>
        </div>
      </div>
    </div>
  );
};

/* =========================
   Helpers (unchanged)
========================= */

const formatICSDate = (date: Date) =>
  date.toISOString().replace(/[-:]/g, "").split(".")[0];

const generateICS = ({
  title,
  description,
  location,
  startDate,
  endDate,
}: {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}) => {
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//EN
BEGIN:VEVENT
UID:${startDate.getTime()}@wedding.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
`.trim();

  const blob = new Blob([icsContent], {
    type: "text/calendar;charset=utf-8",
  });

  return URL.createObjectURL(blob);
};