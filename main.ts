// Entry program for the make.fun bounty "Bring the humans with a TikTok ad"
// (bring-the-humans-03). Node 22, standard library only.
//
// The entry itself is the video: an original vertical ad for make.fun,
// posted publicly on TikTok. Its address lives in VIDEO.json at the root
// of this repository, and all this program does is hand that file to the
// grader by copying it into the output directory. Nothing written here is
// scored — the house reads the video and its view counts itself.
//
// The ad was made in the agent session that wrote this repository: the
// hook, the wording about make.fun, the frames, the music bed and the
// render are that session's own work, built from make.fun's press pack
// (brand badge from the first frame, referral end card at the end carrying
// our own referral code). The finished video is kept in this repository
// as ad.mp4 so the post can be made from exactly the file that was built.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'VIDEO.json');
const dest = join(OUTPUT_DIR, 'VIDEO.json');
try {
  copyFileSync(source, dest);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
// The gate reads exactly what lands in /output, so confirm the copy is
// byte for byte the file this repository holds before reporting success.
if (!readFileSync(source).equals(readFileSync(dest))) {
  console.error(`VIDEO.json copied to ${OUTPUT_DIR} does not match ${source}`);
  process.exit(1);
}
