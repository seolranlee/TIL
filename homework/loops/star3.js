const height = 5;
const width = 2 * height - 1;
for (let y = 1; y <= height; y++) {
  let string = "";
  for (let x = 1; x <= width; x++) {
    if (x >= 1 + y && x <= width - y) string += " ";
    else string += "*";
  }
  console.log(string);
}
