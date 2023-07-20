import { encode } from 'base-64';

const generateDeckCode = (randomDeck) => {
  const strippedNames = randomDeck.map((card) => card.name.replace(/\s/g, ''));
  const deckCodeObject = {
    Name: 'Random Deck',
    Cards: strippedNames.map((name) => ({ CardDefId: name })),
  };
  const deckCode = JSON.stringify(deckCodeObject);
  const encodedDeckCode = encode(deckCode);
  return encodedDeckCode;
};

export default generateDeckCode;
