import React from "react";
import { BINARY_OPS, DIGITS, UNARY_OPS } from "../../constants";
import { Button } from "../button";
import "./styles.scss";

interface KeypadProps {
  onKeyClick: (content: string) => void;
  onOperatorClick: (operator: BINARY_OPS | UNARY_OPS) => void;
}

export function Keypad(props: KeypadProps) {
  const { onKeyClick, onOperatorClick } = props;

  return (
    <div className="keypad-container">
      <div className="digits">
        {Object.entries(UNARY_OPS).map((entry) => (
          <Button variant="secondary" content={entry[1]} key={entry[1]} 
          onClick={() => onOperatorClick(entry[1])}/>
        ))}
        {DIGITS.map((digit) => (
          <Button
            content={digit}
            key={digit}
            onClick={() => onKeyClick(digit.toString())}
          />
        ))}
      </div>

      <div className="binary-ops">
        {Object.entries(BINARY_OPS).map((entry) => (
          <Button
            variant="primary"
            content={entry[1]}
            key={entry[0]}
            onClick={() => onOperatorClick(entry[1])}
          />
        ))}
      </div>
    </div>
  );
}
