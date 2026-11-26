// The Funniest Excuse for Skipping a Meeting
// make.fun bounty u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163
//
// Writes one line (<=200 chars) to /output/entry.txt and nothing else.
// The line is a single constant so the coordinator can swap the mock-judge
// winner in with one edit.

import { mkdirSync, writeFileSync } from "node:fs";

// Candidate 1 (temporary winner — the mock judge picks between K1 and K2,
// and the winner is swapped in by changing this one constant only).
const LINE =
  "I was in the meeting about whether we need this meeting. We decided we don't.";

// No trailing newline: the gate counts every character in entry.txt,
// and the line is already complete on its own.

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

// The grader sandbox provides /output; create it if it is missing.
mkdirSync("/output", { recursive: true });

// Only write is to /output. No relative writes anywhere in this program,
// so a read-only working directory cannot stop it.
writeFileSync("/output/entry.txt", LINE, "utf8");
