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

export default shuffleDeck;
