import React from "react";

// component
import { Images } from "component/atom/images";
import { Texts } from "component/atom/texts";
import { Buttons } from "component/atom/button";

// svg
import kdmImages from "assets/kdm.svg";
export const KdmMolecules = () => {
  return (
    <div className=" w-[100%] grid grid-cols-1 md:grid-cols-2">
      <div className="md:ml-auto md:mt-[100px] w-[100%] absolute mt-[-9000000px] md:relative">
        <div className="w-[100%]">
          <Texts
            label="Keterampilan Digital Milenial (KDM)"
            font="roboto"
            css="font-medium text-[25px] text-center md:text-right"
          />
          <div className="w-[100%] mt-[10px] md:w-[100%] flex justify-center content-center md:justify-right md:content-right">
            <hr className="w-[43%] md:w-[40%] md:ml-auto border-4 rounded-[30px] border-[#FF4E4E]" />
          </div>

          <Texts
            label="Keterampilan pengembangan diri untuk membantu kamu mencapai sukses di berbagai bidang."
            font="nunito"
            css="text-[18px] text-[#262626] mt-[30px] text-center md:text-right"
          />
          <div className="w-[100%]  flex justify-center content-center">
            <Buttons
              action={() => console.log("ok")}
              css="w-[200px] h-[40px] border-2 border-[#FF4E4E] md:ml-auto font-roboto text-[#FF4E4E]  mt-[20px]"
              label="Ambil Assesment"
            />
          </div>
        </div>
      </div>

      <div className="w-[100%] ">
        <Images url={kdmImages} css="ml-[auto] " />
      </div>

      <div className="md:ml-auto md:mt-[47px] w-[100%] mt-[0] relative md:absolute md:mt-[-9000000px]">
        <div className="w-[100%]">
          <Texts
            label="Keterampilan Digital Milenial (KDM)"
            font="roboto"
            css="font-medium text-[25px] text-center md:text-right"
          />
          <div className="w-[100%] mt-[10px] md:w-[100%] flex justify-center content-center md:justify-right md:content-right">
            <hr className="w-[43%] md:w-[40%] md:ml-auto border-4 rounded-[30px] bg-[#FF4E4E] border-[#FF4E4E]" />
          </div>

          <Texts
            label="Keterampilan pengembangan diri untuk membantu kamu mencapai sukses di berbagai bidang."
            font="nunito"
            css="text-[18px] text-[#262626] mt-[30px] text-center md:text-right"
          />
          <div className="w-[100%]  flex justify-center content-center">
            <Buttons
              action={() => console.log("ok")}
              css="w-[200px] h-[40px] border-2 border-[#FF4E4E] md:ml-auto font-roboto text-[#FF4E4E]  mt-[20px]"
              label="Ambil Assesment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
