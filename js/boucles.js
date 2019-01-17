console.log("ok");
console.log("=================================================================================================================");
console.log("la boucle WHILE :")
let cpt =1;

while(cpt < 10){//strictement inf
    console.log("bonjour" + cpt);
    cpt ++;//cpt = cpt + 1
}
//il affiche 9 fois bonjour

/*while (condition) {
    traitement
}*/

let cpt1 = 1;

while(cpt1 <= 100){
    console.log("valeur" + cpt1);
    cpt1++;
}

let cpt2 =100;
while (cpt2 >0){
    console.log(cpt2);
    cpt2--;
}

let cptAdd =1;
let resultat =0;
while(cptAdd <=100){
    resultat = resultat + cptAdd;
    console.log(resultat);
    cptAdd++;

}

console.log("la somme des résultats de 1 à 100 est : " + resultat);
console.log("=================================================================================================================");
console.log("> La boucle WHILE :")

let cptProduit = 1;
let resultatProduit = 1;

while (cptProduit <= 100){
    resultatProduit = resultatProduit * cptProduit;
    cptProduit++;
}
console.log("le produit des nombres entre 1 et 100 : " + resultatProduit);

console.log("=================================================================================================================");
console.log("> La boucle DO WHILE :")

/*do{ traitement}

while (condition);*/

let compteur =0;

do{console.log("boucle infinie");
compteur--;
}while (compteur >= 0);

console.log("=================================================================================================================");
console.log("> La boucle  FOR :")

for (let i = 1; i <= 10; i++) {
    console.log("boucle for " + i)

}
let resultatAdd50_100 =0;

for (let i = 50; i <= 100 ; i++) {
    resultatAdd50_100 = resultatAdd50_100 + i;

}

console.log("La somme des nombres entre 50 et 100 : " + resultatAdd50_100);
