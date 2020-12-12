let range = (start, end, step = 1) => {
  let arr = [];
  while (start <= end) {
    arr.push(start);
    start += step;
  }
  return arr;
};

let sum = (arr) => {
  let sum = 0;
  for (let a of arr) {
    sum += a;
  }
  return sum;
};

let reverseArray = (arr) => {
  let revArr = [];
  for (let a = arr.length - 1; a >= 0; a--) {
    revArr.push(arr[a]);
  }
  return revArr;
};

let reverseArrayInPlace = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let holder = arr[start];
    arr[start] = arr[end];
    arr[end] = holder;
    start++;
    end--;
  }
  return arr;
};

let arrayToList = (arr) => {
  let head = { value: arr[0], rest: undefined };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let next = { value: arr[i], rest: undefined };
    current.rest = next;
    current = next;
  }
  return head;
};

let listToArray = (head) => {
  let arr = [];
  let current = head;
  while (current !== undefined) {
    arr.push(current.value);
    current = current.rest;
  }
  return arr;
};

let prepend = (head, list) => {
  head.rest = list;
  return head;
};

let nth = (head, n) => {
  if (head === undefined) return undefined;
  if (n === 0) return head;
  return nth(head.rest, n - 1);
};

let deepEqual = (a, b) => {
  if (typeof a !== typeof b) return false;

  if (typeof a !== typeof null) return a === b;
  else {
    let aKeys = Object.keys(a).sort();
    let bKeys = Object.keys(b).sort();
    if (aKeys.length !== bKeys.length) return false;
    let i = 0;
    let isEqual = true;
    while (i < aKeys.length && isEqual === true) {
      let aKey = aKeys[i];
      let bKey = bKeys[i];
      if (aKey !== bKey) return false;
      isEqual = isEqual && deepEqual(a[aKey], b[bKey]);
      i++;
    }
    return isEqual;
  }
};
