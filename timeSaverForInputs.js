array = [
  "contains",
  "remove",
  "add",
  "add",
  "contains",
  "remove",
  "contains",
  "contains",
  "add",
  "add",
  "add",
  "add",
  "remove",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "contains",
  "add",
  "contains",
  "add",
  "add",
  "contains",
  "add",
  "add",
  "remove",
  "add",
  "add",
  "add",
  "add",
  "add",
  "contains",
  "add",
  "add",
  "add",
  "remove",
  "contains",
  "add",
  "contains",
  "add",
  "add",
  "add",
  "add",
  "add",
  "contains",
  "remove",
  "remove",
  "add",
  "remove",
  "contains",
  "add",
  "remove",
  "add",
  "add",
  "add",
  "add",
  "contains",
  "contains",
  "add",
  "remove",
  "remove",
  "remove",
  "remove",
  "add",
  "add",
  "contains",
  "add",
  "add",
  "remove",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "add",
  "remove",
  "add",
  "remove",
  "remove",
  "add",
  "remove",
  "add",
  "remove",
  "add",
  "add",
  "add",
  "remove",
  "remove",
  "remove",
  "add",
  "contains",
  "add",
];
numbers = [
  [72],
  [91],
  [48],
  [41],
  [96],
  [87],
  [48],
  [49],
  [84],
  [82],
  [24],
  [7],
  [56],
  [87],
  [81],
  [55],
  [19],
  [40],
  [68],
  [23],
  [80],
  [53],
  [76],
  [93],
  [95],
  [95],
  [67],
  [31],
  [80],
  [62],
  [73],
  [97],
  [33],
  [28],
  [62],
  [81],
  [57],
  [40],
  [11],
  [89],
  [28],
  [97],
  [86],
  [20],
  [5],
  [77],
  [52],
  [57],
  [88],
  [20],
  [48],
  [42],
  [86],
  [49],
  [62],
  [53],
  [43],
  [98],
  [32],
  [15],
  [42],
  [50],
  [19],
  [32],
  [67],
  [84],
  [60],
  [8],
  [85],
  [43],
  [59],
  [65],
  [40],
  [81],
  [55],
  [56],
  [54],
  [59],
  [78],
  [53],
  [0],
  [24],
  [7],
  [53],
  [33],
  [69],
  [86],
  [7],
  [1],
  [16],
  [58],
  [61],
  [34],
  [53],
  [84],
  [21],
  [58],
  [25],
  [45],
  [3],
];

let ojk = "hashTable";

function timeSaver(array, numbers, name) {
  const resultados = new Array(array.length);
  console.log(resultados);
  for (let i = 0; i < array.length; i++) {
    let semiColon = ";";
    numbers[i] = `(${numbers[i]})`;
    let test = `${name}.${array[i].replace(/""/)}${numbers[i]}${semiColon}`;
    resultados[i] = test;
  }
  console.log(resultados);
}

timeSaver(array, numbers, ojk);
