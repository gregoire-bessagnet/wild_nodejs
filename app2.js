function storeAge(){
    agedonne = console.log("How old are you ?");
}

function birthdate(agedonne){
    var today = new Date().getFullYear();
    var anneedenaissance = today - agedonne;
    console.log('Vous êtes né en ' + anneedenaissance) };

console.log(storeAge())
console.log(birthdate());






