// FORM 
const name = document.getElementById('nome');
const km = document.getElementById('km');
const age = document.querySelector('.age-select');
const rate = 0.21;
const youngDiscount = 20;
const seniorDiscount = 40;
let price;   
let finalPrice;
let isValidData = true;



// CONTROLLO VALIDITÀ DEI DATI



// calcoli
price = km.value * rate;
finalPrice = price;

if(age < 18){
    finalPrice = 1 -(youngDiscount / 100);
}



console.log(price);
console.log(name.value);
console.log(km.value);
console.log(age.value);