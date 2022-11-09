import React from "react";
import "./styles.scss";

interface DisplayProps {
  content: string;
}

export function Display(props: DisplayProps) {
  const { content } = props;
  return (
    <div className="display-container">
      <h1>{content}</h1>
    </div>
  );
}
