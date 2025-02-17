import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-8 px-4 md:px-8 lg:px-16 mt-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-lg mb-2">Information</h2>
            <ul>
              <li className="mb-1"><Link href='/' className="hover:text-green-500">Home</Link></li>
              <li className="mb-1"><Link href='/blog' className="hover:text-green-500">Blog</Link></li>
              <li className="mb-1"><Link href='/about' className="hover:text-green-500">About</Link></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="mb-1">Juba Market / Town</p>
            <p className="mb-1">+211926000224</p>
            <p className="mb-1">+211910088823</p>
          </div>
        </div>
        <div id="fot" className="flex flex-col md:flex-row justify-between mt-4 border-t border-gray-700 pt-4">
          <p className="mb-2 md:mb-0">Privacy & Policy</p>
          <p className="mb-2 md:mb-0">© 2025/2026</p>
        </div>
      </div>
    </div>
  )
}
