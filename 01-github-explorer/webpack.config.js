const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Faz com que visualizemos o codigo no console do devtool da mesma forma como ele esta no arquivo original e nao apos o bundle.
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // O x indica que temos componentes/html dentro do arquivo.
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [

        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean), // É uma maneira para adicionarmos plugin de forma condicional no Webpack, pois quando retornar False (o que causaria um erro), o filter irá remover o boolean do codigo, e quando for True ele executara o codigo escrito ali.
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/, // O j e o t dentro do parenteses indica pro webpack que queremos que ele entenda tanto os arquivos jsx quanto tsx.
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/, // Poderiamos utilizar aqui o .sass, e eliminariamos a necessidade de utilizarmos as {}, ficando apenas a identacao.
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    }
};