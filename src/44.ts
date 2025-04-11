function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5, sqrtNum = Math.sqrt(num); i <= sqrtNum; i += 6)
    if (num % i === 0 || num % (i + 2) === 0) return false;
  return true;
}

function sumOfSquares(n: number): number {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i * i;
  }
  return result;
}
