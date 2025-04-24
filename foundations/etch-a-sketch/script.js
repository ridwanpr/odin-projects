document.addEventListener("DOMContentLoaded", () => {
  initLayout();
});

function initLayout() {
  drawGrid();
  localStorage.setItem("gridColor", "#add8e6");
  const changeGridBtn = document.querySelector(".change-grid");
  changeGridBtn.addEventListener("click", changeGrid);

  const changeColorBtn = document.querySelector(".change-color");
  changeColorBtn.addEventListener("click", changeColor);

  document.querySelector(".reset").addEventListener("click", () => {
    const box = document.querySelectorAll(".grid");
    box.forEach((e) => {
      e.style.backgroundColor = "#fff";
    });
  });
}

function drawGrid(gridSize = 16) {
  const container = document.querySelector("#app");
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  let isMouseDown = false;

  document.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < gridSize; j++) {
      const box = document.createElement("div");
      box.classList.add("grid");

      box.addEventListener("mousedown", setGridColor);
      box.addEventListener("mouseover", (e) => {
        if (isMouseDown) {
          setGridColor.call(e.currentTarget);
        }
      });

      box.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });

      row.appendChild(box);
    }

    fragment.appendChild(row);
  }

  container.appendChild(fragment);
}

function setGridColor() {
  this.style.backgroundColor = localStorage.getItem("gridColor");
}

function changeGrid() {
  const gridSize = prompt("Enter the number of box per row", 16);
  if (isNaN(gridSize)) {
    alert("Only number allowed");
    window.location.reload();
  }

  if (gridSize != null) {
    drawGrid(parseInt(gridSize));
  } else {
    alert("Cancelled");
  }
}

function changeColor() {
  const color = prompt("Enter the hex color code");
  if (color === null) return;
  if (!isValidHexColor(color)) {
    alert("Hex code invalid");
    return;
  }
  const colorPreview = document.querySelector(".color-preview");
  colorPreview.style.backgroundColor = color;
  localStorage.setItem("gridColor", color);
}

function isValidHexColor(hexColor) {
  return /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(hexColor);
}