const height = 5;
const width = 4 * height - 3;
const mid = Math.round(width / 2);
for (let y = 1; y <= height; y++) {
  let string = "";
  for (let x = 1; x <= width; x++) {
    if ((x >= 1 + y && x <= mid - y) || (x >= mid + y && x <= width - y))
      string += " ";
    else string += "*";
  }
  console.log(string);
}
