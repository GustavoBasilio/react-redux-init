const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    "mode": "production",
    "context": __dirname,
    "entry": path.resolve(__dirname, "src/js/App.js"),
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "publicPath": "/",
        "filename": "bundle.min.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.scss$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                safe: true
                            },
                            "sourceMap": true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                        "sourceMap": true
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            "sourceMap": true
                        }
                    }
                ]
            },
            {
                "enforce": "pre",
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "eslint-loader"
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "babel-loader"
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
        new HtmlWebpackPlugin({
            "title": "Home",
            "template": path.resolve(__dirname, "src/index.html"),
            "filename": "index.html"
        }),
        new webpack.LoaderOptionsPlugin({
            "minimize": true,
            "debug": false
        }),
        new webpack.EnvironmentPlugin({
            "NODE_ENV": "production",
            "debug": false
        }),
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
        })
    ],
};