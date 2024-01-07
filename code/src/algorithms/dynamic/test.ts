function rob(nums: number[]): number {
    const memo: number[] = new Array(nums.length).fill(-1)
    return robHelper(nums, 0, memo)
}

function robHelper(nums: number[], index: number, memo: number[]): number {
    console.log('index', index)

    if (index > nums.length - 1) return 0

    if (memo[index] !== -1) return memo[index]

    const robCurrHouse = nums[index] + robHelper(nums, index + 2, memo)
    const skipCurrHouse = robHelper(nums, index + 1, memo)
    const result = Math.max(robCurrHouse, skipCurrHouse)

    memo[index] = result

    return result
}

console.log('\nRob', rob([1, 3, 5, 2]))
