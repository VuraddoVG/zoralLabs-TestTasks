var fruits = [
  { _id: 1, name: "apples", qty: 5, rating: 3 },
  { _id: 2, name: "bananas", qty: 7, rating: 1 },
  { _id: 3, name: "oranges", qty: 6, rating: 2 },
  { _id: 4, name: "avocados", qty: 3, rating: 5 },
];

var projection = { name: 1, rating: 1 };

/**
 * Projects projection onto object
 * @param {Object} obj object
 * @param {Object} projection projection
 * @returns projected object
 */
function objProjection(obj, projection) {
  var projectedObj = {};
  for (let i = 0; i < obj.length; i++) {
    projectedObj[i] = project(obj[i], projection);
  }

  function project(obj, projection) {
    let projectedObj = {};
    for (let key in projection) {
      projectedObj[key] = obj[key];
    }
    return projectedObj;
  }
  return projectedObj;
}

console.log(objProjection(fruits, projection));
