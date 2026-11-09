import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { JobListingModel } from "@/models";
import { initialJobListings } from "@/data/jobsData";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const showAll = searchParams.get("all") === "true";
    const forceSeed = searchParams.get("seed") === "true";

    // Auto-seed initial jobs if database is empty or explicitly requested
    const count = await JobListingModel.countDocuments();
    if (count === 0 || forceSeed) {
      if (forceSeed && count > 0) {
        // Only seed missing ones or skip existing
      } else if (count === 0) {
        const seedData = initialJobListings.map(({ id: _, ...rest }) => ({
          ...rest,
          isApproved: true,
          isVerified: true,
        }));
        await JobListingModel.insertMany(seedData);
      }
    }

    const query = showAll ? {} : { isApproved: true };
    const rawList = await JobListingModel.find(query).sort({ createdAt: -1 }).lean();
    const formatted = rawList.map((j: any) => ({
      ...j,
      id: j._id.toString(),
      _id: j._id.toString(),
    }));

    return NextResponse.json({
      success: true,
      jobs: formatted,
      data: formatted,
      count: formatted.length,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const { id: _, ...rest } = body;
    const item = await JobListingModel.create(rest);
    const formatted = {
      ...item.toObject(),
      id: item._id.toString(),
      _id: item._id.toString(),
    };
    return NextResponse.json({ success: true, data: formatted, job: formatted }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, isApproved, isVerified } = await req.json();
    await connectDB();
    const updateFields: any = {};
    if (isApproved !== undefined) updateFields.isApproved = isApproved;
    if (isVerified !== undefined) updateFields.isVerified = isVerified;

    const updated = await JobListingModel.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    ).lean();

    if (!updated) {
      return NextResponse.json({ success: false, error: "Job listing not found" }, { status: 404 });
    }

    const formatted = {
      ...updated,
      id: (updated as any)._id.toString(),
      _id: (updated as any)._id.toString(),
    };

    return NextResponse.json({ success: true, data: formatted, job: formatted });
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
