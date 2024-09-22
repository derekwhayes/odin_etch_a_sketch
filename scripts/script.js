const container = document.querySelector("#container");
const btn = document.querySelector("button");
let sides = 16;

// create the divs
function createSquares(sides) {
    // clear pre-existing squares
    container.innerHTML = '';

    // create sides * rows
    for (let i = 0; i < sides; i++) {
        const row = document.createElement("div");
        row.classList.add("rows");
        container.appendChild(row);
    }

    // fill rows with sides * squares
    const rows = container.querySelectorAll(".rows");
    rows.forEach(element => {
        for (let i = 0; i < sides; i++) {
            const square = document.createElement("div");
            square.classList.add("squares");
            element.appendChild(square);
        }
    })

    // let totalDivs = sides * sides;
    // let containerSize = container.clientWidth;
    // let squareSize = containerSize / sides;

    // for (let i = 0; i < totalDivs; i++) {
    //     const div = document.createElement("div");
    //     div.classList.add("divs");
    //     div.style.width = `${squareSize}px`;
    //     div.style.height = `${squareSize}px`;
    //     container.appendChild(div);
    // }

    // draw them red squares
    const divs = container.querySelectorAll(".squares");
    divs.forEach(element => element.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    }));
}

createSquares(sides);

// get user input
btn.addEventListener("click", (e) => {
    sides = prompt("How many squares per side would you like? (0 - 100)", sides);

    if (sides <= 100 && sides > 0) {
        createSquares(sides);
    }
    else {
        sides = 16;
        alert("Please select between 0 - 100 squares.")
    }
});