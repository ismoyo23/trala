import React from "react";

interface BadgeProps {
  label: string;
  color: string;
}

export const Badge = ({ color, label }: BadgeProps) => {
  return (
    <div className={["w-[100px] h-[18px]", color].join(" ")}>
      <p className="font-nunito text-[12px] text-white text-center">{label}</p>
    </div>
  );
};
