"use client";
import Image from "next/image";
import classNames from "classnames";

type Props = {
  artwork: {
    filename: string;
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
  };
  onClick: () => void;
  className?: string;
};

function GalleryThumbnail({ artwork, onClick, className }: Props) {
  const classes = classNames(
    "mb-[1rem] cursor-pointer hover:opacity-60 transition-opacity duration-300",
    className,
  );
  return (
    <Image
      key={artwork.filename}
      src={`/assets/art/${artwork.filename}`}
      width={artwork.dimensions.width}
      height={artwork.dimensions.height}
      alt={artwork.alt}
      className={classes}
      onClick={onClick}
    />
  );
}

export default GalleryThumbnail;
