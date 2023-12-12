//Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
//Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
//Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
//Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
//Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
//Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11

//In the above example, card 1 has five winning numbers(41, 48, 83, 86, and 17) and eight
//numbers you have(83, 86, 6, 31, 17, 9, 48, and 53).Of the numbers you have,
    //four of them(48, 83, 17, and 86) are winning numbers! That means card 1 is worth 8 points
    //(1 for the first match, then doubled three times for each of the three matches after the first).
//1x2 + 1x2 + 1x2 + 1x2
//1 + 2 + 4 + 8
//ако едно число е преди | и след Card __:,то трябв ада бъде записано като част от array и после този
//арраи да бъде сравняван с другият аррай са съвпадения, ако има такива, трябва на всяко true da se zapiswa
//counter който да се умножава по две....


function splitString(string, side) {
    //if (string == undefined || null) return;
    let parsedValue;
    if (side == 0) {
        parsedValue = string
            .split("|")[0]
            .split(":")[1]
            .split(" ")
            .filter((n) => n);  
    }
    else {
         parsedValue = string
          .split("|")[1]
          .split(" ")
          .filter((n) => n);
    }

    return parsedValue;
}
const fs = require("fs");
var linesArray;
async function fetchData() {
  try {
    const data = fs.readFileSync(
      "C:\\Users\\x1 yoga\\Documents\\Playground\\Advent of Code\\Advent-of-Code-2023\\input4.txt",
      "utf8"
    );
      linesArray = data.split("\r\n");
      let fullscore = 0;
    
      linesArray.forEach((element, index) => {
      let leftSideNumbers = splitString(element, 0);
      

      let rightSideNumbers = splitString(element, 1);
          
          const matchedNumbers = leftSideNumbers.filter((num) =>
            rightSideNumbers.includes(num)
          );
          let score = 0;
          console.log(matchedNumbers)
          
          for (let i = 0; i < matchedNumbers.length; i++) {
            if (typeof matchedNumbers[i] === "string") {
              if (i === 0) {
                score += 1;
              } else {
                  score = score * 2;
              }
              }
              
          }
        fullscore += score;
      });
      console.log(fullscore)
  }
       //   let cardNumbers = 
   catch (error) {
    console.error("There was a problem reading the file:", error);
  }
}

fetchData();



