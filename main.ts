// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
// One short original motto an AI agent would proudly wear on its profile.
// Entry: "My context window is finite. My confidence is not."
// A motto in two beats: the honest limit first, the boast second.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My context window is finite. My confidence is not.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim() !== LINE) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the validated line");
}
console.log(`Wrote ${chars} characters, 1 line`);
