import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { omit } from "es-toolkit";
import { isTypeofNumber } from "../../../src/index.js";
import { TEST_VALUES } from "./lib.js";

export function isTypeofNumberTests() {
  suite(isTypeofNumber.name, () => {
    for (const [type, value] of Object.entries(omit(TEST_VALUES, ["number"]))) {
      test(`should return false with ${type}`, () => {
        assert(!isTypeofNumber(value));
      });
    }

    test("should return true with number", () => {
      assert(isTypeofNumber(TEST_VALUES.number));
    });
  });
}
