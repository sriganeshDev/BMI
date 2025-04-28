"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-center px-4 md:px-6 py-3">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">
              Fit{" "}
              <span className="text-gray-600 font-bebas tracking-widest">
                METER
              </span>
            </h1>
          </div>
        </div>

        <nav className="bg-white">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 border-t-4 border-red-600 pt-3 pb-2 text-gray-700 font-semibold text-base ">
            <a
              href="/bmi"
              className={`hover:text-red-600 ${
                pathname === "/bmi"
                  ? "border-b-2 border-red-600 text-red-600"
                  : ""
              }`}
            >
              HOME
            </a>
            <a
              href="/pages/result"
              className={`hover:text-red-600 ${
                pathname === "/pages/result"
                  ? "border-b-2 border-red-600 text-red-600"
                  : ""
              }`}
            >
              RESULT
            </a>
            <a
              href="/pages/dohealthy"
              className={`hover:text-red-600 ${
                pathname === "/pages/dohealthy"
                  ? "border-b-2 border-red-600 text-red-600"
                  : ""
              }`}
            >
              DO HEALTHY
            </a>
          </div>
        </nav>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 z-50 shadow-md" : "relative"
        }`}
      >
        <div
          className="relative w-full h-16 md:h-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/banner.jpeg')" }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center lg:justify-start md:justify-start px-10">
            <h2 className="text-xl md:text-3xl font-bold text-red-600">
              BMI Calculator
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
