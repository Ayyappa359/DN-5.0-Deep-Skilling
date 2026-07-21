import './App.css';
import { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {

    const [count, setCount] = useState(5);

    function increment() {

        setCount(count + 1);

    }

    function decrement() {

        setCount(count - 1);

    }

    function sayHello() {

        alert("Hello! Member1");

    }

    function incrementAndHello() {

        increment();

        sayHello();

    }

    function welcome(message) {

        alert(message);

    }

    function onPress() {

        alert("I was clicked");

    }

    return (

        <div>

            <h2>{count}</h2>

            <button onClick={incrementAndHello}>
                Increment
            </button>

            <br />

            <button onClick={decrement}>
                Decrement
            </button>

            <br />

            <button onClick={() => welcome("welcome")}>
                Say welcome
            </button>

            <br />

            <button onClick={onPress}>
                Click on me
            </button>

            <br />
            <br />

            <CurrencyConvertor />

        </div>

    );

}

export default App;