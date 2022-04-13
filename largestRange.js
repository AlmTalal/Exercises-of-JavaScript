function largestRange (array){
    let numbers = {};
    let range = [];
    let absoluteDifference = 0;
    let currentRange = [];
    for (nums of array){
        numbers[nums] = true;
    }
    for (let i = 0; i < array.length; i ++){
        if ((array[i] + 1 in numbers || array[i] - 1 in numbers) && numbers[array[i]] === true) {
            findTheRange(numbers,i,currentRange,array)
            numbers[array[i]] = false;
            let currentDifference = currentRange[1] - currentRange[0];
            if (currentDifference > absoluteDifference){
                    range = currentRange;
                    absoluteDifference = currentDifference;
                    currentRange = [];
                }
        }
        else {continue;}
    }
    console.log(range)
}


function findTheRange(numbers,i,currentRange,array){
    let currentLowest = array[i];
    let currentHighest = array [i];
    while(currentLowest in numbers || currentHighest in numbers){
        if (currentLowest - 1 in numbers){
            numbers[currentLowest - 1] = false
            currentLowest--
        }
        if (currentHighest + 1 in numbers){
            numbers[currentHighest + 1] = false
            currentHighest++
        }
        else if (!(currentLowest + 1 in numbers && currentHighest + 1 in numbers))
        {break}
    }
    currentRange.push(currentLowest,currentHighest)
}
largestRange([1,11,3,0,15,5,2,4,10,7,12,6])
/*
function largestRange(array) {
	let bestRange=[];
	let longestLength = 0;
	const nums={};
	for (const num of array){
		nums[num] = true;
	}
	for (const num of array){
		if (!nums[num]) continue;
		nums[num]=false;
		let currentLength =1;
		let left = num-1;
		let right = num+1;
		while (left in nums){
			nums[left]= false;
			currentLength ++;
			left --;
		}
		while (right in nums){
			nums[right]=false;
			currentLength++;
			right++;
		}
		if (currentLength > longestLength){
			longestLength = currentLength;
			bestRange = [left+1,right-1];
		}
			
	}
		return bestRange;
}*/