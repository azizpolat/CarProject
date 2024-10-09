import Container from "@/app/contaiener";
import { brands } from "@/app/contants";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <Container>
      <h1>Premium Marklarımızı Keşfedin</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5">
        {brands.map((item) => (
          <div className="bg-white shadow rounded-lg flex flex-col items-center p-3 cursor-pointer transition hover:shadow-lg">
            <Image width={70} height={70} src={item.icon} alt={item.name} />

            <h4 className="text-center">{item.name}</h4>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Brands;
