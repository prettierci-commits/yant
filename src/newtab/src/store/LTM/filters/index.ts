import { MutationPayload } from "vuex";

export type Filter = (mutation: MutationPayload) => boolean;

export function dummyFilter(): boolean {
  return true;
}

export function mutationFilter(mutations: string[]): Filter {
  return function(mutation: MutationPayload): boolean {
    return mutations.indexOf(mutation.type) >= 0;
  };
}
