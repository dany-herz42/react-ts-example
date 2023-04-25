import React, { ChangeEventHandler } from "react";

interface InputProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string
}

const Input: ({ placeholder, handleChange, name }: InputProps) => JSX.Element = ({
  placeholder,
  handleChange,
  name,
  value
}) => {
  return (
    <div className="control">
      <input {...{ placeholder, onChange: handleChange, name, value }} className="input" />
    </div>
  );
};

export default Input;
