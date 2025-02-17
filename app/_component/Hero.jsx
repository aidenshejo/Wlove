'use client'
import Image from "next/image"
import mypic from "./svg/CC.jpg"

export default function Hero() {
  return (
    <div className="relative h-[100vh] md:w-full md:h-[80vh] overflow-hidden mb-4 flex flex-col-reverse pb-4 items-center content-center pt-4 md:justify-around md:items-center md:flex-row">
      <div className="text-white font-semibold z-10 md:w-1/2 md:text-left text-center flex flex-col items-center md:items-start justify-center h-full md:h-auto">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl w-[300px] md:w-[400px]">Discover your Dream Destination with <span>WLoveTravel</span></h1>
        <button className="bg-green-500 px-4 py-2 rounded-lg my-4 border-transparent text-lg md:text-xl font-light">Subscribe</button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <Image src={mypic} alt="hero img" layout="fill" objectFit="cover" quality={100} priority />
      </div>
    </div>
  )
}