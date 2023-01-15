import { Photo } from "../types/nasa_mars";
import ImageCard from "./ImageCard";
import { useState } from "react";
import MyModal from "../components/Modal";

export interface newPhoto extends Photo {
  index: number;
}

export default function GridView({
  children, //Optional
  data,
  buttonRef,
}: {
  children?: React.ReactNode;
  data: Photo[];
  buttonRef: any;
}) {
  //const [tiles, tilesSet] = useState<string>("3");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, currentImageSet] = useState<newPhoto>();

  // Mapping the data to add an index to each photo
  const mappedImages = data.map((image, index) => {
    return {
      ...image,
      index,
    };
  });

  //TODO: Prevent Layout Shifts by setting a min size for the man component and Loading state, use the React Suspend too

  return (
    <main
      className={`mx-12 grid grid-cols-2 place-content-center gap-4 md:grid-cols-3`}
    >
      {mappedImages?.map((photo: newPhoto) => (
        <ImageCard
          key={photo.id}
          photo={photo}
          setIsOpen={setIsOpen}
          buttonRef={buttonRef}
          currentImageSet={currentImageSet}
        />
      ))}

      {currentImage && (
        <MyModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          allImages={mappedImages}
          currentImage={currentImage}
          currentImageSet={currentImageSet}
        />
      )}
    </main>
  );
}
