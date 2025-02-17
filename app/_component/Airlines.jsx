
import Emirates from "./svg/emirates.svg";
import Ethiopian from "./svg/ethiopian.svg";
import Flydubai from "./svg/flydubai.svg";
import Egyptair from "./svg/egyptair.svg";
import Uganda from "./svg/uganda.svg";
import Badr from "./svg/badr.svg";

export default function Airlines() {
  return (
    <div className="px-4 relative overflow-hidden w-full">
      <h1 className="text-center font-semibold text-2xl mb-6">Our Top Airlines Companies</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 w-full p-2">
        <div className="flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 p-2">
          <Emirates className="shadow-xl w-24 h-24" />
        </div>
        <div className="flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 p-2">
          <Ethiopian className="shadow-xl w-24 h-24" />
        </div>
        <div className="flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 p-2">
          <Flydubai className="shadow-xl w-24 h-24" />
        </div>
        <div className="flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 p-2">
          <Egyptair className="shadow-xl w-24 h-24" />
        </div>
        <div className="flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 p-2">
          <Uganda className="shadow-xl w-24 h-24" />
        </div>
        <div className="flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 p-2">
          <Badr className="shadow-xl w-24 h-24" />
        </div>
      </div>
    </div>
  );
}
