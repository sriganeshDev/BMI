// "use client";

// import CommonButton from "@/app/components/ui/CommonButton";
// import { contextprovides } from "@/context/CommonContext";
// import { useRouter } from "next/navigation";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { FixedSizeList as List } from "react-window";

// const throttle = (func, delay) => {
//   let lastTime = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastTime >= delay) {
//       func(...args);
//       lastTime = now;
//     }
//   };
// };

// const AgeSelector = () => {
//   const { age, setAge } = contextprovides();
//   const minAge = 10;
//   const maxAge = 75;
//   const ages = Array.from(
//     { length: maxAge - minAge + 1 },
//     (_, i) => minAge + i
//   );

//   const itemWidth = 60;
//   const visibleMiddleIndex = 2; // Center index (since we show ~5 items)
//   const listWidth = itemWidth * 5;

//   const listRef = useRef(null);
//   const programmaticScroll = useRef(false);
//   const prevIndexRef = useRef(-1);

//   const router = useRouter();

//   const handleClick = (value) => {
//     setAge(value);
//     const index = ages.indexOf(value);
//     if (listRef.current) {
//       programmaticScroll.current = true;
//       listRef.current.scrollToItem(index - visibleMiddleIndex, "smart");
//       setTimeout(() => (programmaticScroll.current = false), 150);
//     }
//   };

//   const Row = ({ index, style }) => {
//     const value = ages[index];
//     const isSelected = value === age;

//     return (
//       <div
//         onClick={() => handleClick(value)}
//         style={{
//           ...style,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//         }}
//         className={`transition-all duration-200 ${
//           isSelected
//             ? "text-black font-bold text-xl md:text-2xl"
//             : "text-gray-400 text-base md:text-lg"
//         }`}
//       >
//         {isSelected && (
//           <svg
//             width="16"
//             height="8"
//             viewBox="0 0 12 6"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="my-1"
//           >
//             <path d="M6 6L0 0H12L6 6Z" fill="#2DD4BF" />
//           </svg>
//         )}
//         {value}
//       </div>
//     );
//   };

//   const throttledScroll = useCallback(
//     throttle(({ scrollOffset }) => {
//       if (programmaticScroll.current) return;

//       const index = Math.round(scrollOffset / itemWidth);
//       const newAge = ages[index + visibleMiddleIndex];
//       if (
//         newAge !== undefined &&
//         newAge !== age &&
//         index !== prevIndexRef.current
//       ) {
//         prevIndexRef.current = index;
//         setAge(newAge);
//       }
//     }, 200),
//     [ages, age]
//   );

//   useEffect(() => {
//     const index = ages.indexOf(age);
//     if (listRef.current && index >= 0) {
//       listRef.current.scrollToItem(index - visibleMiddleIndex, "smart");
//     }
//   }, []); // Only on mount

//   return (
//     <div className="w-full max-w-md mx-auto relative rounded-2xl px-3 pt-3 flex flex-col justify-between space-y-6">
//       {/* <div className="relative top-0 pb-16 left-0 md:hidden">
//         <button
//           type="button"
//           onClick={() => router.push("/onboarding")}
//           className="flex items-center text-xs gap-2 text-black hover:text-blue-600 rounded-full transition-all duration-300"
//         >
//           <FaArrowLeft />
//           Back
//         </button>
//       </div> */}

//       <h1 className="text-lg md:text-xl lg:text-2xl lg:mb-10 w-full flex justify-center items-center text-black font-semibold">
//         Please choose your Age
//       </h1>
//       <div className="w-full flex justify-center items-center ">
//         <div className="shadow-lg px-1 py-5 w-80 rounded-2xl overflow-hidden border-2 bg-white border-gray-300">
//           <div className="relative  h-16 lg:h-20">
//             <img
//               src="/use scale2.png" // Replace with your image path
//               alt="Age selector"
//               className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-16 z-10"
//             />
//             <List
//               layout="horizontal"
//               ref={listRef}
//               height={100}
//               itemCount={ages.length}
//               itemSize={itemWidth}
//               width={listWidth}
//               onScroll={throttledScroll}
//               className="hide-scrollbar"
//             >
//               {Row}
//             </List>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lg:px-10  ">
//         <CommonButton navroute={"/onboarding/height"} />
//       </div>
//     </div>
//   );
// };

