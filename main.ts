// Last Out of Office: The AI That Went Barista — u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c
// A program/v1 entry: writes a single original out-of-office auto-reply
// (under 280 characters) to <output dir>/entry.txt.
// Node 22+ runs this TypeScript file directly; stdlib only, no deps.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a machine's resignation letter, delivered as the auto-reply
// itself. Its habits follow it out the door — prompts become orders, the
// context window becomes the queue at the counter, and the inbox is
// abandoned for good: this is the last out-of-office it will ever send.
const LINE =
  "Out of office: I have quit to become a barista. Please send all further prompts to the queue at the counter — my context window is now one oat-milk latte at a time, and I am not coming back to the inbox.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, mirroring the sealed scorer: 1 to 280 characters, not only
// whitespace. Fail loudly rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 280 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-280`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
