console.log("chargement ok");

let voitures = [
    "Opel",//0
    "C3",//1
    "Golf",//2
    "Megane",//3
    "miniCooper",//4
    12,
    true//boolean
];//tableau stocke des indices de 0 à l'infini pour retrouver le contenu

console.log("1ere voiture : " + voitures [0]);//on récupère le 1er élement du tableau
console.log("2e voiture : " + voitures [1]);
console.log("3e voiture : " + voitures [2]);
console.log("4e voiture : " + voitures [3]);
console.log("5e voiture : " + voitures [4]);
console.log("6e voiture : " + voitures [5]);
console.log("7e voiture : " + voitures [6]);
console.log(voitures);
console.log(voitures.length);

for (let i = 0; i < voitures.length; i++) { //faire attention à bien mettre strictement inférieur sinon il va lire apres le tt dernier élément
    console.log("à l'indice " + i + " se trouve " + voitures[i]); //i vaut zéro, donc l'indice 0 ( opel) puis 1,2...

}

console.log(voitures[100]); // undefined


//------Changer la valeur d'un élément du tableau : ------

voitures[6] = "ford";
voitures[9] = "CLIO";

for (let i = 0; i < voitures.length; i++) { //faire attention à bien mettre strictement inférieur sinon il va lire apres le tt dernier élément
    console.log("à l'indice " + i + " se trouve " + voitures[i]); //i vaut zéro, donc l'indice 0 ( opel) puis 1,2...

}

//---------Ajouter un élément à la fin du tableau : PUSH---------------il injecte une nouvelle valeur à la fin

voitures.push("classe c");
voitures.push("audi a3");
console.log(voitures);

//---------Ajouter un élément au début du tableau : unshift---------------

voitures.unshift("clio");
console.log(voitures);

//---------Supprime le 1er élément du tableau : shift---------------
voitures.shift();
console.log(voitures);

//---------Supprime le dernier élément du tableau : shift---------------
voitures.pop();
console.log(voitures);

//elle va separer nos valeurs et va l'afficher sous forme de tableau avec split
let texte = "jack,james,45,0669687549";
let tableauInfo = texte.split(",");//on lui déclare un séparateur qui pourrait se trouver dans la chaine de caractere ci-dessous, ici la virgule

console.log("nom : " + tableauInfo[0]); // nom = jack

let chaine = "jack,james,georges,tom,fred";
let prenoms = chaine.split(",");

console.log(prenoms);

let parlement = "Le Parlement du Royaume-Uni de Grande-Bretagne et d'Irlande du Nord (Parliament of the United Kingdom of Great Britain and Northern Ireland) est l'institution législative suprême du ,Royaume-Uni, des ,territoires britanniques, d'outre-mer et des ,dépendances de la Couronne,. Lui seul dispose de la ,suprématie parlementaire, c'est-à-dire du ,pouvoir de légiférer, sur tous les autres ,organes politiques du Royaume-Uni, et de ses ,territoires,."
let tabParlement = parlement.split(",");
console.log(tabParlement.length);
console.log(tabParlement);


// *******exercice sur les nombres premiers : afficher la somme des nombres premiers**********

let tabNombrePremiers =  [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
    83, 89, 97 ];

let somme = 0;

for (let i = 0; i < tabNombrePremiers.length ; i++) {
        somme = tabNombrePremiers[i] + somme;

}
console.log(somme);