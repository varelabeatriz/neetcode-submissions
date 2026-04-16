class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let answer = [];
        let hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if ( hashMap.has(complement) && hashMap.get(complement) != i) {
                answer.push(hashMap.get(target - nums[i]), i)
                return answer;
            }

            hashMap.set(nums[i], i);
        }
    }
}
