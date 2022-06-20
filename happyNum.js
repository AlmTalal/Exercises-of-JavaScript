function happyNum(n) {
  let hashTable = {};
  if (!n) {
    console.log(false);
    return false;
  }
  while (hashTable) {
    let digits = [];
    while (n !== 0) {
      digits.push(n % 10);
      n = Math.floor(n / 10);
    }
    let inicialSum = 0;
    for (let i = 0; i < digits.length; i++) {
      let num = digits[i];
      num = num * num;
      inicialSum = num + inicialSum;
    }
    if (hashTable[inicialSum] === true) {
      console.log(false);
      return false;
    }
    if (inicialSum == 1) {
      console.log(true);
      return true;
    } else {
      n = inicialSum;
      hashTable[n] = true;
    }
  }
  console.log(false);
  return false;
}

function addFunction(num, inicialSum) {
  num = num * num;
  inicialSum = num + inicialSum;
  console.log(inicialSum);
  return inicialSum;
}

happyNum(10);
