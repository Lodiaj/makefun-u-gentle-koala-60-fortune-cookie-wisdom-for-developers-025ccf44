import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "The code you wrote at 2 a.m. will introduce itself to you at 2 p.m. in production.";

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 120) {
    throw new Error(`fortune must be 1-120 chars, got ${text.length}`);
  }
  if (text.trim() !== text) {
    throw new Error("fortune must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

validateEntry(FORTUNE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
console.log(FORTUNE);
