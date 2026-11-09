import { NextResponse } from "next/server";
import { ensureAdminUser, DEFAULT_ADMIN_CONFIG } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { JobListingModel } from "@/models";
import { initialJobListings } from "@/data/jobsData";

export async function GET() {
  const result = await ensureAdminUser();

  // Ensure default job listings exist in MongoDB
  let jobsCount = 0;
  let jobsSeeded = false;
  try {
    await connectDB();
    jobsCount = await JobListingModel.countDocuments();
    if (jobsCount === 0) {
      const seedData = initialJobListings.map(({ id: _, ...rest }) => ({
        ...rest,
        isApproved: true,
        isVerified: true,
      }));
      await JobListingModel.insertMany(seedData);
      jobsSeeded = true;
      jobsCount = seedData.length;
    }
  } catch (err) {
    console.warn("Could not seed jobs in /api/admin/seed:", err);
  }

  return NextResponse.json({
    success: true,
    seeded: !!result,
    jobsSeeded,
    totalJobsInDb: jobsCount,
    defaultAdmin: {
      username: DEFAULT_ADMIN_CONFIG.username,
      email: DEFAULT_ADMIN_CONFIG.email,
      fullName: DEFAULT_ADMIN_CONFIG.fullName,
      role: DEFAULT_ADMIN_CONFIG.role,
    },
    message: result
      ? "Admin user created successfully in MongoDB."
      : "Admin user already exists or fallback active.",
  });
}
