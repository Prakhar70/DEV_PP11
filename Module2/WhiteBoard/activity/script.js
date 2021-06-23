let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 100;
  drawLinesFromDB();
});
//canvas drawing get erased on window resize??
linesDb = [];
redoDb=[];

line = [];
let isPenDown = false;

canvas.addEventListener("mousedown", function (e) {
  redoDb=[];
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY - 100);
  let pointObject = { x: e.clientX, y: e.clientY - 100, type: "md" };
  line.push(pointObject);

  isPenDown = true;
});
canvas.addEventListener("mousemove", function (e) {
  if (isPenDown) {
    ctx.lineTo(e.clientX, e.clientY - 100);
    let pointObject = { x: e.clientX, y: e.clientY - 100, type: "mm" };
    line.push(pointObject);
    ctx.stroke();
  }
});
canvas.addEventListener("mouseup", function (e) {
  // console.log(linesDb);
  isPenDown = false;
  linesDb.push(line);
  line = [];
});
