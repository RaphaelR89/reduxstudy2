import "./App.css";
import { useState } from "react";
import { decrement, increment, incrementByAmount } from "./reduxjs/counter";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //useState com a variavel count direto na aplicação não  é mais necessário
  // const [count, setCount] = useState(0);

  //ATENÇÃO ! PODEMOS FAZER ASSIM TAMBÉM!
  const count = useSelector((state) => state.counter.count);
  // a leitura dessa linha de codigo seria "queremos pegar uma variavel (const count) do reducer state (state), especificamente do counter(counterReducer) da variavel count que vive dentro do counterReducer"

  //Chamar uma ação com REDUCER!
  const dispatch = useDispatch();
  // esse Dispatch chama QUALQUER ação de QUALQUER reducer que queremos!

  return (
    <div className="App">
      <h1>The counter is: {count}</h1>
      {/*MODO ANTIGO COM USESTATE
       <button onClick={() => setCount((count) => count + 1)}></button>
      <button onClick={() => setCount((count) => count - 1)}></button> */}

      {/* Vamos chamar nossa ação direto do reducer  */}
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement </button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        incrementByAmount 2
      </button>
    </div>
  );
}

export default App;
