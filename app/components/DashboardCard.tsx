interface DashboardInterface {
  title: string;
  dataNumber: number;
}
export function DashboardCard({ title, dataNumber }: DashboardInterface) {
  return (
    <div className="w-full flex flex-col justify-center items-center saspect-[3/1] aspect-square  max-w-[230px] rounded-2xl border-2 border-borderColor p-4">
      <h1 className="font-bold text-2xl">{dataNumber}</h1>
      <h2 className="text-gray-500 relative top-5">{title}</h2>
    </div>
  );
}
