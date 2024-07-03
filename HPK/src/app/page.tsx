"use client";

import TopNav from "./Components/NavBar/TopNav";
import HeroScreen from "./Components/Hero/Hero";
import ActiveSlider from "./Components/Slider/ActiveSlider";
import UmOkkur from "./Components/UmOkkur/UmOkkur";

export default function Home() {
  return (
    <div>
      <TopNav />
      <div className="sticky top-0 h-[800px]">
        <HeroScreen />
        <div className=" inset-0 absolute top-60 sm:top-80">
          <ActiveSlider />
        </div>
      </div>
      <div>
        <UmOkkur />
      </div>
    </div>
  );
}
