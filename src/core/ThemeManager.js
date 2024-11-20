export const themes = {
  finance: {
      backgroundColor: '#f4f9f9',
      color: '#333',
      border: '1px solid #ccc',
  },
  healthcare: {
      backgroundColor: '#e6f7ff',
      color: '#005a8d',
      border: '1px solid #007acc',
  },
  retail: {
      backgroundColor: '#fff7e6',
      color: '#a15d08',
      border: '1px solid #e6a300',
  },
};

export function applyTheme(element, themeName) {
  if (!element || !(element instanceof HTMLElement)) {
      console.error('Invalid element provided for applying theme.');
      return;
  }

  const theme = themes[themeName];
  if (!theme) {
      console.error(`Theme "${themeName}" not found.`);
      return;
  }

  Object.assign(element.style, theme);
  console.log(`Theme "${themeName}" applied successfully.`);
}
