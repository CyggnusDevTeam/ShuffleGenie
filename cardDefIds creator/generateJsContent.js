const generateJsContent = (array) => {
  const content = `
      import { CardDef } from '../Interfaces/CardDef';

      const cardDefIds: CardDef[] = ${JSON.stringify(array)};
  
      export default cardDefIds;
    `;
  return content;
};

module.exports = generateJsContent;
