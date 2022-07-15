"use strict";

const monday = document.querySelector(".money1");
const tuesday = document.querySelector(".money2");
const wednesday = document.querySelector(".money3");
const thursday = document.querySelector(".money4");
const friday = document.querySelector(".money5");
const saturday = document.querySelector(".money6");
const sunday = document.querySelector(".money7");



const url = "data.json";

function reqData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));
}

reqData();


function show(data) {
  data.forEach(element => {
    switch (element.day) {

      case "mon": 
        monday.textContent = "$" + element.amount;
        break;

      case "tue": 
        tuesday.textContent = "$" + element.amount;
        break;

      case "wed": 
        wednesday.textContent = "$" + element.amount;
        break;
      
      case "thu": 
        thursday.textContent = "$" + element.amount;
        break;

      case "fri": 
        friday.textContent = "$" + element.amount;
        break;

      case "sat": 
        saturday.textContent = "$" + element.amount;
        break;

      case "sun": 
        sunday.textContent = "$" + element.amount;
        break;
         
    }
  });
}

