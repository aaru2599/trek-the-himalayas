import { FaChevronRight } from "react-icons/fa";
import "/src/Components/Atoms/Custom.css";

const CustomRightArrow = ({ onClick, isDisabled }) => {
  return (
    <button
      className={`custom-arrow right-arrow ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <FaChevronRight className="bg-[#1d4261b3] text-[30px] bg-slate-900 w-[40px] h-[40px] p-2 text-white rounded-full " />
    </button>
  );
};

export default CustomRightArrow;
