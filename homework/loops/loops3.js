String.prototype.replaceAt = function(start, end, replacement) {
  return (
    this.substring(0, start) +
    replacement +
    this.substring(end + 1, this.length)
  );
};

let star = "**********";
for (let i = 0; i < 5; i++) {
  let start = i + 1;
  let end = star.length - (i + 2);
  let replacement = " ";
  if (start < end) {
    for (let j = start; j < end; j++) {
      replacement += " ";
    }
  } else {
    replacement = "";
  }
  console.log(star.replaceAt(start, end, replacement));
}
