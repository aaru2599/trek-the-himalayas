import SectionHeading from "../Atoms/SectionHeading";
import SectionSubHeading from "../Atoms/SectionSubHeading";
import { InformationSectionData } from "../Data/InformationSectionData";
import SampleSlider from "../Molecule/SampleCarousel";
import SampleSliderSection from "../Molecule/SampleSliderSection";

const InformationSection = () => {
  const data = InformationSectionData;
  return (
    <section>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <SectionHeading heading={item.heading} />
            <SectionSubHeading subHeading={item.subHeading} />
            <SampleSliderSection infoData={item.infoData} slidingWidth={250}/>
            {/* <SampleSlider infoData={item.infoData} cardPerPage={4.5} /> */}
          </div>
        );
      })}
    </section>
  );
};

export default InformationSection;
