import React from "react";

interface TextsProps {
  label: string;
  font: "nunito" | "roboto";
  css: any;
}
export const Texts = ({ label, font, css }: TextsProps) => {
  const Class = ["relative"];

  switch (font) {
    case "nunito":
      Class.push("font-nunito");
      break;
    case "roboto":
      Class.push("font-roboto");
      break;
    default:
      break;
  }
  return <p className={[Class, css].join(" ")}>{label}</p>;
};
