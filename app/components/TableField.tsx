interface TableData {
  Header: string[];
  Rows: string[][];
  className?: string;
}
export default function TableField({ Header, Rows, className }: TableData) {
  return (
    <div
      className={`relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border ${className}`}
    >
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {Header.map((info, index) => (
              <th
                key={index}
                className="p-4 border-b border-slate-600 bg-slate-700"
              >
                <p className="text-sm font-normal leading-none text-slate-300">
                  {info}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Rows.map((info, index) => (
            <tr className="even:bg-slate-900 hover:bg-slate-700" key={index}>
              {info.map((newinfo, index) => (
                <td className="p-4 border-b border-slate-700">
                  <p className="text-sm text-slate-100 font-semibold">
                    {newinfo}
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
