/**
 * A type guard to assess whether a value's `typeof` test is "symbol".
 *
 * @param value - The value to test.
 *
 * @returns Whether the value is a {@link symbol}.
 */
export function isTypeofSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}
