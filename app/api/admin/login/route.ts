import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, checkPassword, makeSessionToken } from "@/lib/admin/auth";

export async function POST(request: Request) {
  const { password } = (await request.json()) as { password?: string };

  if (!password || !checkPassword(password)) {
    return Response.json({ error: "senha incorreta" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, makeSessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return Response.json({ ok: true });
}
