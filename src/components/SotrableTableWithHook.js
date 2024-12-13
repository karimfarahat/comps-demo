import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTableWithHook(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  //   data used below in sorted data
  const updatedConfig = config.map((column) => {
    //if header doesn't have sortValue, return the column header as it is
    if (!column.sortValue) {
      return column;
    }
    //return an object with same column properties and add sortable header
    return {
      ...column,
      header: () => (
        <th
          onClick={() => setSortColumn(column.label)}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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

export default SortableTableWithHook;
