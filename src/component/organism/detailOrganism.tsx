import React from "react";
import { useNavigate } from "react-router-dom";
// componnent
import { HeaderMolecules } from "component/molecules/detailMolecules/headerMolecules";
import { CardComentMolecules } from "component/molecules/detailMolecules/cardComentMolecules";
import { RingaksanMolecules } from "component/molecules/detailMolecules/ringkasanMolecules";
import { PengumumanMolecules } from "component/molecules/detailMolecules/pengumumanMolecules";
import { SyaratDanketentuan } from "component/molecules/detailMolecules/syaratDanKetentuanMolecules";
import { UlasanMolecules } from "component/molecules/detailMolecules/ulasanMolecules";
import { CardMolecules } from "component/molecules/homeMolecules/cardMolecules";
import { Texts } from "component/atom/texts";

// svg
import cardImg from "assets/cardImg.svg";
import cardUser from "assets/cardUser.svg";

interface DetailProps {
  content: any;
}

export const DetailOrganism = ({ content }: DetailProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderMolecules />
      <CardComentMolecules />
      <RingaksanMolecules />
      <PengumumanMolecules />
      <SyaratDanketentuan />
      <UlasanMolecules />

      <div className="mt-[30px] w-[100%] md:w-[65%] px-5">
        <Texts
          label="Kursus lain yang diminati"
          font="roboto"
          css="text-[15px] font-medium ml-[12px] mb-[20px]"
        />
        <div className="flex overflow-scroll w-[100%] ">
          {content.contents == null ? null : (
            <>
              {content.contents.map((data: any, key: any) => {
                return (
                  <div key={key} className="ml-[10px]">
                    <CardMolecules
                      detail={() => navigate("detail")}
                      img={data.imageURL == null ? cardImg : data.imageURL}
                      title={data.title}
                      time={data.date}
                      imgUser={data.instructors[0].profilePic}
                      nameUser={data.instructors[0].name}
                      devision="instruktur"
                      discount={50}
                      priceBeforeDiscount={5000000}
                      price={100000}
                      isDiscount={true}
                      metodeLearn={data.type.name}
                      colorBadge={
                        data.type.color == null
                          ? "bg-[#34618F]"
                          : `bg-[${data.type.color}]`
                      }
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
