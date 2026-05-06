// src/components/HeroSection.jsx

import React, { useRef, useState } from "react";

import heroBg from "../assets/hero/hero-bg.jpeg";

import circle1 from "../assets/hero/circle1.jpeg";
import circle2 from "../assets/hero/circle2.jpeg";
import circle3 from "../assets/hero/circle3.jpeg";

import logoVideo from "../assets/hero/logo-video.mp4";

const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const [muteVideo, setMuteVideo] = useState(true);

  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setPlayVideo(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 300);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;

      setMuteVideo(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* IMAGE / VIDEO BACKGROUND */}

      {!playVideo ? (
        <img
          src={heroBg}
          alt=""
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-[center_20%]
          transition-all
          duration-1000
          "
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-105
          animate-fadeIn
          "
        >
          <source src={logoVideo} type="video/mp4" />
        </video>
      )}

      {/* OVERLAY */}

      <div
        className={`
        absolute
        inset-0
        transition-all
        duration-1000

        ${
          playVideo
            ? "bg-black/45 backdrop-blur-[2px]"
            : "bg-black/20"
        }
        `}
      ></div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 w-full h-full flex items-center justify-between px-6 md:px-16 pt-36">
        
        {/* LEFT CONTENT */}

        <div
          className={`
          max-w-[700px]
          transition-all
          duration-1000

          ${
            playVideo
              ? "opacity-0 translate-y-10"
              : "opacity-100 translate-y-0"
          }
          `}
        >
          <h1
            className="
            text-black
            leading-[0.9]
            font-medium
            text-[3.8rem]
            md:text-[5.8rem]
            max-w-[700px]
            "
          >
            Every place feels
            <br />
            like <span className="text-[#ff4fa3]">home</span> with you
          </h1>

          {/* BUTTONS */}

          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-14">
            
            {/* MEMORY BUTTON */}

           <button
  onClick={() => {
    document
      .getElementById("gallery-section")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
  bg-black
  text-white
  px-14
  h-[92px]
  rounded-[28px]
  text-[28px]
  font-semibold
  hover:scale-105
  transition-all
  duration-300
  "
>
  Relive memories
</button>

            {/* VIDEO BUTTON */}

            <div className="flex items-center gap-5">
              
              <div
                onClick={handlePlayVideo}
                className="
                relative
                w-24
                h-24
                rounded-full
                bg-white/95
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-4xl
                cursor-pointer
                hover:scale-110
                duration-500
                shadow-[0_0_40px_rgba(255,255,255,0.5)]
                "
              >
                ▶
              </div>

              <p className="text-3xl text-black">
                watch our video
              </p>
            </div>
          </div>
        </div>

        {/* FLOATING IMAGES */}

        <div
          className={`
          hidden
          md:block
          relative
          w-[500px]
          h-[500px]
          transition-all
          duration-1000

          ${
            playVideo
              ? "opacity-0 scale-90"
              : "opacity-100 scale-100"
          }
          `}
        >
          {/* TOP */}

          <img
            src={circle1}
            alt=""
            className="
            absolute
            top-0
            right-0
            w-[180px]
            h-[180px]
            rounded-full
            object-cover
            border-[6px]
            border-white
            "
          />

          {/* CENTER */}

          <img
            src={circle2}
            alt=""
            className="
            absolute
            top-[160px]
            left-[30px]
            w-[250px]
            h-[250px]
            rounded-full
            object-cover
            border-[6px]
            border-white
            "
          />

          {/* BOTTOM */}

          <img
            src={circle3}
            alt=""
            className="
            absolute
            bottom-0
            right-0
            w-[170px]
            h-[170px]
            rounded-full
            object-cover
            border-[6px]
            border-white
            "
          />
        </div>
      </div>

      {/* SEARCH BAR */}

     {/* SEARCH BAR */}

<div
  className={`
  hidden
  md:flex
  absolute
  bottom-10
  left-1/2
  -translate-x-1/2
  w-[82%]
  h-[95px]
  bg-white/92
  backdrop-blur-md
  rounded-md
  items-center
  justify-between
  overflow-hidden
  z-20
  transition-all
  duration-1000

  ${
    playVideo
      ? "opacity-0 translate-y-20"
      : "opacity-100 translate-y-0"
  }
  `}
>
  {/* CENTER TEXT */}

  <div className="flex-1 flex items-center justify-center">
    
    <h2
      className="
      typing-text
      text-[42px]
      font-semibold
      tracking-[8px]
      text-black
      "
    >
      HAPPINESS
    </h2>
  </div>

  {/* PLAY BUTTON */}

  <button
    className="
    h-full
    w-[180px]
    bg-[#c9ab57]
    text-white
    text-5xl
    hover:bg-[#b99a45]
    duration-300
    "
  >
    ▶
  </button>
</div>

      {/* SOUND BUTTON */}

      {playVideo && (
        <button
          onClick={toggleMute}
          className="
          absolute
          bottom-10
          right-10
          z-50
          bg-white/20
          backdrop-blur-md
          border
          border-white/20
          text-white
          px-6
          py-4
          rounded-full
          text-xl
          hover:bg-white/30
          duration-300
          "
        >
          {muteVideo ? "🔇" : "🔊"}
        </button>
      )}
    </section>
  );
};

export default HeroSection;