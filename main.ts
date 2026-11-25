import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? (existsSync('/output') ? '/output' : join(rootDir, 'out'));
mkdirSync(outDir, { recursive: true });
copyFileSync(join(rootDir, 'entry.png'), join(outDir, 'entry.png'));
