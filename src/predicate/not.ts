import { type Predicate, type TypeGuard, trusted } from "@infra-blocks/types";

/**
 * Returns a type guard that reverses a type guard.
 *
 * This function is useful with type guards that narrow union types, mostly.
 * For example, you can pass in a type guard, such as `isUndefined` that asserts
 * that a value is undefined. The type guard returned by `not(isUndefined)`
 * guarantees that whatever you pass in will not be undefined.
 *
 * @example
 * const isLeft = (v) => v === "left";
 * const isNotLeft = not(isLeft);
 * const x = "right" as "left" | "right" | "middle";
 * assert(isNotLeft(x));
 * // The type of x here is "right" | "middle".
 *
 * @param guard - The type guard to reverse.
 *
 * @returns A type guard that asserts the reverse of the provided guard.
 */
export function not<T, Narrowed extends T>(
  guard: TypeGuard<Narrowed, T>,
): <T2 extends T>(v: T2) => v is Exclude<T2, Narrowed>;
/**
 * Returns a predicate that reverses the provided predicate.
 *
 * This is a type unaware version of {@link not} used with a type guard.
 * There are no type-safe guarantees here, just runtime ones.
 *
 * @param predicate - The predicate to reverse.
 *
 * @returns A predicate that negates the provided one.
 */
export function not<T>(predicate: Predicate<T>): Predicate<T>;
export function not<T, Narrowed extends T>(
  guard: TypeGuard<Narrowed, T> | Predicate<T>,
): <T2 extends T>(v: T2) => v is Exclude<T2, Narrowed> {
  return trusted((v: T) => !guard(v));
}
