import type { Transform } from "@infra-blocks/types";
import { isDefined } from "../predicate/index.js";

/**
 * Takes a value and transforms it only if it is not `undefined`.
 *
 * If the value is `undefined`, than the transformation function is not called
 * and the function immediately returns `undefined`.
 *
 * Otherwise, the function is called with the guarantee that T is not `undefined`.
 *
 * This is a useful function to shorten certain snippets.
 * @example
 * const x = someVariable !== undefined ? someFunction(someVariable) : undefined;
 * // Becomes
 * const x = ifDefined(someVariable, someFunction);
 *
 * @param value - The value to test and forward to the function.
 * @param transform - The transformation function.
 *
 * @returns Either `undefined` when the input is `undefined`, or the return value
 * of the transform.
 */
export function ifDefined<T, R>(
  value: T | undefined,
  transform: Transform<T, R>,
): R | undefined {
  return isDefined(value) ? transform(value) : undefined;
}
