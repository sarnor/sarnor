const express = require('express');
const fs = require('fs');
const path = require("path");


const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer };
const server = new WebpackDevServer(devServerOptions, compiler);

const app = express();

const runServer = async () => {
    await server.start();

    app.use('/', express.static(path.join(__dirname, `dist`), { index: 'none' }));

    app.get(`/`, (req, res) => {

        fs.readFile(path.join(__dirname, `dist`, 'index.html'), 'utf8', (err, html) => {
            if (err) {
                console.error(err, 'Error')
                res.statusCode = 500;
                res.send('html file not found')
                return
            }
            else {
                res.send(html)
            }
        })
    });
    app.listen(80, () => console.log(`Server is run on port 80`))
};

runServer();