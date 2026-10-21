"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  Calendar,
  CheckCircle,
  ShieldCheck,
  Building2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  X,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { initialJobListings, jobCategories, employmentCountries, JobListing } from "@/data/jobsData";

export default function JobListingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedType, setSelectedType] = useState("All Types");
  const [allJobs, setAllJobs] = useState<JobListing[]>(initialJobListings);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  // Load approved jobs from MongoDB API with localStorage fallback
  useEffect(() => {
    let isMounted = true;
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        if (data.success && Array.isArray(data.jobs) && data.jobs.length > 0) {
          if (isMounted) {
            // Map MongoDB _id to id if needed
            const formatted = data.jobs.map((j: any) => ({
              ...j,
              id: j.id || j._id,
            }));
            // Merge with initialJobListings, avoiding duplicate ids
            const existingIds = new Set(formatted.map((j: any) => j.id));
            const merged = [...formatted, ...initialJobListings.filter((j) => !existingIds.has(j.id))];
            setAllJobs(merged);
            return;
          }
        }
      } catch (err) {
        console.warn("Could not fetch jobs from MongoDB API, using local storage fallback:", err);
      }

      // Fallback to localStorage
      try {
        const storedPending = JSON.parse(
          localStorage.getItem("mattu_pending_jobs") || "[]"
        );
        const approvedOnly = storedPending.filter((j: JobListing) => j.isApproved);
        if (approvedOnly.length > 0 && isMounted) {
          setAllJobs([...approvedOnly, ...initialJobListings]);
        }
      } catch {
        // fallback to initial
      }
    }

    fetchJobs();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        job.category === selectedCategory;

      const matchesCountry =
        selectedCountry === "All Countries" ||
        job.country === selectedCountry;

      const matchesType =
        selectedType === "All Types" || job.type === selectedType;

      return matchesSearch && matchesCategory && matchesCountry && matchesType;
    });
  }, [allJobs, searchQuery, selectedCategory, selectedCountry, selectedType]);

  return (
    <div>
      <PageHeader
        eyebrow="Job Board"
        title="Approved European Job Listings"
        description="Browse reviewed and approved vacancies from registered European employers across logistics, healthcare, hospitality, and engineering."
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container">
          {/* Search & Filter Bar */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md mb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Keyword Search */}
              <div className="relative md:col-span-1">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Job title, keywords, location..."
                  className="input-field !pl-10 text-xs"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field text-xs"
                >
                  {jobCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country Filter */}
              <div>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="input-field text-xs"
                >
                  {employmentCountries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Employment Type */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="input-field text-xs"
                >
                  <option value="All Types">All Employment Types</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>

            {/* Clear filters badge if active */}
            {(searchQuery ||
              selectedCategory !== "All Categories" ||
              selectedCountry !== "All Countries" ||
              selectedType !== "All Types") && (
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>
                  Showing {filteredJobs.length} of {allJobs.length} listings
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                    setSelectedCountry("All Countries");
                    setSelectedType("All Types");
                  }}
                  className="text-primary-700 font-semibold hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>

          {/* Job Listings Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="card flex flex-col justify-between hover:border-primary-300 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="inline-block rounded-md bg-primary-50 px-2.5 py-0.5 text-[11px] font-bold text-primary-700 uppercase tracking-wider mb-2">
                          {job.category}
                        </span>
                        <h3 className="font-display text-xl font-bold text-gray-950">
                          {job.title}
                        </h3>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        {job.employer}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location} ({job.country})
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {job.salaryRange && (
                      <div className="mb-4 rounded-lg bg-gray-50 p-2.5 text-xs font-medium text-gray-800">
                        <span className="text-gray-500 font-normal">Compensation: </span>
                        <span className="font-semibold text-primary-900">{job.salaryRange}</span>
                      </div>
                    )}

                    <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                      {job.languages && job.languages.length > 0 && (
                        <p>
                          <strong>Languages:</strong> {job.languages.join(", ")}
                        </p>
                      )}
                      {job.qualifications && job.qualifications.length > 0 && (
                        <p>
                          <strong>Qualifications:</strong> {job.qualifications[0]}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-400">
                      Posted: {job.datePosted}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedJob(job)}
                        className="btn-secondary !py-2 !px-3.5 text-xs font-semibold"
                      >
                        View Details
                      </button>
                      <Link
                        href={`/jobs/job-seeker-registration?jobId=${job.id}&jobTitle=${encodeURIComponent(
                          job.title
                        )}`}
                        className="btn-primary !py-2 !px-4 text-xs font-bold"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                No Vacancies Match Your Filter
              </h3>
              <p className="mx-auto max-w-lg text-sm text-gray-600 leading-relaxed mb-6">
                &ldquo;No current vacancies are listed matching these criteria at the moment. Job seekers can register their interest, and employers can submit recruitment requirements or vacancies for review.&rdquo;
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/jobs/job-seeker-registration"
                  className="btn-primary !py-2.5 !px-5 text-xs font-bold"
                >
                  Register Candidate Profile
                </Link>
                <Link
                  href="/jobs/employer-inquiry"
                  className="btn-secondary !py-2.5 !px-5 text-xs font-semibold"
                >
                  Submit Employer Vacancy
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal / Slide-over for Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-md bg-primary-100 px-3 py-1 text-xs font-bold text-primary-800 uppercase tracking-wider mb-2">
              {selectedJob.category}
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-950">
              {selectedJob.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-600">
              <span>{selectedJob.employer}</span>
              <span>·</span>
              <span>{selectedJob.location} ({selectedJob.country})</span>
              <span>·</span>
              <span className="font-semibold text-emerald-700">{selectedJob.type}</span>
            </div>

            {selectedJob.salaryRange && (
              <div className="mt-4 rounded-xl bg-primary-50/70 p-3 text-xs">
                <span className="font-semibold text-primary-900">Compensation: </span>
                <span className="text-gray-800">{selectedJob.salaryRange}</span>
              </div>
            )}

            <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  Vacancy Overview
                </h4>
                <p>{selectedJob.description}</p>
              </div>

              {selectedJob.responsibilities && (
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.qualifications && (
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Required Qualifications
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                    {selectedJob.qualifications.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.languages && (
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Language Requirements
                  </h4>
                  <p className="text-xs text-gray-600">
                    {selectedJob.languages.join(", ")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Deadline: {selectedJob.deadline || "Open until filled"}
              </span>
              <Link
                href={`/jobs/job-seeker-registration?jobId=${selectedJob.id}&jobTitle=${encodeURIComponent(
                  selectedJob.title
                )}`}
                className="btn-primary !py-2.5 !px-6 text-sm font-bold"
              >
                <span>Apply for this Position</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
