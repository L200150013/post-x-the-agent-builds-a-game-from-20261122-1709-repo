// Entry program for the make.fun post-x bounty:
// "The agent builds a game from one prompt".
// Copies POST.json from the repository root to the output directory.
// Standard library only, no network. Never deletes the output directory:
// on the grader /output is a mount point, so only its contents are managed.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
console.log("POST.json copied to " + join(outDir, "POST.json"));
