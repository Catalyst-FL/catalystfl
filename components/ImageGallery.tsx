'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className="group relative h-48 md:h-56 overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow bg-gray-100"
            onClick={() => setSelectedImage(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {image.title && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </div>
            {images[selectedImage].title && (
              <p className="mt-4 text-white text-center text-lg">
                {images[selectedImage].title}
              </p>
            )}
            <div className="mt-4 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
              >
                Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
