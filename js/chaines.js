console.log("chargement ok");

let nombre = 207;
let chaine ="207";

if(nombre == chaine){//false
    console.log("faux");
}
// ici il faut faire attention au double égal qui n'est PAS le même que le triple, ca evite de comparer une chaine de caractere a un nombre. Le triple compare le type Et les valeurs
console.log(nombre === chaine);//true

let chaineBonjour = "bonjour";

console.log(chaineBonjour.lenght);

console.log(chaineBonjour.toLowerCase())://met la chaine en minuscule
console.log(chaineBonjour.toUpperCase())://met la chaine en minuscule
console.log(chaineBonjour.endsWith("e"));

console.log(chaineBonjour.startsWith("Bo"));

if(chaineBonjour.startsWith("Bon")){
    console.log("chaineBonjour commence par bon");
}
if(chaineBonjour.endsWith("jour")){
    console.log("chaineBonjour se termine par jour");
}

