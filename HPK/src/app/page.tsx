"use client";

import TopNav from "./Components/NavBar/TopNav";
import HeroScreen from "./Components/Hero/Hero";
import ActiveSlider from "./Components/Slider/ActiveSlider";
import UmOkkur from "./Components/UmOkkur/UmOkkur";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <TopNav />
      <div className="sticky top-0 h-[800px] sm:h-screen">
        <HeroScreen />
        <div className=" inset-0 absolute top-40 sm:top-60">
          <ActiveSlider />
        </div>
      </div>
      <div>
        <UmOkkur />
      </div>
    </div>
  );
}
