function validateSubsequence (array,subsequence){
    let i = 0;
    let j = 0;
    let marcador = 0;
    while (i < array.length && j < subsequence.length){
        if (array[i] === subsequence[j]){
            i++;
            j++;
            marcador++;
        }
        if (array[i] !== subsequence[j]){
            i++;
        }
    }
    if (marcador === subsequence.length){
        console.log(true)
    } 
    else console.log(false)
}



validateSubsequence([1,2,3,4,5,6,7,8,9,10],[1,5,9,18])