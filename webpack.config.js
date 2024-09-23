const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.html$/i,
            //     loader: "html-loader",
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                // use: [
                //     {
                //         loader: "file-loader",
                //         options: {
                //             name: "[path][name].[ext]",
                //             contect: "src",
                //         },
                //     },
                // ],
            },
        ],
    },
    resolve: {
        extensions: [".js"],
    },
};