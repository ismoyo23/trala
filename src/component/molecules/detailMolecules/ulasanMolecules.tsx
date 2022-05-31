import React from "react";

// component
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";
import { Buttons } from "component/atom/button";

import rating from "assets/rating.svg";
import oneRating from "assets/one rating.svg";
import toggle from "assets/toggle.svg";
import toggleFull from "assets/togglefull.svg";
import cardUser from "assets/cardUser.svg";
import pagination from "assets/pagination.svg";
export const UlasanMolecules = () => {
  return (
    <div className="px-8 mt-[25px]">
      <div className="w-[100%] md:w-[64%] border-[1px] border-[#DCDCDC] h-[738px] pt-4 px-8">
        <Texts
          font="roboto"
          label="Ulasan Peserta"
          css="font-bold text-[20px]"
        />

        <div className="flex">
          <div className="w-[17%]">
            <Texts
              label="5"
              font="roboto"
              css="font-medium text-[70px] text-center"
            />
            <div className="w-[100%] mt-[-40px] flex justify-center content-center">
              <Images url={rating} css="w-[100px] h-[100px]" />
            </div>
            <div className="mt-[-40px]">
              <Texts
                label="(400) Ulasan"
                font="roboto"
                css="text-center text-[14px]"
              />
            </div>
          </div>

          <div className="ml-[11px] pt-8">
            <div className="flex ">
              <Images url={oneRating} css="" />
              <Texts
                label="5"
                css="text-[15px] font-semibold ml-[3px]"
                font="roboto"
              />
              <Images
                url={toggleFull}
                css="ml-[15px] md:ml-[5px] w-[70%] md:w-[100%]"
              />
              <Texts
                label="200"
                css="text-[15px] font-semibold ml-[6px]"
                font="roboto"
              />
            </div>

            <div className="flex">
              <Images url={oneRating} css="" />
              <Texts
                label="4"
                css="text-[15px] font-semibold ml-[3px]"
                font="roboto"
              />
              <Images
                url={toggle}
                css="ml-[15px] md:ml-[5px] w-[70%] md:w-[100%]"
              />
              <Texts
                label="0"
                css="text-[15px] font-semibold ml-[6px]"
                font="roboto"
              />
            </div>

            <div className="flex">
              <Images url={oneRating} css="" />
              <Texts
                label="3"
                css="text-[15px] font-semibold ml-[3px]"
                font="roboto"
              />
              <Images
                url={toggle}
                css="ml-[15px] md:ml-[5px] w-[70%] md:w-[100%]"
              />
              <Texts
                label="0"
                css="text-[15px] font-semibold ml-[6px]"
                font="roboto"
              />
            </div>

            <div className="flex">
              <Images url={oneRating} css="" />
              <Texts
                label="2"
                css="text-[15px] font-semibold ml-[3px]"
                font="roboto"
              />
              <Images
                url={toggle}
                css="ml-[15px] md:ml-[5px] w-[70%] md:w-[100%]"
              />
              <Texts
                label="0"
                css="text-[15px] font-semibold ml-[6px]"
                font="roboto"
              />
            </div>

            <div className="flex">
              <Images url={oneRating} css="" />
              <Texts
                label="1"
                css="text-[15px] font-semibold ml-[3px]"
                font="roboto"
              />
              <Images
                url={toggle}
                css="ml-[15px] md:ml-[5px] w-[70%] md:w-[100%]"
              />
              <Texts
                label="0"
                css="text-[15px] font-semibold ml-[6px]"
                font="roboto"
              />
            </div>
          </div>
        </div>

        <div className="mt-[20px] grid grid-cols-3 md:grid-cols-7">
          <Texts
            label="filter dengan"
            font="roboto"
            css="text-[14px] mt-[4px]"
          />
          <Buttons
            action={() => console.log("ok")}
            label="Semua (150)"
            css="w-[100px] h-[35px] border-[1px] border-[#DCDCDC] ml-[-12px] md:ml-[0] rounded-[6px]"
          />

          <Buttons
            action={() => console.log("ok")}
            label={
              <div className="flex w-[100%] flex justify-center content-center">
                <Images url={oneRating} css="" />
                <Texts
                  label="5"
                  css="text-[red] text-[14px] font-bold ml-[2px]"
                  font="roboto"
                />

                <Texts
                  label="(100)"
                  css="text-[red] text-[14px] font-bold ml-[2px]"
                  font="roboto"
                />
              </div>
            }
            css="w-[90px] h-[35px] border-[1px] border-[red] ml-[12px] rounded-[6px]"
          />

          <Buttons
            action={() => console.log("ok")}
            label={
              <div className="flex w-[100%]  flex justify-center content-center">
                <Images url={oneRating} css="" />
                <Texts
                  label="4"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />

                <Texts
                  label="(30)"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />
              </div>
            }
            css="w-[90px] h-[35px] border-[1px] border-[#DCDCDC] md:ml-[12px] rounded-[6px]"
          />

          <Buttons
            action={() => console.log("ok")}
            label={
              <div className="flex w-[100%] flex justify-center content-center">
                <Images url={oneRating} css="" />
                <Texts
                  label="3"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />

                <Texts
                  label="(0)"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />
              </div>
            }
            css="w-[80px] h-[35px] border-[1px] border-[#DCDCDC] ml-[12px] rounded-[6px]"
          />
          <Buttons
            action={() => console.log("ok")}
            label={
              <div className="flex w-[100%] flex justify-center content-center">
                <Images url={oneRating} css="" />
                <Texts
                  label="2"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />

                <Texts
                  label="(1)"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />
              </div>
            }
            css="w-[90px] h-[35px] border-[1px] border-[#DCDCDC] ml-[12px] rounded-[6px]"
          />

          <Buttons
            action={() => console.log("ok")}
            label={
              <div className="flex w-[100%] flex justify-center content-center">
                <Images url={oneRating} css="" />
                <Texts
                  label="1"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />

                <Texts
                  label="(0)"
                  css="text-[#262626] text-[14px] ml-[2px]"
                  font="roboto"
                />
              </div>
            }
            css="w-[90px] h-[35px] border-[1px] border-[#DCDCDC] md:ml-[12px] rounded-[6px]"
          />
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
