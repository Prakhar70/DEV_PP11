let stickynotes = document.querySelector("#StickyNote");
stickynotes.addEventListener("click", function (e) {
  addSticky();
});

function addSticky(imageElement) {
  let stickyDiv = document.createElement("div");
  stickyDiv.classList.add("sticky");
  stickyDiv.innerHTML = `<div class="sticky-header">
    <div class="minimise"></div>
    <div class="close"></div>
</div>`;
let minimize = stickyDiv.querySelector(".minimise");
let close = stickyDiv.querySelector(".close");
let stickyheader = stickyDiv.querySelector(".sticky-header");
let stickyContent;

if(imageElement){
    let stickyImageDiv=document.createElement("div");
    stickyImageDiv.classList.add(".sticky-image-div");
    stickyDiv.append(stickyImageDiv);
    stickyImageDiv.append(imageElement);
    stickyContent=stickyImageDiv;
}
else{
    let stickyContentDiv=document.createElement("div");
    stickyContentDiv.classList.add("sticky-content");
    stickyContentDiv.setAttribute("contenteditable" , "true");
    stickyDiv.append(stickyContentDiv);
    stickyContent=stickyContentDiv;
}
  minimize.addEventListener("click", function (e) {
    stickyContent.style.display == "none"
      ? (stickyContent.style.display = "block")
      : (stickyContent.style.display = "none");
  });
  close.addEventListener("click", function (e) {
    stickyDiv.remove();
  });

  let stickyHold = false;
  let intialX;
  let intialY;
  stickyheader.addEventListener("mousedown", function (e) {
    stickyHold = true;
    intialX = e.clientX;
    intialY = e.clientY;
  });
  stickyheader.addEventListener("mousemove", function (e) {
    if (stickyHold) {
      let finalX = e.clientX;
      let finalY = e.clientY;

      let dx = finalX - intialX;
      let dy = finalY - intialY;

      let { top, left } = stickyDiv.getBoundingClientRect();
      stickyDiv.style.top = top + dy + "px";
      stickyDiv.style.left = left + dx + "px";

      intialX = finalX;
      intialY = finalY;
    }
  });
  stickyheader.addEventListener("mouseup", function (e) {
    stickyHold = false;
  });
  
  document.body.append(stickyDiv);
}
