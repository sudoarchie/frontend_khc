import Image, { StaticImageData } from "next/image";
interface Card {
  title: string;
  image: StaticImageData;
  discription: string;
}
export function CardFour({ title, image, discription }: Card) {
  return (
    <div className="flex flex-col w-[250px] h-[300px]">
      <Image
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover"
      ></Image>
      <h2 className="text-xl font-bold text-justify">{title}</h2>
      <p className="text-gray-700 text-justify">{discription}</p>
    </div>
  );
}
