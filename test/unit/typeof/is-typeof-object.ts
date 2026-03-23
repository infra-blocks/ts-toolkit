import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { omit } from "es-toolkit";
import { isTypeofObject } from "../../../src/index.js";
import { TEST_VALUES } from "./lib.js";

export function isTypeofObjectTests() {
  suite(isTypeofObject.name, () => {
    for (const [type, value] of Object.entries(
      omit(TEST_VALUES, ["object", "null"]),
    )) {
      test(`should return false with ${type}`, () => {
        assert(!isTypeofObject(value));
      });
    }

    test("should return true with object", () => {
      assert(isTypeofObject(TEST_VALUES.object));
    });

    test("should return true with null", () => {
      assert(isTypeofObject(TEST_VALUES.null));
    });
  });
}
