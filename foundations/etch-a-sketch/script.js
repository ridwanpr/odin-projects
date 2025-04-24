document.addEventListener("DOMContentLoaded", () => {
  initLayout();
});

function initLayout() {
  drawGrid();
  const changeGridBtn = document.querySelector(".change-grid");
  changeGridBtn.addEventListener("click", changeGrid);
}

function drawGrid(gridSize = 16) {
  const container = document.querySelector("#app");
  container.innerHTML = ""; 
  
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < gridSize; j++) {
      const box = document.createElement("div");
      box.classList.add("grid");
      box.addEventListener("mouseover", setGridColor);
      row.appendChild(box);
    }

    fragment.appendChild(row);
  }

  container.appendChild(fragment);
}

function setGridColor() {
  this.style.backgroundColor = "lightblue";
}

function changeGrid() {
  const gridSize = prompt("Enter the number of box per row", 16);
  if (gridSize != null) {
    drawGrid(parseInt(gridSize));
  } else {
    alert("Cancelled");
  }
}
