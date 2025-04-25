import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/lovable-uploads/c5324047-0d63-4f51-a4a2-da2dd91fb2f0.png",
    "/lovable-uploads/62675075-028e-4985-818a-5638c1e818d7.png",
    "/lovable-uploads/3b12edcf-7acd-4094-b81f-3dca9093c0ea.png",
    "/lovable-uploads/3757a259-fc09-49d0-9329-9dd771c6e297.png",
    "/lovable-uploads/d9189641-36ac-40d4-8aaf-5c498b80c90a.png",
    "/lovable-uploads/386f8bd6-cbba-4fb5-b029-a5a9791247f2.png",
    "/lovable-uploads/a3600530-dcbc-47c5-abbc-680cee681ea8.png",
    "/lovable-uploads/1fd50869-98af-4d30-af1f-dc922c226f9e.png",
    "/lovable-uploads/491b7dab-4f9f-4985-9fb7-bad287c5eb8e.png",
    "/lovable-uploads/a56df341-0874-4aef-a87f-e600f14d0e0a.png",
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Galerija
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Video</h3>
          <div className="w-full max-w-4xl mx-auto">
            <AspectRatio ratio={16/9}>
              <iframe
                src="https://www.youtube.com/embed/-WhasbY9uiE"
                title="Boksa video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">Attēli</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105 bg-gray-800"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Cīņas attēls ${index + 1}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black border-none">
          <DialogTitle className="text-white">Attēla priekšskatījums</DialogTitle>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Izvēlētais attēls"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
