//etape 1 : séléctionner les éléments

let input = document.getElementById("prix");
let error = document.querySelector("small");
let form = document.getElementById("formulaire");

//Etape 2 : cacher l'erreur

error.style.display = "none";

//Etape 3: Générer un nombre aléatoire entre 1 et 1000

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

function verifier(nombre) {

    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {

        instruction.textContent = "#" + coups + "(" + nombre + ") C'est plus";
        instruction.className = "instruction plus";

    } else if (nombre > nombreAleatoire) {

        instruction.textContent = "#" + coups + "(" + nombre + ") C'est moins";
        instruction.className = "instruction moins";
    } else {

        instruction.textContent = "#" + coups + "(" + nombre + ") Félicitations vous avez trouvé le juste prix !!!!!";
        instruction.className = "instruction fini";
        input.disabled = true;
    }
    document.querySelector('#instructions').prepend(instruction);
}

//Etape 4: Véerifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", () => {
    if (isNaN(input.value)) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
});

// Etape 5 : Agir à l'envoi du formulaire

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == "") {

        input.style.borderColor = "red";
    } else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

//Etape 6 : Créer une fonction vérifier  ligne 17


