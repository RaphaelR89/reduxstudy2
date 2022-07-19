REDUX é como uma gaveta que vai guardar suas variaveis e estados (states) e qualquer componente pode acessa-lo de qualquer lugar porque o redux cria uma store de forma externa e repassa a sua aplicação. (App)

Isso evita que para um state seja acessado por um componente footer que ele tenha que passar por dentro de varios outros (conteudo,menu) até chegar no header

Um Redux pode ser separado em 3 elementos! STATE,ACTION E REDUCER!

STATE:
Onde definimos nossas variaveis e seus valores iniciais!
exemplo : count = 0

ACTION:
Aqui é onde nossos componentes chamam quando precisam que algo aconteça, no nosso exemplo quando nosso componente precisa que uma ação de increment ou decrement aconteça no nosso contador!
exemplo: button onClick=increment - Ao clicar no botão, increment em x valor

REDUCER:
Aqui é o nosso reducer que vai realizar algo com base na ação chamada!
Exemplo: Sempre que chamamos nossa ACTION increment nosso count que temos no STATE será alterado pelo nosso REDUCER que vai retornar a função count + 1

O Ciclo de vida desses 3 funciona assim:

ACTION chama uma ação do REDUCER e modifica o valor do STATE

Store é onde armazenamos nossas variaveis (reducer), conforme a aplicação for crescendo voce pode ter mais de um store, por exemplo se temos um login podemos criar uma store para armazenar os usuarios ,
se temos um carrinho podemos armazenar em um store com os produtos e valores

Devemos na nossa main/index envolver o App com o Provider e direciona-lo ao armazenamento(store) para que ele saiba de onde vai vir os nossos reducers

https://www.youtube.com/watch?v=iBUJVy8phqw&t=2s
https://redux-toolkit.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

npm install @reduxjs/toolkit react-redux

npx create-react-app my-app --template redux
npx create-react-app my-app --template redux-typescript

# ou

yarn create react-app my-app --template redux
yarn create react-app my-app --template redux-typescript
