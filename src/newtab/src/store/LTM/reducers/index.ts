export type Reducer<S> = (state: S) => Partial<S>;

export function saveAll<S>(state: S): S {
  return state;
}
