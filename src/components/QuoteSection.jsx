import React from "react";

const QuoteSection = () => {
  return (
    <section className="w-full bg-black text-white pb-32 overflow-hidden">
      
      <div className="max-w-[1500px] mx-auto px-8">
        
        {/* HEADING */}
        <div className="flex items-center justify-center gap-8 mb-24">
          
          <div className="w-[280px] border-t-2 border-dashed border-gray-400"></div>

          <h2
            className="
            text-[4.5rem]
            xl:text-[5.2rem]
            whitespace-nowrap
            leading-none
            text-[#c9ab57]
            font-medium
            "
          >
            What You Are To Me
          </h2>

          <div className="w-[280px] border-t-2 border-dashed border-gray-400"></div>
        </div>

        {/* QUOTES */}
        <div className="flex items-center justify-center gap-10">
          
          {/* LEFT CARD */}
          <div
            className="
            bg-[#e8e8e8]
            text-black
            rounded-[30px]
            p-10
            w-[430px]
            h-[420px]
            flex
            items-center
            transition-all
            duration-500
            hover:scale-[1.06]
            hover:-translate-y-3
            hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]
            cursor-pointer
            "
          >
            <p className="text-[28px] leading-[1.08] font-medium">
              When I met you, it was just about knowing each other.
              But somewhere along the way, it became something
              more—I can’t let you go. Without you, I feel
              incomplete.
            </p>
          </div>

          {/* CENTER CARD */}
          <div
            className="
            bg-[#e8e8e8]
            text-black
            rounded-[34px]
            p-10
            w-[540px]
            h-[560px]
            transition-all
            duration-500
            hover:scale-[1.05]
            hover:-translate-y-4
            hover:shadow-[0_0_45px_rgba(255,255,255,0.22)]
            cursor-pointer
            "
          >
            <p className="text-[27px] leading-[1.05] font-medium">
              Every day, I feel incredibly lucky to have found
              you among billions. It feels like fate brought us
              together, and I still can’t believe how perfect
              you are for me.
              <br />
              <br />
              You fill my life with joy, warmth, and love, and
              every moment with you means everything. Your smile
              brightens my days, and the way you understand me
              makes me feel truly loved.
              <br />
              <br />
              Being with you feels like a dream, and I’m grateful
              for you every day. I want to spend forever with
              you, creating more beautiful memories together.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
            bg-[#e8e8e8]
            text-black
            rounded-[30px]
            p-10
            w-[430px]
            h-[420px]
            flex
            items-center
            transition-all
            duration-500
            hover:scale-[1.06]
            hover:-translate-y-3
            hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]
            cursor-pointer
            "
          >
            <p className="text-[28px] leading-[1.08] font-medium">
              From the moment I met you, my life changed.
              You brought love, happiness, and peace into my
              world.
              <br />
              <br />
              Every moment with you feels like a dream I never
              want to end. You are my heart and my reason to
              smile.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;