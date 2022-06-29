function reversePolish(tokens) {
  {
    let i = 0;
    let result = undefined;
    let stack = [];
    let signs = {
      "+": 1,
      "-": 2,
      "*": 3,
      "/": 4,
    };
    if (tokens.length <= 1) {
      return tokens[0];
    }
    while (i < tokens.length) {
      if (signs[tokens[i]]) {
        result = algebraicOperations(
          stack[stack.length - 2],
          stack[stack.length - 1],
          signs[tokens[i]]
        );
        stack.pop();
        stack.pop();
        stack.push(result);
      } else {
        stack.push(Number(tokens[i]));
      }
      i++;
    }
    console.log(result);
    return result;
  }
}
function algebraicOperations(number, current, operation) {
  if (operation == 1) {
    number = number + current;
    return Math.trunc(number);
  } else if (operation == 2) {
    number = number - current;
    return Math.trunc(number);
  } else if (operation == 3) {
    number = number * current;
    return Math.trunc(number);
  } else if (operation == 4) {
    number = number / current;
    return Math.trunc(number);
  }
}

reversePolish([
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
]);

reversePolish(["18", "2", "/"]);

reversePolish(["7", "2", "-"]);

reversePolish(["18", "2", "+", "2", "/"]);

reversePolish(["18", "2", "+", "200", "-"]);

reversePolish(["18"]);
