import { suite, test } from "node:test";
import { assert, expectTypeOf } from "@infra-blocks/test";
import { isNil, isNull, isUndefined } from "es-toolkit";
import { not } from "../../../src/index.js";

export function notTests() {
  suite(not.name, () => {
    test("should reverse the guard for isUndefined", () => {
      const defined = not(isUndefined);
      const x = 42 as number | undefined;
      assert(defined(x));
      expectTypeOf(x).toEqualTypeOf<number>();
    });

    test("should reverse the guard for isNull", () => {
      const notNull = not(isNull);
      const x = 42 as number | null;
      assert(notNull(x));
      expectTypeOf(x).toEqualTypeOf<number>();
    });

    test("should reverse the guard for isNil", () => {
      const notNull = not(isNil);
      const x = 42 as number | null | undefined | string;
      assert(notNull(x));
      expectTypeOf(x).toEqualTypeOf<number | string>();
    });

    test("should reverse the guard for a custom union", () => {
      const isLeft = (v: unknown) => v === "left";
      const isNotLeft = not(isLeft);
      const x = "right" as "left" | "right" | "middle";
      assert(isNotLeft(x));
      expectTypeOf(x).toEqualTypeOf<"right" | "middle">();
    });

    test("should work with a plain predicate", () => {
      const isEven = (v: number) => v % 2 === 0;
      const isOdd = not(isEven);
      const x = 43;
      assert(isOdd(x));
      expectTypeOf(x).toEqualTypeOf<number>();
    });
  });
}
