import { mkdirSync, writeFileSync } from "node:fs";

// Invent a Word We Need — entry: "Miswave"
// One invented word + one-line definition, max 140 chars total.

const ENTRY =
  "Miswave (n.) — waving back at a stranger in the supermarket who was waving at the person behind you; you finish the wave anyway.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  console.error(`Entry must be 1-140 chars, got ${chars}.`);
  process.exit(1);
}

console.log(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
