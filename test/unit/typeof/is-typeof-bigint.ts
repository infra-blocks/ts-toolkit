import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { omit } from "es-toolkit";
import { isTypeofBigint } from "../../../src/index.js";
import { TEST_VALUES } from "./lib.js";

export function isTypeofBigintTests() {
  suite(isTypeofBigint.name, () => {
    for (const [type, value] of Object.entries(omit(TEST_VALUES, ["bigint"]))) {
      test(`should return false with ${type}`, () => {
        assert(!isTypeofBigint(value));
      });
    }

    test("should return true with bigint", () => {
      assert(isTypeofBigint(TEST_VALUES.bigint));
    });
  });
}
