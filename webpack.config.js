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
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [
                            {
                                tag: "img",
                                attribute: "data-src",
                                type: "src",
                            },
                            {
                                tag: "img",
                                attribute: "data-srcset",
                                type: "srcset",
                            },
                            {
                                tag: "link",
                                attribute: "href",
                                type: "src",
                                filter: (tag, attribute, attributes, resourcePath) => {
                                    if (/my-html\.html$/.test(resourcePath)) {
                                        return false;
                                    }
                                    if (!/stylesheet/i.test(attributes.rel)) {
                                        return false;
                                    }
                                    if (
                                        attributes.type &&
                                        attributes.type.trim().toLowerCase() !== "text/css"
                                    ) {
                                        return false;
                                    }
                                    return true;
                                },
                            },
                        ],
                    },
                },
            },
        ]
    },
    devServer: {
        proxy: [
            {
                context: ['/'],
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
    }, plugins: [
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