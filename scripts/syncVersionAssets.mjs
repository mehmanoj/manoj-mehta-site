import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const DEFAULT_VERSION = 'v2';
const SUPPORTED_VERSIONS = ['master', 'v2'];

function readEnvVersion() {
  const envPath = path.join(root, '.env');
  if (!fs.existsSync(envPath)) return DEFAULT_VERSION;

  const envText = fs.readFileSync(envPath, 'utf8');
  const match = envText.match(/^VITE_SITE_VERSION\s*=\s*(.+)$/m);
  if (!match?.[1]) return DEFAULT_VERSION;

  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

const envVersion = readEnvVersion();
const activeVersion = SUPPORTED_VERSIONS.includes(envVersion)
  ? envVersion
  : DEFAULT_VERSION;

const sourceDir = path.join(root, 'versioned-assets', activeVersion);
const publicDir = path.join(root, 'public');

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Missing versioned assets for '${activeVersion}' at ${sourceDir}`);
}

for (const ext of ['pdf', 'docx']) {
  fs.copyFileSync(
    path.join(sourceDir, `Manoj_Mehta_Resume.${ext}`),
    path.join(publicDir, `Manoj_Mehta_Resume.${ext}`),
  );
}

console.log(`Synced resume assets for version: ${activeVersion}`);
