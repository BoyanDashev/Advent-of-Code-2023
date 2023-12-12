const fs = require("fs");

async function fetchData() {
  try {
    const data = fs.readFileSync(
      "C:\\Users\\x1 yoga\\Documents\\Playground\\Advent of Code\\Advent-of-Code-2023\\input3.txt",
      "utf8"
    );
    return data;
  } catch (error) {
    console.error("There was a problem reading the file:", error);
    return null;
  }
}

async function processData() {
  const data = await fetchData();

  if (data) {
    const lines = data.trim().split("\r\n");
    const n = lines.length;
    const m = lines[0].length;

    function isSymbol(i, j) {
      if (!(i >= 0 && i < n && j >= 0 && j < m)) {
        return false;
      }

      return lines[i][j] !== "." && isNaN(parseInt(lines[i][j]));
    }

    let ans = 0;

    for (let i = 0; i < lines.length; i++) {
      let start = 0;
      let j = 0;

      while (j < m) {
        start = j;
        let num = "";
        while (j < m && !isNaN(parseInt(lines[i][j]))) {
          num += lines[i][j];
          j++;
        }

        if (num === "") {
          j++;
          continue;
        }

        num = parseInt(num);

        // Number ended, look around
        if (isSymbol(i, start - 1) || isSymbol(i, j)) {
          ans += num;
          continue;
        }

        for (let k = start - 1; k <= j + 1; k++) {
          if (isSymbol(i - 1, k) || isSymbol(i + 1, k)) {
            ans += num;
            break;
          }
        }
      }
    }

    console.log(ans);
  }
}

processData();
