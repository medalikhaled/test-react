import React from "react";
import { newPhoto } from "./GridView";

export default function ImageCard({
  photo,
  buttonRef,
  setIsOpen,
  currentImageSet,
}: {
  photo: newPhoto;
  buttonRef: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentImageSet: React.Dispatch<React.SetStateAction<newPhoto | undefined>>;
}) {
  const openModalFunction = () => {
    setIsOpen((prev) => !prev);
    currentImageSet(photo);
  };

  // TODO: Add Image Lazy Loading & Animation Using Framer Motion (Intersection Observer)

  // * We Can Use the React Ref & Portal Instead, but I don't like refs I believe they break the rules in a convoluted way

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

      <h6 className="">Date: {photo.earth_date}</h6>
    </div>
  );
}
