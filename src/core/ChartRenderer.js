import { Chart } from 'chart.js';

export function renderChart(canvas, data) {
  const ctx = canvas.getContext('2d');
  const labels = data.map((item) => item.category);
  const values = data.map((item) => item.value);

  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [
              {
                  label: 'Sample Data',
                  data: values,
                  backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
                  borderColor: ['#388e3c', '#1976d2', '#f57c00'],
                  borderWidth: 1,
              },
          ],
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
          },
      },
  });
}

export function applyTheme(element, theme) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error('Invalid element provided');
  }
  
  const themeStyles = {
    backgroundColor: theme.backgroundColor || '#ffffff',
    color: theme.color || '#000000',
    borderColor: theme.borderColor || '#cccccc'
  };
  
  Object.assign(element.style, themeStyles);
}