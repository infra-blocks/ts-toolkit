import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { omit } from "es-toolkit";
import { isTypeofBoolean } from "../../../src/index.js";
import { TEST_VALUES } from "./lib.js";

export function isTypeofBooleanTests() {
  suite(isTypeofBoolean.name, () => {
    for (const [type, value] of Object.entries(
      omit(TEST_VALUES, ["boolean"]),
    )) {
      test(`should return false with ${type}`, () => {
        assert(!isTypeofBoolean(value));
      });
    }

    test("should return true with boolean", () => {
      assert(isTypeofBoolean(TEST_VALUES.boolean));
    });
  });
}
