let array = ["addAtIndex", "get"];

let numbers = [[1, 0], [0]];

function timeSaver(array, numbers) {
  const resultados = new Array(array.length);
  console.log(resultados);
  for (let i = 0; i < array.length; i++) {
    numbers[i] = `(${numbers[i]})`;
    resultados[i] = `obj.${array[i].replace(/""/)}${numbers[i]}`;
  }
  console.log(resultados);
}

timeSaver(array, numbers);
