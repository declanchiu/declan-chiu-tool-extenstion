import type { PluginOption } from 'vite';

import { createSolidPlugin } from './solid';
import { createCrxPlugin } from './crx';


const createPlugins = () => {
  const plugins: PluginOption[] = [];

  plugins.push(createSolidPlugin());
  plugins.push(createCrxPlugin());

  return plugins;
}

export default createPlugins