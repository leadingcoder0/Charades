const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  'Your word to act out is "' + `${firstNames[getRandomNumber(firstNames.length)]}` + '"';

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);
