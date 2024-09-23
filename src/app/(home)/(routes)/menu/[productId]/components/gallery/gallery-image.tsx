import Image from "next/image";

interface GalleryImageProps {
  url: string;
}

export const GalleryImage = ({ url }: GalleryImageProps) => {
  return (
    <div className="relative aspect-square size-full overflow-hidden sm:rounded-lg">
      <Image src={url} alt="Product Image" fill />
    </div>
  );
};
