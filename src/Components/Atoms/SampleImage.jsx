const SampleImage = ({ imageData }) => {
  return (
    <div className="flex justify-center items-center gap-5">
      {imageData.map((imageItem, imageIndex) => {
        return (
          <div key={imageIndex} className="">
            <img
              src={imageItem.image}
              alt="image"
              className="w-[546px] h-[344] border-4 border-[#ebeff2] rounded-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SampleImage;
