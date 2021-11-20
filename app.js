
//Array med skämt
const jokes = ["Vad säger en Göteborgare till ett Star Wars fan? – JeeDaaaj.", "Vad sa den ena kannibalen till den andra? – E du go eller?","Varför är det ingen snö på gatorna i Glasgow på vintern? – De e la klart. 600 000 skottar.","Gick det bra med rymdresan? – Nej, den blev uppskjuten."]


//funktion som spottar ur sig random skämt
var randomJoke = () => {
    var randInt = Math.floor(Math.random()*(jokes.length));
    console.log(jokes[randInt]);
}

randomJoke();