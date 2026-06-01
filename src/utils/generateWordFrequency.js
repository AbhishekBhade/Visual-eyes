const stopWords = [
  "the",
  "and",
  "is",
  "in",
  "to",
  "of",
  "a",
  "for",
  "on",
  "with",
  "that",
  "this",
  "it",
  "as",
  "are",
  "was",
  "at",
];

function generateWordFrequency(text) {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

  const frequencyMap = {};

  words.forEach((word) => {
    if (
      word.length > 2 &&
      !stopWords.includes(word)
    ) {
      frequencyMap[word] =
        (frequencyMap[word] || 0) + 1;
    }
  });

  return Object.entries(frequencyMap).map(
    ([word, count]) => ({
      name: word,
      value: count,
    })
  );
}

export default generateWordFrequency;