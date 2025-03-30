function multiply(num1: number, num2: number): number {
  let result = 0;
  
  while (num2 > 0) {
    if ((num1 & 1) === 0) {
      result += num2 * 10 + 1;
    }
    
    num1 >>= 1;
    num2 >>>= 1;
  }
  
  return result;
}