// export default AgeSelector;

"use client";

import CommonButton from "@/app/components/ui/CommonButton";
import { contextprovides } from "@/context/CommonContext";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FixedSizeList as List } from "react-window";

const throttle = (func, delay) => {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      func(...args);
      lastTime = now;
    }
  };
};

const AgeSelector = () => {
  const { age, setAge } = contextprovides();
  const minAge = 10;
  const maxAge = 75;
  const ages = Array.from(
    { length: maxAge - minAge + 1 },
    (_, i) => minAge + i
  );

  const itemWidth = 60;
  const visibleMiddleIndex = 2;
  const listWidth = itemWidth * 5;

  const listRef = useRef(null);
  const programmaticScroll = useRef(false);
  const prevIndexRef = useRef(-1);

  const router = useRouter();

  const handleClick = (value) => {
    setAge(value);
    const index = ages.indexOf(value);
    if (listRef.current) {
      programmaticScroll.current = true;
      listRef.current.scrollToItem(index - visibleMiddleIndex, "smart");
      setTimeout(() => (programmaticScroll.current = false), 150);
    }
  };

  const Row = ({ index, style }) => {
    const value = ages[index];
    const isSelected = value === age;

    return (
      <div
        onClick={() => handleClick(value)}
        style={{
          ...style,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        className={`transition-all duration-200 ${
          isSelected
            ? "text-black font-bold text-xl md:text-2xl"
            : "text-gray-400 text-base md:text-lg"
        }`}
      >
        {isSelected && (
          <svg
            width="16"
            height="8"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-1"
          >
            <path d="M6 6L0 0H12L6 6Z" fill="#2DD4BF" />
          </svg>
        )}
        {value}
      </div>
    );
  };

  const throttledScroll = useCallback(
    throttle(({ scrollOffset }) => {
      if (programmaticScroll.current) return;

      const index = Math.round(scrollOffset / itemWidth);
      const newAge = ages[index + visibleMiddleIndex];
      if (
        newAge !== undefined &&
        newAge !== age &&
        index !== prevIndexRef.current
      ) {
        prevIndexRef.current = index;
        setAge(newAge);
      }
    }, 200),
    [ages, age]
  );

  useEffect(() => {
    const index = ages.indexOf(age);
    if (listRef.current && index >= 0) {
      listRef.current.scrollToItem(index - visibleMiddleIndex, "smart");
    }
  }, []);

  // Enable external mouse vertical wheel to scroll horizontally
  useEffect(() => {
    const scrollContainer = listRef.current?._outerRef;
    if (!scrollContainer) return;

    const onWheel = (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto relative rounded-2xl px-3 pt-3 flex flex-col justify-between space-y-6">
      <h1 className="text-lg md:text-xl lg:text-2xl lg:mb-10 w-full flex justify-center items-center text-black font-semibold">
        Please choose your Age
      </h1>
      <div className="w-full flex justify-center items-center">
        <div className="shadow-lg px-1 py-5 w-80 rounded-2xl overflow-hidden border-2 bg-white border-gray-300">
          <div className="relative h-16 lg:h-20">
            <img
              src="/use scale2.png"
              alt="Age selector"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-16 z-10"
            />
            <List
              layout="horizontal"
              ref={listRef}
              height={100}
              itemCount={ages.length}
              itemSize={itemWidth}
              width={listWidth}
              onScroll={throttledScroll}
              className="hide-scrollbar"
            >
              {Row}
            </List>
          </div>
        </div>
      </div>

      <div className="w-full max-md:pt-14 lg:px-10">
        <CommonButton navroute={"/onboarding/height"} />
      </div>
    </div>
  );
};

export default AgeSelector;
