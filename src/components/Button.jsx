import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

export default function Button({ href, label, showIcon = true, className }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-900 transition-transform ease-out hover:scale-105",
        className
      )}
    >
      {/* Yellow sliding hover background */}
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
      
      {/* Text + arrow icon */}
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </a>
  );
}
