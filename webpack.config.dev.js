const path = require("path"),
    webpack = require("webpack"),
    HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    "mode": "development",
    "context": __dirname,
    "entry": [
        "webpack-hot-middleware/client?path=/&timeout=20000&reload=true",
        path.resolve(__dirname, "src/js/App.js")
    ],
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "publicPath": '/',
        "filename": "js/bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.scss$/,
                "use": ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                "enforce": "pre",
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "eslint-loader"
                }
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader"
                }
            },
            {
                "test": /\.html$/,
                "use": {
                    "loader": "html-loader"
                }
            }
        ]
    },
    "plugins": [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            "template": "./src/index.html",
            "filename": "./index.html"
        })
    ]
};