import { CardTwo } from "@/app/components/cardTwo";

export default function CountryWiseSubject() {
  const country = ["india", "denmark", "china", "Russia"];
  return (
    <div className="flex gap-4 m-5">
      {country.map((info, index) => (
        <CardTwo
          title={info}
          url={`/admin/dashboard/countrywisesubject/${info}`}
          key={index}
        ></CardTwo>
      ))}
    </div>
  );
}
