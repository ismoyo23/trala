import React from "react";

import { Texts } from "component/atom/texts";
import { Buttons } from "component/atom/button";
import { Images } from "component/atom/images";

// svg
import logo from "assets/icon-navbar/logo.svg";
import appStore from "assets/appStore.svg";
import playStore from "assets/playStore.svg";
export const FooterMolecules = () => {
  return (
    <div className="h-[1000px]  mt-[30px] lg:mt-[40px] left-[0] lg:h-[360px] w-[100%] bg-[#F5F5F5]  w-[100%]">
      <div className="hidden lg:contents">
        <div className="lg:flex ">
          <div className="fixed flex mt-[-100000px] pt-4 lg:mt-[0] lg:relative lg:bg-footer h-[70px] lg:w-[90%] lg:ml-[-298px] lg:bg-cover">
            <Texts
              label="Ingin dapat penghasilan dengan berbagai ilmu? Yuk jadi Instruktur!"
              font="roboto"
              css="ml-[338px] mt-[19px] lg:mt-[0] text-[18px] font-medium "
            />

            <Buttons
              action={() => console.log("ok")}
              css="bg-[#FF4E4E] w-[160px] h-[45px] ml-[40px]  font-roboto text-[white] font-bold rounded-[4px] mr-[20px] mt-[-4px]"
              label="Daftar Sekarang"
            />
          </div>

          <div className="pt-2 flex justify-center lg:mt-[0] lg:relative content-center w-[20%]">
            <Images url={logo} css="w-[50px] h-[50px]" />
            <Texts
              label="Instruktur"
              font="nunito"
              css="text-[14px] font-normal ml-[10px] mt-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3EEDA] h-[180px] w-[100%] lg:absolute lg:mt-[-100000px]">
        <br className="lg:hidden" />
        <div className="flex justify-center content-center">
          <div className="w-[60%]">
            <Texts
              label="Ingin dapat penghasilan dengan berbagai ilmu? Yuk jadi Instruktur!"
              font="roboto"
              css="text-[18px] font-medium text-center"
            />
            <div className="w-[100%] flex justify-center content-center">
              <Buttons
                action={() => console.log("ok")}
                css="bg-[#FF4E4E] w-[160px] h-[45px]  font-roboto text-[white] font-bold rounded-[4px] mr-[20px] mt-[10px]"
                label="Daftar Sekarang"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 px-8 lg:gap-4">
        <div className="mt-[20px]">
          <Texts
            font="roboto"
            label="Tentang Kami"
            css="text-[14px] font-medium text-[#262626] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Tentang trala"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Apa yang kamu dapat"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Bantuan"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Karir"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />
        </div>

        <div className="mt-[20px]">
          <Texts
            font="roboto"
            label="Tentang Kami"
            css="text-[14px] font-medium text-[#262626] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Tentang trala"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Apa yang kamu dapat"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Bantuan"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Karir"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />
        </div>

        <div className="mt-[20px]">
          <Texts
            font="roboto"
            label="Tentang Kami"
            css="text-[14px] font-medium text-[#262626] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Tentang trala"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Apa yang kamu dapat"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Bantuan"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />

          <Texts
            font="nunito"
            label="Karir"
            css="text-[14px] mt-[12px] text-center lg:text-left"
          />
        </div>

        <div className="mt-[20px]">
          <Texts
            font="roboto"
            label="Tentang Kami"
            css="text-[14px] font-medium text-[#262626] text-center lg:text-right"
          />

          <div className="flex mt-[20px] justify-center content-center">
            <Images url={appStore} css="" />
            <Images url={playStore} css="ml-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
