import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const version = (process.env.VITE_SITE_VERSION || process.env.npm_config_site_version || 'master').toLowerCase();

console.log('process.env.VITE_SITE_VERSION:', process.env.VITE_SITE_VERSION);
console.log('process.env.npm_config_site_version:', process.env.npm_config_site_version);

const root = process.cwd();
const sourceDir = path.join(root, 'versioned-assets', version);
const publicDir = path.join(root, 'public');

if (!fs.existsSync(sourceDir)) {
  console.warn(`[syncVersionAssets] No versioned-assets directory for version "${version}".`);
  process.exit(0);
}

for (const fileName of ['Manoj_Mehta_Resume.pdf', 'Manoj_Mehta_Resume.docx']) {
  const src = path.join(sourceDir, fileName);
  const dest = path.join(publicDir, fileName);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[syncVersionAssets] Copied ${fileName} for ${version}`);
  } else {
    console.warn(`[syncVersionAssets] Missing file: ${src}`);
  }
}
