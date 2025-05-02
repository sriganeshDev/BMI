//// Converting the all height to meter...
export function convertHeightToMeters(height) {
  const unit = height.unit;

  if (unit === "ft") {
    //// Change this to "ft"
    const totalInches = (height.feet || 0) * 12 + (height.inches || 0);
    return totalInches * 0.0254; //// Convert inches to meters.....
  } else if (unit === "cm") {
    return (height.cm || 0) / 100; //// Convert cm to meters.....
  } else if (unit === "in") {
    return (height.inchesOnly || 0) * 0.0254; //// Convert inches to meters....
  }
  return 0;
}

////Converting the lb to Kg....
export function convertWeightToKg(weight) {
  return weight.unit === "lb" ? weight.value * 0.453592 : weight.value;
}
//// Calculate BMI...

export function calculateBMI(height, weight) {
  const h = convertHeightToMeters(height);
  const w = convertWeightToKg(weight);
  return h > 0 ? w / (h * h) : 0;
}

//// Finding the correct weight fort the height...

export function getBMICategory(bmi, heightUnit, height, weightUnit) {
  let category = "Normal";
  let color = "green";
  let actionText = "0 - 0";
  let healthyRange = "18.5 - 24.9";

  const hInMeters = convertHeightToMeters(height);
  const minWeight = 18.5 * hInMeters * hInMeters;
  const maxWeight = 24.9 * hInMeters * hInMeters;

  const convertWeight = (val) =>
    weightUnit === "lb"
      ? `${(val / 0.453592).toFixed(0)} lb`
      : `${val.toFixed(0)} Kg`;

  const actualWeight = convertWeightToKg({
    value: bmi * hInMeters * hInMeters,
    unit: "kg",
  });

  if (actualWeight > 0 && minWeight > 0 && maxWeight > 0) {
    if (bmi < 18.5) {
      category = "Underweight";
      color = "blue";
      const gainAmount = minWeight - actualWeight;
      actionText =
        gainAmount > 0
          ? `Gain ${convertWeight(gainAmount)}`
          : "You're close to a healthy range.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal";
      color = "green";
      actionText = "Maintain your weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
      color = "yellow";
      const loseAmount = actualWeight - maxWeight;
      actionText =
        loseAmount > 0
          ? `Lose ${convertWeight(loseAmount)}`
          : "You're close to a healthy range.";
    } else if (bmi >= 30) {
      category = "Obese";
      color = "red";
      const loseAmount = actualWeight - maxWeight;
      actionText =
        loseAmount > 0
          ? `Lose ${convertWeight(loseAmount)}`
          : "You're close to a healthy range.";
    }
  }

  return {
    category,
    color,
    actionText,
    healthyRange,
    idealWeight: `${convertWeight(minWeight)} - ${convertWeight(maxWeight)}`,
  };
}
