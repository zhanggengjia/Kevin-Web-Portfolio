import React from 'react';
import { FaTimes } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';

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
          className="btn btn-circle btn-ghost absolute top-4 right-4"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col h-full gap-2 mt-8">
          {/* 上區：主圖 Carousel */}
          <div className="flex-[6] overflow-hidden w-[50vw] mx-auto items-center">
            <Slider ref={sliderRef} {...settings}>
              {imgList.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`image-${i}`}
                  className="w-full object-contain mx-auto"
                />
              ))}
            </Slider>
          </div>

          {/* 中區：縮圖列，點擊切換 */}
          <div className="flex-[1] overflow-x-auto flex justify-center gap-2">
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
