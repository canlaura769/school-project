// This is an example TypeScript code for generating a random function.
import { createRandom } from "random-ts";

/**
 * Generates a random value between two given numbers (inclusive).
 * @param min - The minimum number to generate values for.
 * @param max - The maximum number to generate values for.
 */
function getRandomValue(min: number, max: number): number {
  return Math.floor(createRandom(min, max));
}

// Example usage:
console.log(getRandomValue(1, 10)); // Output: 5
console.log(getRandomValue(10, 20)); // Output: 15
