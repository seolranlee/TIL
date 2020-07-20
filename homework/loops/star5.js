const height = 3;
const width = 6 * height - 3;
const mid = Math.round(width / 2);
var row = 1;
var row2 = height;
var row3 = height;

for (let y = 1; y <= 4 * height; y++) {
  let string = "";
  // 첫번째
  if (y >= 1 && y <= 1 * height) {
    for (let x = 1; x <= width; x++) {
      if ((x >= 1 && x <= mid - y) || (x >= mid + y && x <= width))
        string += " ";
      else string += "*";
    }
  }

  // 두번째
  if (y > 1 * height && y <= 2 * height) {
    for (let x = 1; x <= width; x++) {
      if (x >= 1 + (row - 1) && x <= width - row) string += "*";
      else string += " ";
    }
    row += 1;
  }

  // 세번째
  if (y > 2 * height && y <= 3 * height) {
    for (let x = 1; x <= width; x++) {
      if (x >= 1 + (row2 - 1) && x <= width - row2) string += "*";
      else string += " ";
    }
    row2 -= 1;
  }

  // 네번째
  if (y > 3 * height && y <= 4 * height) {
    for (let x = 1; x <= width; x++) {
      if ((x >= 1 && x <= mid - row3) || (x >= mid + row3 && x <= width))
        string += " ";
      else string += "*";
    }
    row3 -= 1;
  }

  console.log(string);
}
