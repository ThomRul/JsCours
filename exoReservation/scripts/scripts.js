import {Utils} from './Utils/Utils.js';
import {ReservationError} from './exceptions/ReservationError.js';
import {ValidationError} from "./exceptions/ValidationError.js";

Utils.printDebug("test","test");

//variables
const submit = document.getElementById("btn-submit");
const chambres = [
    {id : 1, capacite : 2, reservations : []},
    {id : 2, capacite : 4, reservations : ['2024-12-20']},
    {id : 3, capacite : 6, reservations : []}
];

//console.log(nom,prenom,email,date,personnes,submit) debug

//function de recherche d'une chambre
function findAvailbleRoom(personne,date){
    const chambreDispo = chambres.find(
        chambre => chambre.capacite >= personne && !chambre.reservations.includes(date)
    );
    if (!chambreDispo) throw new ReservationError("Pas de chambre disponible","general");
    return chambreDispo;
}


submit.addEventListener("click", (event) => {
    event.preventDefault();
    try{
        document.querySelectorAll('.error').forEach(err => err.style.display = 'none');
        document.querySelectorAll('input').forEach(input => input.classList.remove('invalid'));

        const nom = Utils.validateName(document.getElementById("nom").value,"nom");
        const prenom = Utils.validateName(document.getElementById("prenom").value,"prenom");
        const email = Utils.validateEmail(document.getElementById("email").value);
        const date = Utils.validateDate(document.getElementById("date").value);
        const personnes = parseInt(document.getElementById("personnes").value);

        const chambre = findAvailbleRoom(personnes,date);
        chambre.reservations.push(date);
        alert(`Réservation confirmée pour la chambre ${chambre.id}, le ${date} pour ${personnes} personnes.`);
    }
    catch (err){
        if(err instanceof ReservationError){
            if(err.field === "general"){
                alert(err.message);
            }
        }
        else if (err instanceof ValidationError){
            const errorElem = document.getElementById(`${err.field}Error`);
            Utils.printDebug("errorElem",errorElem);
            if(errorElem){
                errorElem.textContent = err.message;
                errorElem.style.display = "block";
                document.getElementById(err.field).classList.add("invalid");
            }
        }else{
            alert("Une erreur est survenue ")
            Utils.printDebug(err);
        }
    }
})