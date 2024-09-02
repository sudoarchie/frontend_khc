import Link from "next/link";

export default function Assignment() {
  return (
    <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
            {/* <button
              className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              View All
            </button>
            <button
              className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                stroke-width="2"
                className="w-4 h-4"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
              Add member
            </button> */}
          </div>
        </div>
      </div>
      <div className="p-0 overflow-scroll">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                  Document Name
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                  Document Type
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                  Type
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                  Chapter
                </p>
              </th>
              <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                  Shared Date
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-slate-200">
                <div className="flex flex-col">Designer</div>
              </td>
              <td className="p-4 border-b border-slate-200">
                <div className="flex flex-col">Designer</div>
              </td>
              <td className="p-4 border-b border-slate-200">
                <div className="flex flex-col">Designer</div>
              </td>
              <td className="p-4 border-b border-slate-200">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-slate-100 text-slate-500">
                    <span className="">offline</span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="text-sm text-slate-500">jkdfjklajs</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-3">
        <p className="block text-sm text-slate-500">Page 1 of 10</p>
        <div className="flex gap-1">
          <button
            className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Previous
          </button>
          <button
            className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
