import { suite, test } from "node:test";
import { assert, expectTypeOf } from "@infra-blocks/test";
import { isDefined } from "../../../src/index.js";

export function isDefinedTests() {
  suite("isDefined", () => {
    test("should return false when the value is undefined", () => {
      assert(!isDefined(undefined));
    });

    test("should return true and narrow the type when the value is defined", () => {
      const x = 42 as number | string | undefined | null;
      assert(isDefined(x));
      expectTypeOf(x).toEqualTypeOf<number | string | null>();
    });
  });
}
