import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { newPhoto } from "./GridView";

// Headless UI Components are Unstyeld Components, I used it just to get over the overhead of implementing Accessibility features

export default function MyModal({
  setIsOpen,
  isOpen,
  currentImage,
  allImages,
  currentImageSet,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentImage: newPhoto;
  allImages: newPhoto[];
  currentImageSet: React.Dispatch<React.SetStateAction<newPhoto | undefined>>;
}) {
  function closeModal() {
    setIsOpen(false);
  }

  function findImageWithId(index: number) {
    const image = allImages?.filter((image) => image.index === index);

    if (image) {
      return image[0];
    } else {
      return currentImage;
    }
  }

  function previousImage() {
    const preId = currentImage?.index - 1;

    findImageWithId(preId);
    currentImageSet(findImageWithId(preId));
  }

  function nextImage() {
    const nextid = currentImage?.index + 1;

    findImageWithId(nextid);
    currentImageSet(findImageWithId(nextid));
  }

  // TODO: ADD ANIMATIONS AND MAKE THE LOADING STATE PRETTIER (use Loaders)
  return (
    <>
      {currentImage ? (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10 " onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="flex h-[500px] min-h-[500px] w-full max-w-md transform flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-[#121212]"
                    >
                      <span className="mb-auto flex items-center justify-between gap-6 text-sm">
                        <div>
                          Image from:{" "}
                          <span className=" text-[#8390fa]">
                            {currentImage.camera.full_name}
                          </span>
                        </div>
                        <div>
                          Rover Name:{" "}
                          <span className="text-[#e63462]">
                            {currentImage?.rover.name}{" "}
                          </span>
                        </div>
                      </span>
                    </Dialog.Title>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {currentImage && (
                          <img
                            className="rounded-md"
                            src={currentImage.img_src}
                            alt="Clicked Mars Image"
                          />
                        )}
                      </p>
                    </div>

                    <div className="container mt-auto flex items-center justify-center gap-3">
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={previousImage}
                        >
                          Previous
                        </button>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={nextImage}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    <div id="seperator" className="p-4" />
                    <h6 className="text-xs text-green-500">
                      Image Number: {currentImage.index}
                    </h6>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
