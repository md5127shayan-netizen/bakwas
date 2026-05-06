import React from "react";

const FooterQuote = () => {
  return (
    <footer className="w-full bg-black py-24 overflow-hidden">
      
      <div className="max-w-[1800px] mx-auto px-8">
        
        <div
          className="
          flex
          items-center
          justify-center
          text-center
          "
        >
          <h2
            className="
            text-white
            text-[5.5rem]
            leading-none
            font-medium
            tracking-tight
            "
          >
            “And this is just the beginning of our forever...”
          </h2>

          <span className="text-[5rem] ml-8">
            ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterQuote;