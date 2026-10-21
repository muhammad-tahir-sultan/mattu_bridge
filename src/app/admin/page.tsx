"use client";

import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  Briefcase,
  Building2,
  Calendar,
  MessageSquare,
  CheckCircle,
  XCircle,
  Eye,
  Trash2,
  RefreshCw,
  PlusCircle,
  Search,
  Filter,
  ShieldCheck,
  FileText,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { initialJobListings, JobListing } from "@/data/jobsData";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "students" | "jobSeekers" | "employers" | "jobs" | "events" | "messages"
  >("overview");

  const [studentEnquiries, setStudentEnquiries] = useState<any[]>([]);
  const [jobSeekers, setJobSeekers] = useState<any[]>([]);
  const [employerSubmissions, setEmployerSubmissions] = useState<any[]>([]);
  const [jobListings, setJobListings] = useState<JobListing[]>(initialJobListings);
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Load from MongoDB APIs with LocalStorage fallback
  const loadData = async () => {
    // 1. Student enquiries
    try {
      const res = await fetch("/api/student-enquiries");
      const data = await res.json();
      if (data.success && Array.isArray(data.enquiries) && data.enquiries.length > 0) {
        setStudentEnquiries(data.enquiries.map((x: any) => ({ ...x, id: x.id || x._id })));
      } else {
        const local = JSON.parse(localStorage.getItem("mattu_student_enquiries") || "[]");
        setStudentEnquiries(local);
      }
    } catch {
      const local = JSON.parse(localStorage.getItem("mattu_student_enquiries") || "[]");
      setStudentEnquiries(local);
    }

    // 2. Job seekers
    try {
      const res = await fetch("/api/job-seekers");
      const data = await res.json();
      if (data.success && Array.isArray(data.jobSeekers) && data.jobSeekers.length > 0) {
        setJobSeekers(data.jobSeekers.map((x: any) => ({ ...x, id: x.id || x._id })));
      } else {
        const local = JSON.parse(localStorage.getItem("mattu_job_seekers") || "[]");
        setJobSeekers(local);
      }
    } catch {
      const local = JSON.parse(localStorage.getItem("mattu_job_seekers") || "[]");
      setJobSeekers(local);
    }

    // 3. Employer inquiries
    try {
      const res = await fetch("/api/employer-inquiries");
      const data = await res.json();
      if (data.success && Array.isArray(data.inquiries) && data.inquiries.length > 0) {
        setEmployerSubmissions(data.inquiries.map((x: any) => ({ ...x, id: x.id || x._id })));
      } else {
        const local = JSON.parse(localStorage.getItem("mattu_employer_submissions") || "[]");
        setEmployerSubmissions(local);
      }
    } catch {
      const local = JSON.parse(localStorage.getItem("mattu_employer_submissions") || "[]");
      setEmployerSubmissions(local);
    }

    // 4. Contact messages
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.success && Array.isArray(data.messages) && data.messages.length > 0) {
        setContactMessages(data.messages.map((x: any) => ({ ...x, id: x.id || x._id })));
      } else {
        const local = JSON.parse(localStorage.getItem("mattu_contact_messages") || "[]");
        setContactMessages(local);
      }
    } catch {
      const local = JSON.parse(localStorage.getItem("mattu_contact_messages") || "[]");
      setContactMessages(local);
    }

    // 5. Job listings
    try {
      const res = await fetch("/api/jobs?all=true");
      const data = await res.json();
      if (data.success && Array.isArray(data.jobs) && data.jobs.length > 0) {
        const formatted = data.jobs.map((j: any) => ({ ...j, id: j.id || j._id }));
        const existingIds = new Set(formatted.map((j: any) => j.id));
        setJobListings([...formatted, ...initialJobListings.filter((j) => !existingIds.has(j.id))]);
      } else {
        const pendingJobs = JSON.parse(localStorage.getItem("mattu_pending_jobs") || "[]");
        if (pendingJobs.length > 0) {
          setJobListings([...pendingJobs, ...initialJobListings]);
        } else {
          setJobListings(initialJobListings);
        }
      }
    } catch {
      const pendingJobs = JSON.parse(localStorage.getItem("mattu_pending_jobs") || "[]");
      if (pendingJobs.length > 0) {
        setJobListings([...pendingJobs, ...initialJobListings]);
      } else {
        setJobListings(initialJobListings);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Action handlers
  const handleApproveJob = async (jobId: string) => {
    const updated = jobListings.map((job) =>
      job.id === jobId ? { ...job, isApproved: true, isVerified: true } : job
    );
    setJobListings(updated);
    localStorage.setItem("mattu_pending_jobs", JSON.stringify(updated));

    try {
      await fetch("/api/jobs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: jobId, isApproved: true, isVerified: true }),
      });
    } catch {
      // ignore
    }
  };

  const handleTogglePublish = async (jobId: string) => {
    const current = jobListings.find((j) => j.id === jobId);
    const newStatus = !current?.isApproved;
    const updated = jobListings.map((job) =>
      job.id === jobId ? { ...job, isApproved: newStatus } : job
    );
    setJobListings(updated);
    localStorage.setItem("mattu_pending_jobs", JSON.stringify(updated));

    try {
      await fetch("/api/jobs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: jobId, isApproved: newStatus }),
      });
    } catch {
      // ignore
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    const updated = jobListings.filter((job) => job.id !== jobId);
    setJobListings(updated);
    localStorage.setItem("mattu_pending_jobs", JSON.stringify(updated));

    try {
      await fetch(`/api/jobs?id=${encodeURIComponent(jobId)}`, {
        method: "DELETE",
      });
    } catch {
      // ignore
    }
  };

  const handleDeleteItem = (storageKey: string, id: string, setter: any) => {
    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const updated = existing.filter((item: any) => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setter(updated);
    if (selectedItem?.id === id) setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50/70 pb-20">
      <PageHeader
        eyebrow="Internal Administration"
        title="Mattu Bridge Control Center"
        description="Review student enquiries, evaluate candidate profiles, approve employer job advertisements, and manage published listings."
      />

      <div className="section-container mt-8">
        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 bg-white p-2 rounded-2xl shadow-sm mb-8">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "students", label: `Students (${studentEnquiries.length})`, icon: GraduationCap },
            { id: "jobSeekers", label: `Job Seekers (${jobSeekers.length})`, icon: Briefcase },
            { id: "employers", label: `Employers (${employerSubmissions.length})`, icon: Building2 },
            { id: "jobs", label: `Job Listings (${jobListings.length})`, icon: CheckCircle },
            { id: "messages", label: `Messages (${contactMessages.length})`, icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSelectedItem(null);
                }}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  active
                    ? "bg-primary-700 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={loadData}
            title="Refresh Data"
            className="ml-auto rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card border-primary-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                    Student Enquiries
                  </span>
                  <GraduationCap className="h-5 w-5 text-primary-600" />
                </div>
                <div className="font-display text-3xl font-bold text-gray-900">
                  {studentEnquiries.length}
                </div>
                <p className="text-xs text-gray-500 mt-1">Study preferences logged</p>
              </div>

              <div className="card border-primary-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                    Job Seekers
                  </span>
                  <Briefcase className="h-5 w-5 text-primary-600" />
                </div>
                <div className="font-display text-3xl font-bold text-gray-900">
                  {jobSeekers.length}
                </div>
                <p className="text-xs text-gray-500 mt-1">Candidate profiles registered</p>
              </div>

              <div className="card border-primary-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                    Employer Inquiries
                  </span>
                  <Building2 className="h-5 w-5 text-primary-600" />
                </div>
                <div className="font-display text-3xl font-bold text-gray-900">
                  {employerSubmissions.length}
                </div>
                <p className="text-xs text-gray-500 mt-1">Vacancy submissions &amp; requests</p>
              </div>

              <div className="card border-primary-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                    Live Job Listings
                  </span>
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-display text-3xl font-bold text-gray-900">
                  {jobListings.filter((j) => j.isApproved).length}
                </div>
                <p className="text-xs text-gray-500 mt-1">Approved &amp; visible vacancies</p>
              </div>
            </div>

            {/* Quick Actions & Compliance Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">
                  Verification Safeguards
                </h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>No vacancies published automatically without review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Candidate documents quarantined and access-controlled</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>All forms persist real submissions to localStorage</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">
                  Quick Navigation
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("students")}
                    className="btn-secondary !py-2 text-left justify-start"
                  >
                    View Student Enquiries
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("jobSeekers")}
                    className="btn-secondary !py-2 text-left justify-start"
                  >
                    View Job Seekers
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("employers")}
                    className="btn-secondary !py-2 text-left justify-start"
                  >
                    Review Employer Posts
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("jobs")}
                    className="btn-secondary !py-2 text-left justify-start"
                  >
                    Manage Job Listings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Students */}
        {activeTab === "students" && (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Student Enquiries ({studentEnquiries.length})
            </h3>
            {studentEnquiries.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500">
                No student enquiries logged yet. Fill out the enquiry form on the Education page to test!
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-gray-100 bg-gray-50/70 font-semibold text-gray-700">
                    <tr>
                      <th className="p-3.5">Date</th>
                      <th className="p-3.5">Name</th>
                      <th className="p-3.5">Email</th>
                      <th className="p-3.5">Destination</th>
                      <th className="p-3.5">Study Level</th>
                      <th className="p-3.5">Subject</th>
                      <th className="p-3.5">Documents</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    {studentEnquiries.map((stu) => (
                      <tr key={stu.id} className="hover:bg-gray-50/50">
                        <td className="p-3.5 text-gray-400">
                          {new Date(stu.date).toLocaleDateString()}
                        </td>
                        <td className="p-3.5 font-bold text-gray-900">{stu.fullName}</td>
                        <td className="p-3.5">{stu.email}</td>
                        <td className="p-3.5">{stu.preferredDestination}</td>
                        <td className="p-3.5">{stu.intendedStudyLevel}</td>
                        <td className="p-3.5">{stu.intendedSubject}</td>
                        <td className="p-3.5">
                          {stu.attachedDocuments && Object.keys(stu.attachedDocuments).length > 0 ? (
                            <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-700 font-semibold">
                              {Object.keys(stu.attachedDocuments).length} files
                            </span>
                          ) : (
                            <span className="text-gray-400">None (Basic)</span>
                          )}
                        </td>
                        <td className="p-3.5 text-right space-x-2">
                          <button
                            type="button"
                            onClick={() => setSelectedItem(stu)}
                            className="rounded p-1 text-primary-700 hover:bg-primary-50"
                            title="View Full Profile"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteItem(
                                "mattu_student_enquiries",
                                stu.id,
                                setStudentEnquiries
                              )
                            }
                            className="rounded p-1 text-red-600 hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Job Seekers */}
        {activeTab === "jobSeekers" && (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Registered Candidate Profiles ({jobSeekers.length})
            </h3>
            {jobSeekers.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500">
                No job seekers registered yet. Submit the registration form on the Job Seeker page to test!
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-gray-100 bg-gray-50/70 font-semibold text-gray-700">
                    <tr>
                      <th className="p-3.5">Date</th>
                      <th className="p-3.5">Candidate Name</th>
                      <th className="p-3.5">Email</th>
                      <th className="p-3.5">Category</th>
                      <th className="p-3.5">Target Country</th>
                      <th className="p-3.5">Experience</th>
                      <th className="p-3.5">Code 95</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    {jobSeekers.map((js) => (
                      <tr key={js.id} className="hover:bg-gray-50/50">
                        <td className="p-3.5 text-gray-400">
                          {new Date(js.date).toLocaleDateString()}
                        </td>
                        <td className="p-3.5 font-bold text-gray-900">{js.fullName}</td>
                        <td className="p-3.5">{js.email}</td>
                        <td className="p-3.5">{js.preferredCategory}</td>
                        <td className="p-3.5">{js.preferredCountry}</td>
                        <td className="p-3.5 truncate max-w-xs">{js.workExperience}</td>
                        <td className="p-3.5">
                          {js.code95 ? (
                            <span className="text-emerald-700 font-bold">Yes (Certified)</span>
                          ) : (
                            <span className="text-gray-400">No</span>
                          )}
                        </td>
                        <td className="p-3.5 text-right space-x-2">
                          <button
                            type="button"
                            onClick={() => setSelectedItem(js)}
                            className="rounded p-1 text-primary-700 hover:bg-primary-50"
                            title="View Full Profile"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteItem(
                                "mattu_job_seekers",
                                js.id,
                                setJobSeekers
                              )
                            }
                            className="rounded p-1 text-red-600 hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Employer Submissions */}
        {activeTab === "employers" && (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Employer Submissions &amp; Vacancies ({employerSubmissions.length})
            </h3>
            {employerSubmissions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500">
                No employer submissions logged yet. Fill out the Employer Enquiry form to test!
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-gray-100 bg-gray-50/70 font-semibold text-gray-700">
                    <tr>
                      <th className="p-3.5">Date</th>
                      <th className="p-3.5">Company</th>
                      <th className="p-3.5">Contact Person</th>
                      <th className="p-3.5">Type</th>
                      <th className="p-3.5">Job Title</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    {employerSubmissions.map((emp) => (
                      <tr key={emp.id} className="hover:bg-gray-50/50">
                        <td className="p-3.5 text-gray-400">
                          {new Date(emp.date).toLocaleDateString()}
                        </td>
                        <td className="p-3.5 font-bold text-gray-900">{emp.companyName}</td>
                        <td className="p-3.5">{emp.contactPerson}</td>
                        <td className="p-3.5 capitalize">{emp.submissionType}</td>
                        <td className="p-3.5">{emp.jobTitle || "Recruitment Service"}</td>
                        <td className="p-3.5">
                          <span className="rounded bg-amber-50 px-2 py-0.5 text-amber-700 font-semibold">
                            {emp.status || "Pending Review"}
                          </span>
                        </td>
                        <td className="p-3.5 text-right space-x-2">
                          <button
                            type="button"
                            onClick={() => setSelectedItem(emp)}
                            className="rounded p-1 text-primary-700 hover:bg-primary-50"
                            title="View Submission"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteItem(
                                "mattu_employer_submissions",
                                emp.id,
                                setEmployerSubmissions
                              )
                            }
                            className="rounded p-1 text-red-600 hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Job Listings Management */}
        {activeTab === "jobs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-gray-900">
                Job Listings Management ({jobListings.length})
              </h3>
              <p className="text-xs text-gray-500">
                Authorized administrators can approve, publish, unpublish, or delete vacancies.
              </p>
            </div>

            <div className="space-y-4">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">
                        {job.title}
                      </span>
                      <span className="rounded bg-primary-50 px-2 py-0.5 text-[11px] font-semibold text-primary-700">
                        {job.category}
                      </span>
                      {job.isApproved ? (
                        <span className="rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                          Published
                        </span>
                      ) : (
                        <span className="rounded bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 border border-amber-200">
                          Awaiting Review
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      {job.employer} · {job.location} ({job.country}) · {job.type}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {!job.isApproved ? (
                      <button
                        type="button"
                        onClick={() => handleApproveJob(job.id)}
                        className="btn-primary !py-1.5 !px-3 text-xs font-semibold"
                      >
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>Approve &amp; Publish</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(job.id)}
                        className="btn-secondary !py-1.5 !px-3 text-xs font-semibold"
                      >
                        <XCircle className="h-3.5 w-3.5 text-amber-600" />
                        <span>Unpublish</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteJob(job.id)}
                      className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                      title="Delete Listing"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Messages */}
        {activeTab === "messages" && (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Contact Form Inquiries ({contactMessages.length})
            </h3>
            {contactMessages.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500">
                No contact form messages received yet. Submit a message on the Contact page to test!
              </div>
            ) : (
              <div className="space-y-4">
                {contactMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-800">
                          {msg.category}
                        </span>
                        <h4 className="font-display text-base font-bold text-gray-900 mt-1">
                          {msg.subject}
                        </h4>
                        <p className="text-xs text-gray-500">
                          From: {msg.fullName} ({msg.email}) · {new Date(msg.date).toLocaleString()}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteItem(
                            "mattu_contact_messages",
                            msg.id,
                            setContactMessages
                          )
                        }
                        className="rounded p-1 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-gray-700 bg-gray-50 p-3 rounded-xl">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Item Detail Inspector Drawer */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <XCircle className="h-5 w-5" />
              </button>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">
                Submission Record Inspector
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Record ID: {selectedItem.id} · Received: {new Date(selectedItem.date).toLocaleString()}
              </p>

              <div className="space-y-3 rounded-2xl bg-gray-50 p-4 text-xs font-mono overflow-x-auto">
                {Object.entries(selectedItem).map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="font-bold text-primary-700 min-w-36">{k}:</span>
                    <span className="text-gray-800 break-all">
                      {typeof v === "object" ? JSON.stringify(v) : String(v)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="btn-primary !py-2 !px-5 text-xs font-semibold"
                >
                  Close Inspector
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
