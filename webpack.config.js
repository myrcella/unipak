const path = require('path');

const config = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve('src'),
                loader: 'babel-loader',
            },
        ],
    },
};

module.exports = config;
