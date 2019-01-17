console.log("chargement ok");

let tableau =["Google","AMAZON","Facebook","Apple","Microsoft"];

tableau [10]= "IBM";

for (let i = 0; i < tableau.length ; i++) {
    if (tableau[i] === undefined) {
        console.log("variable vide");
    } else {
        console.log(tableau[i]);
    }
}
    tableau [0] ="ALPHABET";
        console.log(tableau);
//**splice : supprimer et remplace à partir du 0
    tableau.splice(0,1, "cest google");
    console.log(tableau);

    tableau.splice(0,2, "goomazon");// "c'est google" et "amazon" on étés remplacés par goomazon
    console.log(tableau);

    tableau.splice(0,0, "coucou");//a partir de l'indice 0 tu rajoutes l'élément
    console.log(tableau);

    delete tableau[10];
    console.log(tableau);// on a toujours la place qu'occupait IBM mais, il n'y a plus rien dedans

//tableau.splice(5,6) : a partir du 5e indice , tu m'en supprimes 6 : c'est à éviter car il supprime des places

let variableVide ;
if(variableVide !== undefined){
    console.log(variableVide);
}else {
    console.log(typeof variableVide); // typeof : pour vérifier le TYPE de la variable : c'est pas forcemment pour le tableau
}
if( typeof variableVide === "undefined"){
    console.log(" la variable est vide !!!")
}


/*
> creation d'un tableau : let nom_tableau = [valeurs];

> modifier une valeur dans un tableau : nom_tableau[indice] = nouvelle valeur;

>Remplacer un élément ou plusieurs éléments : nom_tableau.splice (indice), nombre_élément, nouvelle valeur); --->il supprime carrément l'indice

> Ajouter une valeur à la fin : nom_tableau.push(valeur);

> Ajouter une valeur au début : nom_tableau.unshift(valeur);

> Supprimer une valeur du tableau (dernier élement) : nom_tableau.pop(valeur);

> Supprimer une valeur premier élémement : nom_tableau.shift(valeur);

> Taille d'un tableau : nom_tableau.length;

> Supprimer un ou plusieurs élements : delete nom_tableau --> il supprime ce qu'il y a dans l'indice

> Transformer une chaine de caracteres en tableau :
let tab = nom_tableau.split(chaine ou une virgule);



nom_
 */