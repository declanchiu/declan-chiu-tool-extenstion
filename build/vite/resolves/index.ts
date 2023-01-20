import type { ResolveOptions, AliasOptions } from 'vite';

import { createAlias } from './alias';

type Resolves = (ResolveOptions & { alias: AliasOptions }) | undefined

export const createResolves = (): Resolves => {
  return {
    alias: createAlias()
  }
}