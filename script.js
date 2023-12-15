let inputUserRaw = prompt("Choose either rock, paper or scissors to begin");
let inputUser = inputUserRaw.toLowerCase();
let inputComputer = ABRACADABRA();
console.log(`You have chosen ${inputUser}`);
console.log(`The Computer has chosen ${inputComputer}`);
game(inputUser,inputComputer);


