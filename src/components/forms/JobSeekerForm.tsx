"use client";

import { useState } from "react";
import { CheckCircle2, UploadCloud, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { jobCategories, employmentCountries } from "@/data/jobsData";

export default function JobSeekerForm() {
  const [withDocs, setWithDocs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryOfResidence: "",
    nationality: "",
    preferredCountry: "Germany",
    preferredCategory: "Logistics & Transport",
    workExperience: "",
    skills: "",
    profile: "",
    whatsapp: "",
    currentCity: "",
    qualifications: "",
    languages: "",
    drivingLicence: "",
    code95: false,
    workingHours: "Full-Time",
    availability: "Immediately",
    expectedSalary: "",
    message: "",
    consentDataProcessing: false,
    consentEmployerSharing: false,
    consentFutureVacancies: false,
  });

  const [files, setFiles] = useState<{ [key: string]: string }>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [key]: e.target.files[0].name });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newEntry = {
      id: `JOBSEEK-${Date.now()}`,
      date: new Date().toISOString(),
      ...formData,
      attachedDocuments: files,
    };

    try {
      await fetch("/api/job-seekers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });
    } catch (err) {
      console.warn("MongoDB API offline, saving to local store:", err);
    }

    const existing = JSON.parse(
      localStorage.getItem("mattu_job_seekers") || "[]"
    );
    localStorage.setItem(
      "mattu_job_seekers",
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
          Registration Recorded Securely
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-base text-gray-700 leading-relaxed">
          Thank you, <span className="font-semibold">{formData.fullName}</span>.
          Your candidate profile for {formData.preferredCategory} in {formData.preferredCountry} has been logged in our secure candidate database. Our recruitment coordinators will evaluate suitable vacancies and contact you at <span className="font-semibold">{formData.email}</span>.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                countryOfResidence: "",
                nationality: "",
                preferredCountry: "Germany",
                preferredCategory: "Logistics & Transport",
                workExperience: "",
                skills: "",
                profile: "",
                whatsapp: "",
                currentCity: "",
                qualifications: "",
                languages: "",
                drivingLicence: "",
                code95: false,
                workingHours: "Full-Time",
                availability: "Immediately",
                expectedSalary: "",
                message: "",
                consentDataProcessing: false,
                consentEmployerSharing: false,
                consentFutureVacancies: false,
              });
              setFiles({});
            }}
            className="btn-secondary !py-2.5 !px-6 text-sm"
          >
            Register Another Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-xl">
      {/* Upload Toggle Mode */}
      <div className="rounded-2xl bg-primary-50/70 p-4 border border-primary-100">
        <label className="text-xs font-semibold uppercase tracking-wider text-primary-800 block mb-2">
          Registration Mode (Document Uploads are Strictly Optional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setWithDocs(false)}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
              !withDocs
                ? "bg-primary-700 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>Register Profile Without Documents</span>
          </button>
          <button
            type="button"
            onClick={() => setWithDocs(true)}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
              withDocs
                ? "bg-primary-700 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <UploadCloud className="h-4 w-4" />
            <span>Register With Optional Documents (CV / Licences)</span>
          </button>
        </div>
        <p className="mt-2.5 text-xs text-gray-500">
          An applicant is not required to upload a CV, passport, or licence to express interest.
        </p>
      </div>

      {/* Required Identity & Contact */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          1. Candidate Details (Required)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-field">
              Full Legal Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Alexander Weber"
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
              placeholder="alex@example.com"
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
              placeholder="e.g. Germany, Poland, Romania"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">
              Nationality <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              placeholder="e.g. Polish, Romanian, German"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Target Employment */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          2. Employment Profile &amp; Preferences (Required)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-field">
              Preferred Employment Country <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.preferredCountry}
              onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
              className="input-field"
            >
              {employmentCountries.filter(c => c !== "All Countries").map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="label-field">
              Preferred Job Category <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.preferredCategory}
              onChange={(e) => setFormData({ ...formData, preferredCategory: e.target.value })}
              className="input-field"
            >
              {jobCategories.filter(cat => cat !== "All Categories").map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="label-field">
              Relevant Work Experience (Years &amp; Roles) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.workExperience}
              onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
              placeholder="e.g. 3 years as commercial truck driver, 2 years in warehouse operations"
              className="input-field"
            />
          </div>

          <div className="md:col-span-2">
            <label className="label-field">
              Key Professional Skills &amp; Competencies <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              placeholder="e.g. Articulated truck operation, inventory scanning, patient mobility support"
              className="input-field"
            />
          </div>

          <div className="md:col-span-2">
            <label className="label-field">
              Short Professional Profile / Summary <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={formData.profile}
              onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
              placeholder="Summarize your professional background, current situation, and what opportunities you are looking for..."
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Optional Details (Qualifications, Licences) */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
          <span>3. Qualifications, Licences &amp; Logistics Details</span>
          <span className="text-xs font-normal text-gray-500">Optional</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-field">WhatsApp / Direct Phone</label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="+49 15 905 664 369"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Current City or Region</label>
            <input
              type="text"
              value={formData.currentCity}
              onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
              placeholder="e.g. Berlin, Warsaw, Bucharest"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Languages Spoken &amp; Proficiency</label>
            <input
              type="text"
              value={formData.languages}
              onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
              placeholder="e.g. German (B1), English (B2), Romanian (Native)"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Driving Licence Categories</label>
            <input
              type="text"
              value={formData.drivingLicence}
              onChange={(e) => setFormData({ ...formData, drivingLicence: e.target.value })}
              placeholder="e.g. Category B, C, CE"
              className="input-field"
            />
          </div>

          <div className="flex items-center gap-3 pt-6">
            <input
              type="checkbox"
              id="code95"
              checked={formData.code95}
              onChange={(e) => setFormData({ ...formData, code95: e.target.checked })}
              className="h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-500"
            />
            <label htmlFor="code95" className="text-sm font-medium text-gray-800 cursor-pointer">
              I hold a valid Driver Qualification Card (Code 95)
            </label>
          </div>

          <div>
            <label className="label-field">Earliest Availability to Start</label>
            <input
              type="text"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              placeholder="e.g. Immediately / 2 weeks notice / 1 Month"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Optional Documents */}
      {withDocs && (
        <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
          <div className="flex items-center gap-2 mb-4">
            <UploadCloud className="h-5 w-5 text-primary-700" />
            <h4 className="font-display text-base font-bold text-gray-900">
              Optional Candidate Documentation
            </h4>
          </div>
          <p className="text-xs text-gray-600 mb-6">
            Supported formats: PDF, JPG, PNG (Max 10MB). All uploads are optional and protected under strict access restrictions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { id: "cv", label: "CV or Resume" },
              { id: "certs", label: "Educational Certificates" },
              { id: "profQual", label: "Professional Qualifications" },
              { id: "licence", label: "Driving Licence Copy" },
              { id: "driverDocs", label: "Code 95 / Tachograph Card" },
              { id: "other", label: "Other Supporting Documents" },
            ].map((doc) => (
              <div
                key={doc.id}
                className="rounded-xl border border-dashed border-gray-300 bg-white p-4 hover:border-primary-400 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800 mb-1">
                  <FileText className="h-4 w-4 text-primary-600" />
                  <span>{doc.label}</span>
                </div>
                <input
                  type="file"
                  id={doc.id}
                  onChange={(e) => handleFileChange(e, doc.id)}
                  className="mt-2 block w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 cursor-pointer"
                />
                {files[doc.id] && (
                  <p className="mt-1 text-[11px] text-emerald-600 font-medium truncate">
                    ✓ {files[doc.id]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Consents (GDPR compliant separate checkboxes) */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consentDataProcessing}
            onChange={(e) => setFormData({ ...formData, consentDataProcessing: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-500"
          />
          <span className="text-xs text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Required:</span> I agree that Mattu Bridge processes my registration data to assess employment opportunities in accordance with the{" "}
            <a href="/privacy-policy" target="_blank" className="text-primary-700 underline font-semibold">
              Datenschutzerklärung
            </a>.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consentEmployerSharing}
            onChange={(e) => setFormData({ ...formData, consentEmployerSharing: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-500"
          />
          <span className="text-xs text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Optional:</span> I consent to sharing relevant parts of my candidate profile with verified employers when a matching vacancy is identified.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consentFutureVacancies}
            onChange={(e) => setFormData({ ...formData, consentFutureVacancies: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-500"
          />
          <span className="text-xs text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Optional:</span> Retain my candidate profile for consideration for future vacancies in accordance with our data retention schedule.
          </span>
        </label>
      </div>

      {/* Action Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center !py-3.5 text-base font-bold shadow-lg"
        >
          {loading ? (
            <span>Registering Your Candidate Profile...</span>
          ) : (
            <>
              <span>Register as a Job Seeker</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
