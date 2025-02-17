import Image from "next/image";
import Link from "next/link";
import tokyo from './svg/Tokyo.jpg';
import nirobi from './svg/Nirobi.jpg';
import china from './svg/China.jpg';
import kSA from './svg/KSA.jpg';
import maser from './svg/Cairo.jpg';
import us from './svg/US.jpg';
import uAE from './svg/UAE.jpg';

export default function Distnation() {
  return (
    <div className="my-4 px-4 py-2 w-full">
      <h1 className="font-semibold capitalize text-center text-3xl mb-8">
        Discover Our Top Destinations
      </h1>
      <div id="Distnations" className="my-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article id="dsiCart" className="flex flex-col gap-3 bg-white rounded-lg shadow-lg mx-4 md:mx-0 h-96">
          <Image src={tokyo} alt="Tokyo" className="rounded-t-lg h-48 object-cover" />
          <div className="px-4 flex-grow">
            <h3 className="text-black text-xl font-semibold">Tokyo, Japan</h3>
            <div className="flex justify-between text-sm my-3">
              <p className="font-bold text-lg">$1300 <span className="text-sm font-normal">Starting</span></p>
              <p className="text-lg">5.0</p>
            </div>
          </div>
        </article>
        <article id="dsiCart" className="flex flex-col gap-3 bg-white rounded-lg shadow-lg mx-4 md:mx-0 h-96">
          <Image src={nirobi} alt="Nairobi" className="rounded-t-lg h-48 object-cover" />
          <div className="px-4 flex-grow">
            <h3 className="text-black text-xl font-semibold">Nairobi, Kenya</h3>
            <div className="flex justify-between text-sm my-3">
              <p className="font-bold text-lg">$1200 <span className="text-sm font-normal">Starting</span></p>
              <p className="text-lg">4.8</p>
            </div>
            
          </div>
        </article>
        <article id="dsiCart" className="flex flex-col gap-3 bg-white rounded-lg shadow-lg mx-4 md:mx-0 h-96">
          <Image src={china} alt="China" className="rounded-t-lg h-48 object-cover" />
          <div className="px-4 flex-grow">
            <h3 className="text-black text-xl font-semibold">Beijing, China</h3>
            <div className="flex justify-between text-sm my-3">
              <p className="font-bold text-lg">$1100 <span className="text-sm font-normal">Starting</span></p>
              <p className="text-lg">4.7</p>
            </div>
           
           
          </div>
        </article>
        <article id="dsiCart" className="flex flex-col gap-3 bg-white rounded-lg shadow-lg mx-4 md:mx-0 h-96">
          <Image src={kSA} alt="Saudi Arabia" className="rounded-t-lg h-48 object-cover" />
          <div className="px-4 flex-grow">
            <h3 className="text-black text-xl font-semibold">Riyadh, Saudi Arabia</h3>
            <div className="flex justify-between text-sm my-3">
              <p className="font-bold text-lg">$1400 <span className="text-sm font-normal">Starting</span></p>
              <p className="text-lg">4.9</p>
            </div>
            
          </div>
        </article>
        <article id="dsiCart" className="flex flex-col gap-3 bg-white rounded-lg shadow-lg mx-4 md:mx-0 h-96">
          <Image src={maser} alt="Cairo" className="rounded-t-lg h-48 object-cover" />
          <div className="px-4 flex-grow">
            <h3 className="text-black text-xl font-semibold">Cairo, Egypt</h3>
            <div className="flex justify-between text-sm my-3">
              <p className="font-bold text-lg">$1000 <span className="text-sm font-normal">Starting</span></p>
              <p className="text-lg">4.6</p>
            </div>
           
          </div>
        </article>
        <article id="dsiCart" className="flex flex-col gap-3 bg-white rounded-lg shadow-lg mx-4 md:mx-0 h-96">
          <Image src={us} alt="United States" className="rounded-t-lg h-48 object-cover" />
          <div className="px-4 flex-grow">
            <h3 className="text-black text-xl font-semibold">New York, USA</h3>
            <div className="flex justify-between text-sm my-3">
              <p className="font-bold text-lg">$1500 <span className="text-sm font-normal">Starting</span></p>
              <p className="text-lg">5.0</p>
            </div>
           
          </div>
        </article>
        <article id="dsiCart" className="flex flex-col gap-3 bg-white rounded-lg shadow-lg mx-4 md:mx-0 h-96">
          <Image src={uAE} alt="United Arab Emirates" className="rounded-t-lg h-48 object-cover" />
          <div className="px-4 flex-grow">
            <h3 className="text-black text-xl font-semibold">Dubai, UAE</h3>
            <div className="flex justify-between text-sm my-3">
              <p className="font-bold text-lg">$1600 <span className="text-sm font-normal">Starting</span></p>
              <p className="text-lg">4.9</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
