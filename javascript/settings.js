let ismechanicsVisible = false;
let isaboutVisible = false;

function show(){
    let element = document.getElementById("about");
    let element2 = document.getElementById("about-header");
    element2.classList.toggle("hidden")
    element.classList.toggle("hidden");
    }

function showMechanics(){
    let element = document.getElementById("mechanics");
    let element2 = document.getElementById("mechanics-header");
    element2.classList.toggle("hidden")
    element.classList.toggle("hidden");
}
