import * as d3 from "d3";

export function renderD3Chart(container, data, chartType) {
  const svg = d3.select(container)
    .append("svg")
    .attr("width", 600)
    .attr("height", 400);

  if (chartType === "bar") {
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", d => 400 - d.value)
      .attr("width", 40)
      .attr("height", d => d.value)
      .attr("fill", "#007bff");
  }
}
