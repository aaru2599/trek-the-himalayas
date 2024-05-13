import SectionHeading from "../Atoms/SectionHeading";
import UpdateSection from "../Molecule/UpdateSection";
import { LatestUpdateData } from "../Data/LatestUpdateData";
import SampleSlider from "../Molecule/SampleCarousel";
import SampleSliderSection from "../Molecule/SampleSliderSection";

const LatestUpdate = () => {
  const latestData = LatestUpdateData;
  return (
    <div>
      {latestData.map((data, index) => {
        return (
          <div key={index}>
            <SectionHeading heading={data.heading} />
            <SampleSliderSection updateData={data.updateData}/>
            {/* <SampleSlider updateData={data.updateData} cardPerPage={1} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default LatestUpdate;
