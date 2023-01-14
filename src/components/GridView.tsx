import { Photo } from "../types/nasa_mars";
import ImageCard from "./ImageCard";
import { useState } from "react";

export default function GridView({
  children, //Optional
  data,
}: {
  children?: React.ReactNode;
  data: Photo[] | undefined;
}) {
  const [tiles, tilesSet] = useState<string>("5");

  return (
    <>
      {/* TODO : Change this to a HeadlessUI ListBox component with customs styles */}
      <div>
        <h5 className="text-xs text-green-600">
          Number of Components per Line
        </h5>
        <select
          className="mx-auto"
          onChange={(e) => tilesSet(e.target.value)}
          onBlur={(e) => tilesSet(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
        </select>
      </div>

      {/* Prevent Layout Shift by setting a min size for the man component and Loading state, use the suspend too */}
      <main className={`mx-8 grid ${"grid-cols-" + tiles} gap-4`}>
        {data?.map((photo: Photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </main>
    </>
  );
}
