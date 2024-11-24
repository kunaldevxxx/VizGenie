const path = require('path');

module.exports = {
    entry: './src/index.js',  // Entry point of your package
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'index.js', // Output filename
        library: 'vizgenie', // Library name
        libraryTarget: 'umd', // Universal Module Definition
        globalObject: 'this', // Important for UMD builds
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    externals: {
        'chart.js': {
            commonjs: 'chart.js',
            commonjs2: 'chart.js',
            amd: 'chart.js',
            root: 'Chart'
        },
        'd3': {
            commonjs: 'd3',
            commonjs2: 'd3',
            amd: 'd3',
            root: 'd3'
        },
        'plotly.js': {
            commonjs: 'plotly.js',
            commonjs2: 'plotly.js',
            amd: 'plotly.js',
            root: 'Plotly'
        }
    },
    resolve: {
        extensions: ['.js']
    },
    mode: 'production'
};