const cuisiner = (ingredients, callback) => {
    const plat = `${ingredients} cuisiné`;
    callback(plat);
}
cuisiner("🍗", (resultat) => {
    console.log(resultat);
})

function saluer(nom, callback){
    const message = `Salut ${nom}`
    callback(message);
}

saluer("Tom", (resultat) => {
    console.log(resultat);
});

function math(nombre1, nombre2, operation) {
    return operation(nombre1, nombre2);
}

console.log(math(1, 2, (n1, n2) => {
    return n1 + n2;
}));
/***function addition(nombre1, nombre2){
    console.log(nombre1 + nombre2);
}

function calculer(nb1, nb2, operation){
    return operation(nb1, nb2);
}
calculer(5,5, (n1,n2) => {
    console.log(n1 + n2);
})**/