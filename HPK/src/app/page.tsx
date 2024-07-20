"use client";
import TopNav from "./Components/NavBar/TopNav";
import HeroScreen from "./Components/Hero/Hero";
import ActiveSlider from "./Components/Slider/ActiveSlider";
import UmOkkur from "./Components/UmOkkur/UmOkkur";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <TopNav />
      <div className="relative h-screen">
        <HeroScreen />
        <div className="absolute inset-x-0 top-40 sm:top-60">
          <ActiveSlider />
          <div className="flex justify-center mt-4 sm:hidden">
            <Link
              href={"/vorur"}
              className="bg-white text-center border-2 border-red-500 text-xl rounded-md p-2"
            >
              Allar Vörur
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <UmOkkur />
      </div>
    </div>
  );
}
