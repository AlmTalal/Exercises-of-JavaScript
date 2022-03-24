function smallestDifference (groupOne,groupTwo){
    groupOne.sort((a,b) => a-b);
    groupTwo.sort((a,b) => a-b);
    let i = 0;
    let j = 0;
    let currentMinimum = Infinity;
    let currentSum = undefined;
    let smallestDifferenceArray = [];
    while (i < groupOne.length && j < groupTwo.length){
        let numberOne = groupOne[i];
        let numberTwo = groupTwo[j];
        if (numberOne < numberTwo){
            currentSum = numberTwo - numberOne;
            i++;
        }
        if (numberOne >= numberTwo){
            currentSum = numberOne - numberTwo;
            j++;
        }
        if (currentSum < currentMinimum){
            currentMinimum = currentSum;
            smallestDifferenceArray = [numberOne,numberTwo];
        }
        if (currentSum === 0){
            smallestDifferenceArray = [numberOne,numberTwo]; 
            break;
        }
        else {continue;}
    }
    console.log(smallestDifferenceArray);
}

smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],[-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]);