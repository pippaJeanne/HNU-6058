/*function Bj(nom) {
alert("Bonjour " + nom + " !");
}

Bj("Alice");*/

// console.log('Comptons justqu\'à …');

/* for(let i = 0;  i <= 4 ; i++){
    console.log(i);
} */

/* var i = 0
do {
    i++
    console.log(i);
}
while (i < 4) */

window.onload = function getValue(){
    const a = document.querySelector('#bon');
    console.log(a)
}

function random() {
    let goNum = 0;
    let nombre = Math.ceil(Math.random() * 100);
   
    let reponse = prompt("Tapez un nombre entre 1 et 100");
    reponse = Number(reponse);
    goNum++;

 while(reponse !== nombre){
    if(reponse < nombre){
       reponse = prompt("Trop petit ! Réessayez !")
    }
    if(reponse > nombre){
        reponse = prompt("Trop grand ! Réessayez !")
     }
    reponse = Number(reponse);
    goNum++;
} 

alert(`Bien joué ! La réponse était ${nombre}. (${goNum} ${goNum === 1 ? 'tentative' : 'tentatives'})`);
};


