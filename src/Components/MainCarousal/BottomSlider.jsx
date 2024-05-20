import Carousel from "react-multi-carousel";

import "/src/Components/MainCarousal/CarouselPage.css";

const BottomSlider = ({ sliderData }) => {
  return (
    <Carousel
      autoPlaySpeed={5000}
      arrows={true} // Display arrows
      draggable={false}
      infinite={true}
      keyBoardControl={true}
      pauseOnHover={true}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      slideTransition={{
        duration: 500,
        timingFunction: "ease-in-out",
        delay: 0,
      }}
      renderDotsOutside={false}
      swipeable={false}
    >
      {sliderData.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-[#282a35] flex justify-center items-center gap-2 py-4"
          >
            <p className="text-white">{item.firstHeading}</p>
            <a href="#" className="text-[#0d6efd]">
              {item.secondHeading}
            </a>
          </div>
        );
      })}
    </Carousel>
  );
};

export default BottomSlider;
