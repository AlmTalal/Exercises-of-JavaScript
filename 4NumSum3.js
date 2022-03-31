function fourNumSum (array,targetSum){
    let i = 0;
    let j = i + 1;
    let sums = {}
    let quadruplets = [];
    while (i < array.length - 1){
        let numberOne = array[i];
        let numberTwo = array[j];
        let currentSum = numberOne + numberTwo;
        if (j > array.length - 1){
            i++;
            j = i + 1;
            continue;
        }
        else (sums[currentSum] = [numberOne, numberTwo])
        j++;
    }  
  findFourNumSum(sums,targetSum,quadruplets);
  console.log(quadruplets)
}

function findFourNumSum (sums,targetSum,quadruplets){
  let pares = Object.values(sums);
  let left = 0;
  let right = pares.length - 1;
  while (left < right){
      let uno = pares[left][0] , dos = pares[left][1];
      let tres = pares[right][0] , cuatro = pares[right][1];
      let currentSum = uno + dos + tres + cuatro;
      if (currentSum === targetSum){
        quadruplets.push([uno,dos,tres,cuatro])
        left++
      }
      if (currentSum > targetSum){
        right--;
      }
      if (currentSum < targetSum){
        left++ 
      }    
      console.log(1)
  }
}


fourNumSum([7,6,4,-1,5,10,1,6],16)
