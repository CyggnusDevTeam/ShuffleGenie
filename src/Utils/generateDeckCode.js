import { encode } from 'base-64';
import cardDefIds from '../data/cardDefIds';
import findBestMatches from './findBestMatches';

const generateDeckCode = (randomDeck) => {
  const strippedNames = randomDeck.map((card) =>
    card.name.replace(/[\s-]/g, '')
  );

  // Function to replace incorrect names with correct names using the best matches
  const replaceIncorrectNames = (namesArray, bestMatches) =>
    namesArray.map((name) => bestMatches[name] || name);

  // Get the best matches
  const bestMatches = findBestMatches(strippedNames, cardDefIds);

  // Call the function to get the corrected names array
  const correctedNames = replaceIncorrectNames(strippedNames, bestMatches);

  const deckCodeObject = {
    Name: 'Random Deck',
    Cards: correctedNames.map((name) => ({ CardDefId: name })),
  };
  const deckCode = JSON.stringify(deckCodeObject);
  const encodedDeckCode = encode(deckCode);
  return encodedDeckCode;
};

export default generateDeckCode;
