// "use client";
// import { createContext, useContext, useState } from "react";

// const CommonContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [height, setHeight] = useState({
//     unit: "cm",
//     feet: 0,
//     inches: 0,
//     cm: 0,
//     inchesOnly: 0,
//   });
//   const [weight, setWeight] = useState({ unit: "kg", value: 60 });
//   const [age, setAge] = useState(25);
//   const [selectedGender, setSelectedGender] = useState("male");

//   // console.log(height, "form context");
//   // console.log(weight, "weight form context");

//   return (
//     <CommonContext.Provider
//       value={{
//         height,
//         setHeight,
//         weight,
//         setWeight,
//         age,
//         setAge,
//         selectedGender,
//         setSelectedGender,
//       }}
//     >
//       {children}
//     </CommonContext.Provider>
//   );
// };

// export const contextprovides = () => useContext(CommonContext);
"use client";
import { createContext, useContext, useState } from "react";
import { getBMICategory } from "@/app/components/utils/bmiUtils";

const CommonContext = createContext();

export const ContextProvider = ({ children }) => {
  const [height, setHeight] = useState({
    unit: "cm",
    feet: 0,
    inches: 0,
    cm: 0,
    inchesOnly: 0,
  });
  const [weight, setWeight] = useState({ unit: "kg", value: 60 });
  const [age, setAge] = useState(25);
  const [selectedGender, setSelectedGender] = useState("male");
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState({
    category: "Normal",
    color: "green",
    actionText: "",
    healthyRange: "18.5 - 24.9",
    idealWeight: "18.5 - 24.9",
  });

  // 🚀 Dynamically generate bmiInfo whenever needed
  const bmiInfo = getBMICategory(bmi, height.unit, height, weight.unit);

  return (
    <CommonContext.Provider
      value={{
        height,
        setHeight,
        weight,
        setWeight,
        age,
        setAge,
        selectedGender,
        setSelectedGender,
        bmi,
        setBmi,
        bmiCategory,
        setBmiCategory,
        bmiInfo, // <-- expose bmiInfo here
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export const contextprovides = () => useContext(CommonContext);
