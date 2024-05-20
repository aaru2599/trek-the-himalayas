import { useRef } from "react";
import SampleTrekCard from "../Atoms/SampleTrekCard";
import InformationVideoImage from "../Atoms/InformationVideoImage";
import UpdateSection from "./UpdateSection";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SampleSliderSection = ({
  treksData,
  infoData,
  slidingWidth,
  updateData,
}) => {
  const containerRef = useRef(null);
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -slidingWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollright = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: slidingWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative flex justify-center">
      <button onClick={scrollLeft} className="absolute top-[50%] left-0 z-[1]">
        <FaChevronLeft className="text-[30px] bg-[#1d4261b3] w-[40px] h-[40px] p-2 text-white rounded-full " />
      </button>

      <div
        ref={containerRef}
        className=" flex justify-between scrollable-data overflow-hidden overflow-x-scroll "
      >
        {treksData &&
          treksData.map((item, index) => {
            //console.log("item", item);
            return (
              <div key={index} className="flex ">
                <SampleTrekCard trekCardData={item} />
              </div>
            );
          })}
        {infoData &&
          infoData.map((item, index) => {
            return (
              <div key={index} className="flex ">
                <InformationVideoImage imageData={item} />
              </div>
            );
          })}
        {updateData &&
          updateData.map((updateItem, updateIndex) => {
            return (
              <div key={updateIndex}>
                <UpdateSection updateData={updateItem} />
              </div>
            );
          })}
      </div>
      <button
        onClick={scrollright}
        className="ml-2 absolute  top-[50%] right-0"
      >
        <FaChevronRight className="text-[30px] bg-[#1d4261b3] w-[40px] h-[40px] p-2 text-white rounded-full " />
      </button>
    </div>
  );
};

export default SampleSliderSection;
