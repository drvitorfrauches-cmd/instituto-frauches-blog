import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "admin_session";

function getSecret(): string {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("ADMIN_PASSWORD não configurada nas variáveis de ambiente.");
  }
  return secret;
}

export function makeSessionToken(): string {
  return createHmac("sha256", getSecret()).update("instituto-frauches-admin").digest("hex");
}

export function checkPassword(password: string): boolean {
  const expected = getSecret();
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  let expected: string;
  try {
    expected = makeSessionToken();
  } catch {
    return false;
  }
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
