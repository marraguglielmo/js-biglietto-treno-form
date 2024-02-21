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

if(age.value === '1'){
    price *= 1 -(youngDiscount / 100);
}else if(age.value === '2'){
    price = price;
} else{
    price *= 1 -(seniorDiscount / 100);
}



console.log(price);
console.log(name.value);
console.log(km.value);
console.log(age.value);
console.log(finalPrice);