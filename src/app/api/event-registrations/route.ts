import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { EventRegistration } from "@/models";

export async function GET() {
  try {
    await connectDB();
    const data = await EventRegistration.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const item = await EventRegistration.create(body);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
