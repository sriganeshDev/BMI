export function convertHeightToMeters(height) {
  const unit = height.unit;

  if (unit === "ft") {
    // Change this to "ft"
    const totalInches = (height.feet || 0) * 12 + (height.inches || 0);
    return totalInches * 0.0254; // Convert inches to meters
  } else if (unit === "cm") {
    return (height.cm || 0) / 100; // Convert cm to meters
  } else if (unit === "in") {
    return (height.inchesOnly || 0) * 0.0254; // Convert inches to meters
  }
  return 0; // Return 0 if none of the conditions match
}

export function convertWeightToKg(weight) {
  return weight.unit === "lb" ? weight.value * 0.453592 : weight.value;
}

export function calculateBMI(height, weight) {
  const h = convertHeightToMeters(height);
  const w = convertWeightToKg(weight);
  return h > 0 ? w / (h * h) : 0;
}

export function getBMICategory(bmi, heightUnit, height, weightUnit) {
  let category = "Normal";
  let color = "green";
  let actionText = "0 - 0";
  let healthyRange = "18.5 - 24.9";

  const hMeters = convertHeightToMeters(height);
  const minWeight = 18.5 * hMeters * hMeters;
  const maxWeight = 24.9 * hMeters * hMeters;

  const convertWeight = (val) =>
    weightUnit === "lb"
      ? `${(val / 0.453592).toFixed(0)} lb`
      : `${val.toFixed(0)} Kg`;

  const actualWeight = convertWeightToKg({
    value: bmi * hMeters * hMeters,
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
