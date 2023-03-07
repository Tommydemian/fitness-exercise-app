import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';

import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data, selectedBodyPart, setSelectedBodyPart }) => {
  const [slider, setSlider] = useState(null);

  const handlePrev = () => {
    slider.slickPrev();
  };

  const handleNext = () => {
    slider.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


  return (
    <div>
      <div>
        <button className="arrow-button" onClick={handlePrev}><Icon icon="mdi:arrow-left-thin" className="arrow-icon" color="#ff2625" /></button>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data.map((item) => (
            <div key={item.id || item} style={{ margin: "0 40px" }}>
              <BodyPart
                item={item}
                selectedBodyPart={selectedBodyPart}
                setSelectedBodyPart={setSelectedBodyPart}
              />
            </div>
          ))}
        </Slider>
        <button className="arrow-button" onClick={handleNext}><Icon icon="mdi:arrow-right-thin" className="arrow-icon" color="#ff2625" /></button>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;