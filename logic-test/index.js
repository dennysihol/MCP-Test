function twoSum(array, target) {
    
    for (let i = 0 ; i < array.length ; i++){
        for(let j = i + 1 ; j < array.length ; j++){
            if(array[i] + array[j] == target){
                return [i, j]
            }
        }
    }

}

console.log(twoSum([2,7,11,15], 13));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));