import React from "react";

const countries = ["USA", "UK", "Canada", "Germany", "India"];

const MapCountrySwitch = () => (
  <div className="flex gap-2 items-center mb-6">
    {countries.map(country => (
      <button key={country} className="px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 text-sm font-medium">
        {country}
      </button>
    ))}
    {/* Tiny map placeholder */}
    <span className="ml-4">🗺️</span>
  </div>
);

export default MapCountrySwitch;
