console.log("le fichier js a été chargé");

let nombre = 50;

//condition if
/*if (condition){
traitement}
 */

/*conditon if else
if (condition){
traitement1 } else{
traitement 2}
 */

if (nombre === 50) {
    console.log("50 = " + nombre);
} else {
    console.log("50 != " + nombre)
}

/*condition if else if.....else
if(condition1){
traitement 1
}else if(condition2){
traitement2}
else{traitement x
}
 */

let age = 17;

if (age > 18) {
    console.log("Vous avez plus de 18 ans");
} else if (age < 18) {
    console.log("Voue avez moins de 18 ans")
} else {
    console.log("Vous avez 18 ans");
}

/*
> strictement supérieur
< strictement inférieur
>= supérieur ou égal
<=
=== ou == égal
!== ou !=
 */

let nom = "azerty";

if (nom !== "azerty") {
    console.log("Vous n'êtes pas Azerty")
} else {
    console.log("Bonjour Mr Azerty");
}

let nombre1 = prompt("veuillez saisir un 1er nombre : ");

let operateur;//il faut absolument déclarer la variable en dehors du DO

do {
    operateur= prompt("veuillez saisir un operateur : ");
}

while(operateur !== "+" && operateur !== "-" && operateur !== "*" && operateur !== "/" && operateur !== "%" );


let nombre2 = prompt("veuillez saisir un 2e nombre : ");


let nombreSaisi1 = parseInt(nombre1);

let nombreSaisi2 = parseInt(nombre2);

if (operateur === "+") {
    console.log(nombreSaisi1 + nombreSaisi2);
} else if (operateur === "-") {
    console.log(nombreSaisi1 - nombreSaisi2);
} else if (operateur === "*") {
    console.log(nombreSaisi1 * nombreSaisi2);
} else if (operateur === "/") {
    console.log(nombreSaisi1 / nombreSaisi2);
} else if (operateur === "%") {
    console.log(nombreSaisi1 % nombreSaisi2);
}else{
    console.log("Incorrect");
}

/* ou encore :

let nombreSaisi1 = prompt("Veuillez saisir le nombre 1");
let operation = prompt("Veuillez saisir l'opération");
let nombreSaisi2 = prompt("Veuillez saisir le nombre 2");

let nombre1 = parseInt(nombreSaisi1);
let nombre2 = parseInt(nombreSaisi2);

switch (operation) {
    case "+":
        console.log("Addition");
        console.log(nombre1 + nombre2);
    break;
    case "-":
        console.log("Soustraction");
        console.log(nombre1 - nombre2);
        break;

    case "*":
        console.log("*");
        console.log(nombre1 * nombre2);
        break;
    case "/":
        console.log("/");
        console.log(nombre1 / nombre2);
        break;

    default:
        console.log("L'opération n'existe pas ");
        break;
}
 */

/*bouton test*/


let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h2');

function définirNomUtilisateur() {
    let monNom = prompt('Veuillez saisir votre prénom.');
    localStorage.setItem('nom', monNom);
    monTitre.textContent = 'Hello, ' + monNom + ' bienvenue sur le site !';
}

if (
    !localStorage.getItem('nom')) {
    définirNomUtilisateur();
} else {
    let nomEnregistré = localStorage.getItem('nom');
    monTitre.textContent = 'Hello, ' + nomEnregistré + ' bienvenue sur le site !';
}

monBouton.addEventListener('click', function() {
    définirNomUtilisateur();
}
);

//change le background du body

var btn = document.querySelector('.btnColor');
function random(number) {
    return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;


//and et or
let note =10;
if(note > 0 && note <= 5){
    console.log("a l'année prochaine");
}else if(note > 5 && note <=10){
    console.log("Presque");
}else if(note > 10 && note <= 15){
    console.log("Bien");
}else if(note > 15 && note <= 20){
    console.log("tres bien");
}
