interface button {
  Name: string;
  className?: string;
  type?: "submit" | "reset";
}
export function PrimaryButton({ Name, className, type }: button) {
  return (
    <input
      className={`align-middle select-none font-sans font-bold text-center uppercase transition-all  text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block ${className}`}
      type={type || "button"}
      value={Name}
    />
  );
}
