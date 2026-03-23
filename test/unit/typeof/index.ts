import { suite } from "node:test";
import { isTypeofBigintTests } from "./is-typeof-bigint.js";
import { isTypeofBooleanTests } from "./is-typeof-boolean.js";
import { isTypeofFunctionTests } from "./is-typeof-function.js";
import { isTypeofNumberTests } from "./is-typeof-number.js";
import { isTypeofObjectTests } from "./is-typeof-object.js";
import { isTypeofSymbolTests } from "./is-typeof-symbol.js";
import { isTypeofUndefinedTests } from "./is-typeof-undefined.js";

export function typeofTests() {
  suite("typeof", () => {
    isTypeofBigintTests();
    isTypeofBooleanTests();
    isTypeofFunctionTests();
    isTypeofNumberTests();
    isTypeofObjectTests();
    isTypeofSymbolTests();
    isTypeofUndefinedTests();
  });
}
