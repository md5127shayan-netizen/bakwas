import React from "react";



const navItems = [
  {
    title: "Our Story",
    text: "Every love story is beautiful, but ours is my favorite.",
  },

  {
    title: "Our Places",
    text: "From Bombay to Bangalore, every place is special with you.",
  },

  {
    title: "Memories",
    text: "Collecting moments, not things, especially with you.",
  },

  {
    title: "Us",
    text: "Just you, me, and a lifetime of adventures.",
  },

  {
    title: "For You",
    text: "A small token of my endless love for you.",
  },
];

const Navbar = () => {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-[999]
      backdrop-blur-md
      bg-black/45
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-[1600px]
        mx-auto
        px-8
        h-[110px]
        flex
        items-center
        justify-between
        "
      >
        {/* LOGO VIDEO */}

        <video
  autoPlay
  muted
  loop
  playsInline
  className="
    w-[140px]
    h-[78px]
    object-cover
    rounded-[18px]
    border
    border-[#c9ab57]
    shadow-[0_0_25px_rgba(201,171,87,0.35)]
  "
>
  <source src="/logo-video.mp4" type="video/mp4" />
</video>

        {/* CENTER NAV */}

        <div className="flex items-center gap-16">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="
              relative
              group
              flex
              flex-col
              items-center
              "
            >
              {/* NAV TEXT */}

              <button
                className="
                relative
                text-white
                text-[20px]
                font-medium
                transition-all
                duration-300
                hover:text-[#d4b257]
                "
              >
                {item.title}

                {/* UNDERLINE EFFECT */}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  w-0
                  bg-[#d4b257]
                  transition-all
                  duration-300
                  group-hover:w-full
                  "
                ></span>
              </button>

              {/* HOVER DROPDOWN */}

              <div
                className="
                absolute
                top-[52px]
                opacity-0
                invisible
                group-hover:opacity-100
                group-hover:visible
                translate-y-3
                group-hover:translate-y-0
                transition-all
                duration-300
                "
              >
                <div
                  className="
                  bg-[#0b0b0b]
                  border
                  border-[#c9ab57]/30
                  rounded-[16px]
                  px-5
                  py-4
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                  whitespace-nowrap
                  "
                >
                  <p
                    className="
                    text-[#e5e5e5]
                    text-[14px]
                    font-light
                    tracking-wide
                    text-center
                    "
                  >
                    {item.text}
                  </p>

                  {/* SMALL GOLD LINE */}

                  <div
                    className="
                    w-10
                    h-[2px]
                    bg-[#c9ab57]
                    mx-auto
                    mt-3
                    rounded-full
                    "
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTONS */}

        <div className="flex items-center gap-7">
          <button
            className="
            text-white
            text-[20px]
            hover:text-[#d4b257]
            transition-all
            duration-300
            "
          >
            Log In
          </button>

          <button
            className="
            bg-white
            text-black
            px-8
            py-4
            rounded-[18px]
            text-[20px]
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;