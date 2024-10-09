import { models } from "@/app/contants";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] grid place-items-center bg-[linear-gradient(#00000084,#00000084),url('./assets/images/car-bg.jpg')] bg-center bg-cover  text-white">
      <div className="text-center flex flex-col gap-8">
        <p>Yakınınızdaki Kiralık Araçları Kesfet</p>
        <h1 className="text-4xl md:text-5xl font-bold">Kendin İçin Aracı Bul</h1>
        <p>Kendine Uygun Modeli Bul</p>

        <div className="flex justify-center gap-4 flex-wrap">
          {models.map((item) => (
            <button className="px-3 py-1 rounded-full flex gap-2 items-center bg-gray-100/25 hover:bg-gray-500">
              <Image src={item.icon} alt="car-icon" />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
