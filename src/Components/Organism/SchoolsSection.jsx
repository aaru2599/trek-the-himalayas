import SampleImage from "../Atoms/SampleImage";
import SectionHeading from "../Atoms/SectionHeading";
import SectionSubHeading from "../Atoms/SectionSubHeading";
import { SchoolsData } from "../Data/SchoolData";
import "/src/Components/Organism/CustomDisc.css";

const SchoolSection = () => {
  const schoolData = SchoolsData;
  return (
    <section>
      {schoolData.map((data, index) => {
        console.log("schoolData", data);
        return (
          <div key={index}>
            <SectionHeading heading={data.heading} />
            <SectionSubHeading subHeading={data.subHeading} />
            <div className="flex justify-center  gap-4">
              <img
                src={data.image}
                alt=""
                className="w-[546px] h-[343px] border-4 border-[#ebeff2] rounded-[10px]"
              />
              <a
                href="#"
                className="w-[550px] text-justify bg-[#f7efef] px-2 text-[15px] rounded-[10px]"
              >
                <ul className="custom-disc flex flex-col gap-4">
                  {data.paraData.map((para, index) => {
                    return (
                      <li key={index} className="">
                        {para}
                      </li>
                    );
                  })}
                  <div className="font-[600] text-themeColor "><span className="border-b-2 border-themeColor">More info on outbound learning programs</span></div>
                </ul>
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SchoolSection;
