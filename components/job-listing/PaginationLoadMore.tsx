import React from "react";

const PaginationLoadMore = () => (
  <div className="flex justify-center items-center gap-4 mt-8">
    <button className="px-4 py-2 rounded bg-blue-600 text-white">Previous</button>
    <span className="font-semibold">Page 1 of 10</span>
    <button className="px-4 py-2 rounded bg-blue-600 text-white">Next</button>
    <button className="px-4 py-2 rounded bg-gray-200 text-blue-600">Load More</button>
  </div>
);

export default PaginationLoadMore;
