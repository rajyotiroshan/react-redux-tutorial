import { Fragment } from "react";

function Table({ data, config, keyFun }) {
  const renderedHeader = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  /*   const renderedRows = data.map((d) => {
    return (
      <tr key={d.name} className="border-b-2">
        <td className="p-3">{d.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${d.color}`}></div>
        </td>
        <td className="p-3">{d.score}</td>
      </tr>
    );
  }); */
  /* 
  const renderedRows = data.map((d) => {
    return (
        config.map(c=>{
            return (
                c.render()
            )
        })
      <tr key={d.name} className="border-b-2">
        <td className="p-3">{d.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${d.color}`}></div>
        </td>
        <td className="p-3">{d.score}</td>
      </tr>
    );
  }); */

  const renderedRows = data.map((d) => {
    const renderedCells = config.map((col) => {
      return (
        <td key={col.label} className="p-2">
          {col.render(d)}
        </td>
      );
    });
    return (
      <tr key={keyFun(d)} className="border-b-2">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeader}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
