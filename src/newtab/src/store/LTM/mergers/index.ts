export type Merger<S> = (loaded: Partial<S>, previous: S) => S

export function replace<S> (loaded: Partial<S>): S {
  return loaded as S
}
