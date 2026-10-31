import React from 'react'

export default function Home() {
  return (
    <>
     {/* Section 1 - Hero */}
      <section className="bg-blue-100 py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to My Website
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Learn, explore and build amazing things
            with React and Tailwind CSS.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Section 2 - Features */}
      <section className="py-20 px-8 bg-gray-50 flex-grow">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">
                Easy Learning
              </h3>
              <p className="text-gray-600">
                Learn new skills with simple and easy
                learning methods.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">
                Modern Design
              </h3>
              <p className="text-gray-600">
                Create beautiful and modern websites
                using Tailwind CSS.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">
                Responsive Layout
              </h3>
              <p className="text-gray-600">
                Build websites that work perfectly
                on mobile, tablet and desktop.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
