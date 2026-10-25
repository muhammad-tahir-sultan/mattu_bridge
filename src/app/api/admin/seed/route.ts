import { NextResponse } from "next/server";
import { ensureAdminUser, DEFAULT_ADMIN_CONFIG } from "@/lib/auth";

export async function GET() {
  const result = await ensureAdminUser();
  return NextResponse.json({
    success: true,
    seeded: !!result,
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
