import { VideoCard } from "../components/videoCard";

export default function Videos() {
  return (
    <div>
      <h1 className="text-center text-4xl my-5">More Videos</h1>
      <div className="flex flex-wrap gap-5">
        <VideoCard></VideoCard>
      </div>
    </div>
  );
}
