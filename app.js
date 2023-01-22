'use strict';
console.log("hej1");
const givesrc = document.querySelector(".imgsrc");
const lodergif = document.querySelector("#overlay");
console.log("hej2");
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const p = fetch(url)
    .then(response => {
    console.log("hej3");
    return response.json();
}).then(catsArray => {
    logCat(catsArray);
});
function loadspin() {
    lodergif.style.display = "block";
}
function stopspin() {
    lodergif.style.display = 'none';
}
function logCat(cats) {
    loadspin();
    console.log("Cat loaded", cats[1].url);
    givesrc.src = cats[1].url;
    stopspin();
}
