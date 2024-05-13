import Carousel from "react-multi-carousel";
import "/src/Components/MainCarousal/CarouselPage.css";

const SampleCarousel = ({ carouselData }) => {
  console.log("data", carouselData);
  return (
    <div>
      {/* <Carousel
        autoPlaySpeed={5000}
        // centerMode={true}
        className=""
        draggable={false}
        // focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl={true}
        // minimumTouchDrag={80}
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
        // rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay={true}
        showDots={false}
        slideTransition={{
          duration: 500,
          timingFunction: "ease-in-out",
          delay: 0,
        }}
        //  beforeChange={handleSlideChange}
        renderDotsOutside={true}
        sliderClass=""
        slidesToSalide={1}
        swipeable={true}
      >
        {carouselData.map((item, index) => {
          return (
            <div key={index}>
              <img
                width={"100%"}
                src={item.img}
                decoding="async"
                loading="lazy"
                alt="carousel-image"
              />
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
};

export default SampleCarousel;
