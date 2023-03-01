const merge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const base = require('./base');

module.exports = merge(base, {
    stats: 'errors-warnings',
    plugins: [
        new cleanWebpackPlugin(),
    ],
});
