
//Array med skämt
const jokes = ["Hur många bor det i Stockholm? –","Hur tröstar man en vegan? –","Hur vet man att en dykarkurs är inställd? - ","Vad säger en Göteborgare till ett Star Wars fan? –", "Vad sa den ena kannibalen till den andra? –","Varför är det ingen snö på gatorna i Glasgow på vintern? –","Gick det bra med rymdresan? –"]
const punchLine = [" En dryg miljon!", " Soja, soja!", " Instruktören dyker inte upp!"," JeeDaaaj."," E du go eller?"," De e la klart. 600 000 skottar.", " Nej, den blev uppskjuten."]

//funktion som spottar ur sig random skämt
var randomJoke = () => {
    var randomJoke = Math.floor(Math.random()*(jokes.length));
    var randomPunchLine = Math.floor(Math.random()*(punchLine.length));
    console.log(jokes[randomJoke]+punchLine[randomPunchLine]);
}

randomJoke();