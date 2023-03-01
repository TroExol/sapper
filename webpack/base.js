const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const path = require('path');

module.exports = ({
    context: path.join(__dirname, '..', 'src'),
    entry: {
        index: './index.js',
        vendor: [
            'jss',
            'jss-plugin-default-unit',
            'jss-plugin-vendor-prefixer',
            'react',
            'react-dom',
            'react-jss',
        ],
    },
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: '[name].js?v=[hash]',
    },
    resolve: {
        alias: {
            'Util': path.join(__dirname, '..', 'src', 'utils'),
            'Component': path.join(__dirname, '..', 'src', 'components'),
            'Image': path.join(__dirname, '..', 'src', 'images'),
            'Hook': path.join(__dirname, '..', 'src', 'hooks'),
            'Settings': path.join(__dirname, '..', 'src', 'settings.js'),
        },
        modules: ['node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            chunks: ['vendor', 'index'],
        }),
        new FaviconsWebpackPlugin({
            logo: '../public/favicon.png',
            mode: 'webapp',
            devMode: 'light',
            favicons: {
                developerURL: null,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    favicons: true,
                    windows: false,
                    yandex: false,
                },
            },
            shortcuts: [
                {
                    name: 'Сапер',
                    description: 'Играйте в вашего любимого сапера!',
                    url: '/',
                },
            ],
        }),
        new CaseSensitivePathsPlugin(),
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            chunkFilter: chunk => chunk.name === 'vendor',
            cache: true,
            parallel: 2,
        })],
        splitChunks: {
            chunks(chunk) {
                return chunk.name !== 'index';
            },
        },
        noEmitOnErrors: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(jsx?)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env',
                    ],
                },
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader',
            },
        ],
    },
});
