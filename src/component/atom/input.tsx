import React from "react";

interface InputProps {
  type: "text" | "number" | "password";
  placeholder: string;
  css: any;
  val: string;
  change: (e: any) => void;
}
export const Input = ({ type, placeholder, css, val, change }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={css}
      value={val}
      onChange={change}
    />
  );
};
