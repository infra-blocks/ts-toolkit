import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { omit } from "es-toolkit";
import { isTypeofUndefined } from "../../../src/index.js";
import { TEST_VALUES } from "./lib.js";

export function isTypeofUndefinedTests() {
  suite(isTypeofUndefined.name, () => {
    for (const [type, value] of Object.entries(
      omit(TEST_VALUES, ["undefined"]),
    )) {
      test(`should return false with ${type}`, () => {
        assert(!isTypeofUndefined(value));
      });
    }

    test("should return true with undefined", () => {
      assert(isTypeofUndefined(TEST_VALUES.undefined));
    });
  });
}
