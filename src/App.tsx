import React from "react";
import "./app.scss";
import { Display } from "./components/display";
import { Keypad } from "./components/keypad";
import { BINARY_OPS, UNARY_OPS } from "./constants";

function App() {
  // react re-renders whenever state/prop changes.
  // UI is a function of state/prop.

  const [previousOperand, setPrevOperand] = React.useState<number>();
  const [currentOperand, setCurrentOperand] = React.useState<number>();
  const [activeOperator, setActiveOperator] = React.useState<BINARY_OPS | UNARY_OPS>();

  // operand1 op operand2 = result
  const onKeyClick = (content: string) => {
    setCurrentOperand((oldContent) => Number(`${oldContent || ""}${content}`));
  };

  const onOperatorClick = (operator: BINARY_OPS | UNARY_OPS) => {
    if (activeOperator) {
      // calculate results and show on display
      switch (operator) {
        case BINARY_OPS.ADD:
          setCurrentOperand((prev) => (prev || 0) + (previousOperand || 0));
          break;
        case BINARY_OPS.EQUAL:
          onOperatorClick(activeOperator);
          return;
        case BINARY_OPS.SUBTRACT:
          setCurrentOperand((prev) => (previousOperand || 0) - (prev || 0));
          break;
        case BINARY_OPS.DIVIDE:
          setCurrentOperand((prev) => (previousOperand || 0) / (prev || 0));
          break;
        case BINARY_OPS.MULTIPLY:
          setCurrentOperand((prev) => (prev || 0) * (previousOperand || 0));
          break;
        case UNARY_OPS.PERCENT:
          setCurrentOperand((prev) => ((prev || 0)/100) * (previousOperand || 0));
          break;
        case UNARY_OPS.RESET:
          setCurrentOperand(undefined)
          setPrevOperand(undefined)
          setActiveOperator(undefined)
          return;
      }
    } else {
      // reset display text.
      setPrevOperand(currentOperand);
      setCurrentOperand(undefined);
    }
    if(operator === UNARY_OPS.NEGATE){
      setCurrentOperand((currentOperand || 0)  * -1);
      return;
    } 
    setActiveOperator(operator);
  };

  return (
    <div className="App">
      <section className="calculator-container">
        <Display content={`${(currentOperand || currentOperand===0)? currentOperand : ""}`} />
        <Keypad onKeyClick={onKeyClick} onOperatorClick={onOperatorClick} />
      </section>
    </div>
  );
}

export default App;
