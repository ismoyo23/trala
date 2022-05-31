import React from "react";

// component
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";

// svg
import cardUser from "assets/cardUser.svg";
import rating from "assets/rating.svg";
export const CardComentMolecules = () => {
  return (
    <div className="px-8 z-10 md:mt-[-240px]">
      <div className="w-[100%] md:w-[64%] h-[100%] md:h-[420px] bg-[white] border-[1px] px-8 pt-2 border-[#DCDCDC]">
        <Texts font="roboto" css="font-bold text-[20px]" label="Intruktur" />

        <div>
          <div className="mt-[12px] flex">
            <Images url={cardUser} css="w-[70px] h-[70px]" />
            <div className="ml-[10px]">
              <Texts
                font="roboto"
                css="font-bold text-[20px]"
                label="Jhon Due"
              />

              <Texts
                font="roboto"
                css="text-[12px]"
                label="CEO GML Performance"
              />

              <div className="flex mt-[10px]">
                <Images url={rating} css="" />
                <Texts
                  font="roboto"
                  css="font-bold text-[14px] ml-[9px]"
                  label="5.0"
                />

                <Texts
                  font="roboto"
                  css="text-[14px] ml-[9px]"
                  label="(200) ulasan"
                />
              </div>
            </div>
          </div>
          <div className="mt-[20px] w-[100%]">
            <Texts
              font="nunito"
              label="CEO dan pendiri GML Performance Consulting Group, salah satu perusahaan konsultan terbesar di Indonesia dengan kantor di Jakarta Utara, Jakarta Pusat, Makassar, Batam, Medan and Surabaya, dan mitra aktif di Singapore, UK, Australia, Finland, dan USA.
"
              css="text-[16px]"
            />
          </div>
        </div>
        <div className="mt-[20px]">
          <hr />
        </div>
        <div className="mb-[12px]">
          <div className="mt-[12px] flex">
            <Images url={cardUser} css="w-[70px] h-[70px]" />
            <div className="ml-[10px]">
              <Texts
                font="roboto"
                css="font-bold text-[20px]"
                label="Jhon Due"
              />

              <Texts
                font="roboto"
                css="text-[12px]"
                label="CEO GML Performance"
              />

              <div className="flex mt-[10px]">
                <Images url={rating} css="" />

                <Texts
                  font="roboto"
                  css="text-[14px] ml-[9px]"
                  label="1 Jam lalu"
                />
              </div>
            </div>
          </div>
          <div className="mt-[20px] w-[100%]">
            <Texts
              font="nunito"
              label="CEO dan pendiri GML Performance Consulting Group.
"
              css="text-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
