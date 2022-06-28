function isValid(s) {
  const hashTable = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  s = s.split("");
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === hashTable[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  if (stack[0] === undefined) {
    return true;
  } else {
    return false;
  }
}

isValid("()[]{}");
