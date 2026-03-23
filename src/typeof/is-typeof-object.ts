/**
 * A type guard to assess whether a value's `typeof` test is "object".
 *
 * Now, unlike most `typeof` tests, this one is a little funky. This is
 * because `typeof null === "object"`. The return value signifies that
 * fact.
 *
 * @param value - The value to test.
 *
 * @returns Whether the value is an {@linki object} or {@link null}.
 */
export function isTypeofObject(value: unknown): value is object | null {
  return typeof value === "object";
}
