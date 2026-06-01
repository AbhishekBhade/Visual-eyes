function analyzeDataset(data) {
  if (!data || data.length === 0) {
    return null;
  }

  const columns = Object.keys(data[0]);

  const analysis = columns.map((column) => {
    const values = data
      .map((row) => row[column])
      .filter(Boolean);

    const numericCount = values.filter(
      (value) => !isNaN(Number(value))
    ).length;

    const isNumeric =
      numericCount > values.length * 0.7;

    return {
      column,
      type: isNumeric ? "numeric" : "categorical",
    };
  });

  return analysis;
}

export default analyzeDataset;