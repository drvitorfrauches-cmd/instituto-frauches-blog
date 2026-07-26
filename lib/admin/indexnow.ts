import { SITE_URL } from "@/lib/blog/site";

const INDEXNOW_KEY = "48446507ac994a7e9ed2891b91f35e14";

export async function pingIndexNow(paths: string[]): Promise<void> {
  if (paths.length === 0) return;
  const urlList = paths.map((p) => `${SITE_URL}${p}`);
  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(SITE_URL).host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });
  } catch {
    // não crítico: falha no ping do IndexNow não deve bloquear a publicação
  }
}
