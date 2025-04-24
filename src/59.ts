function sum(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(sum([3, 5, 7, 9]));
