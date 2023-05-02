import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

function Slick({ category, setData}) {
  const [activeDotIndex, setActiveDotIndex] = React.useState(0);
  const customeSlider = React.createRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };
  
  const gotoPrev = () => {
    customeSlider.current.slickPrev();

  };
  React.useEffect(() => {
    setData(category[activeDotIndex]);
  }, [activeDotIndex,category]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    touchMove: false,
    afterChange: (currentSlide) => setActiveDotIndex(currentSlide),

  };

  return (
    <div className="flex items-center justify-evenly">
      <button onClick={gotoPrev}><i className="fa-solid fa-chevron-left fa-2xl" style={{color: "#939ba9"}}></i></button>
      <div style={{ width: "300px" }} className=" pt-7">
        <Slider {...settings}  ref={customeSlider}>
          {category.map((i, index) => {
            return (
              <div key={index}>
                <img
                  className="mx-auto text-center"
                  src={`http://185.217.131.88:8080/attachment/open/${i.imageId}`}
                  width={269}
                  height={286}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <button onClick={gotoNext}><i className="fa-solid fa-chevron-right fa-2xl" style={{color: "#939ba9"}}></i></button>
    </div>
  );
}

Slick.propTypes = {
  category: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};
export default Slick;
