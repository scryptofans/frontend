const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    title: 'Output Management',
    template: 'public/index.html'
});

const tsRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
};

module.exports = {
    mode: 'development',
    plugins: [htmlPlugin],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [tsRule],
    },
}