const UpdateSection = ({ updateData }) => {
  return (
    <div className="flex justify-center gap-4 mt-[20px] items-start w-[1330px]">
      <div className="w-[500px] text-justify">
        <div className="text-[20px] font-[600]">{updateData.mainHeading}</div>
        <div className="flex flex-col gap-3">
          {updateData.paragraph.map((para, index) => {
            return <p key={index}>{para}</p>;
          })}
        </div>
        <div className=" flex justify-center items-center">
          <button className="text-center  bg-themeColor rounded-md px-3 py-1  text-white">
            Read More
          </button>
        </div>
      </div>
      <div>
        <img
          src={updateData.image}
          alt=""
          className="w-[530px] h-[364px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default UpdateSection;
