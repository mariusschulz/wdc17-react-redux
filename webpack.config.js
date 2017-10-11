const path = require("path");

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
                include: [path.resolve(__dirname, "src")],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
