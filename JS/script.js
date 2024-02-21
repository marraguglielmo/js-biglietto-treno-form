// FORM 
const name = document.getElementById('nome');
const km = document.getElementById('km');
const age = document.querySelector('.age-select');
const rate = 0.21;
const youngDiscount = 20;
const seniorDiscount = 40;
let price;   
let txtTicketName = "";
let txtTicketPrice = "";
const ticket = document.querySelector('.ticket');
const isValidData = true;

// BOTTONI
const btnGen = document.querySelector('.btn-gen');
const btnReset = document.querySelector('.btn-res');


// CONTROLLO VALIDITÀ DEI DATI



// calcoli
price = km.value * rate;

if(age.value === '1'){
    price *= 1 -(youngDiscount / 100);
}else if(age.value === '2'){
    price = price;
}else{
    price *= 1 -(seniorDiscount / 100);
}
price = price.toFixed(2);

// FUNZIONI

let ticketName = document.getElementById('ticket-name');
ticketName.innerHTML = txtTicketName;

let ticketPrice = document.getElementById('ticket-price');
ticketPrice.innerHTML = txtTicketPrice;


btnGen.addEventListener('click', function(){
    // neutralizzo l'action del form
    event.preventDefault();
    // rendere visibile il ticket
    ticket.classList.remove('d-none')


    // aggiungo il nome nel ticket
    ticketName.innerHTML = name.value;
    // aggiungo la carrozza
    let ticketCoach = document.getElementById('ticket-coach');
    ticketCoach.innerHTML = Math.floor(Math.random() * (10 - 1 + 1) +1);
    // aggiungo il codice CP
    let ticketCp = document.getElementById('ticket-cp');
    ticketCp.innerHTML = Math.floor(Math.random() * (100000 - 10000 + 1) +1);
    // aggiungo il costo del biglietto
    ticketPrice.innerHTML = `${price}&euro;`;
})



console.log(price);
console.log(name.value);
console.log(km.value);
console.log(age.value);