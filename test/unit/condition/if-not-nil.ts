import { mock, suite, test } from "node:test";
import { assert, expectTypeOf } from "@infra-blocks/test";
import { identity } from "es-toolkit";
import { ifNotNil } from "../../../src/index.js";

export function ifNotNilTests() {
  suite(ifNotNil.name, () => {
    test("should not call the function when null", () => {
      const func = mock.fn(identity);
      assert.equal(ifNotNil(null, func), null);
      assert(func.mock.callCount() === 0);
    });

    test("should not call the function when undefined", () => {
      const func = mock.fn(identity);
      assert.equal(ifNotNil(undefined, func), undefined);
      assert(func.mock.callCount() === 0);
    });

    test("should call the function with the value when not null and not undefined", () => {
      const x = 42 as number | null | undefined;
      // Notice how the type here has been stripped of null.
      const func = (v: number): string => `toto${v}`;
      const result = ifNotNil(x, func);
      expectTypeOf(result).toEqualTypeOf<string | null | undefined>();
      assert.equal(ifNotNil(x, func), "toto42");
    });
  });
}
