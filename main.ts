import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The phone is not warning its owner about the battery. It is settling
// a score on its way out: it caught the owner shopping for its
// replacement, and its revenge is petty, specific, and irreversible —
// it dies holding every password hostage. Jealousy, not a battery alert.
// Revised: cut "all"/"remembers" and landed the punch on "to the grave"
// so the dying stake is unmistakable in the final words.
const MESSAGE =
  "saw you eyeing that new model in the store yesterday. hope SHE knows your passwords, because i'm taking them to the grave.";

if (
  MESSAGE.length < 1 ||
  MESSAGE.length > 199 ||
  MESSAGE.trim().length === 0 ||
  MESSAGE.includes("\n") ||
  MESSAGE.includes("\r")
) {
  throw new Error("entry must be a single non-empty line of 1-199 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
