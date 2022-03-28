function subarraySort (array){
    let derecha = 0; 
    let izquierda = derecha+1;
    let inicio = undefined
    let final = undefined
    while (derecha < array.length){
        if (izquierda === array.length){
            derecha++;
            izquierda = derecha + 1;
        }
        if (array[derecha] <= array[izquierda]){
            izquierda++;
        }
        if (array[derecha] > array[izquierda]){
            inicio = derecha;
            break;
        }
    }
    derecha = inicio;
    izquierda = derecha + 1;
    while (derecha < array.length){
        if (izquierda === array.length) {
            break;
        }
        if (array[derecha] < array[izquierda]){
            derecha = izquierda;
            izquierda = derecha + 1;
        }
        if (array[derecha] >= array[izquierda]){
            final = izquierda;
            izquierda++;
        }
    }
    if (array.length <= 2){
      inicio = -1;
      final = -1;
    }
    if (inicio === undefined){
      inicio = -1;
      final = -1;
    }
  console.log([inicio, final]);
}

subarraySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])