"use strict";
console.log("ja");
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const p = fetch(url)
    .then(response => {
    console.log(response.json());
    return response.json();
}).then(catsArray => {
    logCat(catsArray);
});
function logCat(cats) {
    console.log("Cat loaded", cats[0]);
}
