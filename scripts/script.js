const container = document.querySelector("#container");


for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    container.appendChild(div);
}

const divs = container.querySelectorAll(".divs");

divs.forEach(element => element.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
}))