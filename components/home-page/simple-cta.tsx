import React from 'react';

// You can replace these with your actual image URLs
const avatarImages = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80',
  'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
];

// Star Icon Component
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

// Arrow Icon Component
const ArrowRightIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2.5} 
        stroke="currentColor" 
        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


export default function CtaSectionSimple() {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-6 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Dream <br />
              <span className="text-purple-600">Career Abroad</span> Today.
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Join the waitlist and be the first one to experience our platform at scale. Get an additional 50% discount on the first 100 people.
            </p>
            
            {/* Trust/Social Proof Section */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {avatarImages.map((src, index) => (
                    <img
                      key={index}
                      className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
                      src={src}
                      alt={`Creator ${index + 1}`}
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/E0E0E0/000000?text=U'; }}
                    />
                  ))}
                </div>
                <div className="flex items-center ml-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 font-medium">
                Trusted by <span className="font-bold text-gray-800">27,000+</span> creators
              </p>
            </div>
          </div>

          {/* Right Button Section */}
          <div className="flex-shrink-0 mt-8 lg:mt-0">
            <button className="group flex items-center justify-center px-8 py-4 font-bold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book a call
              <ArrowRightIcon />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
