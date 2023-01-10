import React from "react";
import { Photo } from "../types/nasa_mars";
import ImageCard from "./ImageCard";

export default function GridView({
  children, //Optional
  data,
}: {
  children?: React.ReactNode;
  data: Photo[] | undefined;
}) {
  return (
    <main className="grid grid-cols-5 gap-4">
      {data?.map((photo: Photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
    </main>
  );
}
