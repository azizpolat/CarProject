import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
  return (
    <div>
      <Link className="text-blue-500" href="/home">
        Anasayfa
      </Link>{" "}
      / <span>Arabalar</span> / <span></span>
    </div>
  );
};

export default BreadCrumb;
