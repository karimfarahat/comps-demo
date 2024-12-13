import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      //how to reference the element using use ref ... divEl.current

      //to make sure we even have the divEl on the document
      // and if we don't we return the whole function
      if (!divEl.current) {
        return;
      }
      // To check if the clicked element is outside the dropdown
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    //add listener to component
    document.addEventListener("click", handler, true);

    //cleanup function to remove after next rerender AND BEFORE NEXT useEffect call
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    //could have used setIsOpen(!cur), but can get a really rare bug of $0.click() in console
    setIsOpen((cur) => !cur);
  };
  const handleOptionClick = (option) => {
    //close dropdown
    setIsOpen(false);
    //return clicked option
    return onChange(option);
  };

  const renderedDropdown = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {isOpen && <div>{option.label}</div>}
      </div>
    );
  });
  return (
    //assign the fererence here for useRef
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}

        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedDropdown}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
