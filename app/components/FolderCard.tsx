import Image from "next/image";
import folderIcon from "@/public/icons8-folder 1.png";
interface Folder {
  Name: string;
  SubName: string;
}
export function FolderCard({ Name, SubName }: Folder) {
  return (
    <div className="w-[250px] h-[250px] flex flex-col border-2 border-borderColor rounded-xl p-5">
      <Image
        src={folderIcon}
        alt={""}
        className="w-[136px] h-[136px] m-auto"
      ></Image>
      <h2 className="text-center font-bold">{Name}</h2>
      <h3 className="text-center text-secondaryText">{SubName}</h3>
    </div>
  );
}
