<h1 align="center">   
⚙️Dependency List⚙️
</h1>

<h2 align="center">   

  ![](https://github.com/Raphael-GC/plant-manager/blob/main/assets/favicon.png)  
</h2>



`yarn add react`

`yarn add react-dom`  <!--- Necessário para utilizarmos o react na web, pois no permite acessar a árvore de elementos do HTML no Javascript (react) -->

`yarn add @babel/core @babel/cli @babel/preset-env -D` <!--- O '-D' significa que é pra instalar essas dependências com viés de desenvolvimento. Estou dizendo ao editor que não precisarei disso quando minha aplicação estiver executando online. O cli serve para que eu consiga executar o Babel pela linha de comando. O present-env identifica o ambiente onde nossa aplicação está sendo executada, para realizar uma conversão personalizada e enxuta.-->

`yarn add @babel/preset-react -D` <!--- Necessário para que o Babel possa interpretar o HTML dentro Javascript.-->

`yarn add webpack webpack-cli webpack-dev-server -D` 

`yarn add babel-loader -D` <!--- Cuida da integração entre o Babel e o Webpack.-->

`yarn add html-webpack-plugin -D` <!--- Retira a necessidade de usarmos a tag Script, apontando para o nosso arquivo Bundle.js (Build File), no arquivo index.html .-->

`yarn add webpack-dev-server -D` <!--- Biblioteca que elimina a necessidade de executar o comando yarn webpack toda vez que modificamos o código, pois desta forma ele passa a observar o código e atualiza-lo automaticamente.-->

`yarn add cross-env -D` <!--- Nos permite criar variaveis de ambiente, independentemente do SO que estivermos usando.-->

`yarn add style-loader css-loader -D` <!--- Sao os LOADERS que utilizamos nas regras Webpack para que nosso arquivos CSS possam ser lidos pela aplicacao. ->

`yarn add sass-loader -D` <!--- O mesmo dos loaders anteriores, mas este e especificos para arquivos SASS.-->

`yarn add node-sass -D` <!--- Instalando o Pre-processador SASS, que amplia as possibilidades do CSS puro.-->

`yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh` <!--- Nos permite fazer alteracoes em nosso codigo, refletir essas alteracoes no browser, mantendo o estado atual dos componentes. Uma aplicacao pratica seria em carrinho de compras por exemplo. Poderiamos fazer alteracoes no codigo durante o desenvolvimento, resetando a aplicacao, mas sem que os itens que ja estavam no carrinho fossem perdidos.-->

``