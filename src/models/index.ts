import mongoose, { Schema, model, models } from "mongoose";

// 1. Student Enquiry Schema
const StudentEnquirySchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    countryOfResidence: { type: String, required: true },
    nationality: { type: String, required: true },
    preferredDestination: { type: String, default: "Germany" },
    intendedStudyLevel: { type: String, required: true },
    intendedSubject: { type: String, required: true },
    highestQualification: { type: String, required: true },
    whatsapp: String,
    preferredInstitution: String,
    preferredIntake: String,
    languageProficiency: String,
    message: String,
    attachedDocuments: { type: Map, of: String },
    status: { type: String, default: "New" },
  },
  { timestamps: true }
);

// 2. Job Seeker Registration Schema
const JobSeekerSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    countryOfResidence: { type: String, required: true },
    nationality: { type: String, required: true },
    preferredCountry: { type: String, default: "Germany" },
    preferredCategory: { type: String, required: true },
    workExperience: { type: String, required: true },
    skills: { type: String, required: true },
    profile: { type: String, required: true },
    whatsapp: String,
    currentCity: String,
    qualifications: String,
    languages: String,
    drivingLicence: String,
    code95: { type: Boolean, default: false },
    workingHours: { type: String, default: "Full-Time" },
    availability: { type: String, default: "Immediately" },
    expectedSalary: String,
    message: String,
    attachedDocuments: { type: Map, of: String },
    consentEmployerSharing: { type: Boolean, default: false },
    consentFutureVacancies: { type: Boolean, default: false },
    status: { type: String, default: "Registered" },
  },
  { timestamps: true }
);

// 3. Employer Enquiry & Vacancy Schema
const EmployerEnquirySchema = new Schema(
  {
    companyName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    businessEmail: { type: String, required: true },
    phone: { type: String, required: true },
    website: String,
    country: { type: String, default: "Germany" },
    city: String,
    sector: String,
    submissionType: { type: String, enum: ["vacancy", "enquiry"], default: "vacancy" },
    jobTitle: String,
    category: String,
    vacancyCount: { type: String, default: "1" },
    employmentCountry: String,
    jobLocation: String,
    employmentType: { type: String, default: "Full-Time" },
    jobDescription: String,
    qualifications: String,
    experience: String,
    languages: String,
    salaryRange: String,
    serviceAdvertise: { type: Boolean, default: true },
    serviceCandidateReferral: { type: Boolean, default: false },
    serviceCooperationAgreement: { type: Boolean, default: false },
    message: String,
    attachedDoc: String,
    status: { type: String, default: "Pending Review" },
  },
  { timestamps: true }
);

// 4. Job Listing Schema
const JobListingSchema = new Schema(
  {
    title: { type: String, required: true },
    employer: { type: String, required: true },
    isVerified: { type: Boolean, default: true },
    category: { type: String, required: true },
    country: { type: String, default: "Germany" },
    location: { type: String, required: true },
    type: { type: String, enum: ["Full-Time", "Part-Time", "Contract", "Temporary"], default: "Full-Time" },
    salaryRange: String,
    description: { type: String, required: true },
    responsibilities: [String],
    qualifications: [String],
    languages: [String],
    datePosted: { type: String, default: () => new Date().toISOString().split("T")[0] },
    deadline: String,
    isApproved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// 5. International Event Registration Schema
const EventRegistrationSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    countryOfResidence: { type: String, required: true },
    organization: String,
    areaOfInterest: String,
    selectedEvent: { type: String, required: true },
    participationType: { type: String, default: "Attendee" },
    message: String,
    status: { type: String, default: "Confirmed" },
  },
  { timestamps: true }
);

// 6. Contact Form Message Schema
const ContactMessageSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, default: "General Enquiry" },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: "Unread" },
  },
  { timestamps: true }
);

export const StudentEnquiry = models.StudentEnquiry || model("StudentEnquiry", StudentEnquirySchema);
export const JobSeeker = models.JobSeeker || model("JobSeeker", JobSeekerSchema);
export const EmployerEnquiry = models.EmployerEnquiry || model("EmployerEnquiry", EmployerEnquirySchema);
export const JobListingModel = models.JobListing || model("JobListing", JobListingSchema);
export const EventRegistration = models.EventRegistration || model("EventRegistration", EventRegistrationSchema);
export const ContactMessage = models.ContactMessage || model("ContactMessage", ContactMessageSchema);
