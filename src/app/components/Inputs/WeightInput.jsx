import { TextField, MenuItem, Typography } from "@mui/material";
import React from "react";

const WeightInput = React.memo(function WeightInput({
  weight,
  setWeight,
  error,
  helperText,
}) {
  const units = [
    { key: "kg", label: "Kg" },
    { key: "lb", label: "Pounds" },
  ];

  const handleChange = (key, value) => {
    setWeight({ ...weight, [key]: value });
  };

  return (
    <div className="w-full">
      <Typography variant="subtitle1" fontWeight="500" gutterBottom>
        Weight
      </Typography>

      <div className="flex flex-col sm:flex-row max-md:gap-2  gap-4 mt-2 w-full">
        <div className="flex-1">
          <TextField
            fullWidth
            label="Weight"
            type="number"
            value={weight.value}
            onChange={(e) => handleChange("value", e.target.value)}
            error={!!error}
            helperText={helperText}
            sx={{
              // Default styling (for larger screens)
              "& .MuiInputBase-root": {
                height: 50, // Default height
                padding: "8px 16px", // Default padding
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px", // Default rounded corners
              },
              // Apply only on mobile screens (max-width: 640px)
              "@media (max-width: 640px)": {
                "& .MuiInputBase-root": {
                  height: 40, // Reduced height for mobile
                  padding: "4px 8px", // Reduced padding for mobile (top/bottom and left/right)
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px", // Smaller border-radius for mobile
                },
              },
            }}
          />
        </div>

        <div className="w-full sm:w-40">
          <TextField
            select
            fullWidth
            label="Unit"
            value={weight.unit}
            onChange={(e) => handleChange("unit", e.target.value)}
            sx={{
              // Default styling (for larger screens)
              "& .MuiInputBase-root": {
                height: 50, // Default height
                padding: "8px 16px", // Default padding
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px", // Default rounded corners
              },
              // Apply only on mobile screens (max-width: 640px)
              "@media (max-width: 640px)": {
                "& .MuiInputBase-root": {
                  height: 40, // Reduced height for mobile
                  padding: "4px 8px", // Reduced padding for mobile (top/bottom and left/right)
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px", // Smaller border-radius for mobile
                },
              },
            }}
          >
            {units.map((unit) => (
              <MenuItem key={unit.key} value={unit.key}>
                {unit.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
    </div>
  );
});

export default WeightInput;
