import { suite } from "node:test";
import { conditionTests } from "./condition/index.js";
import { errorTests } from "./error/index.js";
import { predicateTests } from "./predicate/index.js";
import { typeofTests } from "./typeof/index.js";

suite("suite", () => {
  conditionTests();
  errorTests();
  predicateTests();
  typeofTests();
});
