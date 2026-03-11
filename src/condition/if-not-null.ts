import type { Transform } from "@infra-blocks/types";
import { isNotNull } from "../predicate/is-not-null.js";

/**
 * Takes a value and transforms it only if it is not `null`.
 *
 * If the value is `null`, than the transformation function is not called
 * and the function immediately returns `null`.
 *
 * Otherwise, the function is called with the guarantee that T is not `null`.
 *
 * This is a useful function to shorten certain snippets.
 * @example
 * const x = someVariable !== null ? someFunction(someVariable) : null;
 * // Becomes
 * const x = ifNotNull(someVariable, someFunction);
 *
 * @param value - The value to test and forward to the function.
 * @param transform - The transformation function.
 *
 * @returns Either `null` when the input is `null`, or the return value
 * of the transform.
 */
export function ifNotNull<T, R>(
  value: T | null,
  transform: Transform<T, R>,
): R | null {
  return isNotNull(value) ? transform(value) : null;
}
