console.log('body.js loaded')

let km = prompt ('quanti KM vuoi percorrere?');
console.log(km);

let age = prompt("quanti anni hai?");

let prize = (0.21 * km);

let resoult;

if(age < 18){
    prize *= 0.8;
    console.log(prize);

    resoult = `il prezzo del biglietto è ${prize.toFixed(2)}€`;
}
else if(age > 65) {
    prize *= 0.6;
    console.log(prize)

    resoult = `il prezzo del biglietto è ${prize.toFixed(2)}€`;
}
else {

    resoult = `il prezzo del biglietto è ${prize.toFixed(2)}€`;
}

document.getElementById(`resoult`).innerHTML = resoult;