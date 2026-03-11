import type { Nil, Transform } from "@infra-blocks/types";
import { isNotNil } from "es-toolkit";

/**
 * Takes a value and transforms it only if it is not `null | undefined`.
 *
 * If the value is `null | undefined`, than the transformation function is not called
 * and the function immediately returns the value, which is `null | undefined`.
 *
 * Otherwise, the function is called with the guarantee that T is not `null | undefined`.
 *
 * This is a useful function to shorten certain snippets.
 * @example
 * const x = someVariable != null ? someFunction(someVariable) : someVariable;
 * // Becomes
 * const x = ifNotNil(someVariable, someFunction);
 *
 * @param value - The value to test and forward to the function.
 * @param transform - The transformation function.
 *
 * @returns Either `null | undefined` when the input is `null | undefined`, or the return value
 * of the transform.
 */
export function ifNotNil<T, R>(
  value: T | Nil,
  transform: Transform<T, R>,
): R | Nil {
  return isNotNil(value) ? transform(value) : value;
}
