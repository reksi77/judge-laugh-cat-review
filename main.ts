import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review from a house cat about its human. Written from scratch.
const ENTRY =
  "One star. He types on the warm laptop all day and calls it work, then acts shocked when I sit on it. I live here too, I pay rent in affection, and frankly my nap was scheduled first.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Gate: 1-200 characters (counted as Unicode code points), a single line,
// not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");

// Read back and confirm the file on disk is exactly the validated text.
const written = readFileSync(outputPath, "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the validated text");
}
console.log(`wrote ${length} characters to ${outputPath}`);
