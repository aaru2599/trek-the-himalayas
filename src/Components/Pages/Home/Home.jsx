import styled from "styled-components";
import { HeaderData } from "../../Header/HeaderData";
import Header from "../../Header/Organism/Header";
import BottomSlider from "../../MainCarousal/BottomSlider";
import TrendingTrek from "../../Organism/TrendingTrek";
import InformationSection from "../../Organism/InformationSection";
import LatestUpdate from "../../Organism/LatestUpdate";
import TrekkingGears from "../../Organism/TrekkingGears";
import SchoolSection from "../../Organism/SchoolsSection";
import MainSection from "../../Organism/MainSection";

const bottomSliderData = [
  {
    firstHeading:
      "Get ready for an adventure-packed summer with our exciting lineup of treks!",
    secondHeading: "Know More About Summer Trek",
    secHeadingLink: "https://trekthehimalayas.com/season/summer",
  },
];
const Home = () => {
  const headerData = HeaderData;
  return (
    <div className="relative">
      {/* ***********Header********** */}
      <div className="sticky top-0 z-10">
        {headerData.map((data, index) => (
          <Header
            key={index}
            logo={data.logo}
            center={data.center}
            end={data.end}
          />
        ))}
      </div>
      {/* ***********MainCarousal********** */}

      <div>
        <MainSection />
        <BottomSlider sliderData={bottomSliderData} />
      </div>

      <TrendingTrek />
      <InformationSection />
      <LatestUpdate />
      <TrekkingGears />
      <SchoolSection />
    </div>
  );
};

export default Home;

export const Wrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;
