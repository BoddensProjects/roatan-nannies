import React from 'react';
import { Link } from 'react-router-dom';

const Babysitting = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full text-center">
        
        {/* The H1 tag tells Google exactly what this page is about */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Babysitting in Roatán
        </h1>
        
        <p className="text-xl text-gray-700 mb-10">
          Professional, trusted childcare so you can enjoy your island vacation with complete peace of mind.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Island Childcare That Comes to You
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Whether you are planning a quiet date night, going diving, or just need an afternoon to relax, our nannies provide premium babysitting in Roatán. We travel directly to your hotel, resort, or vacation rental in West Bay, West End, French Harbour, Parrot Tree, and beyond.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We don't just sit and watch screens. Our caregivers specialize in engaging, play-based projects, tropical arts and crafts, and safe, interactive activities that make sure your kids are having just as much fun on vacation as you are.
          </p>

          <div className="flex justify-center mt-4">
            {/* This button cleanly funnels the Google searcher into your main site */}
            <Link 
              to="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-200"
            >
              Meet Our Nannies & View Packages
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Babysitting;