let rollButton = document.querySelector("#roll-button");
let maxRollInput = document.querySelector('#max-rolls');
let showResults = document.querySelector("#showRolls");
let displayRolls = document.querySelector("#allRolls");
let resetButton = document.querySelector("#reset-all");
let count = 0;
let dieRolls = [];
let totalRoll = document.querySelector("#sum-rolls");

function rollRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
    }

rollButton.addEventListener("click", function() {
    let maxRoll = Number(maxRollInput.value);
    let count = 0
    dieRolls = []

    
    while (count < maxRoll) {
        dieRolls.push(rollRandomNumber());
        count++;
    }
    console.log(dieRolls);

    let total = dieRolls.reduce(function(a,b){
        return a + b;
    })
    console.log(total)
    
})

showResults.addEventListener("click", function() {
    let count = 0;
    displayRolls.innerHTML = ""
    console.log(dieRolls)

    while (count < dieRolls.length) {
        displayRolls.innerHTML += "<li>" +" " + dieRolls[count] + " "
        count++;

    }
})

resetButton.addEventListener("click", function() {
    location.reload();
})