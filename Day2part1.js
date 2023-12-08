//12 Red cubes.
//13 Green Cubes
//14 Blue Cubes.
//What is the sum of the IDS of those games




//let arr = [Game 2: 1 green, 7 red; 1 green, 9 red, 3 blue; 4 blue, 5 red]
//това е един елемент и ако този елемент изпълнява изискванията  му смятаме скора.
//итерейвтваме през цялото нещо като стринг и проверяме дали са по големи тези числа.blue
//Ако всички числа са под 11
//array index = game

//нека кажем че от този арр мже да го разделим на всяка част от arraya ,
//В тази част от арра първо проверяваме какъв е стринга и след това проверяваме,
//ако е ред интегера трябва да е 12 или по малко.
//да разбия Аррая на още по малки части и да чекват ако.
//Ако има число, по голямо от 14 значи се довабя към цаунтур 0.
//moga da imam count koito da subira числата и когато се отговори правилно на условията стойноста да
//му се събира в резултата





const fs = require("fs");
function partTwo(file) {
  const maxCount = {
    red: 12,
    green: 13,
    blue: 14,
  }; 
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\r\n')
  
  console.log(lines)

  return lines.map((line) => {
    return line
      .split(": ")[1]
      .split("; ")
      .map((set) => {
        const pulls = set.split(", ");
        return pulls.every((pull) => {
          const [count, color] = pull.split(' ');
          return maxCount[color] >= Number(count);
        });
      }).every((p) => p);
  }).reduce((s, result, i) => {
    return result ? s + (i + 1) : s;
  }, 0);
}
console.log(partTwo('./inputDay2.txt'));



