import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  // yonlendirme  yapmak için
  redirect("/home");
  return <div>Home</div>;
};

export default Home;
