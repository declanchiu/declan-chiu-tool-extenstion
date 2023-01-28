import type { AliasOptions } from 'vite';

import { resolve } from 'path';

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
}

export const createAlias = (): AliasOptions => {
  return [
    {
      find: '@',
      replacement: pathResolve('build') + "/"
    },
    {
      find: '#assets',
      replacement: pathResolve('assets') + "/"
    }
  ]
}