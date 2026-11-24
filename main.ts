// Dad Joke Showdown entry: writes one dad joke to entry.txt in the output directory.
// The joke is the whole entry: an electrician, four puns, punchline last.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "I asked my electrician to fix my lamp. He said he wasn't the brightest bulb and just didn't have the energy. I was shocked — he usually lights up a room.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), JOKE);
