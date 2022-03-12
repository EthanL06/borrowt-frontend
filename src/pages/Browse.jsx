import React from "react";

import { NFTCard } from "../components/NFTCard";

export const Browse = () => {
  return (
    <div className="mx-5 flex flex-col items-center justify-center lg:ml-12">
      <div className="mt-10 mb-5 flex w-full text-left text-5xl font-bold">
        Browse&nbsp;
        <span className="flex flex-col text-purple-600">
          NFTS <div className="w-24 border-b-4 border-purple-600"></div>
        </span>
      </div>

      <div className="flex flex-wrap gap-y-6 gap-x-4">
        {[...Array(50)].map((x, i) => (
          <NFTCard key={i} />
        ))}
      </div>
    </div>
  );
};
