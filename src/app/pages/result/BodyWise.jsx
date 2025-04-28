"use client";
import React from "react";

export const imageChange = ({ bmi }) => {
  if (bmi < 18.5)
    return {
      img: "/underweight.png",
      category: "Underweight",
      adviseText:
        "You are underweight for your height. Maintaining a healthy weight is crucial for your overall well-being. Being underweight can weaken your immune system, lead to fragile bones, and affect fertility. Focus on a balanced intake of calories and strength-building exercises.",
      extraTips: [
        "Eat more frequently throughout the day with small, nutrient-dense meals.",
        "Choose energy-rich foods like nuts, cheese, and avocados.",
        "Include protein-rich foods like eggs, meats, and legumes in every meal.",
        "Drink smoothies or milkshakes instead of low-calorie beverages.",
        "Exercise to build muscle mass instead of just adding fat.",
        "Don't skip meals; set alarms if needed.",
        "Consult a nutritionist for a customized weight gain plan.",
      ],
    };
  if (bmi < 25)
    return {
      img: "/normal.png",
      category: "Healthy Weight",
      adviseText:
        "You are at a healthy weight for your height. Continue maintaining a balanced diet, exercising regularly, and staying mentally active. Monitoring waist circumference is also important, even within a healthy BMI.",
      extraTips: [
        "Maintain a colorful plate with fruits and vegetables.",
        "Prioritize lean proteins and whole grains.",
        "Stay consistent with your physical activity — aim for at least 30 minutes a day.",
        "Manage stress to avoid emotional eating.",
        "Limit processed foods and sugary drinks.",
        "Get regular medical checkups to catch any changes early.",
        "Balance work, rest, and fun for a full healthy lifestyle.",
      ],
    };
  if (bmi < 30)
    return {
      img: "/fat1.png",
      category: "Overweight",
      adviseText:
        "Being overweight increases your risk of heart disease, diabetes, and other conditions. It's important to focus on gradual, healthy weight loss through balanced diet and physical activity.",
      extraTips: [
        "Start with small goals like losing 5-10% of your current weight.",
        "Reduce your intake of sugary drinks and high-calorie snacks.",
        "Practice mindful eating — eat slowly and recognize fullness cues.",
        "Include more fiber (like fruits, vegetables, oats) to stay full longer.",
        "Find activities you enjoy like dancing, walking, or swimming.",
        "Prepare your meals at home to control ingredients and portions.",
        "Track your progress — journaling can help stay motivated.",
      ],
    };
  return {
    img: "/fat2.png",
    category: "Obese",
    adviseText:
      "A higher BMI significantly raises the risk of serious chronic illnesses. Seeking professional support for weight management is crucial. Sustainable changes in diet, exercise, and mindset can lead to powerful transformations.",
    extraTips: [
      "Consult a healthcare provider before starting any major weight loss plan.",
      "Focus on slow and steady progress — quick fixes don't last.",
      "Include strength training to preserve muscle while losing fat.",
      "Prioritize low-calorie, high-nutrient foods like greens and lean proteins.",
      "Practice self-compassion — weight loss journeys have ups and downs.",
      "Surround yourself with supportive people or support groups.",
      "Celebrate non-scale victories like better sleep, more energy, or improved mobility.",
    ],
  };
};

const BodyFigure = ({ bmi }) => {
  const { img, category, adviseText, extraTips } = imageChange({ bmi });

  return (
    <div className="w-full flex flex-col items-center space-y-6  ">
      <div className="w-full h-96 ">
        <img
          src={img}
          alt={category}
          className="w-full h-full  object-contain rounded-xl "
        />
      </div>

      <div className="w-full max-w-2xl text-center space-y-6  px-4">
        <h2 className="lg:text-xl text-lg  font-bold text-gray-800">
          {category}
        </h2>
        <p className="text-gray-600 text-sm lg:text-base ">{adviseText}</p>

        <div className="text-left space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">Extra Tips:</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm lg:text-base   space-y-2">
            {extraTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="text-left mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Reminder:</h3>
          <p className="text-sm lg:text-base   text-gray-600">
            Achieving a healthy weight is not about quick fixes; it's about
            building habits you can maintain for life. Every positive step you
            take today brings you closer to a healthier, happier future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyFigure;
