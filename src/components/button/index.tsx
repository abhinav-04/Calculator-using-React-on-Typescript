import React from "react"
import "./styles.scss";

interface ButtonProps
    extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> {
    content: number | string;
    variant?: "primary" | "secondary" | "tertiary";
}

export function Button(props: ButtonProps){
    const{ content, variant, ...rest } = props;
    return(
        <button {...rest} className={`btn ${variant || "tertiary"}`}>
            {content}
        </button>
    );
}