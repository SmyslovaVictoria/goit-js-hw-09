// const countSheep = function (num) {
  
// };

const countSheep = function (num) {
  let start = 0;
  let sheep = [];
  for (let i = start; i <= num; i += 1) {
    if (i > 0) {
      sheep.push(i + ' sheep...');
      continue;
    }
  }
  return sheep.join('');
};
console.log(countSheep(3));