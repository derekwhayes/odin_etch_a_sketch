const container = document.querySelector("#container");
const btn = document.querySelector("button");
let sides = 16;

// create the divs
function createSquares(sides) {
    container.innerHTML = '';

    let totalDivs = sides * sides;
    let containerSize = container.clientWidth;
    let squareSize = containerSize / sides;

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("divs");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }

    // create the nodeList
    const divs = container.querySelectorAll(".divs");

    // change color on mouseover
    divs.forEach(element => element.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    }));
}

createSquares(sides);

// get user input
btn.addEventListener("click", (e) => {
    sides = prompt("How many squares per side would you like?", sides);
    createSquares(sides);
});