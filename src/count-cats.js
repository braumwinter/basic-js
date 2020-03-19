module.exports = function countCats(matrix) {
  let cats = 0;

  for (const rowIndex in matrix) {
    let row = matrix[rowIndex];

    for (const cell in row) {
      if(row[cell] === '^^') {
        cats++;
      }
    }
  }

  return cats;
};
