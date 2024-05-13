import SampleImage from "../Atoms/SampleImage";
import SectionHeading from "../Atoms/SectionHeading";
import SectionSubHeading from "../Atoms/SectionSubHeading";
import { TrekkingGearsData } from "../Data/TrekkingGearsData";

const TrekkingGears = () => {
  const trekkingData = TrekkingGearsData;
  return (
    <div>
      {trekkingData.map((data, index) => {
        return (
          <div key={index}>
            <SectionHeading heading={data.heading} />
            <SectionSubHeading subHeading={data.subHeading} />
            <SampleImage imageData={data.bottomImage} />
          </div>
        );
      })}
    </div>
  );
};

export default TrekkingGears;
