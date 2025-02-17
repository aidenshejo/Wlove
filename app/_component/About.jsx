import Image from "next/image"
import manger from './Manger.jpg'

export default function About() {
  return (
    <div className="p-4 md:grid md:grid-cols-2 bg-slate-900 text-white">
      <div className="p-4">
        <h2 className="font-semibold text-2xl md:text-3xl mb-4">About Us</h2>
        <p className="font-light text-sm md:text-lg mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero neque enim porro perferendis eligendi at voluptates perspiciatis maxime magni officia iure, rerum incidunt asperiores totam nobis dolor obcaecati? Nesciunt, nihil?
        </p>
      </div>
      <div className="md:shadow-xl">
        <div className="bg-blue-950 text-white pb-4 relative">
          <div className="relative">
            <Image src={manger} alt="Manager Image" className="w-full rounded-t-lg" />
            <div className="pl-4 absolute bottom-[-2rem] bg-blue-950 bg-opacity-75 p-2 rounded-lg">
              <h2 className="text-xl font-semibold">CEO</h2>
              <p className="text-2xl uppercase font-bold">Wale <br /> Abraham</p>
            </div>
          </div>
          <div className="p-4 mt-8 text-sm">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis provident cupiditate, saepe veritatis, aut aliquid quod ut inventore harum accusamus reiciendis, rerum odio quos aperiam omnis perferendis sint ad natus.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
