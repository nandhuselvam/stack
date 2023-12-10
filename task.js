/*
task - https://restcountries.com/v3.1/all
*/


// const XMLHttpRequest = require('xhr2');

// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all");

// xhr.onload = function () {
//    console.log(countries.filters(country=>{
        
//     }
// }

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.onload = function () {

    for (let index in JSON.parse(xhr.responseText)){
        console.log(JSON.parse(xhr.responseText)[index].name.common);
    }
    // console.log(JSON.parse(xhr.country));
    
}

xhr.send()