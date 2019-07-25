import deepmerge, { Options } from "deepmerge";

export type Merger<S> = (loaded: Partial<S>, previous: S) => S;

export function replace<S>(loaded: Partial<S>): S {
  return loaded as S;
}

export function shallowMerge<S>(loaded: Partial<S>, previous: S): S {
  return {
    ...previous,
    ...loaded
  };
}

export function deepMerge<S>(loaded: Partial<S>, previous: S): S {
  return deepmerge(previous, loaded, {
    // Replace arrays instead of concatenating them
    arrayMerge: (destinationArray, sourceArray): any[] => sourceArray
  });
}

export function configurableDeepMerge<S>(options: Options): Merger<S> {
  return function innerDeepMerge<S>(loaded: Partial<S>, previous: S): S {
    return deepmerge(previous, loaded, options);
  };
}
