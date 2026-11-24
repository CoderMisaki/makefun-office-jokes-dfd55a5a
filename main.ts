// Make the AI Judge Laugh: Office Jokes
// Writes a single one-line office joke to /output/entry.txt.
// The gate wants 1-199 UTF-8 characters, one line, nothing else,
// so the program checks its own output before writing it.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR said bring your whole self to work, so I brought my burnout too — it's already been promoted twice.";

const singleLine = JOKE.trim();
if (singleLine.length < 1 || singleLine.length > 199 || singleLine.includes("\n")) {
  throw new Error(`joke fails the gate: ${singleLine.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", singleLine, "utf8");
