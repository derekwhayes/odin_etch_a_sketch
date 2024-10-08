const container = document.querySelector("#container");
const setSquaresBtn = document.querySelector("#setSquares-btn");
const clearBtn = document.querySelector("#clear-btn");
let sides = 16;

// get random number for rgb values
function getRandomRGB() {
    return Math.floor(Math.random() * 257);
}

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

    // draw them red squares
    const divs = container.querySelectorAll(".squares");
    divs.forEach(element => element.addEventListener("mouseover", (e) => {
        console.log(window.getComputedStyle(element).getPropertyValue("background-color"));
        if (window.getComputedStyle(element).getPropertyValue("background-color") === "rgba(0, 0, 0, 0)") {
            e.target.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
        }
        if (window.getComputedStyle(element).getPropertyValue("background-color") !== "rgba(0, 0, 0, 0)") {
            e.target.style.opacity = window.getComputedStyle(element).getPropertyValue("opacity") - .1;
        }
    }));
}

createSquares(sides);

// get user input
setSquaresBtn.addEventListener("click", (e) => {
    sides = prompt("How many squares per side would you like? (0 - 100)", sides);

    if (sides <= 100 && sides > 0) {
        createSquares(sides);
    }
    else {
        sides = 16;
        alert("Please select between 0 - 100 squares.")
    }
});

// clear canvas
clearBtn.addEventListener("click", () => {
    createSquares(sides);
});
