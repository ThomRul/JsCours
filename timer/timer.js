const timer = setTimeout(function(){
    // tout un tas d'opérations / traitements...
    console.log("ce message va s'afficher après 3 secondes")
}, 3000);

const interval = setInterval(() => {
    console.log("hello");
},1000);

console.log("Je suis ici ! 🥺");

