import React, { useEffect, useState } from "react";
import BannerImage from "../../Image/WhatsApp_Image_2026-03-01_at_22.09.07-removebg-preview.png";

export default function Banner() {

 const [seconds, setSeconds] = useState(10800);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const second = seconds % 60;
  return (
    <section className="bg-zinc-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Text Section */}
          <div className="text-center md:text-left">

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-red-600 uppercase tracking-tight">
              Big Sale!
            </h1>

            <h2 className="text-zinc-700 text-lg sm:text-2xl mt-3">
              Up to 50% OFF – Limited Time Only!
            </h2>

            {/* Countdown */}
            <div className="flex justify-center md:justify-start items-center gap-3 mt-6 text-2xl sm:text-4xl font-bold">
              <span className="bg-zinc-800 text-white px-4 py-2 rounded-md">{hour}</span>
              <span>:</span>
              <span className="bg-zinc-800 text-white px-4 py-2 rounded-md">{minute}</span>
              <span>:</span>
              <span className="bg-zinc-800 text-white px-4 py-2 rounded-md">{second}</span>
            </div>

          </div>

          {/* Image Section */}
          <div className="w-full md:w-[450px]">
            <img
              src={BannerImage}
              alt="Sale Banner"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}