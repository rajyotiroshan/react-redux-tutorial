function Table({ data }) {
  const dataRow = data.map((d) => {
    return (
      <tr key={d.name} className="border-b-2">
        <td className="p-3">{d.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${d.color}`}></div>
        </td>
        <td className="p-3">{d.score}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{dataRow}</tbody>
    </table>
  );
}

export default Table;
