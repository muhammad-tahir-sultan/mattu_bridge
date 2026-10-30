import type { Metadata } from "next";
import EventsContent from "@/components/pages/EventsContent";

export const metadata: Metadata = {
  title: "International Events — Seminars & Collaboration",
  description:
    "Discover educational seminars, human rights awareness forums, and youth development workshops organized and supported by Mattu Bridge Consultancy.",
};

export default function EventsPage() {
  return <EventsContent />;
}
