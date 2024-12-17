let animal = {
    manger : function(){
        return "miam miam"
    }
}

let chat = Object.create(animal);
chat.miaouter = function(){
    return "miaou 🐈"
}

console.log(chat.manger());
console.log(chat.miaouter());

let animal2 = {
    type : "inconnu",
    manger : function(){
        return "miam miam"
    }
}

let carnivore = Object.create(animal2);
carnivore.regimeAlimentaire = "viande";

let chat2 = Object.create(carnivore);
chat2.miaouler = function(){
    return "miaou"
}
console.log(chat2.miaouler());
console.log(chat2.type);
console.log(chat2.regimeAlimentaire);