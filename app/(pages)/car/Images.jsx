import Image from "next/image";

const Images = () => {
  return (
    <div>
      <div className="relative max-md:h-[300px]">
        {/* <Image src={url} fill unoptimized className="object-contain" alt="vehicle" /> */}
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* <Image className="rounded-md" src={Car1} alt="car"/>
        <Image className="rounded-md" src={Car2} alt="car"/>
        <Image className="rounded-md" src={Car3} alt="car"/>
        <Image className="rounded-md" src={Car4} alt="car"/> */}
      </div>
    </div>
  );
};

export default Images;
