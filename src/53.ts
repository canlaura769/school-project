function addTen(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      nums[i]++;
    }
  }
  return nums;
}

const inputNums: number[] = [1, 2, 3, 4, 5];
console.log(addTen(inputNums));
