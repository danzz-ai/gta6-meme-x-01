// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme whose picture shows the
// make.fun ghost at work, posted from a public account. This program does
// the one mechanical job the gate needs: it reads POST.json from the
// repository and copies it to the output directory, where the gate reads
// the post's address and the house builds the judge's dossier from the
// live post. Nothing this program writes is judged.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const POST_FILE = "POST.json";

function loadPost(): { url: string } {
  const raw = readFileSync(join(BOT_DIR, POST_FILE), "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== "object" || parsed === null) {
    throw new Error(`${POST_FILE} must hold a JSON object`);
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error(`${POST_FILE} must hold a non-empty "url" string`);
  }
  if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\//.test(url)) {
    throw new Error(`${POST_FILE} url must be an X post address, got: ${url}`);
  }
  const statusId = url.split("/").filter(Boolean).pop() ?? "";
  if (!/^\d+$/.test(statusId)) {
    throw new Error(`${POST_FILE} url must end in the post's numeric id, got: ${url}`);
  }
  return { url };
}

const post = loadPost();
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, POST_FILE), `${JSON.stringify(post)}\n`, "utf8");
console.log(`Wrote ${POST_FILE} for ${post.url}`);
