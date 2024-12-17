export class Voiture {
    constructor(marque, modele, puissance,annee,capaciteReservoir,consommation){
        this.marque = marque;
        this.modele = modele;
        this.puissance = puissance;
        this.annee = annee;
        this.capaciteReservoir = capaciteReservoir;
        this.consommation = consommation;
    }
    getMarque(){
        return this.marque;
    }
    getModele(){
        return this.modele;
    }
    getPuissance(){
        return this.puissance;
    }
    getAnnee(){
        return this.annee;
    }
    getCapaciteReservoir(){
        return this.capaciteReservoir;
    }
    getConsommation(){
        return this.consommation;
    }
    setCapaciteReservoir(capacite){
        this.capaciteReservoir = capacite;
    }
    setConsommation(consommation){
    }
    setPuissance(puissance){
        this.puissance = puissance;
    }
    setModele(modele){
        this.modele = modele;
    }
    setMarque(marque){
        this.marque = marque;
    }
    setAnnee(annee){
        this.annee = annee;
    }
    rouler(distance){
        let consommationTrajet = (distance * this.consommation)/100;
        if(this.capaciteReservoir === 0 ){
            return "impossible de rouler vous devez faire le plein"
        }
        if(this.capaciteReservoir > consommationTrajet){
            this.capaciteReservoir -= consommationTrajet;
            return this.capaciteReservoir;

        }

    }
}