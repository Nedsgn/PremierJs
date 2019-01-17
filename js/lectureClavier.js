console.log('le fichier est bien été chargé');

//let textePrompt =prompt("veuillez saisir un mot : ");//un peu comme une alerte sauf qu'il y a unc hamp pour écrire : boite de dialogue

/*let nom  = prompt("veuillez saisir un nom : ");
let prenom =prompt("veuillez saisir un prenom : ");
console.log("bonjour "+ prenom + " " + nom);

//console.log("vous avez saisi : " + textePrompt)//on récupere ce qu'on a saisi dans le prompt et l'injecte dans textePrompt
let nombre  =prompt("veuillez saisir un nombre : ");
console.log("le nombre est "+ nombre);
console.log("le 2e nombre est "+ nombre + 15);
//le prompt interprete comme uen chaine de caractere



let vraiNombre = Number(nombre);//la il change le nombre qui sera entré dans le prompt pour quil devient un int
//les deux sont pareilles
let unAutreVraiNombre = parseInt(nombre);//il parse en nombre, une chaine de car 145 passe en nombre
console.log(vraiNombre + 15);
console.log(unAutreVraiNombre + 15);

*/
/*afficher image*/

let monImage = document.querySelector(
    'img');

monImage.addEventListener('click', function()
    {
        let monSrc = monImage.getAttribute('src');
        if (monSrc === '../img/js.png') {
            monImage.setAttribute('src', '../img/duck.png');
        } else {
            monImage.setAttribute('src', '../img/js.png');
        }
    }
);

//Ajouter un message d'accueil personnalisé

/*let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
    let monNom = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', monNom);
    monTitre.textContent = 'Mozilla est cool, ' + monNom;
};*/


/*les deux font la mm chose*/
let vraiNombre = Number(nombre);
let unAutreVraiNombre = parseInt(nombre);

console.log(vraiNombre + 15);
console.log(unAutreVraiNombre + 15);


//corection : faire une calculatrice tres simple sans conditions

let nb1S = prompt("Veuillez saisir le nombre 1");
let nb2S = prompt("Veuillez saisir le nombre 2");
let resultat = parseInt(nb1S) + parseInt(nb2S);
alert("Resultat: " + resultat);
console.log(resultat);


