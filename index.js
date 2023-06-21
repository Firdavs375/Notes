const center = document.querySelector(".center")
const btn = document.querySelector("button")
const note = document.querySelectorAll(".container")
const delate = document.querySelector(".img")

function showNotes() {
    center.innerHTML = localStorage.getItem("container")
}
showNotes();



function updateStorage() {
    localStorage.setItem("container", center.innerHTML);
}


btn.onclick = () => {
    center.innerHTML += `
    <div class="container">
    <img class="img" src="./img/delate.png" alt="png">
    <div class="minBox"></div>
    <p contenteditable="true" class="inpBox"></p>
    </div>
    `
};


center.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "p") {
        note = document.querySelectorAll(".inpBox");
        note.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }

})

