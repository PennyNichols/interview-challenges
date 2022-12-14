// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

let twoSum = function(nums, target) {
    let answer = []
    for (i in nums){
        let j = i +1
        while (j < nums.length){
            if (nums[i] + nums[j] == target){
                answer.push(i)
                answer.push(j)
                return answer
            }
        }
    }
}

console.log(twoSum([2,3,11,15], 9))