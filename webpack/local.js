const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');
const argv = require('minimist')(process.argv.slice(2));

const port = argv.port || 3000;

module.exports = merge(base, {
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/, to: path.posix.join('/', 'index.html'),
                },
            ],
        },
        contentBase: false,
        compress: true,
        host: '0.0.0.0',
        port: port,
        overlay: {
            warnings: false,
            errors: true,
        },
        publicPath: '/',
        watchOptions: {
            poll: false,
        },
    },
});
