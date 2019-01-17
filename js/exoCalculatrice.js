let nom = "azerty";

if (nom !== "azerty") {
    console.log("Vous n'êtes pas Azerty")
} else {
    console.log("Bonjour Mr Azerty");
}

/*******************************************************/

/*
if else condition avec NaN

let nombre = prompt("Veuillez saisir un nombre");
let vraiNombre = parseInt(nombre);

console.log(isNaN(vraiNombre));

if(isNaN(vraiNombre) === true){
    console.log("Vous avez saisi n'importe quoi");
}else{
    console.log("Merci d'avoir saisi un vrai nombre");
}

console.log(vraiNombre);
*/


//on déclare les variables à lextérieur , jamais a linterieur
let nombreSaisi1 ="";
let nombre1 =0;


do{nombreSaisi1 = prompt("veuillez saisir un 1er nombre : ");

    nombre1 = parseInt(nombreSaisi1);
if(isNaN(nombre1)=== true){
    alert("Vous avez saisi n'importe quoi");
}else{
    alert("Merci d'avoir saisi un vrai nombre");
}

}

while(isNaN(nombre1) === true);// is NaN : not a number




let operateur;//il faut absolument déclarer la variable en dehors du DO

do {
    operateur= prompt("veuillez saisir un operateur : ");
    if(operateur !== "+" && operateur !== "-" && operateur !== "*" && operateur !== "/" && operateur !== "%" ){
        alert("Vous avez saisi n'importe quoi");
    }else{
        alert("Merci d'avoir saisi un vrai operateur");
    }
}

while(operateur !== "+" && operateur !== "-" && operateur !== "*" && operateur !== "/" && operateur !== "%" );


let nombreSaisi2 ="";
let nombre2 =0;

do {nombreSaisi2 = prompt("veuillez saisir un 2e nombre : ");
    nombre1 = parseInt(nombreSaisi2);

    if(isNaN(nombre2)=== true){
        alert("Vous avez saisi n'importe quoi");
    }else{
        alert("Merci d'avoir saisi un vrai nombre");
    }
}
while(isNaN(nombre2) === true );




if (operateur === "+") {
    alert(nombreSaisi1 + nombreSaisi2);
    console.log(nombreSaisi1 + nombreSaisi2);

} else if (operateur === "-") {
    console.log(nombreSaisi1 - nombreSaisi2);
    alert(nombreSaisi1 - nombreSaisi2);

} else if (operateur === "*") {
    console.log(nombreSaisi1 * nombreSaisi2);
    alert(nombreSaisi1 * nombreSaisi2);
} else if (operateur === "/") {
    console.log(nombreSaisi1 / nombreSaisi2);
    alert(nombreSaisi1 / nombreSaisi2);
} else if (operateur === "%") {
    console.log(nombreSaisi1 % nombreSaisi2);
    alert(nombreSaisi1 % nombreSaisi2);
}
