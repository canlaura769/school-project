function fibonacci(n: number): number[] {
    if (n <= 1) return [0];
    let fibSequence: number[] = [0, 1];
    while (fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2] < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

console.log(fibonacci(100)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
