import {Functions} from "./Functions.js";
import {Voiture} from "./Voiture.js";
const test = document.getElementById("test");
console.log(test);
let myFunction = new Functions();

//récupération des inputs
const container = document.querySelector(".container");
const valid = document.querySelector("#btn");
const marque = document.querySelector("#marque");
const modele = document.querySelector("#modele");
const annee = document.querySelector("#annee");
const consommationInput = document.querySelector("#consommation");
const capaciteReservoir = document.querySelector("#capaciteReservoir");
const puissance = document.querySelector("#puissance");
const voitureValidation = document.querySelector("#carInfo");
const form = document.querySelector(".form");
let car;
let h1;

voitureValidation.onclick = () => {

    if(myFunction.checkInputString(marque.value) && myFunction.checkInputString(modele.value)
        && myFunction.checkInput(annee.value) && myFunction.checkInput(consommationInput.value)
        && myFunction.checkInput(capaciteReservoir.value) && myFunction.checkInput(puissance.value)){
        car = new Voiture(marque.value, modele.value, puissance.value, annee.value, capaciteReservoir.value, consommationInput.value);
        // affichage
        let h2 = document.createElement("h2");
        h2.classList.add("title");
        h2.textContent =`Marque et modèle : ${car.getMarque()} ${car.getModele()}` ;
        container.appendChild(h2);

        let h3 = document.createElement("h3");
        h3.classList.add("title");
        h3.textContent = `Année de construction : ${car.getAnnee()}`;
        container.appendChild(h3);
        container.appendChild(h3);

        let p = document.createElement("p");
        p.classList.add("title");
        p.textContent = `Consommation : ${car.getConsommation()} litres au 100 km`;
        container.appendChild(p);

        h1 = document.createElement("h1");
        h1.classList.add("hidden");
        container.appendChild(h1);

        form.style.display = "none";
        document.querySelector('.input-container').classList.remove('hidden');
    }
}

valid.onclick = function(){
    const kmInput = document.querySelector("#inputKm").value;
    if(myFunction.checkInput(kmInput)){
        const resultat = car.rouler(kmInput);
        h1.classList.remove("hidden");
        h1.textContent = `il vous reste : ${resultat.toFixed(2)} litres d'essence`;
    }

}