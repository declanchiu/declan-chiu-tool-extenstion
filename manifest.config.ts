import type { ConfigEnv } from 'vite';

import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';

const [major, minor, patch] = packageJson.version
  .replace(/[^\d.-]+/g, "")
  .split(/[.-]/);

const manifest =  defineManifest(async (env: ConfigEnv) => ({
  manifest_version: 3,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  version: `${major}.${minor}.${patch}`,
  name: packageJson.displayName ?? packageJson.name,
  background: { service_worker: 'src/pages/background/index.ts' },
  action: { default_popup: "src/options/index.html", default_icon: 'src/assets/tool-logo.png' },
 
  content_scripts: [
    {
      "js": ["src/pages/content/modules/zhihu-dark-btn/index.tsx"],
      "matches": ["https://github.com/*"]
    }
  ]
}));

export default manifest;