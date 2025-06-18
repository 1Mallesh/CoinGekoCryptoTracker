import React, { use, useEffect, useState } from 'react';

export default function CoinTable() {

    const [count, setCount] = React.useState(0);
    const [flag, setFlag] = useState(false);



    async function download() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response);
        const result = await response.json();
        console.log(result);
    }

    useEffect(() => {
        download();
    }, [count]);

    useEffect(() => {
        console.log("Flag changed:", flag);
    }, [flag]);

    return (
        <div>
            <h1>Coin Table</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {flag && <p>Flag is true</p>}
            <button onClick={() => setFlag(!flag)}>Toggle Flag</button>

        </div>
    )
}