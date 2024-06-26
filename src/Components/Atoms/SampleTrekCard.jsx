const SampleTrekCard = ({ trekCardData }) => {
  //console.log("trekCardData", trekCardData);
  return (
    <div className="relative flex w-[334px] ">
      <img src={trekCardData.image} className="mx-2 relative w-[334px] h-[366px] rounded-[15px]" alt="" />
      <div className="rounded-b-[15px]  text-white absolute bottom-0  transform  bg-black bg-opacity-50 text-center p-2 left-2 w-[319px] ">
        <div className="text-start text-[20px] h-[60px] ">{trekCardData.trekName}</div>
        <div className="flex justify-between items-center">
          <div>{trekCardData.trekCity}</div>
          <button className="border-2 rounded-xl px-2 py-1 border-themeColor">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SampleTrekCard;
