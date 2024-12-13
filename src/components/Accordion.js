import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  // to be originally closed
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // toggle accordion collapsed and expanded
  const handleClick = (index) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    console.log(isExpanded);
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div className="border-x border-t rounded" key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return renderedItems;
}
export default Accordion;
