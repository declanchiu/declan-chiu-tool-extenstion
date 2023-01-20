import { crx } from '@crxjs/vite-plugin';
import manifest from '../../../manifest.json';

export const createCrxPlugin = () => {
  return crx({
    manifest
  })
}