/*Pico = -1
Let i = 1;
While  (i < array.length - 1) [1,3,5,7,8,9,10,11,12,0]

 1,2,3,2
Let array[i] = array[i] = 2
Let array[i - 1] = array[i - 1 ] = 1
Marcapasos = 0;

array[i - 1] < array[i]
Marcapasos ++
i++

Si array[i - 1] > array[i]
Marcapasos = 0;
i++

While (marcapasos >= 3 && i < array.length - 1 ){

 array[i - 1] < array[i]
Marcapasos ++
I++;

If  (array[i - 1] > array[i]) {
 Marcapasos ++

If (marcapaso > pico)
Pico = marcapasos;}
marcapasos = 0 
Break;

console.log(pico)*/


function longestPeak (array){
    let pico = 0;
    let i = 1;
    let marcapasos = 1;
    while (i <= array.length -1){
        if (array[i - 1] < array[i]){
            marcapasos++;
            i++;
        }
        if (array[i - 1] >= array[i]){
            marcapasos = 1;
            i++;
        }
        while (marcapasos >= 3 && i <= array.length - 1){
            if (array[i - 1] === array[i]){
                marcapasos = 1;
                break;
            }
            if (array[i - 1] < array[i]){
                marcapasos++;
                i++;
            }
            if (array[i - 1] > array[i]){
                marcapasos++;
                i++;
                if (marcapasos > pico){
                    pico = marcapasos;
                    marcapasos = 1;
                }
            }
            if (marcapasos === 1){
                break;
            }
        }
    }
    if (pico <= 3){pico = 0};
    console.log(pico);
} 

longestPeak( [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1])