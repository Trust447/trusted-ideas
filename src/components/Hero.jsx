import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Bounded from "./Bounded";


const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.7,
          stagger: { each: 0.1, from: "random" },
        }
      );

      tl.fromTo(
        ".job-title",
        { y: 20, opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.1,
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  function splitLetters(text, className) {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={`${className || ""} name-animation name-animation-${i} inline-block opacity-0`}
      >
        {char}
      </span>
    ));
  }

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        {/* <ComputerCanvas /> */}
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,10vw,10rem)] font-extrabold leading-none tracking-tighter"
            aria-label="Trust Ihemebiri"
          >
            <span className="block text-slate-300">
              {splitLetters("Trust", "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {splitLetters("Ihemebiri", "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            Fullstack Developer
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
