import "/src/Components/Atoms/Custom.css";
import { FaChevronLeft } from "react-icons/fa";
const CustomLeftArrow = ({ onClick, isDisabled }) => {
  return (
    <button
      className={`custom-arrow left-arrow ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <FaChevronLeft className="text-[30px] bg-[#1d4261b3] w-[40px] h-[40px] p-2 text-white rounded-full "/>
    </button>
  );
};

export default CustomLeftArrow;
