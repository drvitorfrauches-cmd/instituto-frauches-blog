#!/usr/bin/env node
// Falha se algum artigo apontar para uma capa que não existe, está vazia ou não é imagem (JPEG/PNG).
// Extensão .jpg com conteúdo PNG é tolerada: navegador e next/image identificam pelo conteúdo.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content");
const problems = [];

for (const file of fs.readdirSync(contentDir).filter((f) => f.endsWith(".tsx"))) {
  const source = fs.readFileSync(path.join(contentDir, file), "utf8");
  const match = source.match(/coverImage:\s*\{[^}]*?src:\s*"([^"]+)"/s);
  if (!match) continue;
  const cover = path.join(root, "public", match[1]);
  if (!fs.existsSync(cover) || fs.statSync(cover).size < 1024) {
    problems.push(`${file}: capa ausente ou vazia em public${match[1]}`);
    continue;
  }
  const head = fs.readFileSync(cover).subarray(0, 4);
  const isJpeg = head[0] === 0xff && head[1] === 0xd8;
  const isPng = head[0] === 0x89 && head[1] === 0x50;
  if (!isJpeg && !isPng) problems.push(`${file}: ${match[1]} não é JPEG nem PNG`);
}

if (problems.length) {
  console.error("\nCapas com problema:\n  - " + problems.join("\n  - ") + "\n");
  console.error("Gere a imagem (Higgsfield, 16:9), salve em public/blog/<slug>/cover.jpg e faça git add.");
  process.exit(1);
}
console.log("Capas ok.");
