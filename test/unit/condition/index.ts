import { suite } from "node:test";
import { ifDefinedTests } from "./if-defined.js";
import { ifNotNullTests } from "./if-not-null.js";

export function conditionTests() {
  suite("condition", () => {
    ifDefinedTests();
    ifNotNullTests();
  });
}
