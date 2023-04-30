import { useState } from "react";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(1);
  const handleClick = (nxtIndex) => {
    setExpandedIndex(nxtIndex);
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
