console.log("chargement ok");

/* nom_de_la_fonction [parametres] traitements*/
/*
 * function nom_fct(param){
 *      traitements
 * }
 */

/*
 * function nom_fonction(param1, param2,...,pamaN){
 *      traitements
 * }
 */

function hello(){// public static void en Java --() les parametres seront dedans
    console.log("hello tout le monde");
}
hello();//il execute ce qu'il y a dans la fonction

double (12);//24

function double(nombre){
 console.log(nombre * 2);
}

double (15);//30

function bonjour(nom){
    console.log("bonjour Mr/Mme : " + nom)
}

bonjour("azerty");

//bonjour();   -> undefined

function addition(nb1, nb2){
    console.log(nb1+nb2);
}

addition(38,12);

//fonction qui retourne une valeur en la stockant dans une variable

function addition(nb1,nb2){
    return nb1+nb2;
}
let resultat =addition(38,22);
console.log(resultat);//60

function multiplication(nb1, nb2){
    return nb1 * nb2;//retour du resultat
}

let result = multiplication(10,68);
    console.log(result);



    function concatNames(nom, prenom){
        return nom + prenom;
    }
   let nomPrenom = concatNames("jack","paul");
    console.log(nomPrenom );

function nombreSupA20(nombre){
    if(nombre > 20){
        return true;
    } else {
        return false;
    }
}
let vraiOuFaux = nombreSupA20(21);
console.log("VraiOuFaux: " + vraiOuFaux);

function salut() {
    console.log("salut toioiiii");
   // return "salut toi"; Cela nous retourne quelque chose, le console.log n'est pas utile si on met return

}
let  s = salut();
console.log(s);