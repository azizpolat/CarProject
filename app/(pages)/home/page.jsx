import Header from "@/app/components/header";
import React from "react";
import Hero from "../../components/hero";
import List from "@/app/components/list";
import Brands from "@/app/components/brands";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <List />
      Anasayfa
    </div>
  );
};

export default Home;
