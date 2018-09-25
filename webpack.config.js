module.exports = {
    entry: __dirname + '/src/app/index.jsx',
    output: {
        filename: "main.js",
        path: __dirname + "/build",
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
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
        extensions: ['.js', '.jsx', '.ts']
    },
    target: "electron-main"
};