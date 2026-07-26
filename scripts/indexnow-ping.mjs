#!/usr/bin/env node
// Avisa o IndexNow (Bing, Yandex e outros participantes) que uma ou mais URLs
// do blog foram publicadas ou atualizadas, pra acelerar a indexação sem
// esperar o crawler encontrar sozinho. Não afeta o Google (não participa do
// protocolo).
//
// Uso:
//   node scripts/indexnow-ping.mjs /blog/novo-slug /blog/guia-transplante-capilar
//
// Cada argumento é um path (começando com /) relativo a SITE_URL.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.institutofrauches.blog";
const INDEXNOW_KEY = "48446507ac994a7e9ed2891b91f35e14";

const paths = process.argv.slice(2);

if (paths.length === 0) {
  console.error("Uso: node scripts/indexnow-ping.mjs /blog/slug-1 [/blog/slug-2 ...]");
  process.exit(1);
}

const urlList = paths.map((p) => `${SITE_URL}${p}`);

const body = {
  host: new URL(SITE_URL).host,
  key: INDEXNOW_KEY,
  keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow: ${res.status} ${res.statusText}`);
urlList.forEach((u) => console.log(`  - ${u}`));

if (!res.ok && res.status !== 202) {
  process.exit(1);
}
