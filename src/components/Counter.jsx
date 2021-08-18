import { useState } from 'react';
//hook --> gancho

export function Counter() {
    // let counter = useState(0); // Aqui ele passar a retornar mais que o valor da variavel. Ele retorna duas coisas agora, nao sendo mais adequado tratar como variavel e sim como Array, e nem como Let mas sim como Const.
    //counter[0]
    //counter[1] 
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}