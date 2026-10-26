"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  EyeOff,
  Trash2,
  RefreshCw,
  PlusCircle,
  Search,
  Filter,
  ShieldCheck,
  FileText,
  Lock,
  User,
  LogOut,
  AlertCircle,
  Loader2,
  KeyRound,
  ArrowLeft,
  CheckCircle2,
  Activity,
  Globe,
  Sparkles,
  Server,
  ShieldAlert,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Logo from "@/components/Logo";
import { images } from "@/data/images";
import { initialJobListings, JobListing } from "@/data/jobsData";

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [currentUser, setCurrentUser] = useState<{
    id?: string;
    username: string;
    email: string;
    fullName: string;
    role: string;
  } | null>(null);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "overview" | "students" | "jobSeekers" | "employers" | "jobs" | "events" | "messages"
  >("overview");

  const [studentEnquiries, setStudentEnquiries] = useState<any[]>([]);
  const [jobSeekers, setJobSeekers] = useState<any[]>([]);
  const [employerSubmissions, setEmployerSubmissions] = useState<any[]>([]);
  const [jobListings, setJobListings] = useState<JobListing[]>(initialJobListings);
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Check existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/me");
        const data = await res.json();
        if (data.authenticated && data.user) {
          setIsAuthenticated(true);
          setCurrentUser(data.user);
          loadData();
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSubmitting(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();

      if (data.success && data.user) {
        setIsAuthenticated(true);
        setCurrentUser(data.user);
        loadData();
      } else {
        setLoginError(data.error || "Invalid username or password");
      }
    } catch {
      setLoginError("Connection failed. Please check network and retry.");
    } finally {
      setLoginSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      setIsAuthenticated(false);
      setCurrentUser(null);
    }
  };

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
      }
    }
  };

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

  // 1. Session Loading State
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-primary-950 flex flex-col items-center justify-center p-6 text-white">
        <Loader2 className="h-9 w-9 animate-spin text-emerald-400 mb-4" />
        <p className="text-sm text-gray-300 font-medium">Verifying Administrator Session...</p>
      </div>
    );
  }

  // 2. Unauthenticated Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden text-white">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 -left-40 w-[30rem] h-[30rem] bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[30rem] h-[30rem] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        {/* Top Back Navigation Link */}
        <div className="w-full max-w-5xl mb-4 flex items-center justify-between z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all shadow-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Mattu Bridge Website</span>
          </Link>
        </div>

        {/* Master Enterprise Dual-Panel Card */}
        <div className="w-full max-w-5xl relative z-10 rounded-3xl border border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Corporate Brand Showcase & Platform Status (5 Cols) */}
          <div className="lg:col-span-5 relative bg-gradient-to-br from-primary-950 via-[#0a182c] to-[#06101e] p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
            {/* Background Image of Frankfurt Cityscape */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src={images.frankfurtRiver}
                alt="Frankfurt am Main"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-[#0a182c]/90 to-[#06101e]" />
            </div>

            <div className="relative z-10">
              {/* Logo with White Badge */}
              <div className="mb-6 inline-flex items-center justify-center px-4 py-2.5 rounded-2xl bg-white shadow-xl shadow-black/20 border border-white/20">
                <Image
                  src="/MB Logo.png"
                  alt="Mattu Bridge Logo"
                  width={140}
                  height={50}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Control & Compliance Center
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                Central administrative console for evaluating student inquiries, verifying employer job vacancies, coordinating international events, and maintaining German GDPR audit compliance.
              </p>

              {/* Status & Compliance Highlights */}
              <div className="mt-6 space-y-2.5">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 flex-shrink-0">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Central Operations Hub</p>
                    <p className="text-[11px] text-gray-300">Weyhe, Germany</p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/20 text-primary-300 flex-shrink-0">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Pan-European Mobility</p>
                    <p className="text-[11px] text-gray-300">Schengen & European Union</p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300 flex-shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">German DDG & GDPR Monitored</p>
                    <p className="text-[11px] text-gray-300">Strict Role-Based Audit Logging</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Director Quote */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
              <p className="text-xs italic text-gray-300">
                &ldquo;Connecting people with meaningful educational and professional pathways through transparent German governance.&rdquo;
              </p>
              <p className="text-[11px] font-bold text-white mt-1.5">
                — I.A Mattu, Director
              </p>
            </div>
          </div>

          {/* Right Panel: Modern Clean Login Console (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/95 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-primary-300">
                  <Lock className="h-3 w-3" />
                  <span>Restricted Access · Authorized Personnel Only</span>
                </div>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                Administrator Sign-In
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Enter your verified credentials to access the Mattu Bridge control center.
              </p>

              {/* Error Banner */}
              {loginError && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-xs text-rose-200 shadow-sm animate-shake">
                  <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-rose-300">Authentication Failed</p>
                    <p className="mt-0.5">{loginError}</p>
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin} className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Username or Official Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={loginData.username}
                      onChange={(e) =>
                        setLoginData({ ...loginData, username: e.target.value })
                      }
                      placeholder="admin or admin@mattubridge.de"
                      className="w-full rounded-xl border border-white/15 bg-slate-950/70 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/25 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Security Password
                    </label>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      placeholder="Enter administrator password"
                      className="w-full rounded-xl border border-white/15 bg-slate-950/70 pl-10 pr-11 py-3 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/25 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white transition-colors"
                      title={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-white/20 bg-slate-950 text-primary-600 focus:ring-primary-500"
                    />
                    <span>Remember this device on trusted network</span>
                  </label>
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  disabled={loginSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3.5 text-sm shadow-xl shadow-primary-950/60 disabled:opacity-50 transition-all flex items-center justify-center gap-2 border border-primary-500/30"
                >
                  {loginSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-white" />
                      <span>Verifying Administrative Session...</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="h-4 w-4" />
                      <span>Authenticate & Enter Control Center</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Bottom Security Footer */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-gray-400 gap-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>German DDG & BDSG Compliant</span>
              </span>
              <span>Mattu Bridge · Weyhe, Germany</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Authenticated Admin Portal
  return (
    <div className="min-h-screen bg-gray-50/70 pb-20">
      <PageHeader
        eyebrow="Internal Administration"
        title="Mattu Bridge Control Center"
        description="Review student enquiries, evaluate candidate profiles, approve employer job advertisements, and manage published listings."
      />

      <div className="section-container mt-6">
        {/* Admin User Header Status & Logout Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-primary-950 text-white px-5 py-3 rounded-2xl shadow-md border border-primary-900 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold text-sm">
              <User className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {currentUser?.fullName || "I.A Mattu (Director)"}
                </span>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  {currentUser?.role || "Superadmin"}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Logged in as <span className="text-primary-200 font-mono">@{currentUser?.username || "admin"}</span> ({currentUser?.email || "admin@mattubridge.de"})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={loadData}
              title="Refresh Data"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Refresh</span>
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3.5 py-2 text-xs font-bold text-rose-200 hover:bg-rose-500/20 hover:text-white transition-all shadow-sm"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

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
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${active
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
                <div className="font-display text-2xl font-bold text-gray-900">
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
                <div className="font-display text-2xl font-bold text-gray-900">
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
                <div className="font-display text-2xl font-bold text-gray-900">
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
                <div className="font-display text-2xl font-bold text-gray-900">
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
            <h3 className="font-display text-base sm:text-lg font-bold text-gray-900">
              Student Enquiries ({studentEnquiries.length})
            </h3>
            {studentEnquiries.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-xs sm:text-sm text-gray-500">
                No student enquiries logged yet. Fill out the enquiry form on the Education page to test!
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-gray-100 bg-gray-50/70 font-semibold text-gray-700 text-[11px] sm:text-xs">
                    <tr>
                      <th className="p-2.5 sm:p-3">Date</th>
                      <th className="p-2.5 sm:p-3">Name</th>
                      <th className="p-2.5 sm:p-3">Email</th>
                      <th className="p-2.5 sm:p-3">Destination</th>
                      <th className="p-2.5 sm:p-3">Study Level</th>
                      <th className="p-2.5 sm:p-3">Subject</th>
                      <th className="p-2.5 sm:p-3">Documents</th>
                      <th className="p-2.5 sm:p-3 text-right">Actions</th>
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
            <h3 className="font-display text-base sm:text-lg font-bold text-gray-900">
              Registered Candidate Profiles ({jobSeekers.length})
            </h3>
            {jobSeekers.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-xs sm:text-sm text-gray-500">
                No job seekers registered yet. Submit the registration form on the Job Seeker page to test!
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-gray-100 bg-gray-50/70 font-semibold text-gray-700 text-[11px] sm:text-xs">
                    <tr>
                      <th className="p-2.5 sm:p-3">Date</th>
                      <th className="p-2.5 sm:p-3">Candidate Name</th>
                      <th className="p-2.5 sm:p-3">Email</th>
                      <th className="p-2.5 sm:p-3">Category</th>
                      <th className="p-2.5 sm:p-3">Target Country</th>
                      <th className="p-2.5 sm:p-3">Experience</th>
                      <th className="p-2.5 sm:p-3">Code 95</th>
                      <th className="p-2.5 sm:p-3 text-right">Actions</th>
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
            <h3 className="font-display text-base sm:text-lg font-bold text-gray-900">
              Employer Submissions &amp; Vacancies ({employerSubmissions.length})
            </h3>
            {employerSubmissions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-xs sm:text-sm text-gray-500">
                No employer submissions logged yet. Fill out the Employer Enquiry form to test!
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-gray-100 bg-gray-50/70 font-semibold text-gray-700 text-[11px] sm:text-xs">
                    <tr>
                      <th className="p-2.5 sm:p-3">Date</th>
                      <th className="p-2.5 sm:p-3">Company</th>
                      <th className="p-2.5 sm:p-3">Contact Person</th>
                      <th className="p-2.5 sm:p-3">Type</th>
                      <th className="p-2.5 sm:p-3">Job Title</th>
                      <th className="p-2.5 sm:p-3">Status</th>
                      <th className="p-2.5 sm:p-3 text-right">Actions</th>
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
              <h3 className="font-display text-base sm:text-lg font-bold text-gray-900">
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
            <h3 className="font-display text-base sm:text-lg font-bold text-gray-900">
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
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-5 sm:p-6 md:p-7 shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <XCircle className="h-5 w-5" />
              </button>

              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 mb-1">
                Submission Record Inspector
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-400 mb-3">
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
