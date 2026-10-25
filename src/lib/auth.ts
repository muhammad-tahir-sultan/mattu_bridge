import crypto from "crypto";
import { connectDB } from "@/lib/mongodb";
import { AdminUser } from "@/models";

const JWT_SECRET =
  process.env.ADMIN_JWT_SECRET ||
  "mattu_bridge_secure_admin_jwt_secret_key_2026_super_safe_token";

export const DEFAULT_ADMIN_CONFIG = {
  username: process.env.ADMIN_USERNAME || "admin",
  email: process.env.ADMIN_EMAIL || "admin@mattubridge.de",
  fullName: process.env.ADMIN_FULL_NAME || "I.A Mattu (Director)",
  password: process.env.ADMIN_PASSWORD || "AdminPassword2026!",
  role: "superadmin",
};

export function hashPassword(password: string, existingSalt?: string) {
  const salt = existingSalt || crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return { hash, salt };
}

export function verifyPassword(password: string, salt: string, hash: string): boolean {
  const calculatedHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return calculatedHash === hash;
}

export function signToken(payload: object): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString(
    "base64url"
  );
  // 7 days expiration
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const data = Buffer.from(JSON.stringify({ ...payload, exp })).toString("base64url");
  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(`${header}.${data}`)
    .digest("base64url");
  return `${header}.${data}.${signature}`;
}

export function verifyToken(token: string): any | null {
  try {
    if (!token) return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [header, data, signature] = parts;
    const expectedSignature = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(`${header}.${data}`)
      .digest("base64url");
    if (signature !== expectedSignature) return null;

    const payload = JSON.parse(Buffer.from(data, "base64url").toString("utf-8"));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function ensureAdminUser() {
  try {
    await connectDB();
    const existing = await AdminUser.findOne({
      $or: [
        { username: DEFAULT_ADMIN_CONFIG.username.toLowerCase() },
        { email: DEFAULT_ADMIN_CONFIG.email.toLowerCase() },
      ],
    });
    if (!existing) {
      const { hash, salt } = hashPassword(DEFAULT_ADMIN_CONFIG.password);
      const admin = await AdminUser.create({
        username: DEFAULT_ADMIN_CONFIG.username.toLowerCase(),
        email: DEFAULT_ADMIN_CONFIG.email.toLowerCase(),
        fullName: DEFAULT_ADMIN_CONFIG.fullName,
        passwordHash: hash,
        salt,
        role: DEFAULT_ADMIN_CONFIG.role,
        isActive: true,
      });
      return admin;
    }
    return existing;
  } catch (err: any) {
    if (err?.code === 11000) {
      return await AdminUser.findOne({
        username: DEFAULT_ADMIN_CONFIG.username.toLowerCase(),
      }).catch(() => null);
    }
    return null;
  }
}
