function forNumSum (array,targetSum){
    const sums = {};
    const quadruplets = [];
    for(let i = 1 ; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            let currentSum = array[i] + array[j];
            let difference = targetSum - currentSum;
            if (difference in sums){
                for(pair of sums[difference]){
                    quadruplets.push([pair.concat(array[i],array[j])])
                }
            }
        }
        for (let k = i - 1; k > -1; k--){
            let currentSum = array[i] + array[k];
            if (!(currentSum in sums)){
                sums[currentSum] =[[array[i],array[k]]];
            }
            else (sums[currentSum].push([array[i],array[k]]))
        } 
    }
    console.log(quadruplets)
}

forNumSum([7,6,4,-1,5,10,1,-4,8,2,9,-3],10)
