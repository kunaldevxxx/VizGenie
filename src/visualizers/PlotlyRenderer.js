import Plotly from "plotly.js-dist";

export function renderPlotlyChart(container, data, chartType) {
  const trace = {
    x: data.map(item => item.category),
    y: data.map(item => item.value),
    type: chartType
  };
  Plotly.newPlot(container, [trace]);
}
