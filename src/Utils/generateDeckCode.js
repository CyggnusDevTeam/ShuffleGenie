import { encode } from 'base-64';
import cardDefIds from '../data/cardDefIds';

const generateDeckCode = (randomDeck) => {
  const mappedNames = randomDeck.map((card) => {
    const foundCard = cardDefIds.find(
      (cardDef) => cardDef.name.toLowerCase() === card.name.toLowerCase()
    );
    return foundCard ? foundCard.carddefid : card.name.replace(/[\s-]/g, '');
  });

  const deckCodeObject = {
    Name: 'Random Deck',
    Cards: mappedNames.map((name) => ({ CardDefId: name })),
  };

  const deckCode = JSON.stringify(deckCodeObject);
  const encodedDeckCode = encode(deckCode);
  return encodedDeckCode;
};

export default generateDeckCode;
