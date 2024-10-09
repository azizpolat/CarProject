import Image from "next/image";
import React from "react";

const OrderBox = () => {
  return (
    <div className="border  shadow rounded-md p-5 max-xl:mt-10 w-full xl:col-span-2">
      <div className="flex gap-5">
        {/* <Image src={pp} alt="profile" /> */}
        <div className="text-lg">
          <h2 className="font-semibold">Polat Galeri</h2>
          <p>İstanbul , Beylikdzuzu</p>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <div>
          {/* <Image src={loc} alt="loc" /> */}
          <span>Locasyonu Gör</span>
        </div>
        <div>
          {/* <Image src={tel} alt="tel" /> */}
          <span>507 455 55 33</span>
        </div>
      </div>
      <button></button>
    </div>
  );
};

export default OrderBox;
