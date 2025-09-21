// Declaring the required constants and variables.
const display = document.getElementById("disp");
const rollbtn = document.getElementById("rl");
const game = document.getElementById("gme");
const start = document.getElementById("start");
let rSum = 0;
let bSum = 0;
let cnt = Math.floor(Math.random() * 100) + 1;
let rImg = `<img id="game" src="./rimg.png">`;
let bImg = `<img id="game" src="./bimg.png">`;
let vImg = `<img id="game" src="./vimg.png">`;
// function for rendering the outuput
function render() {
  // declaring an empty strings for appending values required.
  let disp = "";
  let l = "";
  // running a loop for appending values for displaying with required brakes.
  // logic:for j in range of 0 and 100 tmp should be br for j div by 10 and the remainder is 0 ie 10,20....90 or else it is empty.
  for (let j = 0; j < 100; j++) {
    var tmp = j % 10 == 0 ? "<br>" : "";
    // after appending the values of tmp for the values of index is = to j then l will be the images of violet else the images of blue and red respectively.
    // else  the images will be blank.
    if (rSum - 1 == j && bSum - 1 == j) {
      l = vImg;
    } else if (rSum - 1 == j) {
      l = rImg;
    } else if (bSum - 1 == j) {
      l = bImg;
    } else {
      l = `<img id="game" src="https://static.thenounproject.com/png/184028-200.png">`;
    }
    // filling the disp variable for displaying.
    disp += tmp + l;
  }
  // for displaying.
  game.innerHTML = disp;
  disp = "";
}
//  function for the button when clicked.
rollbtn.addEventListener("click", () => {
  // declaring variables.
  let dial = "";
  let sum = 0;
  // setting the text of button to "roll".
  // making a var x for a random number from 1 to 6 and making a list of images for displaying the dice and displaying the image.
  rollbtn.innerText = "ROLL";
  let x = Math.floor(Math.random() * 6) + 1;
  let lst = [
    "https://static.thenounproject.com/png/1194695-200.png",
    "https://static.thenounproject.com/png/1194703-200.png",
    "https://static.thenounproject.com/png/2502954-200.png",
    "https://static.thenounproject.com/png/1341913-200.png",
    "https://static.thenounproject.com/png/1341918-200.png",
    "https://static.thenounproject.com/png/1194706-200.png",
  ];
  display.innerHTML = `<img  src=${lst[x - 1]}></img>`;
  //making a conditional statement for making values of sum of each player
  //logic: with respect to the turn of the player the sums are made and if the sum of any one player is 100 then they are the winner.
  //logic:where as when the sum is exeding 100 then the value is remained the same as the previous one.
  //logic:when it is lesser then 100 then the the number on dice will add.
  if (cnt % 2 == 0) {
    if (bSum + x > 100) {
      bSum;
    } else if (bSum + x == 100) {
      dial = "Hurray!! BLUE wins";
      rollbtn.style.visibility = "hidden";
    } else bSum += x;
  } else {
    if (rSum + x > 100) {
      rSum;
    } else if (rSum + x == 100) {
      dial = "Hurray!! RED wins";
      rollbtn.style.visibility = "hidden";
    } else rSum += x;
  }
  // with respect to the turn of each player sum will be the players sum.Using this sum there will be a jump in the players box
  cnt % 2 == 0 ? (sum = bSum) : (sum = rSum);
  if ([12, 3, 4, 78, 9, 10].indexOf(sum - 1) >= 0) {
    cnt % 2 == 0
      ? (bSum = Math.floor(Math.random() * 30) + 1)
      : (rSum = Math.floor(Math.random() * 30) + 1);
  }
  // rendering the boxes.And changin the color and the caption as per he turn.
  render();
  cnt++;
  bClr = cnt % 2 == 0 ? "darkblue" : "darkred";
  rollbtn.style.backgroundColor = bClr;

  if (dial != "Hurray!! BLUE wins" && dial != "Hurray!! RED wins") {
    dial = cnt % 2 == 0 ? "Player BLUE's turn" : "Player RED's turn";
  }
  start.innerText = dial;
});
