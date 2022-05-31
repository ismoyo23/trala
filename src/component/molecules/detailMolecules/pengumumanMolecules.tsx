import React from "react";

// component
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";

// svg
import pc from "assets/pc.svg";
import book from "assets/book.svg";
import time from "assets/time.svg";
import sertifikat from "assets/card sertifikat.svg";
export const PengumumanMolecules = () => {
  return (
    <div className="px-8 mt-[30px]">
      <div className="w-[100%] md:w-[64%] h-[100%] md:h-[216px] bg-[white] border-[1px] px-8 pt-2 border-[#DCDCDC]">
        <Texts
          css="font-bold text-[20px] tracking-tight"
          font="roboto"
          label="Pengumuman"
        />
        <div className="mt-[20px] mb-[12px] md:grid md:grid-cols-2 gap-2">
          <div className="flex">
            <Images url={pc} css="w-[44px]" />
            <Texts
              font="nunito"
              css="text-[16px] ml-[10px]"
              label="Pastikan Laptop/smartphone sudah terinstal aplikasi Zoom
"
            />
          </div>

          <div className="flex mt-[12px] md:mt-[0]">
            <Images url={time} css="w-[44px]" />
            <Texts
              font="nunito"
              css="text-[16px] ml-[10px]"
              label="15 menit sebelum event berlangsung, kamu bisa bergabung.
"
            />
          </div>

          <div className="flex mt-[12px] md:mt-[0]">
            <Images url={book} css="w-[44px]" />
            <Texts
              font="nunito"
              css="text-[16px] ml-[10px]"
              label="Jangan lupa setelah sesi webinar berakhir untuk mengisi ulasan webinar.
"
            />
          </div>

          <div className="flex mt-[12px] md:mt-[0]">
            <Images url={sertifikat} css="w-[44px]" />
            <Texts
              font="nunito"
              css="text-[16px] ml-[10px]"
              label="Webinar ini memiliki sertifikat kehadiran yang bisa kamu download setelah mengisi ulasan webinar.
"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
