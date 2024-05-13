const Image = ({ imgURL }) => {
  //console.log("imgURL", imgURL);
  return (
    <div>
      <img
        src={imgURL.img}
        className=" w-[100%]"
        
        decoding="async"
        loading="lazy"
        alt="carousel-image"
      />
    </div>
  );
};

export default Image;
