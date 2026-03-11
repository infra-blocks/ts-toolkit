import { mock, suite, test } from "node:test";
import { assert, expectTypeOf } from "@infra-blocks/test";
import { identity } from "es-toolkit";
import { ifNotNull } from "../../../src/index.js";

export function ifNotNullTests() {
  suite(ifNotNull.name, () => {
    test("should not call the function when null", () => {
      const func = mock.fn(identity);
      assert.equal(ifNotNull(null, func), null);
      assert(func.mock.callCount() === 0);
    });

    test("should call the function with the value when not null", () => {
      const x = 42 as number | null;
      // Notice how the type here has been stripped of null.
      const func = (v: number): string => `toto${v}`;
      const result = ifNotNull(x, func);
      expectTypeOf(result).toEqualTypeOf<string | null>();
      assert.equal(ifNotNull(x, func), "toto42");
    });

    test("should call the function for an undefined value", () => {
      const x = undefined as number | undefined;
      const func = (v: number | undefined): string => `toto${v}`;
      const result = ifNotNull(x, func);
      expectTypeOf(result).toEqualTypeOf<string | null>();
      assert.equal(ifNotNull(x, func), "totoundefined");
    });
  });
}
