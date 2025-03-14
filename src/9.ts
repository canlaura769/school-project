import { getRandomInt } from "https://deno.land/x/random@v1.1.2/mod.ts";

function createRandomTsCode(): string {
  const lines = [];
  for (let i = 0; i < getRandomInt(5, 10); i++) {
    lines.push(`const ${getRandomInt(100, 999)} = "${getRandomInt(1000, 9999)}";`);
  }
  return lines.join("\n");
}