import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

export default function Avatar({ imageUrl, className }) {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial entrance animation
      gsap.fromTo(
        ".avatar",
        { opacity: 0, scale: 1.4 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power3.inOut",
        }
      );

      // Mouse move tilt + highlight animation
      window.onmousemove = (e) => {
        if (!component.current) return;

        const rect = component.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;

        const percentX = (e.clientX - centerX) / rect.width / 2;
        const distFromCenterX = 1 - Math.abs(percentX);

        gsap
          .timeline({
            defaults: {
              duration: 0.5,
              overwrite: "auto",
              ease: "power3.out",
            },
          })
          .to(".avatar", {
            rotation: gsap.utils.clamp(-2, 2, 5 * percentX),
          })
          .to(
            ".highlight",
            {
              opacity: distFromCenterX - 0.7,
              x: -10 + 20 * percentX,
            },
            0
          );
      };
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div
        className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
        style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
      >
        <img
          src={imageUrl}
          alt="trust"
          className="avatar-image h-full w-full object-fill"
        />

        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}
