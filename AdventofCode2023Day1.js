

const fs = require("fs");
var linesArray;
async function fetchData() {
  try {
    const data = fs.readFileSync(
      "C:\\Users\\x1 yoga\\Documents\\Playground\\Advent of Code\\Advent-of-Code-2023\\input.txt",
      "utf8"
    );
     linesArray = data.split("\r\n");
    console.log(data);
    console.log(linesArray);
  } catch (error) {
    console.error("There was a problem reading the file:", error);
  }
}



fetchData();

let a = linesArray;
var result = [];
function extractNumbers(input) {
  
  for (let i = 0; i < input.length; i++) {
    let arr = [];
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j].match(/\d/)) {
        arr.push(parseInt(input[i][j], 10));
      }
    }
    result.push(arr); // Push the extracted numbers for each index in 'a'
  }
  return result;
}

console.log(extractNumbers(a));


function concatenateFirstLast(arr) {
  let modifiedArray = [];
  for (let subArr of arr) {
    if (subArr.length === 1) {
      modifiedArray.push(parseInt(subArr[0].toString() + subArr[0].toString()));
    } else if (subArr.length > 1) {
      modifiedArray.push(
        parseInt(subArr[0].toString() + subArr[subArr.length - 1].toString())
      );
    }
    }
    let sum = modifiedArray.reduce((acc, curr) => acc + curr, 0);
    modifiedArray;
  return sum ;
}

console.log(concatenateFirstLast(result))
