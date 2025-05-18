let form = document.querySelector("form");
let baliseInput = document.querySelector("input");
let divFormulaire = document.querySelector(".formulaire");
let zoneResultat = document.createElement("p");
zoneResultat.style.color = "white";
const regex = /^[0-9]+$/;

/*
******* 
Cette fonction nous permet de savoir si une année est bissextile (366 jours) ou non bissextile (365 jours) ***********
*/ 

function testeYearBissextile(annee, diviseur1 = 4, diviseur2 = 100, diviseur3 = 400) {
    /*
    ********
    Si une année est divisible par 4 mais pas divisible par 100, est une année bissextile; sinon si une année est divisible par 100 mais pas divisible par 400, l'année n'est pas bissextile. Sinon si elle est divisible par 100 et par 400, est une année bissextile.
    *********
    */
   if (annee === "") {
        zoneResultat.parentNode.removeChild(zoneResultat);
   }
   else if (! regex.test(annee)) {
        divFormulaire.appendChild(zoneResultat);
        zoneResultat.innerText = `Le format de caractère saisi n'est pas correcte`;
   } else if (annee % diviseur1 === 0 && annee % diviseur2 !== 0) {

        divFormulaire.appendChild(zoneResultat);
        zoneResultat.innerText = `L'année ${annee} est une année bissextile (Elle compte 366 jours)`;

    } else if (annee % diviseur2 === 0 && annee % diviseur3 !== 0) {

        divFormulaire.appendChild(zoneResultat);
        zoneResultat.innerText = `L'année ${annee} n'est pas une année bissextile (Elle compte 365 jours)`;

    } else if (annee % diviseur2 === 0 && annee % diviseur3 === 0) {

        divFormulaire.appendChild(zoneResultat);
        zoneResultat.innerText = `L'année ${annee} est une année bissextile (Elle compte 366 jours)`;

    }
    else {

        divFormulaire.appendChild(zoneResultat);
        zoneResultat.innerText = `L'année ${annee} n'est pas une année bissextile (Elle compte 365 jours)`;

    }
}

baliseInput.addEventListener("input", function() {
    testeYearBissextile(baliseInput.value.trim());
})
