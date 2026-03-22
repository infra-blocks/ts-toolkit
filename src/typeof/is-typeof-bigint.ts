/**
 * A type guard to assess whether a value's `typeof` test is "bigint".
 *
 * @param value - The value to test.
 *
 * @returns Whether the value is a {@link bigint}.
 */
export function isTypeofBigint(value: unknown): value is bigint {
  return typeof value === "bigint";
}
