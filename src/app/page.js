"use client";
import { useState } from "react";

import Navigation from "@/components/Navigation";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import ChangeCTA from "@/components/ChangeCTA";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import WatchColorType from "@/components/WatchColorType";

import Image from "next/image";
import navy from "../images/navy.png";
import mint from "../images/mint.png";
import peach from "../images/peach.png";
import Accordion from "@/components/Accordion";

export default function Home() {
  const [currentWatchColor, setcurrentWatchColor] = useState(navy);

  return (
    <div className="bg-gradient-to-br from-[#C8DCE5] from-0% to-[#B6CCDA] to-100% px-[8rem] py-[2rem] text-white h-[100%] w-[100svw]">
      <header className="flex justify-between  items-center">
        <a href="#">
          <FaApple className="h-[50px] w-[50px]" />
        </a>
        <Navigation />
        <div className="flex gap-[20px] items-center">
          <CiSearch className="h-[24px] w-[24px] cursor-pointer" />
          <div className="border-l-[1px] h-[22px]"></div>
          <FiShoppingBag className="h-[24px] w-[24px] stroke-1 cursor-pointer" />
        </div>
      </header>

      <main className="grid auto-cols-auto pt-16">
        <h1 className="text-[64px] leading-tight w-[16ch] self-center py-20">
          <span className="font-bold">The Perfect Moment</span> Between Past And Future.
        </h1>

        <Image src={currentWatchColor} alt="navy apple watch" className="col-start-2 row-span-2 w-[400]" />
        <div className="col-start-3 self-center row-span-2 flex flex-col items-center gap-1">
          {currentWatchColor === navy ? <ChangeCTA bg_color="bg-[#434558]" active="h-[26px] w-[26px] border-[2px] m-[2.5px] drop-shadow-md" currentWatchColor={navy} setcurrentWatchColor={setcurrentWatchColor} /> : <ChangeCTA bg_color="bg-[#434558]" currentWatchColor={navy} setcurrentWatchColor={setcurrentWatchColor} />}
          <div className="border-l-[2px] border-dotted h-[18px] border-white"></div>
          {currentWatchColor === mint ? <ChangeCTA bg_color="bg-[#6addcc]" active="h-[26px] w-[26px] border-[2px] m-[2.5px] drop-shadow-md" currentWatchColor={mint} setcurrentWatchColor={setcurrentWatchColor} /> : <ChangeCTA bg_color="bg-[#6addcc]" currentWatchColor={mint} setcurrentWatchColor={setcurrentWatchColor} />}
          <div className="border-l-[2px] border-dotted h-[18px] border-white"></div>
          {currentWatchColor === peach ? <ChangeCTA bg_color="bg-[#f9cdc4]" active="h-[26px] w-[26px] border-[2px] m-[2.5px] drop-shadow-md" currentWatchColor={peach} setcurrentWatchColor={setcurrentWatchColor} /> : <ChangeCTA bg_color="bg-[#f9cdc4]" currentWatchColor={peach} setcurrentWatchColor={setcurrentWatchColor} />}
        </div>
        <button className="text-[24px] px-[60px] py-[10px] rounded-full border-2 border-white place-self-start hover:bg-white hover:text-[#B6CCDA] font-medium">Buy Now</button>
        <div className="flex gap-[16px] items-center self-end pb-8">
          <button>
            <HiMiniArrowLongLeft />
          </button>
          <span>1</span>
          <button>
            <HiMiniArrowLongLeft className="scale-x-[-1]" />
          </button>
        </div>
        <div className="flex gap-6 place-self-end">
          <WatchColorType image_src={navy} setcurrentWatchColor={setcurrentWatchColor} image_alt="navy watch" watch_color="bg-[#434558]" />
          <WatchColorType image_src={mint} setcurrentWatchColor={setcurrentWatchColor} image_alt="mint watch" watch_color="bg-[#6addcc]" />
          <WatchColorType image_src={peach} setcurrentWatchColor={setcurrentWatchColor} image_alt="peach watch" watch_color="bg-[#f9cdc4]" />
        </div>
        <Accordion />
      </main>
    </div>
  );
}
