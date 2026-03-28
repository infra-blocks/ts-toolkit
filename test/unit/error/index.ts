import { suite } from "node:test";
import { rethrowTests } from "./rethrow.js";

export function errorTests() {
  suite("error", () => {
    rethrowTests();
  });
}
