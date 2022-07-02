function fibonacci(n) {
  if (fiboNums[n - 1] != null) {
    console.log(fiboNums[n - 1]);
    return fiboNums[n - 1];
  }
  let i = fiboNums.length;
  let fiboNumber = fiboNums[fiboNums.length - 1];
  let first = fiboNums[fiboNums.length - 2];
  while (n > i) {
    let prev = fiboNumber;
    fiboNumber = first + fiboNumber;
    first = prev;
    fiboNums.push(fiboNumber);
    i++;
  }
  console.log(fiboNumber);
}

let fiboNums = [0, 1, 1, 2];

fibonacci(4);
