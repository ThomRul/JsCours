// destructuring !
const fruits = ["pomme", "banana", "orange"];
const fruitTbl = fruits[0];
const fruitTbl2 = fruits[1];
console.log(fruitTbl);
console.log(fruitTbl2);

// avec le destructuring c'est vachement plus cool 😎
const [premierFruit, deuxiemeFruit] = fruits
console.log(deuxiemeFruit);

//affection sans déclaration
const carte = ["Atraxa","Massacre Girl","Omnath"];
let val1, val2, val3;
val1 = "Hello";
val2 = "Vive Java";
val3 = " script !";
console.log(val1,val2,val3);
[val1,val2,val3] = carte;
console.log(val1,val2,val3);

// destructuring rest
const equipe = ["coach","capitaine jack sparrow","attaquant","défenseur","gardien"];
// sans destructuring
const team1 = equipe[0];
const team2 = equipe[1];
// ...
const team3 = equipe.slice(2);
console.log(team3);
const [coach,capitaine,...joueurs] = equipe;
console.log(coach);
console.log(joueurs)

// ignorer des valeurs
const notes = [15,12,18,9];
const[premier,,troisieme] = notes
console.log(premier);
console.log(troisieme);

// échanger des variables
let sucre = "sel";
let sel = "sucre";
[sucre, sel] = [sel,sucre];
console.log(sucre);
console.log(sel);

// comment on pourrait faire un "tuple" en js
const pseudoTuple = Object.freeze([5,-2,8]);
pseudoTuple[0] = 10;
console.log(pseudoTuple[0]);

// destructuring d'objets
const personne = {
    nom : "Brillant",
    prenom : "Dany",
    age : "vieux",
    ville : "Paparis"
};
const nomBrillant = personne.nom;
console.log(nomBrillant);
const {nom, age} = personne;
console.log(nom);
console.log(age);

const bestLangage = {titre : "JavaScriptpasbien",acronym : "le c", utilite : "PARTOUT 💣"};
let titre, acronym;
({titre, acronym} = bestLangage);
console.log(titre);

const planete = {
    nom : "Mercure",
    distance : 42,
    masse : 0.00001
};

const {
    nom: name,
    distance,
    masse
} = planete;
console.log(planete.nom);
console.log(name);


