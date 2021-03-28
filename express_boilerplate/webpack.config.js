const path = require('path');

module.exports = {
    entry: ['@babel/polyfill','./src/js/main.js', './src/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                            {
                                "targets" :{
                                    "ie": 11
                                },
                                "useBuiltIns": "usage",
                                "corejs" : {"version": 3, "proposals" : true}
                            }
                        ]
                    ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test:/\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader",   // translates CSS into CommonJS
                    "sass-loader"   // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
};



