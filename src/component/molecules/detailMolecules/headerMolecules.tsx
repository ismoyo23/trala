import React from "react";

// component
import { Images } from "component/atom/images";
import { Texts } from "component/atom/texts";
import { Badge } from "component/atom/badge";

// svg
import home from "assets/home.svg";
import shere from "assets/shere.svg";
import eye from "assets/eye.svg";
import cardImages from "assets/cardImg.svg";
import persen from "assets/persen.svg";
import vektor from "assets/Vector.svg";
import bonus from "assets/bonus.svg";
import daftar from "assets/daftar.svg";
import sertifikat from "assets/sertifikat.svg";
import calender from "assets/calendar.svg";
import user from "assets/user.svg";
import chart from "assets/bx_bx-line-chart.svg";
import chat from "assets/bi_chat-left-text.svg";
import people from "assets/fluent_people-list-20-regular.svg";
import play from "assets/play-circle.svg";

export const HeaderMolecules = () => {
  return (
    <div className="h-[100%] md:h-[360px] w-[100%] bg-[white] mb-[300px]">
      <div className="flex w-[100%] px-8 pt-2 mb-[12px]">
        <div className=" w-[130px] flex justify-between">
          <Images url={home} css="" />
          <Texts css="" font="nunito" label=">" />
          <Texts css="" font="nunito" label="Detail seminar" />
        </div>

        <div className="w-[80px] flex ml-[auto]">
          <Texts css="mr-[10px]" font="nunito" label="Shere" />
          <Images url={shere} css="" />
        </div>
      </div>
      <div className="bg-bgPlay flex md:hidden justify-center content-center items-center h-[300px] w-[100%] bg-cover">
        <Images url={play} css="" />
      </div>
      <div className="md:grid h-[350px] md:h-[300px] md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 bg-[#17203F] w-[100%]">
        <div className="md:col-span-2 w-[100%]">
          <div className="h-[290px] w-[100%] md:mt-[30px] px-8 pt-8">
            <div className="flex">
              <Badge color="bg-[#FF4E4E]" label="Webinar" />
              <Images url={eye} css="ml-[10px]" />
              <Texts
                label="1200 orang melihat ini"
                font="roboto"
                css="text-[white] text-[12px] ml-[10px]"
              />
            </div>

            <div className="mt-[10px]">
              <Texts
                label="5 MUSTs to Become a Trusted Professional Consultants and Trainerss"
                font="roboto"
                css="font-bold text-white text-[28px]"
              />
            </div>

            <div className="mt-[15px] flex">
              <Texts
                label="Permbicara"
                css="text-white text-[16px] w-[100px]"
                font="roboto"
              />

              <Texts
                label=": Ismoyo"
                css="text-white text-[16px]"
                font="roboto"
              />
            </div>

            <div className="mt-[10px] flex">
              <Texts
                label="Live"
                css="text-white text-[16px] w-[100px]"
                font="roboto"
              />

              <Texts
                label=": Jumat, 23 Agt 2021 | 10:00 - 12:00 WIB"
                css="text-white text-[16px]"
                font="roboto"
              />
            </div>
          </div>
          <div className="w-[white] hidden shadow-0.8 h-[50px] px-8 mt-[-25px] w-[100%] md:grid grid-cols-3 gap-3">
            <div className="flex mt-[20px]">
              <Images url={people} css="w-[16px] h-[16px]" />
              <Texts
                label="Peserta : Programmer & Fresh Graduate"
                css="text-[14px] mt-[-2px] ml-[2px]"
                font="nunito"
              />
            </div>

            <div className="flex mt-[20px]">
              <Images url={chart} css="w-[16px] h-[16px]" />
              <Texts
                label="Peserta : Level : Pemula"
                css="text-[14px] mt-[-2px] ml-[2px]"
                font="nunito"
              />
            </div>

            <div className="flex mt-[20px]">
              <Images url={chat} css="w-[16px] h-[16px]" />
              <Texts
                label="Bahasa : Indonesia"
                css="text-[14px] mt-[-3px] ml-[3px]"
                font="nunito"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-1 hidden md:list-item">
          <div className="w-[270px]  h-[560px] mt-[40px] mb-[20px] absolute bg-[white] shadow-0.1">
            <Images url={cardImages} css="w-[100%] h-auto" />
            <div className="mt-[10px] px-4">
              <Texts
                label="Gratis"
                font="roboto"
                css="font-bold text-[25px] tracking-tight"
              />
            </div>

            <div className="flex px-4">
              <Images url={persen} css="" />
              <div className="ml-[10px]">
                <Texts
                  label="Sudah punya Vocher?"
                  font="roboto"
                  css="text-[14px] font-medium"
                />
                <div className="flex">
                  <Texts
                    label="click di sini"
                    font="roboto"
                    css="text-[red] font-medium text-[14px]"
                  />
                  <Images url={vektor} css="ml-[9px]" />
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-[10px]">
              <Images url={bonus} css="w-[100%]" />
              <div className="flex justify-center conten-center">
                <Images url={daftar} css="w-[90%] mt-[20px]" />
              </div>
            </div>

            <div className="mt-[15px] px-4">
              <div className="flex">
                <Images url={user} css="" />
                <div className="ml-[9px]">
                  <Texts font="nunito" label="Pembicara" css="text-[14px]" />
                  <Texts
                    font="roboto"
                    label="Suwardi luwis"
                    css="text-[15px]"
                  />
                </div>
              </div>

              <div className="flex mt-[20px]">
                <Images url={calender} css="" />
                <div className="ml-[9px]">
                  <Texts font="nunito" label="Tanggal" css="text-[14px]" />
                  <Texts
                    font="roboto"
                    label="Rabu, 17 Apr 2020 | 08:00 - 12:00 WIB"
                    css="text-[15px]"
                  />
                </div>
              </div>

              <div className="flex mt-[20px]">
                <Images url={sertifikat} css="" />
                <div className="ml-[9px]">
                  <Texts
                    font="nunito"
                    label="Bersertifikat"
                    css="text-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[139px] shadow-0.1 list-items md:hidden px-8">
        <div className="flex mt-[10px]">
          <Texts label="Min usia" font="nunito" css="text-[14px] w-[86px]" />
          <Texts label=": 18 tahun" font="nunito" css="text-[14px] " />
        </div>

        <div className="flex mt-[10px]">
          <Texts label="Level" font="nunito" css="text-[14px] w-[86px]" />
          <Texts label=": Pemula" font="nunito" css="text-[14px] " />
        </div>

        <div className="flex mt-[10px]">
          <Texts label="Bahasa" font="nunito" css="text-[14px] w-[86px]" />
          <Texts label=": Indonesia" font="nunito" css="text-[14px] " />
        </div>

        <div className="flex mt-[10px]">
          <Texts
            label="Bersertifikat"
            font="nunito"
            css="text-[14px] w-[86px]"
          />
          <Texts label=": Ya" font="nunito" css="text-[14px] " />
        </div>
      </div>

      <div className=" list-items md:hidden md:h-[560px]  w-[100%] mb-[20px] absolute bg-[white] ">
        <div className="mt-[10px] px-4">
          <Texts
            label="Gratis"
            font="roboto"
            css="font-bold text-[25px] tracking-tight"
          />
        </div>

        <div className="w-[100%] mt-[30px]">
          <Images url={bonus} css="w-[100%]" />
          <div className="flex justify-center conten-center">
            <Images url={daftar} css="w-[90%] mt-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
