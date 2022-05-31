import React from "react";

// component
import { Images } from "component/atom/images";
import { Texts } from "component/atom/texts";

// svg
import logo from "assets/icon-navbar/logo.svg";
import menu from "assets/icon-navbar/menu.svg";
import iconSignout from "assets/icon-navbar/icon-signout.svg";

interface SideBarMoleculesProps {
  togle: boolean;
  action: () => void;
}
export const SideBarMolecules = ({ togle, action }: SideBarMoleculesProps) => {
  return (
    <>
      <div
        className={[
          "delay-75 md:w-[-12px] md:h-[0] fixed bg-[#000000] opacity-50",
          togle == false ? "w-[0] mt-[-1000%] h-[0]" : "w-[100%] h-[100%] z-20",
        ].join(" ")}
      ></div>
      <div
        className={[
          " md:w-[-12px] md:h-[0] mt-[0] md:mt-[-1000%] fixed bg-[#F5F5F5]",
          togle == false ? "w-[0] mt-[-1000%] h-[0]" : "z-30 w-[80%] h-[100%]",
        ].join(" ")}
      >
        <div className="bg-[#FFFFFF] flex w-[100%] h-[66px] p-2 shadow-0.15">
          <Images url={logo} css="w-[50px] h-[50px]" />
          <div onClick={action} className="ml-auto mr-[17px]">
            <Images url={menu} css="w-[40px] h-[40px]" />
          </div>
        </div>

        <div
          className={[
            "flex px-2",
            togle == false ? "mt-[-400px] absolute" : "mt-[20px]",
          ].join(" ")}
        >
          <Images url={iconSignout} css="" />
          <Texts
            label="Masuk atau daftar"
            font="roboto"
            css="text-[14px] leading-[20px]"
          />
        </div>
      </div>
    </>
  );
};
