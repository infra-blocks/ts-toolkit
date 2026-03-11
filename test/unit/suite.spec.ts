import { suite } from "node:test";
import { conditionTests } from "./condition/index.js";
import { predicateTests } from "./predicate/index.js";

suite("suite", () => {
  conditionTests();
  predicateTests();
});
