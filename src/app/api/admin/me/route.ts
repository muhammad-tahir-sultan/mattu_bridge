import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const cookieToken = req.cookies.get("admin_session")?.value;
    const authHeader = req.headers.get("authorization");
    const headerToken = authHeader?.startsWith("Bearer ")
      ? authHeader.substring(7)
      : null;

    const token = cookieToken || headerToken;

    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({
        authenticated: false,
        error: "Invalid or expired session",
      });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: payload.id,
        username: payload.username,
        email: payload.email,
        fullName: payload.fullName,
        role: payload.role,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { authenticated: false, error: err.message },
      { status: 500 }
    );
  }
}
