import React from "react";

// component
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";
import { Badge } from "component/atom/badge";
interface CardMoleculesProps {
  img: any;
  title: string;
  time: string;
  imgUser: any;
  nameUser: string;
  devision: string;
  discount: number;
  priceBeforeDiscount: number;
  price: number;
  isDiscount: boolean;
  metodeLearn: string;
  colorBadge: string;
  detail: () => void;
}
export const CardMolecules = ({
  img,
  title,
  time,
  imgUser,
  nameUser,
  devision,
  discount,
  priceBeforeDiscount,
  price,
  isDiscount,
  metodeLearn,
  colorBadge,
  detail,
}: CardMoleculesProps) => {
  return (
    <>
      <div
        onClick={detail}
        className="w-[100%] h-[310px] md:h-[310px] mb-[20px] bg-[#FFFFFF] border-2 border-[#DCDCDC]"
      >
        <div className="w-[200px]">
          <Images url={img} css=" w-[100%]" />
          <div className=" px-2">
            <Badge
              color={`${colorBadge} sticky mt-[-23px]`}
              label={metodeLearn}
            />
          </div>
          <div className="px-2">
            <Texts
              label={title}
              font="roboto"
              css="text-[14px] font-medium mt-[10px]"
            />

            <Texts
              label={time}
              font="nunito"
              css="text-[12px] text-[#262626] mt-[3px]"
            />
            <div className="flex mt-[6px]">
              <Images url={imgUser} css="w-[30px] h-[30px] rounded-[50%]" />
              <div className="ml-[12px]">
                <Texts
                  label={nameUser}
                  font="roboto"
                  css="text-[12px] font-normal text-[#262626]"
                />
                <Texts
                  label={devision}
                  font="nunito"
                  css="text-[12px] font-light"
                />
              </div>
            </div>

            <hr className="mt-[12px]" />

            <div className="flex mt-[9px]">
              {isDiscount == false ? null : (
                <div className="bg-discount w-[30px] h-[16px]">
                  <Texts
                    label={`${discount}%`}
                    css="text-[10px] text-white text-center"
                    font="nunito"
                  />
                </div>
              )}

              <Texts
                label={`RP. ${priceBeforeDiscount}`}
                css="text-[12px] text-[#505763] ml-[10px] line-through"
                font="nunito"
              />

              <Texts
                label={`RP. ${price}`}
                css="text-[14px] ml-[auto] font-medium"
                font="roboto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
