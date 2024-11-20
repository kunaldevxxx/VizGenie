# **VizGenie**

AI-enhanced data visualization library that simplifies creating interactive and meaningful charts by leveraging AI-suggested visualizations and themes tailored to industries.

---

## **Features**
- **AI-Suggested Visualizations:** Automatically recommends the best visualization for your dataset.
- **Cross-Library Support:** Plug-and-play with Chart.js, D3.js, and Plotly.
- **Predefined Themes:** Ready-to-use themes for industries like Finance, Healthcare, and Retail.
- **Customizable and Extendable:** Modify visualizations and themes to fit your specific needs.

---

## **Installation**

To use VizGenie, install it via npm:

```bash
npm install vizgenie

```
##  **Quick Start Guide**
## 1. Basic Usage
```bash
import { renderChart } from 'vizgenie';
const data = [
  { category: "A", value: 10 },
  { category: "B", value: 20 },
  { category: "C", value: 15 }
];

// Create a canvas element in your HTML
const canvas = document.getElementById('myChart');

// Render a chart
renderChart(canvas, data);

2. Using Predefined Themes

import { renderChart } from 'vizgenie';
import { applyTheme } from 'vizgenie';

const data = [
  { category: "A", value: 30 },
  { category: "B", value: 50 },
  { category: "C", value: 20 }
];

// Create a container and canvas in your HTML
const container = document.getElementById('chart-container');
const canvas = document.getElementById('myChart');

// Apply a predefined theme (e.g., 'finance')
applyTheme(container, 'finance');

// Render the chart with themed styling
renderChart(canvas, data);

3. Customizing Visualization Libraries
VizGenie supports multiple charting libraries. Here’s how to use Chart.js:

import { ChartJSRenderer } from 'vizgenie/visualizers';

// Sample data
const data = [
  { label: "Sales", value: 100 },
  { label: "Revenue", value: 80 }
];

// Configure Chart.js-specific options
const chartOptions = {
  type: 'bar',
  data: {
    labels: data.map(item => item.label),
    datasets: [{
      label: 'Business Metrics',
      data: data.map(item => item.value),
      backgroundColor: ['#007BFF', '#28A745']
    }]
  }
};

// Create a canvas element in your HTML
const canvas = document.getElementById('myChart');

// Render with Chart.js renderer
ChartJSRenderer(canvas, chartOptions);
```
## API Reference

renderChart(canvas, data, options)

Description: Renders a chart using the default library (Chart.js).

## Parameters:

canvas (HTMLCanvasElement): The canvas element where the chart will render.
data (Array): Array of objects with category and value fields.
options (Object, optional): Chart customization options.
applyTheme(container, themeName)
Description: Applies a predefined theme to a chart container.

## Parameters:

container (HTMLElement): The element to apply the theme to.
themeName (string): Available themes are finance, healthcare, and retail.
ChartJSRenderer(canvas, config)
Description: Custom renderer for Chart.js.
Parameters:
canvas (HTMLCanvasElement): The canvas element to render the chart in.
config (Object): A valid Chart.js configuration object.

## **Contributing**
We welcome contributions! To get started:


## Common Issues

Chart Not Rendering:
Ensure you’ve installed chart.js as a peer dependency.
Example:

npm install chart.js
## Themes Not Applying:

Ensure the container is a valid HTMLElement.

Contact
Author: Kunal Khare
GitHub: https://github.com/kunaldevxxx
Email: kunalkhare2004@gmail.com