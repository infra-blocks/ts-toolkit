/**
 * A type guard to assess whether a value's `typeof` test is "boolean".
 *
 * @param value - The value to test.
 *
 * @returns Whether the value is a {@link boolean}.
 */
export function isTypeofBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}
