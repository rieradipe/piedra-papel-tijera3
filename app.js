document.addEventListener('DOMContentLoaded', () => {
const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#chocices');
const choices = ['piedra', 'papel', 'tijeras'];


const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)]);
}

choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.addEventListener('click', handleClick);
    choicesDisplay.appendChild('button');
});

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'tijeraspapel':
        case 'piedratijeras':
        case 'papelpiedra':
        resultDisplay.innerHTML = "Tu eleccion "+ userChoice + "contra " + computerChoice + " consigue que seas una GANADOR@";
    break;
        case 'papeltijera':
        case 'tijeraspiedra':
        case 'piedrapapel':
        resultDisplay.innerHTML = "Tu eleccion "+ userChoice + "contra " + computerChoice + " hace que PIERDAS!!!";
    break;
        case 'tijerastijeras':
        case 'piedrapiedra':
        case 'papelpapel':
        resultDisplay.innerHTML = "Tu eleccion "+ userChoice + "contra " + computerChoice + " es un empate";
    break;
 }
}
});