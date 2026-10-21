import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { EmployerEnquiry, JobListingModel } from "@/models";

export async function GET() {
  try {
    await connectDB();
    const data = await EmployerEnquiry.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const item = await EmployerEnquiry.create(body);

    // If it includes a vacancy submission, create an unapproved job listing pending admin review
    if (body.submissionType === "vacancy" && body.jobTitle) {
      await JobListingModel.create({
        title: body.jobTitle,
        employer: body.companyName,
        isVerified: false,
        category: body.category || "General Employment",
        country: body.employmentCountry || body.country || "Germany",
        location: body.jobLocation || body.city || "Germany",
        type: body.employmentType || "Full-Time",
        salaryRange: body.salaryRange || "Upon Agreement",
        description: body.jobDescription || "Vacancy submitted for administrative review.",
        responsibilities: ["See vacancy details upon verification"],
        qualifications: [body.qualifications || "To be confirmed"],
        languages: [body.languages || "German / English"],
        isApproved: false,
      });
    }

    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
