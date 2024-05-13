import "react-multi-carousel/lib/styles.css";
import SampleCarousel from "../Molecule/SampleCarousel";
import { MainCarousalData } from "../Data/MainCarousalData";
const MainSection = () => {
  const carouselData = MainCarousalData;
  return (
    <div>
      <SampleCarousel carouselData={carouselData} />
    </div>
  );
};

export default MainSection;
