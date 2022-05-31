import React from "react";

interface ButtonsProps {
  css: string;
  label: any;
  action: () => void;
}

export const Buttons = ({ css, label, action }: ButtonsProps) => {
  return (
    <button onClick={action} className={css}>
      {label}
    </button>
  );
};
