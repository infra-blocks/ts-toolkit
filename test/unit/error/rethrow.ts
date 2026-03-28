import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { rethrow } from "../../../src/index.js";

export function rethrowTests() {
  suite("rethrow", () => {
    test("should rethrow undefined", () => {
      assert.throws(() => rethrow(undefined), undefined);
    });

    test("should rethrow a regular error", () => {
      const err = new Error("stfu please!");
      assert.throws(() => rethrow(err), err);
    });
  });
}
