"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import GalleryThumbnail from "@/app/components/GalleryThumbnail";
import { useMounted } from "@/app/providers/ThemeProvider";

type ImageMetadata = {
  filename: string;
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
};

type Props = {
  images: ImageMetadata[];
};

function Gallery({ images }: Props) {
  const mounted = useMounted();
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(
    null,
  );
  const portal = mounted
    ? (document.getElementById("portal-root") as HTMLDivElement | null)
    : null;

  const openGallery = (image: ImageMetadata) => {
    setSelectedImage(image);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    //prevent scrolling when nav is open
    if (selectedImage)
      document.body.classList.add("overflow-y-hidden", "h-screen");
    else document.body.classList.remove("overflow-y-hidden", "h-screen");
  }, [selectedImage]);

  return (
    <>
      <div className="columns-xs gap-[1rem] col-span-full">
        {images.map((image) => (
          <GalleryThumbnail
            key={image.filename}
            artwork={image}
            onClick={() => openGallery(image)}
          />
        ))}
      </div>
      {mounted && selectedImage && portal
        ? createPortal(
            <div
              className="absolute z-50 top-0 h-screen w-screen bg-black/50 backdrop-blur-sm"
              onClick={() => closeGallery()}
            ></div>,
            portal,
          )
        : null}
    </>
  );
}

export default Gallery;
