function subarraySort(array) {
  let derecha = 0;
  let izquierda = derecha + 1;
  let inicio = undefined;
  let final = undefined;
  while (derecha < array.length) {
    if (izquierda === array.length) {
      derecha++;
      izquierda = derecha + 1;
    }
    if (array[derecha] <= array[izquierda]) {
      izquierda++;
    }
    if (array[derecha] > array[izquierda]) {
      inicio = derecha;
      break;
    }
  }
  derecha = inicio;
  izquierda = derecha + 1;
  while (derecha < array.length) {
    if (izquierda === array.length) {
      break;
    }
    if (array[derecha] < array[izquierda]) {
      derecha = izquierda;
      izquierda = derecha + 1;
    }
    if (array[derecha] >= array[izquierda]) {
      final = izquierda;
      izquierda++;
    }
  }
  if (inicio === undefined) {
    inicio = -1;
    final = -1;
  }
  console.log([inicio, final]);
}

subarraySort([1, 2, 3, 7, 6, 5, 4, 8, 9]);
