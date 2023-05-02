import { useState } from "react";

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleOptionClick = (selection) => {
    //need to close the options -> dd
    //1. close the dropdown
    setIsOpen(!isOpen);

    //2. update the selected element
    //pass the element value to click handler
    onChange(selection);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadowbg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
