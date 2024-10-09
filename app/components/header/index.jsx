import Container from "@/app/contaiener";
import Link from "next/link";
import React from "react";

const Header = ({ designs }) => {
  return (
    <header className={`w-full ${designs}`}>
      <Container designs="flex justify-between items-center w-full">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link href="/home">DRIVE</Link>
        </h1>

        <nav className="text-sm md:text-base flex gap-2 md:gap-4">
          <Link href="/home">Kesfet</Link>
          <Link href="/orders">Siparişler</Link>
          <Link href="/home">Hakkımızda</Link>
          <Link href="/home" className="max-md:hidden">
            Fiyatlandırma
          </Link>
        </nav>

        <div className="flex gap-2">
          <button className="max-md:hidden">İletişim</button>
          <button className="bg-blue-400 text-black rounded-full px-5 py-2 text-nowrap transition hover:bg-gray-300">
            Kaydol
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
