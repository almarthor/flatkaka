"use client";

const HeroImg = () => {
  return (
    <div className="opacity-95 z-40">
      <img
        className="sm:h-fit h-[500px] w-full overflow-hidden object-cover"
        src="/bru.jpg"
        alt="hero"
      />
    </div>
  );
};

export default HeroImg;
