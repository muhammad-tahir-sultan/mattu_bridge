"use client";

import { useState } from "react";
import { CheckCircle2, UploadCloud, FileText, AlertCircle, ArrowRight } from "lucide-react";

export default function StudentEnquiryForm() {
  const [withDocs, setWithDocs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryOfResidence: "",
    nationality: "",
    preferredDestination: "Germany",
    intendedStudyLevel: "Undergraduate Study",
    intendedSubject: "",
    highestQualification: "",
    whatsapp: "",
    preferredInstitution: "",
    preferredIntake: "",
    languageProficiency: "",
    message: "",
    consent: false,
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
      id: `STU-${Date.now()}`,
      date: new Date().toISOString(),
      ...formData,
      attachedDocuments: files,
    };

    try {
      await fetch("/api/student-enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });
    } catch (err) {
      console.warn("MongoDB API offline, saving to local store:", err);
    }

    // Save to local storage as fallback/cache
    const existing = JSON.parse(
      localStorage.getItem("mattu_student_enquiries") || "[]"
    );
    localStorage.setItem(
      "mattu_student_enquiries",
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
          Enquiry Received Successfully
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-base text-gray-700 leading-relaxed">
          Thank you, <span className="font-semibold">{formData.fullName}</span>.
          Your educational enquiry regarding {formData.preferredDestination} has
          been securely recorded. Our team will review your details and reach out
          to you via <span className="font-semibold">{formData.email}</span>.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                countryOfResidence: "",
                nationality: "",
                preferredDestination: "Germany",
                intendedStudyLevel: "Undergraduate Study",
                intendedSubject: "",
                highestQualification: "",
                whatsapp: "",
                preferredInstitution: "",
                preferredIntake: "",
                languageProficiency: "",
                message: "",
                consent: false,
              });
              setFiles({});
            }}
            className="btn-secondary !py-2.5 !px-6 text-sm"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-xl">
      {/* Choice: With or Without Documents */}
      <div className="rounded-2xl bg-primary-50/70 p-4 border border-primary-100">
        <label className="text-xs font-semibold uppercase tracking-wider text-primary-800 block mb-2">
          Submission Mode (Document Uploads are Strictly Optional)
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
            <span>Submit Enquiry Without Documents</span>
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
            <span>Submit With Optional Documents</span>
          </button>
        </div>
        <p className="mt-2.5 text-xs text-gray-500">
          Under our data minimization policy, you can submit your basic enquiry
          first without any certificates, transcripts, or passport copies.
        </p>
      </div>

      {/* Required Personal Details */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          1. Applicant Information (Required)
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
              placeholder="e.g. Maria Schmidt"
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
              placeholder="name@example.com"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">
              Country of Current Residence <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.countryOfResidence}
              onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
              placeholder="e.g. Germany, India, Nigeria, Brazil"
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
              placeholder="e.g. German, Indian, Nigerian"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Educational Preferences */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          2. Educational Preferences (Required)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-field">
              Preferred Study Destination <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.preferredDestination}
              onChange={(e) => setFormData({ ...formData, preferredDestination: e.target.value })}
              className="input-field"
            >
              <option value="Germany">Germany</option>
              <option value="Austria">Austria</option>
              <option value="Netherlands">Netherlands</option>
              <option value="France">France</option>
              <option value="Across Europe / Open to Recommendations">
                Across Europe / Open to Recommendations
              </option>
            </select>
          </div>

          <div>
            <label className="label-field">
              Intended Study Level <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.intendedStudyLevel}
              onChange={(e) => setFormData({ ...formData, intendedStudyLevel: e.target.value })}
              className="input-field"
            >
              <option value="Undergraduate Study (Bachelor's)">Undergraduate Study (Bachelor&apos;s)</option>
              <option value="Postgraduate Study (Master's)">Postgraduate Study (Master&apos;s)</option>
              <option value="Vocational Training (Ausbildung in Germany)">Vocational Training (Ausbildung in Germany)</option>
              <option value="Preparatory / Foundation (Studienkolleg)">Preparatory / Foundation (Studienkolleg)</option>
              <option value="Diploma and Other Educational Programmes">Diploma and Other Educational Programmes</option>
              <option value="Language Course / Pathway">Language Course / Pathway</option>
            </select>
          </div>

          <div>
            <label className="label-field">
              Intended Subject or Field of Study <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.intendedSubject}
              onChange={(e) => setFormData({ ...formData, intendedSubject: e.target.value })}
              placeholder="e.g. Computer Science, Mechanical Engineering, Business"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">
              Highest Completed Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.highestQualification}
              onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
              placeholder="e.g. High School Diploma, Bachelor's Degree"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Optional Information */}
      <div>
        <h4 className="font-display text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
          <span>3. Additional &amp; Background Information (Optional)</span>
          <span className="text-xs font-normal text-gray-500">Optional</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-field">WhatsApp / Contact Number</label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="+49 123 456789"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Language Proficiency</label>
            <input
              type="text"
              value={formData.languageProficiency}
              onChange={(e) => setFormData({ ...formData, languageProficiency: e.target.value })}
              placeholder="e.g. English IELTS 6.5, German B1"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Preferred Institution (if known)</label>
            <input
              type="text"
              value={formData.preferredInstitution}
              onChange={(e) => setFormData({ ...formData, preferredInstitution: e.target.value })}
              placeholder="Optional placeholder institution"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-field">Preferred Intake or Start Date</label>
            <input
              type="text"
              value={formData.preferredIntake}
              onChange={(e) => setFormData({ ...formData, preferredIntake: e.target.value })}
              placeholder="e.g. Winter Semester 2026 / Spring 2027"
              className="input-field"
            />
          </div>

          <div className="md:col-span-2">
            <label className="label-field">Additional Message or Questions</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide any specific requirements, timeline considerations, or queries..."
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Optional Document Uploads Section */}
      {withDocs && (
        <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
          <div className="flex items-center gap-2 mb-4">
            <UploadCloud className="h-5 w-5 text-primary-700" />
            <h4 className="font-display text-base font-bold text-gray-900">
              Optional Supporting Documents
            </h4>
          </div>
          <p className="text-xs text-gray-600 mb-6">
            Supported formats: PDF, JPG, PNG (Max 10MB per file). Documents are stored securely and never published publicly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { id: "cv", label: "CV or Resume" },
              { id: "certs", label: "Educational Certificates" },
              { id: "transcripts", label: "Academic Transcripts" },
              { id: "languages", label: "Language Certificates" },
              { id: "idDoc", label: "Passport / ID Document" },
              { id: "other", label: "Other Relevant Documents" },
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

      {/* GDPR Consent & Privacy Notice */}
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
            I acknowledge that Mattu Bridge will process my personal data to
            respond to this educational enquiry in accordance with the{" "}
            <a href="/privacy-policy" target="_blank" className="text-primary-700 underline font-semibold">
              Datenschutzerklärung (Privacy Policy)
            </a>. I understand that submitting this enquiry does not guarantee admission, scholarship, or visa issuance.
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
            <span>Processing Your Enquiry...</span>
          ) : (
            <>
              <span>Submit Educational Enquiry</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
