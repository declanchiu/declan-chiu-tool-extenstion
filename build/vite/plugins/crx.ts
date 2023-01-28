import { crx } from '@crxjs/vite-plugin';
import manifest from '../../../manifest.config';

export const createCrxPlugin = () => {
  return crx({
    manifest
  })
}