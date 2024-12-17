export class Functions {

    sayHello(){
        alert("HELLO");
    }

    checkInput(input){
        if(input.trim() === ""){
            alert(`veuillez remplir le champ ${input}`)
            return false;
        }
        if(isNaN(input)){
            alert("veuillez entrer un nombre cohérent 😡 !!")
            return false;
        }
        return true;
    }

    checkInputString(input){
        if(input.trim() === ""){
            alert(`veuillez remplir les champs ⛔`)
            return false;
        }
        return true;
    }
}