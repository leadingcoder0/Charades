const firstNames = ["making a campfire", "skiing", "cooking", "cleaning", "eating", "tying a knot", "reading", "tenting", "hiking", "drinking", "signing off requirements", "running", "playing football", "playing basketball", "sleeping", "patrol yelling", "playing cards"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  'Your phrase to act out is "' + `${firstNames[getRandomNumber(firstNames.length)]}` + '"';

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);
