import type { PluginOption } from 'vite';

import { createSolidPlugin } from './solid';
import { createCrxPlugin } from './crx';


export const createPlugins = () => {
  const plugins: PluginOption[] = [];

  plugins.push(createSolidPlugin());
  plugins.push(createCrxPlugin());

  return plugins;
}