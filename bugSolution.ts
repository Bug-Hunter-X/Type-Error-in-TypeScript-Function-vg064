function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return 0; // Or handle the error in another way
  }
}

const result1 = addSafe(5, '10'); // returns 0
const result2 = addSafe(5, 10); // returns 15