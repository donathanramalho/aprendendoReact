import { useState } from "react";
import styles from "./styles.module.scss";

function Calculator() {
  const [v1, setV1] = useState("");
  const [op, setOp] = useState("");
  const [result, setResult] = useState("");

  function operator(valor) {
    setOp(valor);
    setV1(result);
    setResult("");
  }

  function calculate() {
    switch (op) {
      case "+":
        setResult(Number(v1) + Number(result));
        break;

      case "-":
        setResult(Number(v1) - Number(result));
        break;

      case "x":
        setResult(Number(v1) * Number(result));
        break;

      case "/":
        setResult(Number(v1) / Number(result));
        break;

      default:
        console.log("Hello World");
    }
    setV1("")
    setOp("")
  }

  return (
    <div className={styles.calculadora}>
      <p>Valor: {v1+op+result}</p>

      <div className={styles.botoes}>
        <div className={styles.linha}>
          <button onClick={() => setResult(result + "7")}>7</button>
          <button onClick={() => setResult(result + "8")}>8</button>
          <button onClick={() => setResult(result + "9")}>9</button>
          <button onClick={() => operator("x")}>x</button>
        </div>
        <div className={styles.linha}>
          <button onClick={() => setResult(result + "4")}>4</button>
          <button onClick={() => setResult(result + "5")}>5</button>
          <button onClick={() => setResult(result + "6")}>6</button>
          <button onClick={() => operator("-")}>-</button>
        </div>
        <div className={styles.linha}>
          <button onClick={() => setResult(result + "1")}>1</button>
          <button onClick={() => setResult(result + "2")}>2</button>
          <button onClick={() => setResult(result + "3")}>3</button>
          <button onClick={() => operator("+")}>+</button>
        </div>

        <div className={styles.linha}>
          <button onClick={() => operator("/")}>/</button>
          <button onClick={() => setResult(result + "0")}>0</button>
          <button onClick={() => calculate()}>=</button>
        </div>
        <div className={styles.linha}>
          <button onClick={() => setResult("")}>C</button>
          <button onClick={() => setResult(result.toString().slice(0, -1))}>
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
