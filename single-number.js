function singleNumber(nums) {
    let numMap = new Map()
    const addToMap = (item) => {
        if (numMap.has(item)){
            numMap.delete(item)
        } else {
         numMap.set(item, 1)
        }
    }
    nums.forEach(addToMap)
    return numMap.keys().next().value
 }
console.log(singleNumber([4,1,2,1,2]))