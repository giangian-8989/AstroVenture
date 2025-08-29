// let ismechanicsVisible = false;
// let isaboutVisible = false;
window.onload = function(){

let aboutContent = document.getElementById("about-content");
let aboutHeader = document.getElementById("about-header");
let mechanicsContent = document.getElementById("mechanics-content");
let mechanicsHeader = document.getElementById("mechanics-header");
let controlsContent = document.getElementById("controls-content");
let controlsHeader = document.getElementById("controls-header");
let volumesContent = document.getElementById("volumes-content");
let volumesHeader = document.getElementById("volumes-header");

console.log("aboutContent:", aboutContent);
console.log("aboutHeader:", aboutHeader);
console.log("mechanicsContent:", mechanicsContent);
console.log("mechanicsHeader:", mechanicsHeader);
console.log("controlsContent:", controlsContent);
console.log("controlsHeader:", controlsHeader);
console.log("volumeContent:", volumeContent);
console.log("volumeHeader:", volumeHeader);





};
function show(){
    try{
    aboutContent.classList.remove("hidden");
    aboutHeader.classList.toggle("hidden");
    } catch{
        console.error(TypeError);
    }
}

function showMechanics(){
    clearInterface();
    mechanicsHeader.classList.remove("hidden")
    mechanicsContent.classList.remove("hidden");
}
function showControls(){
    clearInterface();
    controlsContent.classList.remove("hidden");
    controlsHeader.classList.remove("hidden");
}
function showVolumes(){
    clearInterface();
    volumesContent.classList.remove("hidden");
    volumesHeader.classList.remove("hidden");
}

function clearInterface(){
    aboutContent.classList.add("hidden");
    aboutHeader.classList.add("hidden");
    mechanicsContent.classList.add("hidden");
    mechanicsHeader.classList.add("hidden");
    controlsContent.classList.add("hidden");
    controlsHeader.classList.add("hidden");
    volumesContent.classList.add("hidden");
    volumesHeader.classList.add("hidden");
}