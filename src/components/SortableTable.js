import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder("null");
      setSortBy(null);
    }
  };
  //not modifying config, map=> create
  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }
    return {
      ...col,
      header: () => (
        <th onClick={() => handleClick(col.label)}>{col.label} IS SORTABLE</th>
      ),
    };
  });

  //only sort data if sortOrder and sortBy are not null
  //Make a copy of the 'data' prop.
  //Find the correct sort value function AND ISE IT FOR SORTING
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valA === "string") {
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        return (valA - valB) * reverseOrder;
      }
    });
  }
  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}
export default SortableTable;
