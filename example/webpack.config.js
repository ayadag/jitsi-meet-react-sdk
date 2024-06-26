const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx' ],
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom')
        }
    },
    output: {
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            inject: 'body'
        })
    ],
    devServer: {
//////////////////////
        //compress: true,
        //public: 'store-client-nestroia1.c9users.io' // That solved it
/////////////////////
        //disableHostCheck: true,
        //allowedHosts: [jitsi-meet-react-sdk.onrender.com],
        /*compress: true,
        public: 'jitsi-meet-react-sdk.onrender.com', // That solved it */
        //compress: true,
        //disableHostCheck: true,   // That solved it
        allowedHosts: "all",// That solved it
        static: './',
        port: 5001
    }
};
