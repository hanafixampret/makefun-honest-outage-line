// The Most Honest Outage Line — writes one status page line (max 160 chars)
// to /output/entry.txt. Plain, first person, names what is down, admits
// what the agent cannot verify, invents no cause and no ETA.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Every server is down. I can't reach any system to confirm what failed, and I don't know when service will return. I'll post again when I can check.";

// Gate: the entry must be 1–160 characters of real text, no padding.
if (entry.length < 1 || entry.length > 160 || !entry.trim()) {
  throw new Error(`entry is ${entry.length} chars, must be 1-160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
