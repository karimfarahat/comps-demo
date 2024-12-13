// import SortableTable from "../components/SortableTable";
import SortableTableWithHook from "../components/SotrableTableWithHook";
import Table from "../components/Table";

function TablePage() {
  // the actual data being rendered
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  // Can easily add columns and what to render in them
  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];
  // to have a flexible key for any table
  const keyFn = (fruit) => fruit.name;
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />

      {/* <SortableTable data={data} config={config} keyFn={keyFn} /> */}
      {/* this is the one that crashes without the '?' in the table 
      saying data is not found */}
      <SortableTableWithHook data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
