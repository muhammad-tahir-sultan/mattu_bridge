import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Calendar,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import EventRegistrationForm from "@/components/forms/EventRegistrationForm";
import { images } from "@/data/images";
import { internationalEvents, eventCategories } from "@/data/eventsData";

export const metadata: Metadata = {
  title: "International Events — Seminars & Collaboration",
  description:
    "Discover educational seminars, human rights awareness forums, and youth development workshops organized and supported by Mattu Bridge.",
};

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="International Initiatives"
        title="International Events, Seminars &amp; Collaboration"
        description="Fostering constructive dialogue, equal educational access, human rights awareness, and youth development through international cooperation."
        imageUrl={images.conference}
      />

      {/* Scope of Events */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="heading-eyebrow mb-2">Our Focus Areas</p>
            <h2 className="heading-2">Initiatives for Knowledge &amp; Empowerment</h2>
            <p className="mt-3 text-base text-gray-600">
              Supporting cross-border exchange through seminars, workshops, and youth engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventCategories.filter(c => c !== "All Categories").map((category, idx) => (
              <div key={category} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                  {category}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Interactive seminars and forums connecting European specialists,
                  institutions, and motivated participants to share knowledge and
                  advance cooperative solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Announced Events */}
      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="heading-eyebrow mb-2">Calendar of Events</p>
            <h2 className="heading-2">Upcoming &amp; Planned Forums</h2>
            <p className="mt-3 text-base text-gray-600">
              Register early to secure attendance or submit proposals for speaker and partner participation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internationalEvents.map((evt) => (
              <div key={evt.id} className="card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-md bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                      {evt.format}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      Status: {evt.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-gray-950 mb-2">
                    {evt.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                    <p className="flex items-center gap-1.5 text-primary-700 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{evt.date} · {evt.time}</span>
                    </p>
                    <p className="text-gray-500">
                      <strong>Location:</strong> {evt.location}
                    </p>
                    <p className="text-gray-500">
                      <strong>Organizers:</strong> {evt.organizers}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {evt.description}
                  </p>

                  {evt.highlights && (
                    <div className="mb-4 rounded-xl bg-gray-50 p-3 text-xs">
                      <p className="font-bold text-gray-800 mb-1">Key Highlights:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-gray-600">
                        {evt.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Reg. by: {evt.registrationDeadline}
                  </span>
                  <a
                    href="#register"
                    className="btn-accent !py-2 !px-4 text-xs font-bold"
                  >
                    <span>Register Interest</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="section-padding bg-white scroll-mt-20">
        <div className="section-container max-w-4xl">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="heading-eyebrow mb-2">Participation &amp; Cooperation</p>
            <h2 className="heading-2">Register Interest in Events</h2>
            <p className="mt-3 text-base text-gray-600">
              Submit your contact details and area of interest. Open to attendees,
              speakers, volunteers, and partnering institutions.
            </p>
          </div>

          <EventRegistrationForm />
        </div>
      </section>
    </div>
  );
}
