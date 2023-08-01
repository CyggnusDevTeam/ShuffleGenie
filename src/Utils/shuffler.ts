import { Card } from '../Interfaces/Card';
import { LAST_NAME, MIDDLE_NAME } from './variables';

const shuffleDeck = (array: Card[]): Card[] => {
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
};

const getRandomItemFromArray = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

const getRandomAdjective = (): string => getRandomItemFromArray(MIDDLE_NAME);

const generateRandomName = (randomDeck: Card[]): string => {
  const randomCard = getRandomItemFromArray(randomDeck);
  const adjective = getRandomAdjective();
  const randomWord = getRandomItemFromArray(LAST_NAME);
  return `${randomCard.name}'s ${adjective} ${randomWord}`;
};

export { shuffleDeck, generateRandomName };
