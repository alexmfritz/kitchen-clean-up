const theFacts = [
  'Most american kitchens are 110sqft.',
  'The average kitchen contains 2.7 spatulas.',
  "More water is run through colanders every year than goes over 2 Niagara Falls!",
  'If every household lined up every grain of rice end to end, and every spaghetti noodle end to end, they would be the exact same length.',
  'If you run out of salsa, just chop up some jalapeno and put it in your pasta sauce.',
  'The FDA recommends periodically rotating your knives, forks, and spoons (take the ones on the bottom, put them on top) to ensure even wear and tear and to extend the lifespan of your utensils.',
  "The Safe Operating Temperature Range for Pyrex is -32 to 487 degrees, but some villages in iceland have been known to use them to bake lasagna inside a volcano!",
  'The Guinness World Record for tallest stack of plates is 382 feet!', "Nothing edible has been discovered in nature since 1854 when the Royal Culinary Society discovered that the Greater Amazonian Soft Potato could be rendered palatable by a complicated process involving boiling and a three day curing process."
];

const images = [
  'kitchen.jpg', 'kitchen2.jpg', 
  'kitchen3.jpg', 'kitchen4.jpg', 
  'kitchen5.jpg', 'kitchen6.jpg', 
  'kitchen7.jpg',
];

const emojis = ['🍇', '🍱','🍴', '🥢', '🥤'];

const body = document.querySelector('body');
const button = document.getElementById('getFact');
const email = document.getElementById('email');
const nextFact = document.getElementById('nextFact');
const factBox = document.getElementById('factBox');

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

const getRandom = (item) => {
  return item[getRandomIndex(item)];
}

const getRandomBackgroundImage = () => {
  return `url(./images/${images[getRandomIndex(images)]})`;
}

const removeClass = (elements) => {
    elements.forEach(item => item.classList.remove('hidden'));
}

window.addEventListener('load', () => {
  body.style.backgroundImage = getRandomBackgroundImage();
});

button.addEventListener('click', () => {
  let emoji = getRandom(emojis);
  let fact = getRandom(theFacts);
  removeClass([email, nextFact]);
  factBox.innerHTML = '';
  factBox.innerHTML += `<div>${emoji} ${fact} ${emoji} </div>`;
  email.href = `mailto:alexmichaelfritz@gmail.com?subject=Welcome To Kitchen Facts!!!!!&body=${fact}. Wow!`;
});

nextFact.addEventListener("click", () => {
  location.reload()
});