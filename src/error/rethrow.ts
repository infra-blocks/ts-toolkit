/**
 * Takes an error and rethrows it.
 *
 * It can be used in places expecting error handlers to save a few charactes.
 *
 * @example
 * // Without
 * myAsyncFunction().catch((err) => { throw err; });
 * // With
 * myAsyncFunction().catch(rethrow);
 *
 * @param err - The error to rethrow.
 */
export function rethrow(err: unknown): never {
  throw err;
}
