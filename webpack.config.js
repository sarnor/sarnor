let path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackInjector = require("html-webpack-injector");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|png|jpg|jpeg|webp|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: path.join('[path][name][ext]'),
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [
                            {
                                tag: 'source',
                                attribute: 'src-set',
                                type: 'srcset'
                            },
                            {
                                tag: 'img',
                                attribute: 'data-src',
                                type: 'src'
                            },
                            {
                                tag: 'img',
                                attribute: 'src',
                                type: 'src'
                            },
                            {
                                tag: 'source',
                                attribute: 'srcset',
                                type: 'srcset'
                            },
                            {
                                tag: 'source',
                                attribute: 'data-srcset',
                                type: 'srcset'
                            }
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".html", ".less", ".css", ".sass", ".scss", ".svg", ".jpg", ".webp"],
    },
    devServer: {
        open: true,
        liveReload: true,
        hot: true,
        proxy: [
            {
                context: '/',
                target: 'http://127.0.0.1:80/',
            },
        ],
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true,
            },
        },
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 8000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style/index.css",
        }),
        new HtmlWebpackPlugin({
            template: `./src/index.html`,
            filename: "index.html",
            base: "/",
            favicon: "./src/fav/fav.png",
        }),
        new HtmlWebpackInjector(),
        new CleanWebpackPlugin(),
    ],
};