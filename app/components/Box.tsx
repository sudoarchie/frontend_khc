interface boxdata {
  children: React.ReactNode;
  Heading?: string;
  className?: string;
}
export function Box({ children, Heading, className }: boxdata) {
  return (
    <div
      className={` border-2 border-borderColor rounded-lg p-5 m-5 ${className}`}
    >
      <h1 className="text-xl font-bold">{Heading}</h1>
      {children}
    </div>
  );
}
