import { useState } from "react";

const CountFizzBuzz = (props) => {
  let [count, setCount] = useState(0);
  let [text, settext] = useState("");

  const increment = () => {
    if (count < props.max) {
      setCount(++count);
      getFizzBuzzText();
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(--count);
      getFizzBuzzText();
    }
  };

  const getFizzBuzzText = () => {
    if (count % 3 === 0 && count % 5 === 0) {
      settext("FizzBuzz");
    } else if (count % 3 === 0) {
      settext("Fizz");
    } else if (count % 5 === 0) {
      settext("Buzz");
    } else {
      settext(count);
    }
  };

  return (
    <>
      <p>Compteur: {text}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default CountFizzBuzz;
