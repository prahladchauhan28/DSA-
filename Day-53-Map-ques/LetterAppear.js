// leetcode -2351 (issue!!)

var repeatedChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt();
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
      if (map.get(ch) == 2) return ch;
    } else map.set(ch, 1);
  }
};
let prompt = require("prompt-sync")();
let s = prompt("Enter a String!");

console.log(repeatedChar(s));
