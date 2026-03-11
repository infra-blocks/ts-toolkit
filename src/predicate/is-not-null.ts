import { isNull } from "es-toolkit";
import { not } from "./not.js";

/**
 * Tests that an input is not null and narrows its type to exclude null.
 *
 * @param value - The value to test.
 *
 * @returns true if the value is not null and narrows its type to exclude null.
 */
export const isNotNull = not(isNull);
