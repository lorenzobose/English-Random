//DICHIARAZIONE DEI TAG
const field = document.createElement("div");
const body = document.querySelector("body");
const title = document.createElement("h1");
const scelta = document.createElement("p");
const input = document.createElement("input");
const Invio  = document.createElement("a");

function setup(){

}


function check(){
  console.log(input.value)

  //verificare con un for che itera tutti gli elementi di dizionario fino a che non trova quello scelto
  //if(dizionario[i].e == parola randomizzata) e poi verifica se la risposta è inclusa nella paroal randomizzata
  //if(dizionario[i].i.includes(risposta)).......
}


//IMPLEMENTAZIONE DEL FIELD
field.id = "field";
body.appendChild(field);

//HEADER DELL' APP
title.innerText = "Scrivi la traduzione......"
field.appendChild(title);

//Blocco DEL PRIMO TESTO
const div1 = document.createElement("div");
div1.appendChild(scelta);
field.appendChild(div1);

//BLOCCO DELLA TRADUZIONE
const div2 = document.createElement("div");
div2.appendChild(input);

input.addEventListener("keypress", function(event){if (event.key == "Enter"){check;}});

Invio.textContent = "Invio";
Invio.onclick = check;
div2.appendChild(Invio); 
field.appendChild(div2);

const fit = () => {
    if(innerWidth > 1000){
      field.classList = [];
      field.classList.add("PCField");
    }
    else{
      field.classList = [];
      field.classList.add("MPField");
    }
  };
  
document.addEventListener("DOMContentLoaded", fit);
window.addEventListener("resize", fit);
document.addEventListener("fullscreenchange", fit);
  