function polindromeNum(x) {
  var s = x.toString();
  var t = s.split("").reverse().join("");
  return s === t;
}
