import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
// 4 importar o usuarioReducer do slice
const store = configureStore({
  reducer: {
    counter: counterReducer,
    // 1 Digamos que eu queira criar um usuario
    // 2 Colocaria um novo reducer chamado usuario e o slice
    // 3 usuario: usuarioReducer
    // 4 Adicionando ao store significa que ele vai ficar acessivel
    // A TODOS os componentes do seu projeto!
  },
});

export default store;
