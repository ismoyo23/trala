import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// component
import { Images } from "component/atom/images";
import { Texts } from "component/atom/texts";

// svg
import nextKanan from "assets/nextkanan.svg";
import nextKiri from "assets/nextkiri.svg";

interface SlidePorps {
  slideShow: any;
}

export const SlideMolecules = ({ slideShow }: SlidePorps) => {
  return (
    <>
      <div className="z-[-1] w-screen md:w-[100%] shadow-0.15">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          uk-slider="center: true"
        >
          <div>
            <ul
              className="uk-slider-items uk-grid uk-grid-match"
              uk-height-viewport="offset-top: true; offset-bottom: 30"
            >
              {slideShow.map((data: any, key: any) => {
                return (
                  <li key={key} className="uk-width-3-4">
                    <div className="uk-cover-container">
                      <Images
                        url={data.imageURL.desktop}
                        css="bg-cover bg-no-repeat h-[60vh] md:h-[100%]"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              className="md:ml-[155px] uk-position-center-left uk-position-small"
              href="#"
              uk-slider-item="previous"
            >
              <Images url={nextKiri} css="h-[auto]" />
            </a>
            <a
              className="md:mr-[155px]  uk-position-center-right uk-position-small "
              href="#"
              uk-slider-item="next"
            >
              <Images url={nextKanan} css="" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[60px] md:mt-[0] md:h-[84px] w-[100%] shadow-0.15 bg-[#FFFFFF]">
        <div className="h-[17px] md:h-[20px]"></div>
        <Texts
          label="#BelajarGakRibet Bersama Trala"
          font="roboto"
          css="font-bold text-center text-[15px] md:text-[25px]"
        />
      </div>
    </>
  );
};
