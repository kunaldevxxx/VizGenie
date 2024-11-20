import { Chart } from "chart.js";

export function renderChartJS(container, data, chartType) {
  const ctx = container.getContext("2d");
  new Chart(ctx, {
    type: chartType,
    data: {
      labels: data.map(item => item.category),
      datasets: [{
        label: "Values",
        data: data.map(item => item.value),
        backgroundColor: "#4caf50"
      }]
    }
  });
}
