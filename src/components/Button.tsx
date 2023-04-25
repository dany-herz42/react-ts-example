import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
const Button: ({ children, handleClick }: ButtonProps) => JSX.Element = ({
  children,
  handleClick
}) => {
  return (
    <button className="button is-primary" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
