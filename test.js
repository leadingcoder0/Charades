const firstNames = ["making a campfire", "skiing", "cooking", "cleaning", "eating", "tying a knot",
                    "reading", "tenting", "hiking", "drinking", "signing off requirements", "running",
                    "playing football", "playing basketball", "sleeping", "patrol yelling", "playing cards",
                    "twist", "kneel", "volleyball", "shower", "fusing rope", "performing cpr", "heimlich maneuver",
                    "flag ceremony", "scribble", "electrical outlet", "clown", "whisk", "crocodile", "run",
                    "matches", "tongs", "coronavirus", "gorilla", "race car", "parachuting", "rolling a neckerchief",
                    "wrench", "piano", "muscle", "brain", "shoulder"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  'Your phrase to act out is "' + `${firstNames[getRandomNumber(firstNames.length)]}` + '"';

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);
