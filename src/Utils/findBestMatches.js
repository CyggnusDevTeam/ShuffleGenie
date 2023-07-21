import manualReplacements from './manualReplacements';

const calculateLevenshteinDistance = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  return dp[m][n];
};

const findBestMatches = (strippedNames, cardDefIds) =>
  strippedNames.reduce((accumulator, name) => {
    // Check if there is a specific replacement for this name and replace it with manual specification
    if (Object.prototype.hasOwnProperty.call(manualReplacements, name)) {
      accumulator[name] = manualReplacements[name];
    } else {
      const { bestMatch } = cardDefIds.reduce(
        (result, cardName) => {
          const distance = calculateLevenshteinDistance(name, cardName);
          if (distance < result.bestDistance) {
            return { bestMatch: cardName, bestDistance: distance };
          }
          return result;
        },
        { bestMatch: null, bestDistance: Infinity }
      );

      accumulator[name] = bestMatch;
    }
    return accumulator;
  }, {});

export default findBestMatches;
