function threeNumSum (array,targetSum){
    let inicio = 0; 
    let izquierda = inicio + 1;
    let derecha = array.length - 1;
    let resultados = [];
    for (inicio ; inicio < array.length-2; inicio++){
        while (izquierda < derecha){
            let numero = array[inicio] + array[derecha] + array[izquierda];
            if (numero < targetSum){
                izquierda++;
            }
            if (numero > targetSum){
                derecha--;
            }
            if (numero === targetSum){
                resultados.push(array[inicio],array[izquierda],array[derecha]);
                izquierda++;
            }
        }
    }
}


threeNumSum([1,2,3,4,5,6,7,8,9,10,11,12,-1,-3,-5,-9,-4], 7)