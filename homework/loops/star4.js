const height = 10;
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

// 어떠한 알고리즘이든, 설계 후 코드.

// for문 한번으로 바꿔보기.

// 별만들기. 규칙성을 가지고.
