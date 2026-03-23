/**
 * A type guard to assess whether a value's `typeof` test is "number".
 *
 * @param value - The value to test.
 *
 * @returns Whether the value is a {@link number}.
 */
export function isTypeofNumber(value: unknown): value is number {
  return typeof value === "number";
}
