/*Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional
  array of all these quadruplets in no particular order.

If no four numbers sum up to the target sum, the function should return an empty array

Sample input

array=[7,6,4,-1,1,2]
targetSum=16

Sample output=
[[7,6,4,-1],[7,6,1,2]]

// the quadruplets could be ordered differently*/

function forNumSum (array,targetSum){
    array.sort((a,b) => a-b);
    let quadruplets = [];
    let promedio = 0;
    let idxPricipalLeft = 0;
    let idxPricipalRight = array.length - 1;
    let contador = 0;
    while (idxPricipalRight - idxPricipalLeft !== 3){
        let idxRight = idxPricipalRight - 1;
        let idxLeft = idxPricipalLeft + 1;
        while (idxLeft<idxRight){
            let principalLeftNum = array[idxPricipalLeft];
            let principalRightNum = array[idxPricipalRight];
            let leftNum = array[idxLeft];
            let rightNum = array[idxRight];
            let currentSum = principalLeftNum + leftNum + rightNum + principalRightNum;
            if (currentSum > targetSum){
                idxRight --;
                contador ++;
                promedio = promedio + currentSum; 
            }
            if (currentSum < targetSum){
                idxLeft ++;
                contador ++;
                promedio = promedio + currentSum;
            }
            if (currentSum === targetSum){
                idxLeft ++;
                contador ++;
                promedio = promedio + currentSum;
                quadruplets.push([principalLeftNum,leftNum,rightNum,principalRightNum])
            }
        }
        promedio = promedio / contador;
        if (promedio > targetSum){
            idxPricipalRight--;
        }
        if (promedio <= targetSum){
            idxPricipalLeft++;
        }
        if (idxPricipalRight - idxPricipalLeft === 3){
            break;
        }
        promedio = 0;
        contador = 0;
    }
    if (array.length - 1 === 3 ){
        forArrayOfFour(array,targetSum,quadruplets,idxPricipalLeft,idxPricipalRight);
    }
    console.log(quadruplets);
}


function forArrayOfFour(array,targetSum,quadruplets,idxPricipalLeft,idxPricipalRight){
    if (array[idxPricipalLeft]+array[idxPricipalLeft + 1]+array[idxPricipalRight - 1]+array[idxPricipalRight] === targetSum){
        quadruplets.push([array[idxPricipalLeft],array[idxPricipalLeft + 1],array[idxPricipalRight - 1],array[idxPricipalRight]]);
    }
}

forNumSum([7,6,4,-1,5,10,1,6],16)
