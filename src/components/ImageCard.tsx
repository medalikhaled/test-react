import React, { useRef, useState } from "react";
import { Photo } from "../types/nasa_mars";
import MyModal from "../components/Modal";

export default function ImageCard({ photo }: { photo: Photo }) {
  const [isShown, isShownSet] = useState<Boolean>(false);

  const buttonRef = useRef(null);

  const openModalFunction = () => {
    console.log("Open Modal");
    isShownSet((prev) => !prev);
    // TODO: Add Open Modal Functionality
  };

  // TODO: Add Image Lazy Loading & Animation (Intersection Observer)

  return (
    <div
      onClick={openModalFunction}
      ref={buttonRef}
      className="rounded-lg bg-[#dbfcff] p-4 hover:cursor-pointer"
    >
      <img
        className="rounded-lg"
        src={photo.img_src}
        alt="Image of Mars"
        aria-label="Part of An official collection of Mars Photos captured by NASA"
      />
      {isShown && <MockModal />}
    </div>
  );
}

const MockModal = () => {
  return (
    <div className="h-10 w-10 rounded-md bg-[#e63462] p-24">Hello MY LOVE</div>
  );
};
