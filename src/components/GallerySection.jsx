import React, { useState } from "react";

import galleryData from "../data/galleryData";

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  const gallery = galleryData[current];

  const nextGallery = () => {
    setCurrent((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  const prevGallery = () => {
    setCurrent((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="gallery-section"
      className="w-full bg-black py-28 overflow-hidden"
    >
      <div className="max-w-[1650px] mx-auto px-8">
        
        {/* TOP */}
        <div className="flex items-center gap-10 mb-24">
          
          <h2
            className="
            text-[#c9ab57]
            text-[5rem]
            leading-none
            font-medium
            whitespace-nowrap
            "
          >
            {gallery.city}
          </h2>

          <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
        </div>

        {/* GALLERY */}
        <div className="relative grid grid-cols-[42%_58%] gap-10 items-center">
          
          {/* LEFT BUTTON */}
          <button
            onClick={prevGallery}
            className="
            absolute
            left-[-30px]
            top-1/2
            -translate-y-1/2
            z-30
            w-28
            h-28
            rounded-full
            bg-[#c9ab57]
            text-black
            text-5xl
            shadow-2xl
            hover:scale-110
            transition-all
            duration-300
            "
          >
            ◀
          </button>

          {/* MAIN IMAGE */}
          <div className="relative">
            
            <img
              src={gallery.main}
              alt=""
              className="
              w-full
              h-[760px]
              object-cover
              rounded-[34px]
              transition-all
              duration-500
              hover:scale-[1.02]
              "
            />

            {/* BOTTOM WORD */}
            <div
              className="
              absolute
              bottom-[-24px]
              left-1/2
              -translate-x-1/2
              flex
              items-center
              gap-16
              "
            >
              <span className="text-[#c9ab57] text-5xl">
                ◀
              </span>

              <h3
                style={{ color: gallery.color }}
                className="
                text-[5rem]
                leading-none
                font-medium
                "
              >
                {gallery.word}
              </h3>

              <span className="text-[#c9ab57] text-5xl">
                ▶
              </span>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-8">
            
            {gallery.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="
                w-full
                h-[360px]
                object-cover
                rounded-[26px]
                transition-all
                duration-500
                hover:scale-[1.04]
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
                cursor-pointer
                "
              />
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextGallery}
            className="
            absolute
            right-[-30px]
            top-1/2
            -translate-y-1/2
            z-30
            w-28
            h-28
            rounded-full
            bg-[#c9ab57]
            text-black
            text-5xl
            shadow-2xl
            hover:scale-110
            transition-all
            duration-300
            "
          >
            ▶
          </button>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-28 border-t-2 border-dashed border-gray-400"></div>
      </div>
    </section>
  );
};

export default GallerySection;