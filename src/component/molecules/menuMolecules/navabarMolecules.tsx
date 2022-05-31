import React from "react";

// component
import { Images } from "component/atom/images";
import { Texts } from "component/atom/texts";
import { Input } from "component/atom/input";
import { Buttons } from "component/atom/button";

// svg
import logo from "assets/icon-navbar/logo.svg";
import logoCategory from "assets/icon-navbar/logoCategory.svg";
import iconSearch from "assets/icon-navbar/icon-search.svg";
import menu from "assets/icon-navbar/menu.svg";

interface NavbarMoleculesProps {
  action: () => void;
  Login: () => void;
  auth: any;
  Logout: () => void;
  Register: () => void;
}

export const NavbarMolecules = ({
  action,
  Login,
  auth,
  Logout,
  Register,
}: NavbarMoleculesProps) => {
  return (
    <div
      className="w-[100%] z-10 h-[
40px] md:h-[100px] bg-[#FFFFFF] shadow-0.15 fixed"
    >
      <div className="h-[100%] w-[100%] opacity-100 mt-[16px] md:mt-[-1000%] relative md:absolute md:opacity-0 z-10 md:z-[-1] ">
        <div className="absolute flex w-[107px] px-4">
          <div onClick={action}>
            <Images url={menu} css="w-[30px] h-[30px]" />
          </div>
          <Images url={iconSearch} css="w-[30px] h-[30px] ml-[auto]" />
        </div>
        <div className="flex justify-center content-center items-center">
          <Images url={logo} css="w-[56px] h-[56px] " />
        </div>
      </div>
      <div className="absolute z-[-1] opacity-0 md:opacity-100 mt-[-1000%] md:mt-[0] md:z-10 md:relative w-[100%]">
        <div className="p-6 grid grid-cols-6 gap-8 ">
          <div className="h-[100%] w-[100px] flex justify-center content-center items-center col-span-1">
            <Images url={logo} css="w-[74px] h-[74px] " />
          </div>

          <div className="col-span-4 flex">
            <div className="flex mt-[9px] w-[140px] w-[100px] h-[20px]">
              <Images url={logoCategory} css="" />
              <Texts
                label="Kategori"
                css="text-[13px] ml-[9px]"
                font="nunito"
              />
            </div>

            <div className=" flex border-2 border-[#DCDCDC] rounded-[2px] w-[100%] h-[36px]">
              <Input
                type="text"
                placeholder="Mau belajar apa hari ini"
                val=""
                css="outline-0 ml-[12px]  rounded-[2px] w-[98%] h-[30px]"
                change={() => console.log("ok")}
              />

              <Buttons
                action={() => console.log("ok")}
                label={
                  <div className="w-[40px] flex justify-center content-center items-center h-[100%] bg-[#F0EFEF]">
                    <Images url={iconSearch} css="" />
                  </div>
                }
                css=""
              />
            </div>
          </div>

          <div className="col-span-1 justify-between flex w-[100%] md:w-[90%]">
            {auth.accessToken != null ? (
              <div className="flex ml-[-20px]">
                <Texts
                  font="nunito"
                  label={auth.name}
                  css="text-[15px] w-[100px]"
                />
                <Buttons
                  action={Logout}
                  css="bg-[#FF4E4E]  w-[78px] h-[36px] font-roboto font-normal  text-[#FFFFFF] text-[13px]"
                  label="Logout"
                />
              </div>
            ) : (
              <>
                <Buttons
                  action={Login}
                  css="border-2 border-[#262626] mr-[12px] w-[78px] h-[36px] font-roboto font-bold text-[13px]"
                  label="Masuk"
                />
                <Buttons
                  action={Register}
                  css="bg-[#FF4E4E] w-[78px] h-[36px] font-roboto font-normal  text-[#FFFFFF] text-[13px]"
                  label="Daftar"
                />
              </>
            )}
          </div>
        </div>

        <div className="p-6 grid grid-cols-6 gap-8 mt-[-78px]">
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <div className="grid w-[900px] md:w-[100%] overflow-x-scroll xl:overflow-hidden h-[30px] grid-flow-col auto-cols-max gap-8">
              <Texts
                font="nunito"
                css="font-normal text-[13px]"
                label="Trala Goes to Campus"
              />

              <Texts
                font="nunito"
                css="font-normal text-[13px]"
                label="Liga PoinQu"
              />

              <Texts
                font="nunito"
                css="font-normal text-[13px]"
                label="Keterampilan Digital Milenial"
              />

              <Texts
                font="nunito"
                css="font-normal text-[13px]"
                label="Keterampilan Sukses Milenial"
              />

              <Texts
                font="nunito"
                css="font-normal text-[13px]"
                label="Personal Development"
              />

              <Texts
                font="nunito"
                css="font-normal text-[13px]"
                label="Career Development"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
