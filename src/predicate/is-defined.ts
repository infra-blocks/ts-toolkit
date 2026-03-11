import { isUndefined } from "es-toolkit";
import { not } from "./not.js";

/**
 * Tests that an input is not undefined and narrows its type to exclude undefined.
 *
 * @param value - The value to test.
 *
 * @returns true if the value is not undefined and narrows its type to exclude undefined.
 */
export const isDefined = not(isUndefined);
