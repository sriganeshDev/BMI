import React, { useMemo } from "react";
import GaugeChart from "react-gauge-chart";

const BMIGauge = ({ bmi }) => {
  const maxBmi = 40;
  const bmiPercentage = useMemo(() => {
    return Math.min(bmi, maxBmi) / maxBmi;
  }, [bmi]);

  const gaugeColors = ["#2b7fff", "#00c951", "#fdc700", "#fb2c36"];

  const arcsLength = useMemo(() => {
    return [18.5, 6.4, 5, 10.1].map((v) => v / maxBmi);
  }, []);

  // const categories = [
  //   { label: "Underweight", range: [0, 18.5] },
  //   { label: "Normal", range: [18.5, 24.9] },
  //   { label: "Overweight", range: [25, 29.9] },
  //   { label: "Obese", range: [30, 40] },
  // ];

  // const currentCategory = categories.find(
  //   (category) => bmi >= category.range[0] && bmi <= category.range[1]
  // );

  return (
    <div className="w-full max-w-md mx-auto">
      <GaugeChart
        id="bmi-gauge-chart"
        nrOfLevels={420}
        arcsLength={arcsLength}
        colors={gaugeColors}
        arcPadding={0.02}
        cornerRadius={3}
        percent={bmiPercentage}
        needleColor="#333"
        needleBaseColor="#555"
        formatTextValue={() => bmi.toFixed(2)}
        textColor="transparent"
        // animate={false}
      />
      {/* {currentCategory && (
        <div className="text-center mt-4 text-lg font-semibold">
          <p>BMI Category: {currentCategory.label}</p>
        </div>
      )} */}
    </div>
  );
};

export default BMIGauge;
