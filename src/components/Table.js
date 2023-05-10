function Table({ data, config }) {
  const renderedHeader = config.map((column) => {
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
    return (
      <tr key={d.name} className="border-b-2">
        <td className="p-3">{config[0].render(d)}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${config[1].render(d)}`}></div>
        </td>
        <td className="p-3">{config[2].render(d)}</td>
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
