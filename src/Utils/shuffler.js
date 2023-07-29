import { LAST_NAME, MIDDLE_NAME } from './variables';

function shuffleDeck(array) {
  let currentIndex = array.length;
  let randomIndex;
  const randomArray = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [randomArray[currentIndex], randomArray[randomIndex]] = [
      randomArray[randomIndex],
      randomArray[currentIndex],
    ];
  }

  const selectedCards = randomArray.slice(0, 12);
  return selectedCards;
}

function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomAdjective() {
  return getRandomItemFromArray(MIDDLE_NAME);
}

function generateRandomName(randomDeck) {
  const randomCard = getRandomItemFromArray(randomDeck);
  const adjective = getRandomAdjective();
  const randomWord = getRandomItemFromArray(LAST_NAME);
  return `${randomCard.name}'s ${adjective} ${randomWord}`;
}

export { shuffleDeck, generateRandomName };
