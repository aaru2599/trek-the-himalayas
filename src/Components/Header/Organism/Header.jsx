import OptionSection from "../Atoms/OptionSection";
import { FaCaretDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Logo from "../Atoms/Logo";
const Header = ({ logo, center, end }) => {
  return (
    <div id="header" className="flex justify-between items-center bg-[#ebeff2] px-4">
      {/* Render logo */}
      {logo &&
        logo.map((logoUrl, index) => <Logo key={index} logo={logoUrl} />)}

      {/* Render center section */}
      {center && (
        <div className="flex gap-4 ">
          {/* Render left section */}
          {center.left && (
            <div className="left">
              <div className="border rounded-md border-black flex px-2 bg-white items-center gap-2 text-[14px]">
                <span>{center.left.heading.toUpperCase()}</span>
                <span>
                  <FaCaretDown color=""/>
                </span>
              </div>

              {/* Render select options */}
              <div className="hidden">
                {" "}
                {center.left.selectOptions && (
                  <OptionSection sectionData={center.left.selectOptions} />
                )}
              </div>
            </div>
          )}

          {/* Render right section */}
          {center.right && (
            <div className="right">
              <button className="border  rounded-md border-black px-2 bg-white text-[14px] ">
                <a href={center.right.link}>
                  {center.right.button.toUpperCase()}
                </a>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Render end section */}
      {end &&
        end.map((item, index) => (
          <div key={index} className="flex gap-[100px] ">
            <input
              type="text"
              placeholder="Search Your Trek"
              className="border border-black rounded-md w-[250px] text-[14px] text-black"

            />
            <button className="border border-black rounded-md p-2"><FaBars/></button>
          </div>
        ))}
    </div>
  );
};

export default Header;
