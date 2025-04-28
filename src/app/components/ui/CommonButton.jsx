"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CommonButton = ({ navroute }) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push(`${navroute}`)}
        className="lg:mt-6 md:mt-4 mt-2 w-full py-2 bg-black text-white rounded-full shadow"
      >
        Next
      </button>
    </>
  );
};

export default CommonButton;
