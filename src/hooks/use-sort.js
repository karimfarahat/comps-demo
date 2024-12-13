import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    // to reset order based on the clicked field (name then score, for example)
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    // switch (sortOrder) {
    //   case null:
    //     setSortOrder("asc");
    //     setSortBy(label);
    //     break;
    //   case "asc":
    //     setSortOrder("desc");
    //     setSortBy(label);
    //     break;
    //   case "desc":
    //     setSortOrder(null);
    //     setSortBy(null);
    //     break;

    //   default:
    //     break;
    // }
    // another way
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

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
  return { sortOrder, sortBy, sortedData, setSortColumn };
}

export default useSort;
