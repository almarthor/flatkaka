"use client";
import { useSearchParams } from "next/navigation";
import TopNav from "./Components/NavBar/TopNav";
import HeroScreen from "./Components/Hero/Hero";
import ActiveSlider from "./Components/Slider/ActiveSlider";
import UmOkkur from "./Components/UmOkkur/UmOkkur";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <TopNav />
      <div className="sticky top-0 h-screen">
        <div className="">
          <HeroScreen />
        </div>
        <div className="inset-0 absolute top-40 sm:top-60">
          <ActiveSlider />
          <div className="flex justify-center mt-4 sm:hidden">
            <Link
              href={"/vorur"}
              className="bg-white text-center border-2 border-red-500 text-xl rounded-md p-1"
            >
              Allar Vörur
            </Link>
          </div>
        </div>
      </div>
      <div>
        <UmOkkur />
      </div>
    </div>
  );
}
