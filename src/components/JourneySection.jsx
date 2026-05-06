// src/components/JourneySection.jsx

import React from "react";

import circle1 from "../assets/journey/journey1.jpeg";
import circle2 from "../assets/journey/journey2.jpeg";
import circle3 from "../assets/journey/journey3.jpeg";

const cards = [
  {
    image: circle1,

    title: "Bombay",

    text: "Bombay is called the city of dreams, but for me, it’s where we fell deeper—where I realized how crazy someone can get just for one glimpse of you. ❤️",
  },

  {
    image: circle2,

    title: "Pondi",

    text: "Pondi, our first trip together—filled with beautiful memories, beaches, and waves. But nothing matched your beauty; I could spend all day just admiring you. ❤️",
  },

  {
    image: circle3,

    title: "Ranchi",

    text: "Ranchi, our city—my home and my heart together. Pure happiness, like a lottery. You looked stunning; I paused the moment I saw you in that dress. ❤️",
  },
];

const JourneySection = () => {
  return (
    <section className="w-full bg-black text-white py-24 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-14">
          
          {/* LEFT SIDE */}

          <div className="relative flex gap-8">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                w-[240px]
                flex-shrink-0
                transition-all
                duration-500
                hover:scale-[1.06]
                hover:-translate-y-3
                hover:z-20
                cursor-pointer
                "
              >
                {/* IMAGE */}

                <img
                  src={card.image}
                  alt=""
                  className={`
                  w-full
                  h-[470px]
                  rounded-[24px]
                  object-cover
                  transition-all
                  duration-500
                  hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]

                  ${
                    index === 2
                      ? "object-[72%_center]"
                      : "object-center"
                  }
                  `}
                />

                {/* TITLE */}

                <div className="flex items-center justify-between mt-5">
                  
                  <h3 className="text-[28px] font-medium">
                    {card.title}
                  </h3>

                  <span className="text-red-500 text-lg">
                    ❤️❤️❤️❤️❤️
                  </span>
                </div>

                {/* LINE */}

                <div className="h-[2px] bg-white w-full mt-4 mb-5"></div>

                {/* TEXT */}

                <p className="text-[16px] leading-[1.35] text-gray-200">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}

          <div className="relative pt-6">
            
            {/* HEADING */}

            <h2 className="text-[78px] leading-none font-medium mb-10">
              Our Journey
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
              text-[22px]
              leading-[1.28]
              text-gray-100
              max-w-[600px]
              "
            >
              The moment I saw you, I felt something different.
              You carried confidence and beauty so effortlessly.
              Our first meeting, with your favorite food, made
              my day. I still remember ordering watermelon
              juice—awkward, but you never made me feel that
              way. I think I fell for you right then.

              <br />
              <br />

              As I know you more, I see your strengths, flaws,
              courage, and everything in between. I feel lucky,
              grateful, and truly happy that you share yourself
              with me. I promise to always be there for you. ❤️
            </p>

            {/* STATS */}

            <div className="mt-14 space-y-4">
              
              <h3 className="text-[60px] leading-none">
                3 trips together
              </h3>

              <h3 className="text-[60px] leading-none">
                100+ memories
              </h3>

              <h3 className="text-[60px] leading-none">
                1 fav person❤️
              </h3>
            </div>

            {/* BUTTON */}

            <button
  onClick={() => {
    document
      .getElementById("gallery-section")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
  mt-12
  bg-[#c9ab57]
  text-white
  px-12
  py-5
  rounded-[18px]
  text-[24px]
  font-medium
  hover:scale-105
  transition-all
  duration-300
  "
>
  Relive memories
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;