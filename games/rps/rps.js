let x = ["Rock", "Paper", "Scissors"];
var rpnt = 0;
var bpnt = 0;
let zr = "";
let zb = "";
const l1 = document.getElementById("zb");
const l2 = document.getElementById("zr");
const l3 = document.getElementById("res");
const l4 = document.getElementById("bpnt");
const l5 = document.getElementById("rpnt");
const strt = document.getElementById("strtbtn");
const rstrt = document.getElementById("restrtbtn");
strt.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 3);
  zr = x[a];
  l2.textContent = "RED: " + zr;
  let y = Math.floor(Math.random() * 3);
  zb = x[y];
  l1.textContent = "BLUE: " + zb;
  if (zr == zb) {
    l3.textContent = "RESULT: TIE";
  } else if (zr != zb) {
    if (zb == "Scissors") {
      if (zr == "Rock") {
        l3.textContent = "RESULT: BLUE Wins";
        bpnt++;
      } else if (zr == "Paper") {
        l3.textContent = "RESULT: RED Wins";
        rpnt++;
      }
    } else if (zb == "Rock") {
      if (zr == "Scissors") {
        l3.textContent = "RESULT: BLUE Wins";
        bpnt++;
      } else if (zr == "Paper") {
        l3.textContent = "RESULT: RED Wins";
        rpnt++;
      }
    } else if (zb == "Paper") {
      if (zr == "Scissors") {
        l3.textContent = "RESULT: RED Wins";
        rpnt++;
      } else if (zr == "Rock") {
        l3.textContent = "RESULT: BLUE Wins";
        bpnt++;
      }
    }
  }
  l4.textContent = "BLUE points: " + bpnt;
  l5.textContent = "RED points: " + rpnt;
  if (bpnt || rpnt) {
    document.getElementById("strtbtn").innerHTML = "Again";
  }
});
rstrt.addEventListener("click", function () {
  document.getElementById("strtbtn").innerHTML = "Proceed";
  rpnt = 0;
  bpnt = 0;
  zr = "";
  zb = "";
  l1.textContent = "Blue";
  l2.textContent = "Red";
  l3.textContent = "RESULT";
  l4.textContent = "BLUE points: 0";
  l5.textContent = "RED points: 0";
});
