const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        compress: true,
        static: './',
        hot: true,
        port: 9001
    },
    plugins: [ new HtmlWebpackPlugin({
        template: "public/index.html",
        hash: true, // cache busting
        filename: '../dist/index.html'
    }) ],
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".ts", ".tsx", ".js", ".json" ]
    },

    module: {
        rules: [ {
            test: /\.(scss)$/,
            use: [
                {
                loader: 'style-loader', // inject CSS to page
            },
                {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            } ]
        },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader" ],
            },
            // All files with a z'.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
};