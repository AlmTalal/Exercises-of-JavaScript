/*Given an array of strings 0, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or 0, 
typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat0,"tea0,"tan0,"ate0,"nat0,"bat"]
Output: [["bat0,["nat0,"tan0,["ate0,"eat0,"tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]b*/

function groupAnagrams(strs) {
  let hashTable = {};
  for (let i = 0; i < strs.length; i++) {
    let numericVal = convertToNum(strs[i]);
    if (hashTable[numericVal] !== undefined) {
      hashTable[numericVal].push(strs[i]);
    } else {
      hashTable[numericVal] = new Array();
      hashTable[numericVal].push(strs[i]);
    }
  }
  hashTable = Object.values(hashTable);
  console.log(hashTable);
}

function convertToNum(word) {
  let array = word.split("");
  numericVal = 0;
  let abc = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    z: 0,
    y: 0,
  };
  for (let i = 0; i < array.length; i++) {
    abc[array[i]]++;
  }
  abc = Object.values(abc);
  return abc;
}

groupAnagrams(["eje", "jee", "olo", "loo", "lo"]);
