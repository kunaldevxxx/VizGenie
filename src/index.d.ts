declare module 'vizgenie' {
    export interface DataPoint {
        category: string;
        value: number;
    }

    export interface Theme {
        backgroundColor: string;
        color: string;
        border?: string;
    }

    export function renderChart(canvas: HTMLCanvasElement, data: DataPoint[]): void;
    export function applyTheme(element: HTMLElement, themeName: 'finance' | 'healthcare' | 'retail'): void;
    export function suggestVisualization(data: DataPoint[]): string;
    export function normalizeData(data: DataPoint[]): DataPoint[];
    
    export function renderPlotlyChart(container: HTMLElement, data: DataPoint[], chartType: string): void;
    export function renderD3Chart(container: HTMLElement, data: DataPoint[], chartType: string): void;
    export function renderChartJS(container: HTMLCanvasElement, data: DataPoint[], chartType: string): void;
}