const { renderChart, applyTheme } = require('vizgenie');

// Sample data
const data = [
    { category: 'A', value: 30 },
    { category: 'B', value: 45 },
    { category: 'C', value: 60 }
];

// Create a canvas element (in Node.js environment, we'll need a virtual canvas)
const { createCanvas } = require('canvas');
const canvas = createCanvas(800, 400);

// Example usage of the library
console.log('Testing vizgenie library...');

try {
    // Render a chart
    renderChart(canvas, data);
    console.log('Chart rendered successfully');

    // Apply a theme
    applyTheme(canvas, 'finance');
    console.log('Theme applied successfully');
} catch (error) {
    console.error('Error:', error.message);
}