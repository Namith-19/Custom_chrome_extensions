const display = document.getElementById("disp");
const rollbtn = document.getElementById("rl");
const game = document.getElementById("gme");
let sum = 0;
let ply = [];
let disp = "";
let test = [];
let dplst = [];

for (let i = 1; i < 101; i++) {
  ply.push(
    `<img id="game" src="https://static.thenounproject.com/png/184028-200.png">`
  );
}

function render() {
  for (let j = 0; j < dplst.length; j++) {
    disp += `${dplst[j]}`;
  }
  game.innerHTML = disp;
  dplst = [];
  disp = "";
}

rollbtn.addEventListener("click", () => {
  test = [...ply];
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
  sum += x;
  test[
    sum - 1
  ] = `<img id="game" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red_square.svg/1024px-Red_square.svg.png">`;
  for (let i = 0; i <= 99; i++) {
    if (i >= 10 && i % 10 == 0) {
      dplst.push(`<br/>`);
    }
    dplst.push(test[i]);
  }
  render();
  console.log(test.length);
});
