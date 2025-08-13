import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testlist } from '../data';

const SlickCarousel = () => {
  const settings = {
    customPaging: function (i) {
      const imgUrl = testlist[i].image
      return (
        <a className="mb-5">
          <img className='w-full object-cover h-10' src={imgUrl} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container my-10">
      <Slider {...settings}>
        {testlist.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="w-30 object-cover h-64 items-center mx-auto" />
              {/* <h5 className="name">{name}</h5>
              <p className="title">{title}</p> */}
              <p className="text">{quote}</p>
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          );
        })}
      </Slider>
    </div>
  );
}

export default SlickCarousel;