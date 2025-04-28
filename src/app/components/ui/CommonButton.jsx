"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CommonButton = ({ navroute }) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push(`${navroute}`)}
        className="lg:mt-6 md:mt-4 mt-2 w-full py-2 cursor-pointer border-2 border-red-600 bg-red-500 text-white rounded-full shadow hover:bg-red-600 hover:text-white"
      >
        Next
      </button>
    </>
  );
};

export default CommonButton;
