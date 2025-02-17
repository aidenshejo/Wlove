import Link from 'next/link';



export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Travel Guides and Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
         
          <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">How to Travel to Europe</h2>
          <p className="text-gray-700 mb-4">Planning to travel to Europe, there are specific requirements and steps you need to follow.</p>
          <Link href="./traveltoeurope">
            Read More
          </Link>
        </article>
        <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
         
          <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">How to Travel to the USA</h2>
          <p className="text-gray-700 mb-4">Traveling to the United States as a South Sudanese citizen is an exciting opportunity, but it requires careful planning and preparation.</p>
          <Link href="./traveltousa">
           Read More
          </Link>
        </article>
        <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
         
          <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">The Best Airline Guide</h2>
          <p className="text-gray-700 mb-4">How to Choose the Perfect Airline for Your Next Trip.</p>
          <Link href="./thebestairline">
            Read More
          </Link>
        </article>
      </div>
    </div>
  );
}
