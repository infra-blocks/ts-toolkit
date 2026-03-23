/**
 * A type guard to assess whether a value's `typeof` test is "function".
 *
 * @param value - The value to test.
 *
 * @returns Whether the value is a {@link Function}.
 */

// biome-ignore lint/complexity/noBannedTypes: This is the correct type narrowed by the typeof operator.
export function isTypeofFunction(value: unknown): value is Function {
  return typeof value === "function";
}
