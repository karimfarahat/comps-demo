import { useState } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const handleClick = (label) => {
    // to reset order based on the clicked field (name then score, for example)
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        setSortBy(label);
        break;
      case "asc":
        setSortOrder("desc");
        setSortBy(label);
        break;
      case "desc":
        setSortOrder(null);
        setSortBy(null);
        break;

      default:
        break;
    }
    console.log(label);
  };
  //   data used below in sorted data
  const { config, data } = props;
  const updatedConfig = config.map((column) => {
    //if header doesn't have sortValue, return the column header as it is
    if (!column.sortValue) {
      return column;
    } else {
      //return an object with same column properties and add sortable header
      return {
        ...column,
        header: () => (
          <th
            onClick={() => handleClick(column.label)}
            className="cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center">
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      };
    }
  });
  // only sort data if sortOrder and sortBy are not null
  // make a copy of the 'data' prop
  //find the correct sortValue funtion and use it for sorting
  let sortedData = data;
  if (sortBy && sortOrder) {
    //find the correct object
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      //get in the fruit value and just get the name of it or whatever the sortValue is
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  // NEW CONFIG WILL OVERRIDE THE OLD CONFIG IN {...props}
  return <Table {...props} data={sortedData} config={updatedConfig}></Table>;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy)
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowDown />
      </div>
    );
  }
}

export default SortableTable;
