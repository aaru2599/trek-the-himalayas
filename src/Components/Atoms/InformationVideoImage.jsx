import { useState } from "react";
import VideoModal from "./VideoModal";

const InformationVideoImage = ({ imageData }) => {
  //console.log("imageData", imageData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[283px] m-2">
      <img
        src={imageData.image}
        onClick={openModal}
        className="w-[283px] h-[315px]  rounded-xl"
        alt=""
      />
      <VideoModal
        isOpen={isModalOpen}
        iframeLink={imageData.detailsLink}
        onClose={closeModal}
      />
    </div>
  );
};

export default InformationVideoImage;
