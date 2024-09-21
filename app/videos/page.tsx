import { VideoCard } from "../components/videoCard";

export default function Videos() {
  const data = [
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
    {
      title: "How To Build Anything | Art of Reverse Engineering",
      href: "https://youtu.be/EiOvxYja8GU",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-5">More Videos</h1>
      <div className="flex flex-wrap gap-5 justify-center w-[90%] mx-auto">
        {data.map((info, index) => (
          <VideoCard title={info.title} href={info.href}></VideoCard>
        ))}
      </div>
    </div>
  );
}
