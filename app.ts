'use strict'
const givesrc = document.querySelector("img") as HTMLImageElement;


console.log("hej");
const url = "https://api.thecatapi.com/v1/images/search?limit=10";

const p = fetch(url)
    .then(response => {
        return response.json();
    }).then(catsArray => {
        logCat(catsArray);
    });

function logCat(cats: any) {
    console.log("Cat loaded", cats[1].url);
    givesrc.src =  cats[1].url;

}