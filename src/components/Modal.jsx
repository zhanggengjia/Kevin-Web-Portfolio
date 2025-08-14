import React from 'react';
import { FaTimes } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer text-2xl text-primary hover:text-sky-500 hover:scale-[1.1]"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer text-2xl text-primary hover:text-sky-500 hover:scale-[1.1]"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const Modal = ({ isOpen, onClose, title, text, imgList }) => {
  const sliderRef = useRef(null); // 這裡抓到 Slick 實例

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      className={[
        'fixed inset-0 grid place-items-center bg-black/50 transition-opacity duration-300',
        isOpen ? 'visible opacity-100 z-50' : 'invisible opacity-0 z-[-1]'
      ].join(' ')}
    >
      <div className="bg-base-100 w-[80vw] max-w-[1280px] h-[90vh] rounded-lg p-6 text-left relative shadow-lg overflow-hidden flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="btn btn-circle btn-ghost absolute top-4 right-4 z-11"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col h-full gap-2 ">
          {/* 上區：主圖 Carousel */}
          <div className="flex-[6] max-w-full px-4 flex justify-center items-center relative z-10 overflow-visible">
            <div className="w-full max-w-4xl">
              <Slider
                ref={sliderRef}
                {...settings}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}>
                {imgList.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`image-${i}`}
                    className="w-full max-h-[50vh] object-contain"
                  />
                ))}
              </Slider>
            </div>
          </div>


          {/* 中區：縮圖列，點擊切換 */}
          <div className="flex-[0.6] overflow-x-auto flex justify-center items-center gap-2">
            {imgList.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`thumb-${i}`}
                className="w-10 h-10 object-cover cursor-pointer border border-base-content/20 hover:border-primary"
                onClick={() => sliderRef.current?.slickGoTo(i)}
              />
            ))}
          </div>

          {/* 下區：文字內容 */}
          <div className="flex-[2.5] overflow-y-auto px-2">
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-base-content/80 leading-relaxed">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
