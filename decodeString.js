function decodeString(s) {
  s = s.split("");
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i])) {
      let array = getTheNum(s, i);
      num = array[0];
      i = array[1];
      let result = getTheBrackets(i, s, word, num);
      word = result[1];
      i = result[0];
    } else {
      word += s[i];
    }
  }
  console.log(word);
  return word;
}

function getTheBrackets(i, s, word, number) {
  let thisWord = "";
  i = i + 2;
  while (s[i] !== "]") {
    if (Number(s[i])) {
      let array = getTheNum(s, i);
      num = array[0];
      i = array[1];
      let result = getTheBrackets(i, s, thisWord, num);
      thisWord = result[1];
      i = result[0];
    } else {
      thisWord += s[i];
    }
    i++;
  }
  word += multiplyTheWord(number, thisWord);
  return [i, word];
}

function multiplyTheWord(num, thisWord) {
  let i = 1;
  let addToWord = thisWord;
  while (i < num) {
    thisWord += addToWord;
    i++;
  }
  return thisWord;
}

function getTheNum(array, index) {
  let number = "";
  while (array[index] !== "[") {
    number += array[index];
    index++;
  }
  index--;
  number = Number(number);
  return [number, index];
}

decodeString("3[a]2[bc]");

decodeString("3[a2[c]]");
decodeString("2[abc]3[cd]ef");
decodeString("a");
decodeString("100[leetcode]");
