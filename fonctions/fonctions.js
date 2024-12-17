function sayHello(name){
    return `bonjour ${name}!`;
}

const name = "l'ane !";
console.log(sayHello(name));

function addition(a,b){
    return a + b
}

console.log(addition(1,3));

const soustraction = function(a,b){
    return a - b
}
console.log(soustraction(5,2));

const addition2 = (a,b)=> {
    return a + b
}
console.log(addition2(5,2));