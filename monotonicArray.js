function monotonicArray (array){
    let isIncreasing = true;
    let decreasing = true;
    for (let i = 0; i < array.length; i++){
        if (array[i] < array[i - 1]){
            isIncreasing = false;
        }
        if (array[i] > array[i - 1]){
            decreasing = false;
        }
    }
    console.log(isIncreasing || decreasing)
}


monotonicArray([1,2,3,4,5,6,7,6])