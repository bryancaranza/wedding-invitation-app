import { formatDate } from "@/lib/utils";
import React from "react";

interface SaveTheDateProps {
  bride: string;
  groom: string;
  date: string; // ISO string
  location?: string;
}

export const SaveTheDate: React.FC<SaveTheDateProps> = ({
  bride,
  groom,
  date,
  location = "",
}) => {
  const startDate = new Date(date);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // 4-hour event
  const title = `${bride} & ${groom} Wedding`;

  // Google Calendar link
  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title,
  )}&dates=${formatICSDate(startDate)}/${formatICSDate(
    endDate,
  )}&details=Save+the+date+for+our+wedding&location=${encodeURIComponent(
    location,
  )}`;

  // iCal download
  const icsUrl = generateICS({
    title,
    description: "Save the date",
    location,
    startDate,
    endDate,
  });

  return (
    <div className="w-full bg-[#9e8667]">
      <div className="max-w-md mx-auto p-6 rounded-2xl text-white text-center flex flex-col gap-4">
        <h2 className="text-3xl font-serif tracking-widest">Save The Date</h2>
        <p className="text-xl font-mono">
          {bride} & {groom}
        </p>
        <p className="text-lg">{formatDate(date, "EEEE, MMMM d, yyyy")}</p>
        {location && <p className="text-md font-light">{location}</p>}

        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <a
            href={googleCalendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-[#9e8667] rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Add to Google
          </a>
          <a
            href={icsUrl}
            download="wedding.ics"
            className="px-4 py-2 bg-white text-[#9e8667] rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Add to Outlook/iCal
          </a>
        </div>
      </div>
    </div>
  );
};

// Helper functions
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

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  return URL.createObjectURL(blob);
};
