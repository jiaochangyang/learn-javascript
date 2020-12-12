let fizzBuzz = function () {
  let current = 1;
  while (current <= 100) {
    if (current % 3 === 0 && current % 5 === 0)
      console.log("FizzBuzz" + current);
    else if (current % 3 === 0) console.log("Fizz" + current);
    else if (current % 5 === 0) console.log("Buzz" + current);
    else console.log(current);
    current++;
  }
};

let chessBoard = function () {
  let line = 0;
  let board = "";
  while (line < 8) {
    if (line % 2 == 0) board = board + "# # # # \n";
    else board = board + " # # # #\n";
    line++;
  }
  console.log(board);
};

fizzBuzz();
chessBoard();
