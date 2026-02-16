import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const ALLOWED_EXT = new Set([".png", ".jpg", ".jpeg"]);
const SKIP_DIRS = new Set([".git", ".next", "node_modules"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (SKIP_DIRS.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (ALLOWED_EXT.has(ext)) files.push(fullPath);
  }

  return files;
}

function toKb(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

async function optimize(filePath) {
  const inputBuffer = await fs.readFile(filePath);
  const image = sharp(inputBuffer, { failOn: "none" });
  const metadata = await image.metadata();
  const width = metadata.width ?? 0;

  const pipeline = width > 1920 ? image.resize({ width: 1920, withoutEnlargement: true }) : image;
  const webpBuffer = await pipeline.webp({ quality: 74, effort: 5 }).toBuffer();

  const parsed = path.parse(filePath);
  const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
  await fs.writeFile(webpPath, webpBuffer);

  return {
    filePath,
    sourceBytes: inputBuffer.byteLength,
    webpBytes: webpBuffer.byteLength,
  };
}

async function main() {
  const files = await walk(PUBLIC_DIR);
  if (files.length === 0) {
    console.log("Nenhuma imagem PNG/JPG encontrada em public/.");
    return;
  }

  console.log(`Otimizando ${files.length} imagens...`);
  let totalSource = 0;
  let totalWebp = 0;

  for (const file of files) {
    const result = await optimize(file);
    totalSource += result.sourceBytes;
    totalWebp += result.webpBytes;
    console.log(`${path.relative(ROOT, result.filePath)} -> webp ${toKb(result.webpBytes)}`);
  }

  console.log("Resumo:");
  console.log(`- Originais: ${toKb(totalSource)}`);
  console.log(`- WebP total: ${toKb(totalWebp)}`);
}

main().catch((error) => {
  console.error("Falha na otimizacao de imagens:", error);
  process.exit(1);
});
