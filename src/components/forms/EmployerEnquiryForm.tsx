"use client";

import { useState } from "react";
import { CheckCircle2, Building2, UploadCloud, ArrowRight, ShieldAlert } from "lucide-react";
import { jobCategories, employmentCountries } from "@/data/jobsData";

export default function EmployerEnquiryForm() {
  const [submissionType, setSubmissionType] = useState<"vacancy" | "enquiry">("vacancy");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    businessEmail: "",
    phone: "",
    website: "",
    country: "Germany",
    city: "",
    sector: "Logistics & Supply Chain",

    // Vacancy details
    jobTitle: "",
    category: "Logistics & Transport",
    vacancyCount: "1",
    employmentCountry: "Germany",
    jobLocation: "",
    employmentType: "Full-Time",
    jobDescription: "",
    qualifications: "",
    experience: "",
    languages: "German / English",
    salaryRange: "",
    workingHours: "",
    startDate: "",
    deadline: "",

    // Service checkboxes
    serviceAdvertise: true,
    serviceCandidateReferral: false,
    serviceCooperationAgreement: false,
    message: "",
    consent: false,
  });

  const [docName, setDocName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newEntry = {
      id: `EMP-${Date.now()}`,
      date: new Date().toISOString(),
      submissionType,
      ...formData,
      attachedDoc: docName,
      status: "Pending Review",
    };

    try {
      await fetch("/api/employer-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });
    } catch (err) {
      console.warn("MongoDB API offline, saving to local store:", err);
    }

    const existing = JSON.parse(
      localStorage.getItem("mattu_employer_submissions") || "[]"
    );
    localStorage.setItem(
      "mattu_employer_submissions",
      JSON.stringify([newEntry, ...existing])
    );

    // If it's a vacancy, also save as pending in local job listings cache
    if (submissionType === "vacancy" && formData.jobTitle) {
      const pendingJobs = JSON.parse(
        localStorage.getItem("mattu_pending_jobs") || "[]"
      );
      pendingJobs.unshift({
        id: `job-sub-${Date.now()}`,
        title: formData.jobTitle,
        employer: formData.companyName,
        isVerified: false,
        category: formData.category,
        country: formData.employmentCountry,
        location: formData.jobLocation || formData.city,
        type: formData.employmentType,
        salaryRange: formData.salaryRange || "Competitive / Upon Enquiry",
        description: formData.jobDescription,
        responsibilities: ["See vacancy description"],
        qualifications: [formData.qualifications],
        languages: [formData.languages],
        datePosted: new Date().toISOString().split("T")[0],
        isApproved: false,
      });
      localStorage.setItem("mattu_pending_jobs", JSON.stringify(pendingJobs));
    }

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
          Employer Submission Received for Review
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-base text-gray-700 leading-relaxed">
          Thank you. Your submission for <span className="font-semibold">{formData.companyName}</span> has been securely transmitted to our administrative desk. Under German compliance, job vacancies are reviewed and verified before public listing. Our team will contact <span className="font-semibold">{formData.businessEmail}</span>.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setDocName("");
            }}
            className="btn-secondary !py-2.5 !px-6 text-sm"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-xl">
      {/* Mode Selector */}
      <div className="rounded-2xl bg-primary-50/70 p-4 border border-primary-100">
        <label className="text-xs font-semibold uppercase tracking-wider text-primary-800 block mb-2">
          Submission Purpose
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setSubmissionType("vacancy")}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
              submissionType === "vacancy"
                ? "bg-primary-700 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>Submit a Job Vacancy for Review</span>
          </button>
          <button
            type="button"
            onClick={() => setSubmissionType("enquiry")}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
              submissionType === "enquiry"
                ? "bg-primary-700 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>Submit a Recruitment / Cooperation Enquiry</span>
          </button>
        </div>
        <div className="mt-3 flex items-start gap-2 text-xs text-amber-800 bg-amber-50 rounded-lg p-2.5 border border-amber-200">
          <ShieldAlert className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>
            Compliance Notice: Mattu Bridge does not automatically publish submitted advertisements. Every vacancy undergoes administrator review and employer verification.
          </span>
        </div>
      </div>

      {/* Company Information */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary-700" />
          <span>1. Company &amp; Contact Person Details</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-field">
              Company or Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. European Logistics &amp; Transport GmbH"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">
              Contact Person&apos;s Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              placeholder="e.g. Thomas Müller (HR Director)"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">
              Business Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.businessEmail}
              onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
              placeholder="hr@company.de"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">
              Telephone or WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+49 69 1234567"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Company Headquarters Country</label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="input-field"
            >
              <option value="Germany">Germany</option>
              <option value="Austria">Austria</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Other European Country">Other European Country</option>
            </select>
          </div>

          <div>
            <label className="label-field">City or Work Location</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Frankfurt am Main"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Business Sector or Industry</label>
            <input
              type="text"
              value={formData.sector}
              onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
              placeholder="e.g. Freight, Healthcare, Manufacturing"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Company Website (Optional)</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="https://www.example.com"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Vacancy Details (if submitting vacancy) */}
      {submissionType === "vacancy" && (
        <div>
          <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            2. Job Vacancy Specifications
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label-field">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                placeholder="e.g. Senior Logistics Coordinator"
                className="input-field"
              />
            </div>

            <div>
              <label className="label-field">Job Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="input-field"
              >
                {jobCategories.filter(c => c !== "All Categories").map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="label-field">Number of Open Vacancies</label>
              <input
                type="number"
                min="1"
                value={formData.vacancyCount}
                onChange={(e) => setFormData({ ...formData, vacancyCount: e.target.value })}
                className="input-field"
              />
            </div>

            <div>
              <label className="label-field">Employment Type</label>
              <select
                value={formData.employmentType}
                onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                className="input-field"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label-field">
                Job Description &amp; Core Responsibilities <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.jobDescription}
                onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                placeholder="Describe key duties, department structure, workplace environment..."
                className="input-field"
              />
            </div>

            <div>
              <label className="label-field">Required Qualifications</label>
              <input
                type="text"
                value={formData.qualifications}
                onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                placeholder="e.g. Vocational degree, CE Licence, Bachelor's"
                className="input-field"
              />
            </div>

            <div>
              <label className="label-field">Required Work Experience</label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="e.g. Min 2 years in commercial driving / logistics"
                className="input-field"
              />
            </div>

            <div>
              <label className="label-field">Required Language Skills</label>
              <input
                type="text"
                value={formData.languages}
                onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                placeholder="e.g. German (B1), English conversational"
                className="input-field"
              />
            </div>

            <div>
              <label className="label-field">Salary or Pay Range (Optional / Upon agreement)</label>
              <input
                type="text"
                value={formData.salaryRange}
                onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                placeholder="e.g. €3,000 – €3,500 / month gross"
                className="input-field"
              />
            </div>
          </div>
        </div>
      )}

      {/* Service Requirements */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
          3. Employer Service Requirements
        </h4>
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm text-gray-800 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.serviceAdvertise}
              onChange={(e) => setFormData({ ...formData, serviceAdvertise: e.target.checked })}
              className="h-4 w-4 rounded border-gray-300 text-primary-700"
            />
            <span>Advertise vacancy on Mattu Bridge website (after review)</span>
          </label>
          <label className="flex items-center gap-3 text-sm text-gray-800 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.serviceCandidateReferral}
              onChange={(e) => setFormData({ ...formData, serviceCandidateReferral: e.target.checked })}
              className="h-4 w-4 rounded border-gray-300 text-primary-700"
            />
            <span>Candidate referral and pre-screening services</span>
          </label>
          <label className="flex items-center gap-3 text-sm text-gray-800 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.serviceCooperationAgreement}
              onChange={(e) => setFormData({ ...formData, serviceCooperationAgreement: e.target.checked })}
              className="h-4 w-4 rounded border-gray-300 text-primary-700"
            />
            <span>Discuss ongoing recruitment cooperation agreement</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="label-field">Additional Message or Specifications</label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share any special staffing timelines, shift models, or custom requirements..."
            className="input-field"
          />
        </div>
      </div>

      {/* Optional Document Upload */}
      <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50/60 p-6">
        <div className="flex items-center gap-2 mb-2">
          <UploadCloud className="h-5 w-5 text-primary-700" />
          <h5 className="font-display text-sm font-bold text-gray-900">
            Optional Document: Job Description or Company Profile (PDF/DOC)
          </h5>
        </div>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setDocName(e.target.files[0].name);
            }
          }}
          className="text-xs text-gray-500 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 cursor-pointer"
        />
        {docName && (
          <p className="mt-2 text-xs font-semibold text-emerald-700">
            ✓ Attached: {docName}
          </p>
        )}
      </div>

      {/* Privacy Agreement */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-500"
          />
          <span className="text-xs text-gray-700 leading-relaxed">
            I confirm that I am authorized to submit this enquiry on behalf of the company and consent to data processing under the{" "}
            <a href="/privacy-policy" target="_blank" className="text-primary-700 underline font-semibold">
              Datenschutzerklärung
            </a>. Any fees, advertising terms, or placement conditions are subject to mutual written agreement.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center !py-3.5 text-base font-bold shadow-lg"
        >
          {loading ? (
            <span>Submitting Employer Request...</span>
          ) : (
            <>
              <span>
                {submissionType === "vacancy"
                  ? "Submit Job Vacancy for Review"
                  : "Submit Recruitment Enquiry"}
              </span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
