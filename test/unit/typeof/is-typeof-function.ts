import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { omit } from "es-toolkit";
import { isTypeofFunction } from "../../../src/index.js";
import { TEST_VALUES } from "./lib.js";

export function isTypeofFunctionTests() {
  suite(isTypeofFunction.name, () => {
    for (const [type, value] of Object.entries(
      omit(TEST_VALUES, ["function"]),
    )) {
      test(`should return false with ${type}`, () => {
        assert(!isTypeofFunction(value));
      });
    }

    test("should return true with anonymous function", () => {
      assert(isTypeofFunction(TEST_VALUES.function));
    });

    test("should return true with static function", () => {
      function func() {}
      assert(isTypeofFunction(func));
    });

    test("should return true with class", () => {
      class Toto {}
      assert(isTypeofFunction(Toto));
    });

    test("should return true for an instance of Function", () => {
      assert(isTypeofFunction(new Function()));
    });
  });
}
