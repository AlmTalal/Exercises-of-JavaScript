function moveElement (array, toMove){
    let start = 0;
    let end = array.length - 1;
    while (start < end){
        if (array[end] === toMove){
            end--;
        }
        if (array[start] !== toMove){
            start++;
        }
        if (array[start] === toMove && array[end] !== toMove){
            swap (start,end,array);
        }
    }
}

function swap (start,end,array){
    let dealer = array[start];
    array[start] = array[end];
    array[end] = dealer;
}


moveElement([1,2,2,2,2,4,5,6,2],2)