/**
 * A type guard to assess whether a value's `typeof` test is "undefined".
 *
 * @param value - The value to test.
 *
 * @returns Whether the value is {@link undefined}.
 */
export function isTypeofUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}
