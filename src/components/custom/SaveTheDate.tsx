"use client";

import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function SaveTheDate() {
  return (
    <AddToCalendarButton
      name="Bryan & Anna Wedding"
      startDate="2026-10-20"
      startTime="17:00"
      endTime="23:00"
      timeZone="Asia/Manila"
      location="Manila Cathedral"
      description="Join us to celebrate our wedding!"
      options={["Google", "Apple", "iCal", "Outlook.com"]}
    />
  );
}
