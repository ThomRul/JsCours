/*
*
*   <h1 id="title"> Rentrez vos infos : </h1>
    <input type="text" id="nom" placeholder="Entrez votre nom">
    <input type="text" id="prenom" placeholder="Entrez votre prenom">
    <input type="number" id="ddn" placeholder="Entrez votre année de naissance">
    <button id="envoyer">Envoyer</button>
    * <div class="displayInfos"></div>
*
* ******/

// variables pour récupérer les infos dont j'ai besoin
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const ddn = document.getElementById("ddn");
const btn = document.getElementById("envoyer");
const displayInfo = document.querySelector(".displayInfos");
const dateDuJour = new Date().getFullYear();
const h1 = document.getElementById("title");

setTimeout( () => {
    h1.textContent = "⏲️";
},5000);

let age = "Hello";

btn.addEventListener('click', () => {
    let nomMajuscule = nom.value.toUpperCase();
    //console.log(nomMajuscule);
    let prenomMinuscule = prenom.value.toLowerCase();
    //console.log(prenomMinuscule);
    let anneeNaissanceValeur = parseInt(ddn.value);
    //console.log(anneeNaissanceValeur);
    if (isNaN(anneeNaissanceValeur)) {
        alert("JE VEUX UN VRAI NOMBRE !!");
    }
    console.log("Je suis age dans le contexte de mon eventListenner")
    console.log(age);
    console.log(typeof age);
    age = dateDuJour - anneeNaissanceValeur;
    console.log(typeof (age));
    console.log(age);
    displayData("je suis dans l'eventListenner", age);

    function test(param) {
        console.log(param);
    }

    test("hello");

    //afficher les informations qu'on a reçue directement dans la div display-info
    // On va devoir créer les éléments html qui n'existent avec le javascript
    let h3 = document.createElement("h3");
    h3.classList.add("nom");
    h3.textContent = `Votre nom est : ${nomMajuscule}`
    displayInfo.appendChild(h3);
    let h4 = document.createElement("h4");
    h4.classList.add("prenom");
    h4.textContent = `Votre prénom est : ${prenomMinuscule}`;
    displayInfo.appendChild(h4);
    let p = document.createElement("p");
    p.textContent = `Votre âge est : ${age}`
    displayInfo.appendChild(p);
})
console.log("je suis age dans le contexte global");
console.log(typeof (age));
console.log(age);
age = "Zozo";
console.log(age);
displayData("je suis dans le contexte global", age);

function displayData(message, data) {
    console.log(`${message} ${data} informations sur le type ${typeof (data)}`)
}


