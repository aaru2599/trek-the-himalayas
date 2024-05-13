const OptionSection = ({ sectionData }) => {
  return (
    <select>
      {sectionData.map((option, index) => (
        <optgroup key={index} label={option.category}>
          {option.subCat.map((subOption, subIndex) => (
            <option key={subIndex} value={subOption.link}>
              {subOption.subCatName}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

export default OptionSection;
