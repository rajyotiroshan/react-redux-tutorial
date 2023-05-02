import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(null);

  //
  useEffect(() => {
    const handler = (evt) => {
      //console.log(divEl.current);
      if (!divEl.current) {
        //use clicks outside dropdown
        return;
      }
      if (!divEl.current.contains(evt.target)) {
        //use clicks outside dropdown
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  //
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  //
  //window.time2 = performance.now()
  const handleOptionClick = (selection) => {
    //window.time1 = performance.now()
    //need to close the options -> dd
    //1. close the dropdown
    setIsOpen(!isOpen);

    //2. update the selected element
    //pass the element value to click handler
    onChange(selection);
  };

  //
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
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}
