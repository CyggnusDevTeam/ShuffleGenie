const generateJsContent = (array) => {
  const content = `
      // Array with correct CardDefIds
      const cardDefIds = ${JSON.stringify(array)};
  
      export default cardDefIds;
    `;
  return content;
};

module.exports = generateJsContent;
