import { encode } from 'base-64';
import { CardDef, RandomDeckItem } from '../Interfaces/CardDef';
import cardDefIds from '../data/cardDefIds';

const generateDeckCode = (
  randomDeck: RandomDeckItem[],
  deckName: string
): string => {
  const mappedNames = randomDeck.map((card) => {
    const foundCard = cardDefIds.find(
      (cardDef: CardDef) =>
        cardDef.name.toLowerCase() === card.name.toLowerCase()
    );
    return foundCard ? foundCard.carddefid : card.name.replace(/[\s-]/g, '');
  });

  const deckCodeObject = {
    Name: deckName,
    Cards: mappedNames.map((name) => ({ CardDefId: name })),
  };

  const deckCode = JSON.stringify(deckCodeObject);
  const encodedDeckCode = encode(deckCode);
  return encodedDeckCode;
};

export default generateDeckCode;
