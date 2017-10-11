const path = require("path");
const webpack = require("webpack");

// For more information on how to configure webpack,
// see https://webpack.js.org/guides/getting-started
module.exports = {
    entry: "./src/index.jsx",

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
