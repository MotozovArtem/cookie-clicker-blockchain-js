module.exports = {
    entry: __dirname + '/src/index.tsx',
    output: {
        filename: "main.js",
        path: __dirname + "/build",
    },
    module: {
        rules: [
            // {
            //     test: /\.jsx$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader'
            //     },
            // },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                use: {
                    loader: 'source-map-loader'
                },
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.json', '.tsx']
    },
    target: "electron-main"
};