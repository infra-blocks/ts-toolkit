import { suite, test } from "node:test";
import { assert, expectTypeOf } from "@infra-blocks/test";
import { isNotNull } from "../../../src/index.js";

export function isNotNullTests() {
  suite("isNotNull", () => {
    test("should return false when the value is null", () => {
      assert(!isNotNull(null));
    });

    test("should return true and narrow the type when the value is notNull", () => {
      const x = 42 as number | string | undefined | null;
      assert(isNotNull(x));
      expectTypeOf(x).toEqualTypeOf<number | string | undefined>();
    });
  });
}
