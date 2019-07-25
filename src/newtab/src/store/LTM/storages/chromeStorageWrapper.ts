/* global chrome: false */

import { GenericStorageWrapper } from "./GenericStorageWrapper";

interface Result {
  [key: string]: any;
}
interface ChromeStorage {
  get(key: string[], callback: (result: Result) => void): void;
  set(data: Result, callback: () => void): void;
}

export function chromeStorageWrapper<Outer, Inner>(
  key: string = "LTM",
  storage: ChromeStorage = chrome.storage.sync,
  toInner?: (data: Outer) => Inner,
  toOuter?: (data: Inner) => Outer
): GenericStorageWrapper<Outer, Inner> {
  return new GenericStorageWrapper(
    key,
    function setItem(key, data): Promise<void> {
      return new Promise(
        (resolve): void => {
          storage.set({ [key]: data }, resolve);
        }
      );
    },
    function getItem(key): Promise<Inner | null> {
      return new Promise(
        (resolve): void => {
          storage.get(
            [key],
            (result): void => {
              resolve(result[key]);
            }
          );
        }
      );
    },
    toInner,
    toOuter
  );
}
