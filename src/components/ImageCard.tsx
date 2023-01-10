import React from "react";
import { Photo } from "../types/nasa_mars";

export default function ImageCard({ photo }: { photo: Photo }) {
  const openModalFunction = () => {
    console.log("Open Modal");
  };

  return (
    <div
      onClick={openModalFunction}
      className="rounded-lg bg-slate-500 p-4 hover:cursor-pointer"
    >
      <img
        className="rounded-lg"
        src={photo.img_src}
        alt="Image of Mars"
        aria-label="Part of An official collection of Mars Photos captured by NASA"
      />
    </div>
  );
}
