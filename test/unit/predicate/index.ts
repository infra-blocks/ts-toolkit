import { suite } from "node:test";
import { isDefinedTests } from "./is-defined.js";
import { isNotNullTests } from "./is-not-null.js";
import { notTests } from "./not.js";

export function predicateTests() {
  suite("predicate", () => {
    isDefinedTests();
    isNotNullTests();
    notTests();
  });
}
