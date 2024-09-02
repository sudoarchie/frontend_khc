interface RowData {
  [key: string]: string;
}

interface TableData {
  rows: RowData[];
  className?: string;
}

export default function TableField({ rows, className }: TableData) {
  if (rows.length === 0) {
    return null;
  }

  const headers = Object.keys(rows[0]);

  return (
    <div
      className={`relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border ${className}`}
    >
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-4 border-b border-slate-600 bg-slate-700"
              >
                <p className="text-sm font-normal leading-none text-slate-300">
                  {header}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr className="even:bg-slate-900 hover:bg-slate-700" key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="p-4 border-b border-slate-700">
                  <p className="text-sm text-slate-100 font-semibold">
                    {row[header]}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
