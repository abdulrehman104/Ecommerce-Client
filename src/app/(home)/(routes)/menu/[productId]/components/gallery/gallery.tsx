import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryImage } from "./gallery-image";

interface GalleryProps {
  images: {
    url: string;
  }[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <Tabs defaultValue={images[0].url} className="w-full">
      {images.map((tab) => (
        <TabsContent key={tab.url} value={tab.url.toString()}>
          <GalleryImage url={tab.url} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
