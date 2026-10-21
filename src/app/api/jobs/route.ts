import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { JobListingModel } from "@/models";
import { initialJobListings } from "@/data/jobsData";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const showAll = searchParams.get("all") === "true";

    // Auto-seed initial jobs if database is empty
    const count = await JobListingModel.countDocuments();
    if (count === 0) {
      await JobListingModel.insertMany(initialJobListings);
    }

    const query = showAll ? {} : { isApproved: true };
    const data = await JobListingModel.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const item = await JobListingModel.create(body);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, isApproved, isVerified } = await req.json();
    await connectDB();
    const updated = await JobListingModel.findByIdAndUpdate(
      id,
      { $set: { isApproved, ...(isVerified !== undefined ? { isVerified } : {}) } },
      { new: true }
    );
    return NextResponse.json({ success: true, data: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    await connectDB();
    await JobListingModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
