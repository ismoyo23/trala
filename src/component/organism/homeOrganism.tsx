import React from "react";
import { useNavigate } from "react-router-dom";

// component
import { SlideMolecules } from "component/molecules/homeMolecules/slideMolecules";
import { KsmMolecules } from "component/molecules/homeMolecules/ksmMolecules";
import { KdmMolecules } from "component/molecules/homeMolecules/kdmMolecules";
import { CardMolecules } from "component/molecules/homeMolecules/cardMolecules";
import { ArticelMolecules } from "component/molecules/homeMolecules/articelMolecules";
import { Texts } from "component/atom/texts";
import { Buttons } from "component/atom/button";

// svg
import cardImg from "assets/cardImg.svg";

interface HomeProps {
  slideShow: any;
  content: any;
  articels: any;
  category: any;
}

export const HomeOrganism = ({
  slideShow,
  content,
  articels,
  category,
}: HomeProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%]">
      {slideShow.mainimages == null ? null : (
        <SlideMolecules slideShow={slideShow.mainimages} />
      )}

      <KsmMolecules />
      <KdmMolecules />
      <div className="mt-[10px] md:mt-[0]">
        <Texts
          label="Kelas"
          css="text-center font-medium text-[25px] text-[#262626]"
          font="roboto"
        />
        <div className="w-[100%] flex justify-center content-center">
          <hr className="w-[100px] md:w-[10%]  border-4 rounded-[30px] border-[#FF4E4E]" />
        </div>

        <div className="mt-[30px] w-[100%] px-8">
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

        <div className="mt-[30px]">
          <Texts
            label="Artikel"
            css="text-center font-medium text-[25px] text-[#262626]"
            font="roboto"
          />
          <div className="w-[100%] flex justify-center content-center">
            <hr className="w-[100px] md:w-[10%]  border-4 rounded-[30px] border-[#FF4E4E]" />
          </div>

          <div className="px-8 mt-[20px] w-[100%]">
            <div className="w-[100%] flex justify-center content-center">
              <div className="flex w-[100%] md:w-[45%]  justify-between overflow-auto">
                {category.categories == null ? null : (
                  <div className="flex w-[1000px] md:w-[100%]">
                    {category.categories.map((data: any, key: any) => {
                      return (
                        <div key={key}>
                          <Buttons
                            action={() => console.log("ok")}
                            label={data.name}
                            css="font-roboto w-[200px] h-[34px] border-2 border-[#DCDCDC] rounded-[4px] ml-[9px]"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="w-[100%]">
              <div className="mt-[10px] w-[100%] flex justify-center content-center">
                <div className="w-[90%]">
                  <hr />
                </div>
              </div>

              <div className="w-[100%] mt-[12px] flex justify-center content-center">
                <div className="w-[100%] mt-[50px] md:w-[85%]">
                  {articels.articles == null ? null : (
                    <>
                      {articels.articles.map((data: any, key: any) => {
                        return (
                          <div key={key}>
                            <ArticelMolecules
                              img={data.imageUrlPreview}
                              time="09 Feb . 4 menit membaca"
                              title={data.title}
                              description={data.brief}
                              nameorganization="Organization Development"
                              nameUser={data.instructor.name}
                              imgUser={data.instructor.profilePic}
                            />
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
