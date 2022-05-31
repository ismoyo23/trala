import React from "react";

// component
import { Images } from "component/atom/images";
import { Texts } from "component/atom/texts";
import { Buttons } from "component/atom/button";

// svg
import ksmImage from "assets/ksm.svg";
export const KsmMolecules = () => {
  return (
    <div className="mt-[8px] grid grid-cols-1 md:grid-cols-2">
      <div>
        <Images url={ksmImage} css="" />
      </div>
      <div className="flex justify-center content-center items-center">
        <div className="w-[80%] md:w-[100%]">
          <Texts
            label="Keterampilan Sukses Milenial (KSM)"
            font="roboto"
            css="font-medium text-[25px] text-center md:text-left"
          />
          <div className="w-[100%] mt-[10px] md:w-[40%] flex justify-center content-center">
            <hr className="w-[50%] md:w-[100%] border-4 rounded-[30px] border-[#FF4E4E]" />
          </div>

          <Texts
            label="Keterampilan pengembangan diri untuk membantu kamu mencapai sukses di berbagai bidang."
            font="nunito"
            css="text-[18px] text-[#262626] mt-[30px] text-center md:text-left"
          />
          <div className="w-[100%] md:w-[200px] flex justify-center content-center">
            <Buttons
              action={() => console.log("ok")}
              css="w-[200px] h-[40px] border-2 border-[#FF4E4E] font-roboto text-[#FF4E4E] mt-[20px]"
              label="Ambil Assesment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
