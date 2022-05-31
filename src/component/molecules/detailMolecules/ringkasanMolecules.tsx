import React from "react";

// component
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";

// svg
import top from "assets/chevron-right.svg";

export const RingaksanMolecules = () => {
  return (
    <div className="px-8 mt-[30px]">
      <div className="w-[100%] md:w-[64%] h-[100%] md:h-[216px] bg-[white] border-[1px] px-8 pt-2 border-[#DCDCDC]">
        <Texts
          css="font-bold text-[20px] tracking-tight"
          font="roboto"
          label="Ringkasan"
        />

        <Texts
          css="text-[16px] mt-[10px]"
          font="nunito"
          label="Java menjadi salah satu bahasa pemrograman terpopuler bukan karena tanpa alasan, bahasa pemrograman ini memiliki beberapa kelebihan seperti misalnya bisa berjalan di sistem operasi yang berbeda-beda, kemudian bahasa pemrograman ini termasuk kedalam pemrograman OOP (pemrograman orientasi objek) sehingga programer lebih mudah dalam menyusun "
        />

        <div className="flex mt-[12px] mb-[12px]">
          <Texts
            font="roboto"
            label="Lihat lebih"
            css="text-[red] text-[14px]"
          />

          <Images url={top} css="" />
        </div>
      </div>
    </div>
  );
};
