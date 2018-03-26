/* eslint no-console: 0 */
const express = require("express"),
    opn = require("opn"),
    http = require("http"),
    webpack = require("webpack"),
    webpackConfig = require("../webpack.config.dev"),
    compiler = webpack(webpackConfig),
    app = express();

// Added timestamp to the console logs
require ('console-stamp')(console, "HH:MM:ss.l");

// Added morgan to log the HTTP Requests
app.use(require ('morgan')('short'));

// Attach the webpack dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, {
    "logLevel": 'warn', "publicPath": webpackConfig.output.publicPath
}));

// Attach the hot middleware to the compiler & the server
app.use(require("webpack-hot-middleware")(compiler, {

    "log": console.log, "path": '/__webpack_hmr', "heartbeat": 10 * 1000

}));

// Added the index file to responte to the root GET
app.get("/", (req,res) => {
  
    res.sendFile(`${__dirname}index.html`);

});

if (require.main === module) {

    // Creating the server and logging the location it listens
    const server = http.createServer(app);
    server.listen(process.env.PORT || 8080, () => {

        console.log("Listening on %j", server.address());

    });

}