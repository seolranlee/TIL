// String.prototype.replaceAt = function(start, end, replacement) {
//   return (
//     this.substring(0, start) +
//     replacement +
//     this.substring(end, this.length - 1)
//   );
// };

// let star = "*********";
// for (let i = 0; i < 5; i++) {
//   let start = i + 1;
//   let end = star.length - (i + 1);
//   let replacement = " ";
//   if (start < end) {
//     for (let j = start; j < end; j++) {
//       replacement += " ";
//     }
//   } else {
//     replacement = "";
//   }

//   console.log(star.replaceAt(start, end, replacement));
// }

// lesson
const n = 5;
const w = 2 * n - 1;
// const mid = Math.round(w / 2);
// console.log(mid);

for (let y = 0; y < n; y++) {
  let string = "";
  // const blank = 2 * n - 1 - 2 * y;
  for (let x = 0; x < w; x++) {
    // if(x>mid)
    if (x > y && x < w - (y + 1)) string += " ";
    else string += "*";
  }
  console.log(string);
}
