var c = 0;

let changeBtn = document.getElementById("change")
let moverBtn = document.getElementById("move")

changeBtn.addEventListener("click", () => {
    if (c == 1) {
        acerto();
    }
    c = 1;
})

moverBtn.addEventListener("mouseover", () => {
    change();
})

function acerto() {
    alert("Te amo")
}

function change() {
    var i = Math.floor(Math.random() * 300) + 1;
    var j = Math.floor(Math.random() * 400) + 1;

    moverBtn.style.top = j + "px"
    moverBtn.style.left = i + "px"
}