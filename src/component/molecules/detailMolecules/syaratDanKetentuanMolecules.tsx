import React from "react";

// component
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";

// svg
import files from "assets/file.svg";
export const SyaratDanketentuan = () => {
  return (
    <div className="px-8 mt-[30px]">
      <div className="w-[100%] md:w-[64%] h-[100%] md:h-[196px] bg-[white] border-[1px] px-8 pt-2 border-[#DCDCDC]">
        <Texts
          css="font-bold text-[20px] tracking-tight"
          font="roboto"
          label="Syarat dan ketentuan"
        />

        <div className="flex mt-[12px] mb-[12px]">
          <Images url={files} css="hidden md:list-item" />
          <Texts
            css="text-[16px] md:ml-[12px] mt-[10px]"
            font="nunito"
            label="Segala pemberitahuan mengenai informasi dan perubahan kelas akan disampaikan langsung oleh sistem kami melalui email, harap melakukan pengecekan email secara berkala. Untuk info selanjutnya bisa hubungi kami di info@trala.com"
          />
        </div>
      </div>
    </div>
  );
};
