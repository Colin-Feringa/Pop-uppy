const path = require( "path" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: [
        "./src/index.js",
        "./src/style.scss"
    ],
    output: {
        filename: "main.js",
        path: path.resolve( __dirname, "dist" ),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: "[name].css",
        } ),
        new HtmlWebpackPlugin( {
            template: "./public/index.html",
        } ),
    ],
    devServer: {
        static: {
            directory: path.join( __dirname, "public" ),
        },
        port: 9000,
    },
}