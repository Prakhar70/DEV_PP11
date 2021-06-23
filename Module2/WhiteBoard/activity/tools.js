let undo = document.querySelector("#undo");

undo.addEventListener("click", undoLine);
let redo=document.querySelector('#redo');
redo.addEventListener("click",redoLine)

function undoLine() {
  if (linesDb.length) {
    console.log(linesDb);
    // console.log("clicked");
    let undoline=linesDb.pop();
    redoDb.push(undoline);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLinesFromDB();
  }
}
function redoLine(){
    if(redoDb.length){
    linesDb.push(redoDb.pop());
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLinesFromDB();
    }
}

function drawLinesFromDB() {
  for (let i = 0; i < linesDb.length; i++) {
    let line = linesDb[i];
    //   console.log(line);
    for (let i = 0; i < line.length; i++) {
      let pointObject = line[i];
    //   console.log(pointObject);
      if (pointObject.type == "md") {
        ctx.beginPath();
        ctx.moveTo(pointObject.x, pointObject.y);
      } else {
        ctx.lineTo(pointObject.x, pointObject.y);
        ctx.stroke();
      }
    }
  }
}
