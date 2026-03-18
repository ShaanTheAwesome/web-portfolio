import React, { useEffect, useState } from "react";
import { mcBox } from "./Minecraft";
import stone from "../assets/stone.jpg";

interface MinecraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function MinecraftModal({
  isOpen,
  onClose,
  title,
  children,
}: MinecraftModalProps) {

  const [render, setRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
      setTimeout(() => setRender(false), 300);
    }
  }, [isOpen])

  if (!render) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      
      {/* OUTER LAYER */}
      <div className={`relative w-[80%] max-h-[80vh]
                      font-[Minecraft]
                      outline-4 outline-black rounded-md
                      border-4 border-[#ffffff] shadow-2xl
                      bg-[#C6C6C6] 
                      transform transition-all duration-500 ease-out
                      ${animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>

        {/* Pixel X Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-6 h-6 bg-[#8b8b8b] 
                     outline-2 outline-[#4f4f4f] 
                     border-2 border-[#b3b3b3] border-b-3 border-b-[#7a7a7a]
                     hover:border-[#ffa0a0] hover:border-b-[#a54242]
                     shadow-[3px_3px_0px_#4C4C4C]/30
                     text-black font-bold flex items-center justify-center rounded-xs
                     hover:bg-red-600 hover:text-white active:translate-y-[1px] hover:cursor-pointer"
        >
          ✕
        </button>

        {/* Optional Title */}
        {title && (
          <div className="px-4 py-2 rounded-md border-b-2 border-[#8b8b8b] text-[1.4rem] text-black text-shadow-lg/15">
            {title}
          </div>
        )}

        {/* INNER LAYER 2e2e2e 4f4f4f*/}
        <div className="relative m-4 p-4 border-2 border-[#1a1a1a] text-[1.1rem]
                      text-white overflow-y-auto max-h-[55vh]
                      text-shadow-black text-shadow-lg/30
                      bg-[length:75%]"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${stone})`,
                     backgroundSize: "75"}}>

            {/* Dark overlay */}
            <div className="flex  inset-0 bg-black/40 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              {children}
            </div>

        </div>

        {/* Bottom Button Section */}
        <div className="p-4 flex justify-center">
          <button
            onClick={onClose}
            className={`${mcBox} px-6 py-2 bg-[#8b8b8b] 
                       text-white text-shadow-black text-shadow-lg/40 
                       hover:bg-[#a0a0a0] 
                       active:translate-y-[1px]
                       hover:cursor-pointer`}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}