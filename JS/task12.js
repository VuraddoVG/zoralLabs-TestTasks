/**
 * Function to populate mock array.
 * @returns array of mock data
 */
function populateArr() {
  arr = [];
  max = 1000;
  min = 101;
  let r = Math.floor(Math.random() * (max - min) + min);

  for (let i = 0; i < r; i++) {
    let ir = Math.floor(Math.random() * 100 + 100);
    arr.push({ amount: 10000 * ir, quantity: 10 * i + 10 });
  }
  return arr;
}

/**
 *  Order sales by total without modifying orignal array.
 * @array {amount: number, quantity: number}.
 * @returns new ordered array by total
 */
function orderByTotal(arr) {
  let res = [];

  arr.forEach((s) => {
    res.push({ ...s, total: s.amount * s.quantity });
  });

  res.sort((s1, s2) => {
    return s1.total - s2.total;
  });

  return res;
}

console.log(orderByTotal(populateArr()));
