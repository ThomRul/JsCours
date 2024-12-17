// ancienne façon de faire des objets
// c'est moche 🤮
function Personne(nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
    this.direBonjour = function(){
        return `la personne se nommme ${this.nom}!`;
    }
}

let personne1 = new Personne("marc","lavoine");
console.log(personne1.direBonjour());

class Voiture{
    constructor(marque, modele, annee){
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    demarrer(){
        return `la voiture ${this.marque} démarre`;
    }
    description(){
        return `${this.marque} ${this.modele} ${this.annee}!`;
    }
}

const voiture1 = new Voiture("marc","lavoine",1960);
console.log(voiture1.description());
console.log(voiture1.demarrer());

class VoitureElectrique extends Voiture{
    constructor(marque, modele,annee,autonomie) {
        super(marque, modele,annee);
        this.autonomie = autonomie;
    }
}
const marcLavoineElectrique = new VoitureElectrique("marc","lavoine",2024,"560");
console.log(marcLavoineElectrique.demarrer());
console.log(marcLavoineElectrique.autonomie);