import React from "react";

import { Images } from "component/atom/images";
import { Texts } from "component/atom/texts";

interface ArticelProps {
  img: any;
  title: string;
  description: string;
  nameorganization: string;
  time: string;
  nameUser: string;
  imgUser: string;
}

export const ArticelMolecules = ({
  img,
  time,
  title,
  description,
  nameorganization,
  nameUser,
  imgUser,
}: ArticelProps) => {
  return (
    <div className="w-[100%]  md:mt-[50px] h-[168px] grid grid grid-cols-3 gap-2">
      <div className="col-span-1">
        <Images
          url={img}
          css="h-[20vh] mt-[-24px] md:mt-[-9px]  md:h-[100%] w-[30vh] md:w-[100%]"
        />
      </div>
      <div className="px-4 col-span-2 mt-[11px] md:mt-[0]">
        <Texts
          label={title}
          css="text-[12px] md:text-[16px] font-medium"
          font="roboto"
        />
        <div className="md:w-[90%] mt-[16px] mt-[-100000px] absolute md:relative md:mt-[0]">
          <Texts
            label={description}
            css="text-[11px] md:text-[14px]"
            font="nunito"
          />
        </div>
        <div className="flex w-[100%] mt-[4px] md:mt-[10px]">
          <Texts
            label={nameorganization}
            font="nunito"
            css="text-[red] text-[10px] md:text-[13px]"
          />
          <div className="ml-[2px] mt-[-4px] mr-[2px]">|</div>
          <Texts
            label={time}
            font="nunito"
            css="text-[black] text-[10px] md:text-[13px]"
          />
        </div>

        <div className="flex mt-[9px]">
          <Images url={imgUser} css="w-[40px] h-[40px] rounded-[50%]" />
          <Texts
            label={nameUser}
            font="roboto"
            css="font-medium text-[13px]  ml-[9px] mt-[3px]"
          />
        </div>
      </div>
    </div>
  );
};
