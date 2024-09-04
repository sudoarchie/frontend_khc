interface boxdata {
  children: React.ReactNode;
  Heading?: string;
  SubHeading?: string;
  className?: string;
}
export function Box({ children, Heading, SubHeading, className }: boxdata) {
  return (
    <div
      className={` border-2 border-borderColor rounded-lg p-5 m-5 ${className}`}
    >
      <h1 className="text-xl font-bold">{Heading}</h1>
      <h2 className="text-lg text-secondaryText">{SubHeading}</h2>
      {children}
    </div>
  );
}
