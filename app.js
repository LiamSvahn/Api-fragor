"use strict";
//const divImg = document.querySelector('div') as HTMLDivElement;
const givesrc = document.querySelector('img');
console.log("hej");
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const p = fetch(url)
    .then(response => {
    return response.json();
}).then(catsArray => {
    logCat(catsArray);
});
//function gif() {
//    const gif = new Promise((resolve) => {
//        setTimeout(() => {
//            resolve("hej");
//        }, 1000);
//    });
//    return gif;
//}
function logCat(cats) {
    //gif()
    console.log("Cat loaded", cats[1].url);
    givesrc.src = cats[1].url;
}
