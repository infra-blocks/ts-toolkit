import { mock, suite, test } from "node:test";
import { assert, expectTypeOf } from "@infra-blocks/test";
import { identity } from "es-toolkit";
import { ifDefined } from "../../../src/index.js";

export function ifDefinedTests() {
  suite(ifDefined.name, () => {
    test("should not call the function when undefined", () => {
      const func = mock.fn(identity);
      assert.equal(ifDefined(undefined, func), undefined);
      assert(func.mock.callCount() === 0);
    });

    test("should call the function with the defined value", () => {
      const x = 42 as number | undefined;
      // Notice how the type here has been stripped of undefined.
      const func = (v: number): string => `toto${v}`;
      const result = ifDefined(x, func);
      expectTypeOf(result).toEqualTypeOf<string | undefined>();
      assert.equal(ifDefined(x, func), "toto42");
    });

    test("should call the function for a null value", () => {
      const x = null as number | null;
      const func = (v: number | null): string => `toto${v}`;
      const result = ifDefined(x, func);
      expectTypeOf(result).toEqualTypeOf<string | undefined>();
      assert.equal(ifDefined(x, func), "totonull");
    });
  });
}
