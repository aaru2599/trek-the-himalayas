import Carousel from "react-multi-carousel";
import WithStyles from "../Atoms/SampleTrekCard";
import { TrendingTrekData } from "../Data/TrendingTrekData";
import SectionHeading from "../Atoms/SectionHeading";
import SectionSubHeading from "../Atoms/SectionSubHeading";
import SampleSlider from "../Molecule/SampleCarousel";
import SampleImage from "../Atoms/SampleImage";
import SampleSliderSection from "../Molecule/SampleSliderSection";

const TrendingTrek = () => {
  const data = TrendingTrekData;

  return (
    <section>
      {data.map((trekItem, trekIndex) => {
        return (
          <div key={trekIndex}>
            <SectionHeading heading={trekItem.heading} />
            <SectionSubHeading subHeading={trekItem.subHeading} />
            <SampleSliderSection treksData={trekItem.treks} slidingWidth={350}/>
            {/* <SampleSlider treksData={trekItem.treks} cardPerPage={3.9} /> */}
            <div className="mt-[40px]">
              <SampleImage imageData={trekItem.bottomImage}  />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TrendingTrek;
