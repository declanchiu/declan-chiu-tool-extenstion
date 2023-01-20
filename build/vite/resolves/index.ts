import type { ResolveOptions, AliasOptions } from 'vite';

import { createAlias } from './alias';

type Resolves = (ResolveOptions & { alias: AliasOptions }) | undefined

const createResolves = (): Resolves => {
  return {
    alias: createAlias()
  }
}

export default createResolves;