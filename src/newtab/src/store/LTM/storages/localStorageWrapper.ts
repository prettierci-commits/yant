import { GenericStorageWrapper } from "./GenericStorageWrapper";

interface StringStorage {
  getItem(key: string): string | null;
  setItem(key: string, data: string): void;
}
interface Preprocessor<T> {
  parse(data: string): T;
  stringify(data: T): string;
}

export function localStorageWrapper<T>(
  key: string = "LTM",
  preprocessor: Preprocessor<T> = JSON,
  storage: StringStorage = localStorage
): GenericStorageWrapper<T, string> {
  return new GenericStorageWrapper(
    key,
    function setItem(key, data): void {
      storage.setItem(key, data);
    },
    function getItem(key): string | null {
      return storage.getItem(key);
    },
    function toInner(data): string {
      return preprocessor.stringify(data);
    },
    function toOuter(data): T {
      return preprocessor.parse(data);
    }
  );
}
