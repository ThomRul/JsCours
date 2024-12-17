try{
   console.log(1);
   throw new Error("une erreur s'est produite pendant l'opération x 😟");
   console.log(2);
}catch(error){
    console.log("une exception s'est produite : " + error);
    console.log(error.stack);
}
console.log(3);

//on peut même en faire une fonction !
function reserverTable(nombrePersonne){
    if(nombrePersonne <= 0){
        throw new Error("⛔ le nombre de personne doit être positif!");
    }
    if(nombrePersonne > 8){
        throw new Error("💣 désolé, nous n'acceptons pas les groupe de plus de 8");
    }
    return "table réservée";
}

try{
    reserverTable(10);
}catch(error){
    console.log(error.message);
}
console.log("bonjour ! ");

// On peut créer une classe d'exception custom
class ErreurDeReservation extends Error{
    constructor(message){
        super(message);
        this.name = "ErreurDeReservation";
    }
}

function reserverTableCustom(nombrePersonne){
    if(nombrePersonne <= 0){
        throw new ErreurDeReservation("Le nombre de personne doit être positif");
    }
    if(nombrePersonne > 8){
        throw new ErreurDeReservation("Désolé on accepte pas les groupe trop grands !")
    }
    return "Table réservée";
}
    try{
        const result = reserverTableCustom(blala);
        console.log(result);
    }catch(error){
        if(error instanceof ErreurDeReservation){
            console.log("Une erreur de réservation est survenue ! : " +error.message);
        }else{
            console.log("une erreur est survenue " +error);
        }
    }
    console.log("Bienvenue au resto !! ");