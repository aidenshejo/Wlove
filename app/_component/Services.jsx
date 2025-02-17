'use client'

export default function Services() {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Our Customer Services</h2>
      <div className="flex flex-col gap-8 md:flex-row md:justify-center">
        <article className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Flight Tickets</h3>
          <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vel provident.</p>
          <a href="tel:+211926000224" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 inline-block text-center">Contact</a>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Visa Assistance</h3>
          <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vel provident.</p>
          <a href="tel:+211926000224" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 inline-block text-center">Contact</a>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Travel Insurance</h3>
          <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vel provident.</p>
          <a href="tel:+211926000224" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 inline-block text-center">Contact</a>
        </article>
      </div>
    </div>
  )
}
