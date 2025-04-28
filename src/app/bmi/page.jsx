"use client";
import { useState } from "react";
import { calculateBMI, getBMICategory } from "../components/utils/bmiUtils";
import { Typography } from "@mui/material";
import BMIResult from "../components/Charts/BMIResult";
import GenderSelector from "../components/Inputs/GenderSelector";
import HeightInput from "../components/Inputs/HeightInput";
import WeightInput from "../components/Inputs/WeightInput";
import BmiCalculator from "../pages/result/BodyWise";
import CommonInput from "../components/ui/CommonInput";
import { contextprovides } from "@/context/CommonContext";
import BodyFigure from "../pages/result/BodyWise";
import Header from "../components/ui/header";
import { useRouter } from "next/navigation";
import { FaCalculator } from "react-icons/fa";
import axios from "axios";

export default function BMIForm() {
  const {
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
  } = contextprovides();

  const [errors, setErrors] = useState({});
  const router = useRouter();

  console.log("height", height);

  // const validateInputs = () => {
  //   let validationErrors = {};
  //   let heightCm = 0;

  //   if (height.unit === "ft") {
  //     heightCm = height.feet * 30.48 + height.inches * 2.54;
  //   } else if (height.unit === "in") {
  //     heightCm = height.inchesOnly * 2.54;
  //   } else if (height.unit === "cm") {
  //     heightCm = Number(height.cm);
  //   } else {
  //     validationErrors.height = "Invalid height unit.";
  //   }

  //   if (heightCm < 50 || heightCm > 350) {
  //     validationErrors.height = "Height must be between 50 cm and 350 cm.";
  //   }

  //   if (age < 10 || age > 75) {
  //     validationErrors.age = "Age must be between 10 and 75 years.";
  //   }

  //   const weightKg =
  //     weight.unit === "lb" ? weight.value * 0.453592 : Number(weight.value);
  //   if (weightKg < 10 || weightKg > 200) {
  //     validationErrors.weight = "Weight must be between 3 kg and 200 kg.";
  //   }

  //   setErrors(validationErrors);
  //   return Object.keys(validationErrors).length === 0;
  // };
  // console.log("env", process.env.NEXT_PUBLIC_API_URL);
  const validateInputs = () => {
    let validationErrors = {};
    let heightCm = 0;

    if (height.unit === "ft") {
      const totalInches =
        (Number(height.feet) || 0) * 12 + (Number(height.inches) || 0);
      heightCm = totalInches * 2.54;
      if (totalInches <= 0) {
        validationErrors.height = "Please enter valid feet and inches.";
      }
    } else if (height.unit === "in") {
      heightCm = (Number(height.inchesOnly) || 0) * 2.54;
      if (height.inchesOnly <= 0) {
        validationErrors.height = "Please enter valid inches.";
      }
    } else if (height.unit === "cm") {
      heightCm = Number(height.cm) || 0;
      if (heightCm <= 0) {
        validationErrors.height = "Please enter valid centimeters.";
      }
    } else {
      validationErrors.height = "Invalid height unit.";
    }

    if (heightCm < 50 || heightCm > 350) {
      validationErrors.height = "Height must be between 50 cm and 350 cm.";
    }

    if (!age || age < 10 || age > 75) {
      validationErrors.age = "Age must be between 10 and 75 years.";
    }

    const weightKg =
      weight.unit === "lb"
        ? (Number(weight.value) || 0) * 0.453592
        : Number(weight.value) || 0;

    if (weightKg < 10 || weightKg > 200) {
      validationErrors.weight = "Weight must be between 10 kg and 200 kg.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleCalculate = async () => {
    if (!validateInputs()) return;

    const calculatedBmi = calculateBMI(height, weight);
    const categoryData = getBMICategory(
      calculatedBmi,
      height.unit,
      height,
      weight.unit
    );

    setBmi(calculatedBmi);
    setBmiCategory(categoryData);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bmi`,
        {
          gender: selectedGender,
          age: age,
          height: height,
          weight: weight,
          bmi: calculatedBmi,
          bmiCategory: categoryData,
        }
      );

      if (response.status === 200) {
        console.log("BMI entry saved successfully!");
      } else {
        console.error("Failed to save BMI entry:", response.data);
      }
      router.push("/pages/result");
    } catch (error) {
      console.error(
        "Error while saving BMI entry:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 items-center px-3  ">
      <Header />

      <div className="w-full flex lg:gap-3  lg:px-10  justify-around max-md:flex-col-reverse">
        <div className="w-full md:w-1/2 lg:pt-5 py-2 flex justify-center items-start">
          <div className="sticky top-32 md:top-40 w-full max-w-3xl lg:p-6 max-md:p-3 flex flex-col justify-center items-center rounded-2xl border-2 border-gray-200 lg:space-y-4 max-md:space-y-1.5  bg-white shadow-md">
            <GenderSelector
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
            <HeightInput
              height={height}
              setHeight={setHeight}
              error={errors.height}
            />
            <div className="w-full">
              <Typography
                variant="h2
              "
                fontWeight="500"
                gutterBottom
              >
                Age
              </Typography>
              <CommonInput
                label="Age"
                type="number"
                value={age}
                onChange={(value) => setAge(value)}
                error={!!errors.age}
                helperText={errors.age}
              />
            </div>
            <WeightInput
              weight={weight}
              setWeight={setWeight}
              error={!!errors.weight}
              helperText={errors.weight}
            />
            <div className="mt-4 w-full flex flex-col items-center space-y-4">
              <p className="text-gray-800 text-sm  max-md:text-sm text-center">
                Please verify your weight and details before clicking Calculate.
              </p>
              <button
                onClick={handleCalculate}
                className="bg-[#e7000b] animate-bounce cursor-pointer hover:bg-[#c6000a] transition-colors duration-300 text-white uppercase font-bold flex items-center px-6 max-md:text-sm py-2 relative"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3h6a2 2 0 012 2v2H7V5a2 2 0 012-2zM7 9h10M7 13h4m-4 4h10"
                  />
                </svg>
                Calculate
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 pt-5 flex justify-center items-start">
          <div className="w-full max-w-3xl p-6 flex flex-col justify-center items-center rounded-2xl border-2 border-gray-200 lg:space-y-3 max-md:space-y-2 bg-white shadow-md">
            <div className="w-full space-y-6 max-md:space-y-2">
              <h2 className="text-lg max-md:text-base font-bold text-gray-800">
                What does BMI mean?
              </h2>
              <p className="text-sm max-md:text-sm text-gray-600">
                Body Mass Index (BMI) is a simple screening tool that estimates
                the amount of body fat based on height and weight. It is used to
                categorize individuals into different weight categories, such as
                underweight, normal weight, overweight, or obese. Maintaining a
                BMI within a healthy range can help reduce the risk of
                developing various health conditions.
              </p>

              <h2 className="text-lg max-md:text-base font-bold  text-gray-800">
                Limitations of BMI
              </h2>
              <p className="text-sm max-md:text-sm text-gray-600">
                While BMI is a useful general indicator, it has limitations. It
                does not differentiate between muscle, bone, and fat mass,
                meaning that highly muscular individuals may be misclassified as
                overweight or obese. BMI also may not accurately reflect the
                health status of pregnant women, young children, older adults,
                or certain ethnic groups.
              </p>

              <h2 className="text-lg max-md:text-base font-bold text-gray-800">
                How do I calculate BMI?
              </h2>
              <p className="text-sm max-md:text-sm text-gray-600">
                To calculate BMI, select your gender and your preferred
                measurement units (such as centimeters/kilograms or
                feet/pounds). Enter your height and weight into the fields
                provided, then click 'Calculate'. The BMI calculator will
                provide your BMI value and show you which category it falls into
                based on standard BMI ranges.
              </p>

              <h2 className="text-lg max-md:text-base font-bold text-gray-800">
                BMI Categories
              </h2>
              <ul className="list-disc list-inside text-sm max-md:text-sm text-gray-600 space-y-2">
                <li>Underweight: BMI less than 18.5</li>
                <li>Normal weight: BMI between 18.5 and 24.9</li>
                <li>Overweight: BMI between 25 and 29.9</li>
                <li>Obesity (Class 1): BMI between 30 and 34.9</li>
                <li>Obesity (Class 2): BMI between 35 and 39.9</li>
                <li>Extreme obesity (Class 3): BMI of 40 or higher</li>
              </ul>

              <h2 className="text-lg max-md:text-base font-bold text-gray-800">
                Why is BMI Important?
              </h2>
              <p className="text-sm max-md:text-sm text-gray-600">
                Maintaining a healthy BMI is associated with lower risks of
                serious health conditions like type 2 diabetes, heart disease,
                high blood pressure, and certain cancers. BMI is often used by
                healthcare providers to assess whether further tests or
                lifestyle changes are needed.
              </p>

              <h2 className="text-lg max-md:text-base font-bold text-gray-800">
                Tips for Maintaining a Healthy BMI
              </h2>
              <ul className="list-disc list-inside text-sm max-md:text-sm text-gray-600 space-y-2">
                <li>
                  Eat a balanced diet rich in fruits, vegetables, whole grains,
                  and lean proteins.
                </li>
                <li>
                  Engage in regular physical activity (at least 150 minutes per
                  week of moderate-intensity exercise).
                </li>
                <li>Get enough sleep and manage stress effectively.</li>
                <li>
                  Stay hydrated and limit the intake of processed and high-sugar
                  foods.
                </li>
                <li>
                  Consult a healthcare professional for personalized advice if
                  needed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
