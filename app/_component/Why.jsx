import React from 'react'

export default function Why() {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Why Choose Us?</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Best Price Guarantee</h2>
            <p>We offer the best prices for our customers</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">24/7 Customer Support</h2>
            <p>Our customer support is available 24/7</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Fast Booking</h2>
            <p>Our booking process is fast and easy</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Exclusive Deals</h2>
            <p>Enjoy access to special discounts</p>
          </div>
        </div>
      </div>
    </div>
  )
}
