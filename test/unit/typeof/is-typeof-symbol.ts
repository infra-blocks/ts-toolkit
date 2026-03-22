import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { omit } from "es-toolkit";
import { isTypeofSymbol } from "../../../src/index.js";
import { TEST_VALUES } from "./lib.js";

export function isTypeofSymbolTests() {
  suite(isTypeofSymbol.name, () => {
    for (const [type, value] of Object.entries(omit(TEST_VALUES, ["symbol"]))) {
      test(`should return false with ${type}`, () => {
        assert(!isTypeofSymbol(value));
      });
    }

    test("should return true with symbol", () => {
      assert(isTypeofSymbol(TEST_VALUES.symbol));
    });
  });
}
