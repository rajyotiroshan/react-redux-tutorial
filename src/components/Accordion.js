import { useState } from "react";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(1);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
