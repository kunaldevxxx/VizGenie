export function normalizeData(data) {
    const maxValue = Math.max(...data.map(item => item.value));
    return data.map(item => ({ ...item, normalizedValue: item.value / maxValue }));
  }
  