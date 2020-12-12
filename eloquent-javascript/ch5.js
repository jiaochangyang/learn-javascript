let flatten = (arr) => {
  return arr.reduce((a, b) => a.concat(b));
};

let everything = (arr, test) => {
  let e = true;
  for (let a of arr) {
    e = e && test(a);
    if (!e) return false;
  }
  return true;
};
