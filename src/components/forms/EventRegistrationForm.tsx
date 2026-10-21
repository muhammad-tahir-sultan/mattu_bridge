"use client";

import { useState } from "react";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { internationalEvents, eventCategories } from "@/data/eventsData";

interface EventRegistrationFormProps {
  defaultEventId?: string;
}

export default function EventRegistrationForm({
  defaultEventId = "",
}: EventRegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryOfResidence: "",
    organization: "",
    areaOfInterest: eventCategories[1] || "Educational Seminars & Conferences",
    selectedEvent: defaultEventId
      ? internationalEvents.find((e) => e.id === defaultEventId)?.title || "General Event Participation"
      : internationalEvents[0]?.title || "General Event Participation",
    participationType: "Attendee",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newEntry = {
      id: `EVT-REG-${Date.now()}`,
      date: new Date().toISOString(),
      ...formData,
    };

    try {
      await fetch("/api/event-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });
    } catch (err) {
      console.warn("MongoDB API offline, saving to local store:", err);
    }

    const existing = JSON.parse(
      localStorage.getItem("mattu_event_registrations") || "[]"
    );
    localStorage.setItem(
      "mattu_event_registrations",
      JSON.stringify([newEntry, ...existing])
    );

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 md:p-12 text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-gray-900">
          Event Registration Logged
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-base text-gray-700 leading-relaxed">
          Thank you, <span className="font-semibold">{formData.fullName}</span>. Your interest in <span className="font-semibold">{formData.selectedEvent}</span> as an <span className="font-semibold">{formData.participationType}</span> has been registered. You will receive agenda and login/venue details at <span className="font-semibold">{formData.email}</span>.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn-secondary !py-2.5 !px-6 text-sm"
          >
            Register for Another Initiative
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-xl">
      <div className="flex items-center gap-2 mb-2 pb-3 border-b border-gray-100">
        <Calendar className="h-5 w-5 text-primary-700" />
        <h3 className="font-display text-xl font-bold text-gray-900">
          Register Interest in International Events
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label-field">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Dr. Laura Becker"
            className="input-field"
          />
        </div>

        <div>
          <label className="label-field">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="laura@example.org"
            className="input-field"
          />
        </div>

        <div>
          <label className="label-field">
            Country of Residence <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.countryOfResidence}
            onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
            placeholder="e.g. Germany, Sweden, Canada"
            className="input-field"
          />
        </div>

        <div>
          <label className="label-field">Organization or Institution (Optional)</label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Youth Initiative NGO / University"
            className="input-field"
          />
        </div>

        <div>
          <label className="label-field">Event of Interest</label>
          <select
            value={formData.selectedEvent}
            onChange={(e) => setFormData({ ...formData, selectedEvent: e.target.value })}
            className="input-field"
          >
            {internationalEvents.map((e) => (
              <option key={e.id} value={e.title}>
                {e.title}
              </option>
            ))}
            <option value="General European Education &amp; Human Rights Initiatives">
              General European Education &amp; Human Rights Initiatives
            </option>
          </select>
        </div>

        <div>
          <label className="label-field">Participation Type <span className="text-red-500">*</span></label>
          <select
            value={formData.participationType}
            onChange={(e) => setFormData({ ...formData, participationType: e.target.value })}
            className="input-field"
          >
            <option value="Attendee">Attendee</option>
            <option value="Speaker">Speaker</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Partner or Organization Enquiry">Partner or Organization Enquiry</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="label-field">Additional Message or Collaboration Topic (Optional)</label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share your goals, research interests, or partnership ideas..."
            className="input-field"
          />
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700"
          />
          <span className="text-xs text-gray-700 leading-relaxed">
            I consent to Mattu Bridge storing and processing my contact details for the purpose of event coordination and notifications in accordance with the{" "}
            <a href="/privacy-policy" target="_blank" className="text-primary-700 underline font-semibold">
              Datenschutzerklärung
            </a>.
          </span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center !py-3.5 text-base font-bold shadow-lg"
        >
          {loading ? (
            <span>Registering...</span>
          ) : (
            <>
              <span>Submit Event Registration</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
